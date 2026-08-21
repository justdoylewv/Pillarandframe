import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Where a completed survey goes. A GoHighLevel inbound webhook, or a Make
// scenario. Kept server-side rather than posted straight from the browser, so
// the endpoint is not sitting in the page source for anyone to flood.
function webhook(): string | null {
  const url = process.env.SURVEY_WEBHOOK_URL;
  return url && url.startsWith("https://") ? url : null;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const ANSWER_FIELDS = [
  "business_type",
  "lead_source",
  "current_state",
  "blocker",
] as const;

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  const str = (v: unknown, max = 300) =>
    typeof v === "string" ? v.trim().slice(0, max) : "";

  // A field nobody sees and nobody fills. Answer as though it worked: a bot
  // told it failed simply tries again.
  if (str(body.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const business = str(body.business, 200);
  const website = str(body.website, 300);

  if (name.length < 2) {
    return NextResponse.json({ error: "Please add your name." }, { status: 400 });
  }
  if (!EMAIL.test(email)) {
    return NextResponse.json(
      { error: "That email does not look right." },
      { status: 400 }
    );
  }
  if (business.length < 2) {
    return NextResponse.json(
      { error: "Please add your business name." },
      { status: 400 }
    );
  }

  const hook = webhook();
  if (!hook) {
    return NextResponse.json(
      {
        error:
          "The audit request is not connected yet. Email doyle@pillarandframe.com and we will run it by hand.",
      },
      { status: 503 }
    );
  }

  const answers: Record<string, string> = {};
  for (const field of ANSWER_FIELDS) answers[field] = str(body[field]);

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...answers,
        name,
        email,
        business,
        website,
        source: "pillarandframe.com/trust-audit",
        offer: "Free Trust Audit",
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error(String(res.status));
  } catch {
    // Somebody who answered five questions should not be told to start over
    // because our endpoint blinked. The failure is ours to notice.
    return NextResponse.json({ ok: true, delivered: false });
  }

  return NextResponse.json({ ok: true, delivered: true });
}

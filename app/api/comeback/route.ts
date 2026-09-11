import { NextResponse } from "next/server";
import { SMS_CONSENT_TEXT } from "@/lib/content/comeback";

export const dynamic = "force-dynamic";

// Both submissions from the Comeback page land here: the Leak Number, which
// wants an email, and the demo, which wants a mobile number.
//
// Forwarded from the server rather than posted straight from the browser, so
// the endpoint is not sitting in the page source for anyone to flood.
function webhook(): string | null {
  const url =
    process.env.COMEBACK_WEBHOOK_URL || process.env.SURVEY_WEBHOOK_URL;
  return url && url.startsWith("https://") ? url : null;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Ten digits, or eleven starting with a 1. Formatting is the caller's. */
function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  const str = (v: unknown, max = 300) =>
    typeof v === "string" ? v.trim().slice(0, max) : "";
  const num = (v: unknown) =>
    typeof v === "number" && Number.isFinite(v) ? Math.round(v) : 0;

  // A field nobody sees and nobody fills. Answer as though it worked: a bot
  // told it failed simply tries again.
  if (str(body.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const intent = str(body.intent, 20);
  if (intent !== "leak" && intent !== "demo") {
    return NextResponse.json({ error: "Unknown request." }, { status: 400 });
  }

  const name = str(body.name, 120);
  const company = str(body.company, 200);

  let payload: Record<string, unknown>;

  if (intent === "leak") {
    const email = str(body.email, 200);
    if (!EMAIL.test(email)) {
      return NextResponse.json(
        { error: "That email does not look right." },
        { status: 400 }
      );
    }
    const quotes = num(body.quotes);
    const jobValue = num(body.jobValue);
    payload = {
      intent: "leak_number",
      name,
      email,
      company,
      unsold_quotes: quotes,
      average_job_value: jobValue,
      leak_number: quotes * jobValue,
      recovery_3pct: Math.round(quotes * jobValue * 0.03),
    };
  } else {
    const phone = normalizePhone(str(body.phone, 40));
    if (!phone) {
      return NextResponse.json(
        { error: "That phone number does not look right." },
        { status: 400 }
      );
    }
    // The box has to have been ticked. Never inferred from the submission
    // itself: consent a person did not actively give is not consent, and it is
    // the first thing that falls apart under a carrier complaint.
    if (body.smsConsent !== true) {
      return NextResponse.json(
        { error: "Please tick the box to agree to receive texts." },
        { status: 400 }
      );
    }
    payload = {
      intent: "demo_request",
      name,
      company,
      phone,
      // The proof, kept with the record rather than assumed from a checkbox
      // column: what they agreed to, when, and where they were standing.
      sms_consent: true,
      sms_consent_text: SMS_CONSENT_TEXT,
      sms_consent_at: new Date().toISOString(),
      sms_consent_source: "pillarandframe.com/comeback",
    };
  }

  const hook = webhook();
  if (!hook) {
    return NextResponse.json(
      {
        error:
          "This is not connected yet. Email doyle@pillarandframe.com and we will sort it by hand.",
      },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        source: "pillarandframe.com/comeback",
        offer: "The Comeback",
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error(String(res.status));
  } catch {
    // Somebody who filled this in should not be told to start over because our
    // endpoint blinked. The failure is ours to notice.
    return NextResponse.json({ ok: true, delivered: false });
  }

  return NextResponse.json({ ok: true, delivered: true });
}

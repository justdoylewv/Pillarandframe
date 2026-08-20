import { NextResponse } from "next/server";
import {
  LEAD_MAGNET_TITLE,
  LEAD_MAGNET_URL,
  leadWebhook,
} from "@/lib/server/leadMagnet";

export const dynamic = "force-dynamic";

// Enough to catch a typo and a bot filling in gibberish. Anything stricter
// starts rejecting real addresses, which costs more than it saves.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const hook = leadWebhook();
  if (!hook) {
    return NextResponse.json(
      {
        error:
          "The download is not connected yet. Email doyle@pillarandframe.com and we will send it straight over.",
      },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  // A field a person never sees and never fills. Bots fill everything.
  const trap = typeof body.company === "string" ? body.company.trim() : "";

  if (trap) {
    // Answer as though it worked, without recording anything or handing over
    // the file. A bot told it failed just tries again.
    return NextResponse.json({ ok: true, url: null });
  }
  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Please add your name." }, { status: 400 });
  }
  if (!EMAIL.test(email) || email.length > 200) {
    return NextResponse.json(
      { error: "That email does not look right." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        source: "pillarandframe.com",
        magnet: LEAD_MAGNET_TITLE,
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error(`Lead endpoint returned ${res.status}`);
  } catch {
    // The file is not held hostage to a webhook outage. They asked properly,
    // so they get it, and the failure is ours to notice rather than theirs.
    return NextResponse.json({ ok: true, url: LEAD_MAGNET_URL, delivered: false });
  }

  return NextResponse.json({ ok: true, url: LEAD_MAGNET_URL, delivered: true });
}

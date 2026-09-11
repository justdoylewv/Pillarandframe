"use client";

import { useState } from "react";
import { SMS_CONSENT_TEXT } from "@/lib/content/comeback";

/**
 * The demo request. This is the only place on the site that collects a mobile
 * number, which makes it the SMS opt-in point, and it is built to survive a
 * carrier looking at it.
 *
 * Three rules, none of them cosmetic:
 *   1. The consent box starts unticked and the form will not submit without
 *      it. A pre-ticked box is not consent.
 *   2. The wording next to the box is the wording stored with the record, from
 *      one constant, so what somebody agreed to and what we say they agreed to
 *      cannot drift.
 *   3. Consent is separate from the submit. Giving us a number to talk about
 *      the offer is not the same act as agreeing to be texted.
 */

export default function DemoForm({ dark = false }: { dark?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [honey, setHoney] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setError("Please tick the box to agree to receive texts.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/comeback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "demo",
          name,
          phone,
          smsConsent: consent,
          company_website: honey,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  const label = dark ? "text-ash-300" : "text-ash-700";
  const input = dark
    ? "border-shale bg-ink text-paper placeholder:text-ash-500 focus:border-gold-500"
    : "border-ash-100 bg-white text-black placeholder:text-ash-300 focus:border-purple-600";
  const fine = dark ? "text-ash-500" : "text-ash-500";
  const button = dark
    ? "border-paper bg-paper text-black hover:bg-bone"
    : "border-black bg-black text-paper hover:bg-coal";

  if (done) {
    return (
      <div>
        <h3
          className={`font-serif text-2xl font-black tracking-tighter md:text-3xl ${
            dark ? "text-paper" : "text-black"
          }`}
        >
          Check your phone.
        </h3>
        <p className={`mt-4 max-w-[52ch] text-lg leading-relaxed ${label}`}>
          Four texts over the next ten minutes, then it stops. That is exactly
          what a homeowner with an old quote would get, story and all.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="max-w-[46ch]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="demo-name"
            className={`block font-mono text-[11px] uppercase tracking-[0.2em] ${label}`}
          >
            Your name
          </label>
          <input
            id="demo-name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`mt-2 min-h-[52px] w-full rounded-[2px] border px-4 py-3 text-[17px] outline-none transition-colors ${input}`}
          />
        </div>
        <div>
          <label
            htmlFor="demo-phone"
            className={`block font-mono text-[11px] uppercase tracking-[0.2em] ${label}`}
          >
            Cell number
          </label>
          <input
            id="demo-phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="614 555 0199"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`mt-2 min-h-[52px] w-full rounded-[2px] border px-4 py-3 text-[17px] outline-none transition-colors ${input}`}
          />
        </div>
      </div>

      {/* Unticked, required, and worded from the same constant that gets
          stored with the record. */}
      <label
        htmlFor="demo-consent"
        className={`mt-6 flex cursor-pointer gap-4 text-sm leading-relaxed ${label}`}
      >
        <input
          id="demo-consent"
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-gold-500"
        />
        <span>{SMS_CONSENT_TEXT}</span>
      </label>

      {/* Off-screen rather than hidden, which some bots skip. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="demo-hp">Company website</label>
        <input
          id="demo-hp"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
      </div>

      {error && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            dark ? "text-gold-300" : "text-purple-600"
          }`}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className={`mt-7 min-h-[56px] w-full rounded-[2px] border px-8 py-4 font-mono text-[12px] uppercase tracking-[0.2em] transition-colors disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto ${button}`}
      >
        {busy ? "Sending" : "Text me the demo"}
      </button>
      <p className={`mt-4 text-sm leading-relaxed ${fine}`}>
        4 texts over 10 minutes, then it stops. See our{" "}
        <a href="/privacy" className="underline underline-offset-4">
          privacy policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="underline underline-offset-4">
          terms
        </a>
        .
      </p>
    </form>
  );
}

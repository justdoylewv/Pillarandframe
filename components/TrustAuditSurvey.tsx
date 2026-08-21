"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The qualifying survey behind the free Trust Audit.
 *
 * Five steps, four of them a single tap. Asking the easy questions first and
 * the contact details last is the whole point of the shape: somebody who has
 * already answered four questions finishes the fifth.
 *
 * Nothing is submitted until the last step, so an abandoned survey leaves no
 * half-record behind.
 */

interface Choice {
  name: string;
  question: string;
  options: string[];
}

const STEPS: Choice[] = [
  {
    name: "business_type",
    question: "What kind of business do you run?",
    options: [
      "Real estate",
      "Mortgage or lending",
      "Legal, accounting, or financial",
      "Home or trade services",
      "Something else",
    ],
  },
  {
    name: "lead_source",
    question: "Where does most of your business come from today?",
    options: [
      "Referrals and word of mouth",
      "Google and search",
      "Social media",
      "Paid ads",
      "A mix, or hard to say",
    ],
  },
  {
    name: "current_state",
    question: "What do you have online right now?",
    options: [
      "Not much, honestly",
      "A website, and that is about it",
      "Website and a Google profile",
      "All of it, but it has gone stale",
    ],
  },
  {
    name: "blocker",
    question: "What has kept you from fixing it?",
    options: [
      "No time",
      "I would not know what to say",
      "I hate being on camera",
      "We tried, and it fizzled out",
    ],
  },
];

const TOTAL = STEPS.length + 1;

export default function TrustAuditSurvey() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    company_website: "", // honeypot
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  // Move focus to the new question so a keyboard or screen reader user is not
  // left behind when the step swaps under them.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step, done]);

  const choose = useCallback(
    (name: string, value: string) => {
      setAnswers((prev) => ({ ...prev, [name]: value }));
      // A beat, so the selection registers visually before the step changes.
      window.setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL)), 180);
    },
    []
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, ...form }),
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

  if (done) {
    return (
      <div>
        <span
          className="inline-flex h-10 w-10 items-center justify-center border border-gold-500 text-gold-700"
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="mt-6 font-serif text-3xl font-black tracking-tighter text-black outline-none"
        >
          That is everything we need.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ash-700">
          Your audit lands in your inbox within two business days. It is a real
          write-up of how you show up online right now, scored against two
          competitors we name. No call required to get it.
        </p>
      </div>
    );
  }

  const current = STEPS[step - 1];
  const pct = Math.round((step / TOTAL) * 100);

  return (
    <div>
      {/* Progress */}
      <div className="h-[3px] w-full bg-ash-100" role="presentation">
        <div
          className="h-full bg-gold-500 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ash-500">
        {step <= STEPS.length ? `Question ${step} of ${TOTAL}` : "Last step"}
      </p>

      {current ? (
        <>
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mt-3 font-serif text-2xl leading-snug font-black tracking-tighter text-black outline-none md:text-3xl"
          >
            {current.question}
          </h2>
          <div className="mt-6 flex flex-col gap-2">
            {current.options.map((opt) => {
              const selected = answers[current.name] === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => choose(current.name, opt)}
                  className={`rounded-[2px] border px-5 py-3.5 text-left text-base transition-colors ${
                    selected
                      ? "border-gold-500 bg-gold-500 text-black"
                      : "border-ash-100 bg-white text-black hover:border-black"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <form onSubmit={submit}>
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mt-3 font-serif text-2xl leading-snug font-black tracking-tighter text-black outline-none md:text-3xl"
          >
            Where should we send it?
          </h2>

          {[
            { id: "name", label: "Your name", type: "text", auto: "name", required: true },
            { id: "email", label: "Email", type: "email", auto: "email", required: true },
            { id: "business", label: "Business name", type: "text", auto: "organization", required: true },
          ].map((f) => (
            <div key={f.id} className="mt-5">
              <label
                htmlFor={`ta-${f.id}`}
                className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-700"
              >
                {f.label}
              </label>
              <input
                id={`ta-${f.id}`}
                type={f.type}
                autoComplete={f.auto}
                required={f.required}
                value={form[f.id as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                className="mt-2 w-full rounded-[2px] border border-ash-100 bg-white px-4 py-3 text-black outline-none transition-colors focus:border-purple-600"
              />
            </div>
          ))}

          <div className="mt-5">
            <label
              htmlFor="ta-website"
              className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-700"
            >
              Website or Google profile{" "}
              <span className="normal-case tracking-normal text-ash-500">
                (so we can actually audit it)
              </span>
            </label>
            <input
              id="ta-website"
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="yourbusiness.com"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="mt-2 w-full rounded-[2px] border border-ash-100 bg-white px-4 py-3 text-black outline-none transition-colors placeholder:text-ash-300 focus:border-purple-600"
            />
          </div>

          {/* Off-screen rather than hidden, which some bots skip. */}
          <div className="absolute left-[-9999px]" aria-hidden="true">
            <label htmlFor="ta-company">Company website</label>
            <input
              id="ta-company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company_website}
              onChange={(e) =>
                setForm({ ...form, company_website: e.target.value })
              }
            />
          </div>

          {error && (
            <p className="mt-5 text-sm leading-relaxed text-purple-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="mt-7 w-full rounded-[2px] border border-black bg-black px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-coal disabled:cursor-not-allowed disabled:opacity-40"
          >
            {busy ? "Sending" : "Send me my Trust Audit"}
          </button>
          <p className="mt-4 text-xs leading-relaxed text-ash-500">
            No call required and nothing to cancel. We will not share your
            details.
          </p>
        </form>
      )}

      {step > 1 && (
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(s - 1, 1))}
          className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500 transition-colors hover:text-black"
        >
          &larr; Back
        </button>
      )}
    </div>
  );
}

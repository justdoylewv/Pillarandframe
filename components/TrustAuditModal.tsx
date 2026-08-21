"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The qualifying survey, in a modal.
 *
 * Mounted once. Any element on the page carrying data-open-audit opens it, so
 * the hero button, the closing button, and the sticky mobile bar all drive the
 * same thing without prop-drilling a handler around the page.
 *
 * A modal rather than a panel in the layout: the survey gets the whole screen
 * and one question at a time, which is the reason a multi-step form converts
 * better than the same fields in a column.
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

const FIELDS = [
  { id: "name", label: "Your name", type: "text", auto: "name" },
  { id: "email", label: "Email", type: "email", auto: "email" },
  { id: "business", label: "Business name", type: "text", auto: "organization" },
] as const;

export default function TrustAuditModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    company_website: "",
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  // Any button on the page can open this.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const trigger = (e.target as HTMLElement)?.closest("[data-open-audit]");
      if (!trigger) return;
      e.preventDefault();
      opener.current = trigger as HTMLElement;
      setOpen(true);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    opener.current?.focus();
  }, []);

  // Escape closes, and the page behind stops scrolling while it is up.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  // Move focus onto each new question, so keyboard and screen reader users are
  // not left behind when the step swaps under them.
  useEffect(() => {
    if (open) headingRef.current?.focus();
  }, [open, step, done]);

  function choose(name: string, value: string) {
    setAnswers((prev) => ({ ...prev, [name]: value }));
    window.setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL)), 180);
  }

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

  if (!open) return null;

  const current = STEPS[step - 1];
  const pct = Math.round((step / TOTAL) * 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 py-10 sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-label="Free Trust Audit"
        className="relative w-full max-w-[34rem] border-l-[3px] border-l-gold-500 bg-paper p-6 sm:p-10"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-2xl leading-none text-ash-500 transition-colors hover:text-black"
        >
          &times;
        </button>

        {done ? (
          <div>
            <span
              className="inline-flex h-12 w-12 items-center justify-center border border-gold-500 text-gold-700"
              aria-hidden="true"
            >
              <svg
                width="22"
                height="22"
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
              className="mt-6 font-serif text-3xl font-black tracking-tighter text-black outline-none md:text-4xl"
            >
              That is everything we need.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ash-700">
              Your audit lands in your inbox within two business days. A real
              write-up of how you show up online right now, scored against two
              competitors we name.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-8 w-full rounded-[2px] border border-black bg-black px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-coal"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="h-[3px] w-full bg-ash-100" role="presentation">
              <div
                className="h-full bg-gold-500 transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-ash-500">
              {current ? `Question ${step} of ${TOTAL}` : "Last step"}
            </p>

            {current ? (
              <>
                <h2
                  ref={headingRef}
                  tabIndex={-1}
                  className="mt-3 font-serif text-[1.6rem] leading-tight font-black tracking-tighter text-black outline-none md:text-3xl"
                >
                  {current.question}
                </h2>
                <div className="mt-7 flex flex-col gap-2.5">
                  {current.options.map((opt) => {
                    const selected = answers[current.name] === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => choose(current.name, opt)}
                        className={`min-h-[56px] rounded-[2px] border px-5 py-4 text-left text-[17px] font-medium transition-colors ${
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
                  className="mt-3 font-serif text-[1.6rem] leading-tight font-black tracking-tighter text-black outline-none md:text-3xl"
                >
                  Where should we send it?
                </h2>

                {FIELDS.map((f) => (
                  <div key={f.id} className="mt-6">
                    <label
                      htmlFor={`ta-${f.id}`}
                      className="block font-mono text-[11px] uppercase tracking-[0.2em] text-ash-700"
                    >
                      {f.label}
                    </label>
                    <input
                      id={`ta-${f.id}`}
                      type={f.type}
                      autoComplete={f.auto}
                      required
                      value={form[f.id]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="mt-2 min-h-[52px] w-full rounded-[2px] border border-ash-100 bg-white px-4 py-3 text-[17px] text-black outline-none transition-colors focus:border-purple-600"
                    />
                  </div>
                ))}

                <div className="mt-6">
                  <label
                    htmlFor="ta-website"
                    className="block font-mono text-[11px] uppercase tracking-[0.2em] text-ash-700"
                  >
                    Website or Google profile
                  </label>
                  <p className="mt-1 text-sm text-ash-500">
                    So we have something to actually audit.
                  </p>
                  <input
                    id="ta-website"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    placeholder="yourbusiness.com"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="mt-2 min-h-[52px] w-full rounded-[2px] border border-ash-100 bg-white px-4 py-3 text-[17px] text-black outline-none transition-colors placeholder:text-ash-300 focus:border-purple-600"
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
                  <p className="mt-5 text-base leading-relaxed text-purple-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={busy}
                  className="mt-8 min-h-[56px] w-full rounded-[2px] border border-black bg-black px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-coal disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {busy ? "Sending" : "Send me my Trust Audit"}
                </button>
                <p className="mt-4 text-sm leading-relaxed text-ash-500">
                  No call required and nothing to cancel. We will not share your
                  details.
                </p>
              </form>
            )}

            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(s - 1, 1))}
                className="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-ash-500 transition-colors hover:text-black"
              >
                &larr; Back
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

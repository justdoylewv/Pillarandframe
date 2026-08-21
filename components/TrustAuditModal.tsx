"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * The qualifying survey, in a modal.
 *
 * Mounted once. Any element on the page carrying data-open-audit opens it, so
 * the hero button, the closing button, and the sticky mobile bar all drive the
 * same thing without prop-drilling a handler around the page.
 *
 * The questions are the rubric. Each one is a category we score, in the order
 * we score it, so answering the survey teaches the framework the audit is
 * written against. That is the point: a survey that only sorts leads gives the
 * person nothing, and they can feel it.
 *
 * Every option carries a note, and the notes are shown back before we ask for
 * an email. Nothing in them is invented. Each is a true statement about the
 * answer that was given, which is the only claim we can make before we have
 * looked at anything.
 */

interface Option {
  label: string;
  // Shown in the read-out. Written to be true of the answer alone, since at
  // this point we have not looked at their business.
  note: string;
}

interface Step {
  name: string;
  // The scoring category. Named on the page too, so the two match.
  category: string;
  question: string;
  help?: string;
  options: Option[];
}

const STEPS: Step[] = [
  {
    name: "business_type",
    category: "The comparison",
    question: "What kind of business is this?",
    help: "So we know who to hold you up against.",
    options: [
      {
        label: "Real estate",
        note: "We will score two agents working your area the same way, and name them.",
      },
      {
        label: "Mortgage or lending",
        note: "We will score two lenders working your area the same way, and name them.",
      },
      {
        label: "Legal, accounting, or financial",
        note: "We will score two firms in your area the same way, and name them.",
      },
      {
        label: "Home or trade services",
        note: "We will score two businesses in your trade nearby the same way, and name them.",
      },
      {
        label: "Something else",
        note: "We will find two businesses competing for the same work and score them the same way.",
      },
    ],
  },
  {
    name: "findability",
    category: "Findability",
    question: "Search your category and your town. Where do you land?",
    help: "Go ahead and try it. We will wait.",
    options: [
      {
        label: "In the top few results",
        note: "Findability is not your problem, so the audit will spend its time on what people find once they arrive. That is the half almost nobody checks.",
      },
      {
        label: "Somewhere further down page one",
        note: "Close enough that the gap is worth chasing. Usually it comes down to two or three things, and we will name which ones are holding the position.",
      },
      {
        label: "I could not find myself at all",
        note: "More common than people expect, and it is the finding that changes the most. We will work out whether it is the profile, the site, or the category you are filed under.",
      },
      {
        label: "I did not look",
        note: "Then this is the first thing in your audit. We run the search from outside any account, which is the only way to see what a stranger sees rather than what Google shows you.",
      },
    ],
  },
  {
    name: "proof",
    category: "Proof",
    question: "When did your last review come in?",
    help: "A rough guess is fine.",
    options: [
      {
        label: "Within the last week or two",
        note: "Current, which is the part that counts. The next question is whether you reply to them, and most people do not.",
      },
      {
        label: "Sometime in the last month",
        note: "Healthy. What we watch for is the gap, because a quiet stretch of two or three months is the thing a stranger reads as a business slowing down.",
      },
      {
        label: "A few months back",
        note: "This is usually the fastest thing on the list to fix. Recency counts for more than the total, and a newest review from months ago undercuts a wall of five stars above it.",
      },
      {
        label: "Longer than that, or I am not sure",
        note: "Worth knowing for certain. We will pull the actual date, and the dates your two competitors are showing next to yours.",
      },
    ],
  },
  {
    name: "voice",
    category: "Voice",
    question: "Is there a video of you anywhere a stranger could find?",
    help: "Anything counts. It does not have to be good.",
    options: [
      {
        label: "Yes, on our website",
        note: "Then the question is what it does. A lot of them say the name of the business over music and answer nothing, and we will tell you plainly which kind yours is.",
      },
      {
        label: "On social somewhere, probably buried",
        note: "Then it is doing close to nothing. A video that cannot be found on the page where the decision happens counts about the same as no video.",
      },
      {
        label: "Only something old I would rather not point to",
        note: "Old still beats nothing, but it dates you, and an outdated one can cost more than it returns. We will say whether it is worth keeping up.",
      },
      {
        label: "No",
        note: "Then nobody hears your voice until the first call. For work that arrives by referral, that is the whole distance between being recommended and being chosen.",
      },
    ],
  },
  {
    name: "answers",
    category: "Answers",
    question: "What do people ask right before they decide?",
    help: "The last thing standing between a conversation and a yes.",
    options: [
      {
        label: "What it is going to cost",
        note: "Then price is the conversation, and right now it is happening without you in the room. There is a way to answer it before the call that does not mean publishing a number.",
      },
      {
        label: "Whether we have done this before",
        note: "A proof problem, and the most fixable one here. It takes one client willing to say it out loud, on camera, in their own words.",
      },
      {
        label: "How long it takes",
        note: "A timeline question is a risk question underneath. People are asking how long they are exposed, and a plain answer published where they can find it settles it early.",
      },
      {
        label: "Why us and not the bigger name",
        note: "Then you are being compared on a page you did not write. This is the piece we would make first, because it is the one doing the most work.",
      },
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
  // not left behind when the step swaps under them. The card scrolls back to
  // the top with it, since the read-out step is taller than a question.
  useEffect(() => {
    if (!open) return;
    headingRef.current?.focus();
    cardRef.current?.parentElement?.scrollTo({ top: 0 });
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

  // What they told us, paired back with the note for the option they picked.
  // Skips the first question, which sets the comparison rather than scoring
  // anything, and appears at the top of the read-out on its own.
  const readout = STEPS.map((s) => {
    const picked = s.options.find((o) => o.label === answers[s.name]);
    return picked ? { category: s.category, ...picked } : null;
  }).filter(Boolean) as { category: string; label: string; note: string }[];

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
              Your audit lands in your inbox within two business days. All five
              categories scored, the working shown, and two competitors named and
              scored the same way.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ash-700">
              The questions you just answered are four of the five things we
              score. Anything you fix before the audit arrives is a point back.
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
            {/* Stops short of the close button rather than running under it. */}
            <div className="mr-10 h-[3px] bg-ash-100" role="presentation">
              <div
                className="h-full bg-gold-500 transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-ash-500">
              {current
                ? `${current.category} · ${step} of ${TOTAL}`
                : `Last step · ${TOTAL} of ${TOTAL}`}
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
                {current.help && (
                  <p className="mt-3 text-base leading-relaxed text-ash-700">
                    {current.help}
                  </p>
                )}
                <div className="mt-7 flex flex-col gap-2.5">
                  {current.options.map((opt) => {
                    const selected = answers[current.name] === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => choose(current.name, opt.label)}
                        className={`min-h-[56px] rounded-[2px] border px-5 py-4 text-left text-[17px] font-medium transition-colors ${
                          selected
                            ? "border-gold-500 bg-gold-500 text-black"
                            : "border-ash-100 bg-white text-black hover:border-black"
                        }`}
                      >
                        {opt.label}
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
                  Here is what you just told us.
                </h2>

                {/* The payoff, before the ask rather than after it. Every line
                    is true of the answer given, which is all we can honestly
                    say before looking at anything. */}
                <ul className="mt-7 space-y-5 border-y border-ash-100 py-7">
                  {readout.map((item) => (
                    <li key={item.category}>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-700">
                        {item.category}
                      </p>
                      <p className="mt-2 text-[17px] font-medium leading-snug text-black">
                        {item.label}
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-ash-700">
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-lg leading-relaxed text-ash-700">
                  The audit puts a number on each of those, shows the working,
                  and scores two competitors beside you. Where should we send it?
                </p>

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

import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import JsonLd from "@/components/JsonLd";
import TrustAuditSurvey from "@/components/TrustAuditSurvey";
import { CLIENT_ROSTER } from "@/lib/content/caseStudies";
import { faqSchema } from "@/lib/content/schema";
import { SITE_NAME, SITE_URL } from "@/lib/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `Free Trust Audit | ${SITE_NAME}`,
  },
  description:
    "A written breakdown of how your business looks to someone checking you out online, scored against two competitors we name. Free for Columbus and central Ohio businesses.",
  alternates: { canonical: "/trust-audit" },
};

const INSIDE = [
  {
    n: "01",
    title: "Your score, out of a hundred",
    body: "Five categories, the same rubric every time. Not a vague grade, a number with the working shown.",
  },
  {
    n: "02",
    title: "Two competitors, named",
    body: "Scored the same way, side by side with you. This is the part that stings and the part that is useful.",
  },
  {
    n: "03",
    title: "The gaps, in priority order",
    body: "What is costing you the most, first. Most of it you can fix yourself, and we say which.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Answer four questions",
    body: "About a minute. No call to book and nothing to schedule.",
  },
  {
    n: "2",
    title: "We look you up",
    body: "The way a customer would. Google profile, website, socials, reviews.",
  },
  {
    n: "3",
    title: "Your audit lands",
    body: "Written up and sent within two business days. Yours to keep either way.",
  },
];

const FAQ = [
  {
    question: "Is this a sales call in disguise?",
    answers: [
      "No, because there is no call. You get the audit as a written document whether or not we ever speak.",
      "If it turns out we can help, we will say so at the end. If we cannot, we will say that too.",
    ],
  },
  {
    question: "What does it cost?",
    answers: [
      "Nothing. We run this to start conversations with businesses we might be a fit for, and the fastest way to do that is to be useful first.",
    ],
  },
  {
    question: "How long does it take?",
    answers: [
      "The questions take about a minute. The audit comes back within two business days, because a person actually looks you up and writes it.",
    ],
  },
  {
    question: "What if my online presence is bad?",
    answers: [
      "Then the audit is worth more to you, not less. Nobody gets a scolding. Most of what we find is ordinary and fixable, and we tell you which parts you can handle yourself.",
    ],
  },
];

export default function TrustAuditPage() {
  return (
    <div className="animate-fadeIn" id="top">
      <JsonLd data={faqSchema(FAQ)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Free Trust Audit",
          url: `${SITE_URL}/trust-audit`,
          description:
            "A written breakdown of how a business looks to someone checking it out online, scored against two named competitors.",
        }}
      />

      {/* Hero and the survey together, so the thing to do is on screen from
          the first moment rather than a scroll away. */}
      <section className="bg-black py-16 text-paper sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16">
            <div>
              <Kicker dark className="mb-8">
                Free &middot; No call required
              </Kicker>
              <h1 className="font-serif text-4xl leading-[0.95] font-black tracking-tighter text-paper sm:text-5xl md:text-6xl">
                See what a customer sees{" "}
                <span className="italic text-gold-500">
                  before they call you.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ash-300">
                Somebody gets your name, then looks you up. We will tell you
                exactly what they find, score it out of a hundred, and put it
                next to two of your competitors.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ash-300">
                Four questions, about a minute. The audit is written by a person
                and lands within two business days.
              </p>

              <div className="mt-12 grid grid-cols-1 divide-y divide-shale border-y border-shale sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {INSIDE.map((item) => (
                  <div key={item.n} className="py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500">
                      {item.n}
                    </span>
                    <h3 className="mt-3 font-serif text-lg tracking-tight text-paper">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ash-500">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Light card, so the survey is unmistakably the thing to do. */}
            <div className="border border-ash-100 border-l-[3px] border-l-gold-500 bg-paper p-6 sm:p-8">
              <TrustAuditSurvey />
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for and who we work with */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Who this is for</Kicker>
          <h2 className="max-w-3xl font-serif text-3xl font-black tracking-tighter text-black md:text-5xl">
            Central Ohio professional services businesses.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash-700">
            Realtors, lenders, advisors, and trade businesses in Delaware,
            Franklin, and Union counties. The kind of business where most of the
            work arrives by referral, and where what someone finds online
            decides whether the referral turns into a call.
          </p>

          <div className="mt-14 border-t border-ash-100 pt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash-500">
              Currently working with
            </p>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {["Frontier Technologies", ...CLIENT_ROSTER.map((c) => c.name)].map(
                (name) => (
                  <span
                    key={name}
                    className="font-serif text-xl tracking-tight text-black md:text-2xl"
                  >
                    {name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bone py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">How it works</Kicker>
          <h2 className="font-serif text-3xl font-black tracking-tighter text-black md:text-5xl">
            Three steps, one of them yours.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
            {STEPS.map((s) => (
              <div key={s.n} className="border-t border-ash-100 pt-8">
                <span className="mb-5 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                  {s.n}
                </span>
                <h3 className="mb-3 font-serif text-2xl tracking-tight text-black">
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Before you start</Kicker>
          <h2 className="font-serif text-3xl font-black tracking-tighter text-black md:text-5xl">
            Straight answers.
          </h2>
          <div className="mt-10">
            {FAQ.map((item) => (
              <div key={item.question} className="border-t border-ash-100 py-8">
                <h3 className="mb-3 font-serif text-xl tracking-tight text-black md:text-2xl">
                  {item.question}
                </h3>
                <div className="space-y-3">
                  {item.answers.map((a, i) => (
                    <p key={i} className="text-base leading-relaxed text-ash-700">
                      {a}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="bg-black py-20 text-paper sm:py-24">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <p className="font-serif text-3xl leading-tight font-black tracking-tighter text-paper md:text-5xl">
            You are already good at the work.{" "}
            <span className="italic text-gold-500">
              This tells you how it looks.
            </span>
          </p>
          <div className="mt-10">
            <a
              href="#top"
              className="inline-block rounded-[2px] border border-paper bg-paper px-9 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-bone"
            >
              Start the audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

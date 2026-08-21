import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import JsonLd from "@/components/JsonLd";
import MediaFrame from "@/components/MediaFrame";
import TrustAuditModal from "@/components/TrustAuditModal";
import { CLIENT_ROSTER } from "@/lib/content/caseStudies";
import { PHOTO_STRIP, HERO_PHOTO } from "@/lib/content/photos";
import { faqSchema } from "@/lib/content/schema";
import { SITE_NAME, SITE_URL } from "@/lib/content/site";

export const metadata: Metadata = {
  title: { absolute: `Free Trust Audit | ${SITE_NAME}` },
  description:
    "A written breakdown of how your business looks to someone checking you out online, scored against two competitors we name. Free for Columbus and central Ohio businesses.",
  alternates: { canonical: "/trust-audit" },
};

const PROMISES = [
  "Written by a person, not a tool",
  "Back within two business days",
  "No call, no pitch, nothing to cancel",
];

// The five scoring categories, in the order the survey asks about them. The
// survey is the rubric, so these have to stay in step with STEPS in
// components/TrustAuditModal.tsx.
const CATEGORIES = [
  {
    name: "Findability",
    body: "Whether you come up at all when somebody searches your category and your town.",
  },
  {
    name: "Proof",
    body: "Reviews, how recent they are, and whether anyone else vouches for the work.",
  },
  {
    name: "Voice",
    body: "Whether a stranger can hear you before they call you, or only read about you.",
  },
  {
    name: "Answers",
    body: "The question people ask right before they decide, and whether you answer it anywhere.",
  },
  {
    name: "Freshness",
    body: "The date on the last thing you published, which is the first thing a careful buyer checks.",
  },
];

const INSIDE = [
  {
    n: "01",
    title: "Your score, out of a hundred",
    body: "Five categories, the same rubric every time. Not a vague grade, a number with the working shown.",
  },
  {
    n: "02",
    title: "Two competitors, named",
    body: "Scored the same way and set beside you. This is the part that stings, and the part that is useful.",
  },
  {
    n: "03",
    title: "The gaps, in priority order",
    body: "Whatever is costing you the most, first. Plenty of it you can fix yourself, and we say which.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Answer five questions",
    body: "Who you compete with, then four of the five things we score. About a minute, and nothing to schedule.",
  },
  {
    n: "2",
    title: "We look you up",
    body: "The way a customer would. Your Google profile, website, socials, and reviews.",
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
      "Nothing. We run these to start conversations with businesses we might be a fit for, and the fastest way to do that is to be useful first.",
    ],
  },
  {
    question: "What if my online presence is bad?",
    answers: [
      "Then the audit is worth more to you, not less. Nobody gets a scolding. Most of what we find is ordinary and fixable.",
    ],
  },
  {
    question: "Who actually writes it?",
    answers: [
      "We do, by hand. That is why it takes two days instead of two minutes, and why it says something a scanner cannot.",
    ],
  },
];

export default function TrustAuditPage() {
  return (
    <div className="animate-fadeIn">
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
      <TrustAuditModal />

      {/* Hero: one message, one thing to press. */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-28">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_PHOTO}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-[820px] px-6 text-center">
          <Kicker dark className="mb-8 justify-center">
            Free &middot; No call required
          </Kicker>
          <h1 className="mx-auto max-w-[20ch] font-serif text-[2.4rem] leading-[1.02] font-black tracking-tighter text-paper sm:text-6xl md:text-7xl">
            See what a customer sees{" "}
            <span className="italic text-gold-500">before they call you.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-[36ch] text-xl leading-relaxed text-ash-300 md:text-2xl">
            Somebody gets your name, then looks you up. We will tell you exactly
            what they find, and score it against two of your competitors.
          </p>
          <div className="mt-12">
            <button
              type="button"
              data-open-audit
              className="w-full rounded-[2px] border border-paper bg-paper px-10 py-5 font-mono text-[13px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-bone sm:w-auto"
            >
              Start my free audit
            </button>
          </div>
          <p className="mt-6 text-base text-ash-300">
            Five questions, about a minute. You get something back on the last
            one.
          </p>
        </div>
      </section>

      {/* Promise bar, straight off the hero. */}
      <section className="border-t border-shale bg-ink py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
          {PROMISES.map((p) => (
            <div key={p} className="flex items-center gap-3">
              <span
                className="h-[6px] w-[6px] shrink-0 bg-gold-500"
                aria-hidden="true"
              />
              <span className="text-lg font-medium text-paper">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What is in it */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">What you get</Kicker>
          <h2 className="max-w-[24ch] font-serif text-4xl font-black tracking-tighter text-black md:text-6xl">
            A real document, not a score widget.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {INSIDE.map((item) => (
              <div key={item.n} className="border-t border-ash-100 pt-8">
                <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.3em] text-gold-700">
                  {item.n}
                </span>
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-ash-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* The rubric, named. It is the same five things the survey asks
              about, which is what makes answering it worth a minute. */}
          <div className="mt-20 border-t border-ash-100 pt-12">
            <h3 className="font-serif text-2xl tracking-tight text-black md:text-3xl">
              The five categories
            </h3>
            <dl className="mt-8 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
              {CATEGORIES.map((c) => (
                <div key={c.name} className="flex gap-5">
                  <span
                    className="mt-[11px] h-[6px] w-[6px] shrink-0 bg-gold-500"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-serif text-xl tracking-tight text-black">
                      {c.name}
                    </dt>
                    <dd className="mt-2 text-lg leading-relaxed text-ash-700">
                      {c.body}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Who we work with</Kicker>
          <h2 className="max-w-[24ch] font-serif text-4xl font-black tracking-tighter text-black md:text-6xl">
            Central Ohio professional services businesses.
          </h2>
          <p className="mt-8 max-w-[52ch] text-xl leading-relaxed text-ash-700">
            Realtors, lenders, advisors, and trade businesses across Delaware,
            Franklin, and Union counties. Businesses where the work arrives by
            referral, and what someone finds online decides whether that
            referral turns into a call.
          </p>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-y border-ash-100 py-8">
            {["Frontier Technologies", ...CLIENT_ROSTER.map((c) => c.name)].map(
              (name) => (
                <span
                  key={name}
                  className="font-serif text-2xl tracking-tight text-black md:text-3xl"
                >
                  {name}
                </span>
              )
            )}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {PHOTO_STRIP.slice(0, 4).map((photo) => (
              <MediaFrame
                key={photo.src}
                image={photo.src}
                alt={photo.alt}
                aspect="portrait"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">How it works</Kicker>
          <h2 className="font-serif text-4xl font-black tracking-tighter text-black md:text-6xl">
            Three steps. One of them yours.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {STEPS.map((s) => (
              <div key={s.n} className="border-t border-ash-100 pt-8">
                <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.3em] text-ash-300">
                  {s.n}
                </span>
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {s.title}
                </h3>
                <p className="text-lg leading-relaxed text-ash-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Before you start</Kicker>
          <h2 className="font-serif text-4xl font-black tracking-tighter text-black md:text-6xl">
            Straight answers.
          </h2>
          <div className="mt-12">
            {FAQ.map((item) => (
              <div key={item.question} className="border-t border-ash-100 py-9">
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black md:text-3xl">
                  {item.question}
                </h3>
                <div className="space-y-4">
                  {item.answers.map((a, i) => (
                    <p key={i} className="text-lg leading-relaxed text-ash-700">
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
      <section className="bg-black py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <h2 className="mx-auto max-w-[22ch] font-serif text-4xl leading-tight font-black tracking-tighter text-paper md:text-6xl">
            You are already good at the work.{" "}
            <span className="italic text-gold-500">
              This tells you how it looks.
            </span>
          </h2>
          <div className="mt-12">
            <button
              type="button"
              data-open-audit
              className="w-full rounded-[2px] border border-paper bg-paper px-10 py-5 font-mono text-[13px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-bone sm:w-auto"
            >
              Start my free audit
            </button>
          </div>
          <p className="mt-6 text-base text-ash-300">
            Free, and the audit is yours whether we work together or not.
          </p>
        </div>
      </section>

      {/* Sticky bar on small screens, so the action is never scrolled away. */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-shale bg-black/95 p-3 backdrop-blur sm:hidden">
        <button
          type="button"
          data-open-audit
          className="w-full rounded-[2px] border border-paper bg-paper px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-black"
        >
          Start my free audit
        </button>
      </div>
      {/* Room for the bar, so it never covers the last line of the page. */}
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </div>
  );
}

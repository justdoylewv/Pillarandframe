import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import { BOOKING_URL, CTA_LABEL } from "@/lib/content/site";
import {
  AUDIT_PRICE,
  COACHING_PRICE,
  LEAKS,
  SYSTEMS_COACHING_FAQ,
  WHAT_GETS_FIXED,
} from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Systems Coaching",
  description:
    "We get inside the tools you already pay for. CRM, follow-up, automations. Audited, fixed, and coached with your team so the knowledge stays in-house.",
  alternates: { canonical: "/systems-coaching" },
};

export default function SystemsCoachingPage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero: light */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">Systems Coaching</Kicker>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl">
            The leads aren&rsquo;t the problem. The leaks are.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            You already pay for the CRM, the email platform, the automations.
            Somewhere between &ldquo;we bought it&rdquo; and &ldquo;it runs the
            business,&rdquo; things stalled. Systems coaching closes that gap,
            with your team, inside your tools.
          </p>
          <div className="mt-12">
            <CtaButton href={BOOKING_URL}>{CTA_LABEL}</CtaButton>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Sound familiar?</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            We keep finding the same leaks.
          </h2>
          <p className="mt-6 text-lg text-ash-700">
            These are real findings from real audits:
          </p>
          <ul className="mt-10 space-y-6">
            {LEAKS.map((leak) => (
              <li
                key={leak}
                className="border-l border-purple-600 pl-6 text-lg leading-relaxed text-ash-700"
              >
                {leak}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ash-700">
            None of this is anyone&rsquo;s fault. Platforms get migrated. Staff
            changes. The person who set it up leaves. The tools keep billing
            either way.
          </p>
          <p className="mt-16 border-l border-purple-600 pl-8 font-serif text-2xl leading-snug text-black md:text-3xl">
            Attention is expensive. Leaking it is the most expensive thing a
            business does.
          </p>
        </div>
      </section>

      {/* The offer */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">How it works</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Audit first. Then we build together.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            <div className="border-t border-ash-100 pt-8">
              <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                01
              </span>
              <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                Start with the audit.
              </h3>
              <p className="text-base leading-relaxed text-ash-700">
                We go through your whole stack and map what you have,
                what&rsquo;s leaking, and what to fix first. You get a written
                report with a priority order: what risks real damage now, what
                breaks core functions, what drags. No changes made without you.
              </p>
              {AUDIT_PRICE && (
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ash-500">
                  {AUDIT_PRICE}
                </p>
              )}
            </div>
            <div className="border-t border-ash-100 pt-8">
              <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                02
              </span>
              <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                Coaching calls, on a rhythm.
              </h3>
              <p className="text-base leading-relaxed text-ash-700">
                Recorded calls with a summary and a running progress log. We
                fix things live, together, in your account. Your team builds it
                with us, so the knowledge stays when we step back.
              </p>
              {COACHING_PRICE && (
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ash-500">
                  {COACHING_PRICE}
                </p>
              )}
            </div>
            <div className="border-t border-ash-100 pt-8">
              <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                03
              </span>
              <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                Support between calls.
              </h3>
              <p className="text-base leading-relaxed text-ash-700">
                Questions answered as they come up. Guidance when something
                breaks. No waiting two weeks to unblock a five-minute fix.
              </p>
            </div>
          </div>
          <p className="mt-16 border-l border-purple-600 pl-8 font-serif text-2xl leading-snug text-black md:text-3xl">
            A consultant tells you what to do. We do it with you.
          </p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-ash-500">
            Something urgent in the audit? We go hands-on for the critical
            fixes first, then shift to coaching once things are stable.
          </p>
        </div>
      </section>

      {/* What gets fixed */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">The work</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Plain fixes. Compounding results.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            {WHAT_GETS_FIXED.map((item) => (
              <div key={item.title} className="border-t border-ash-100 pt-8">
                <h3 className="mb-3 font-serif text-xl tracking-tight text-black md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Running now</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Two businesses, two starting points.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Link
              href="/work/dg-lending"
              className="group block border-t border-ash-100 pt-8"
            >
              <h3 className="mb-4 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                DG Lending
              </h3>
              <p className="mb-6 text-base leading-relaxed text-ash-700">
                First the video library: 80+ pieces. Then the machine behind
                it: a CRM rebuilt around how borrowers actually move, with
                nurture that pauses when a past client starts a new loan.
              </p>
              <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                Read the story
                <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
              </span>
            </Link>
            <Link
              href="/work/wealthstrong"
              className="group block border-t border-ash-100 pt-8"
            >
              <h3 className="mb-4 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                Wealthstrong
              </h3>
              <p className="mb-6 text-base leading-relaxed text-ash-700">
                A wealth management team, post-migration, ready to hit send on
                a big list. The audit said wait, showed why, and mapped the fix
                in priority order.
              </p>
              <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                Read the story
                <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Fit</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            For teams who want to own their systems.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                For you if
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                You run your business on GoHighLevel or similar tools. You want
                your team capable, not dependent. You&rsquo;d rather fix the
                machine than buy another one.
              </p>
            </div>
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                Not for you if
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                You want to outsource everything forever and never look at the
                tools. That&rsquo;s a different vendor. We coach ourselves out
                of a job, on purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Questions, answered straight</Kicker>
          <div className="mt-10">
            {SYSTEMS_COACHING_FAQ.map((item) => (
              <div key={item.question} className="border-t border-ash-100 py-10">
                <h3 className="mb-4 font-serif text-xl tracking-tight text-black md:text-2xl">
                  {item.question}
                </h3>
                <p className="text-base leading-relaxed text-ash-700 md:text-lg">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <Kicker dark className="mb-8 justify-center">
            Start with the audit
          </Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-paper md:text-6xl">
            Find the leaks before they cost another client.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl">
            Thirty minutes on a call. We talk through your stack and what you
            suspect is broken. Written report within 48 hours, whether we work
            together or not.
          </p>
          <div className="mt-12">
            <CtaButton href={BOOKING_URL} variant="solidLight">
              {CTA_LABEL}
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}

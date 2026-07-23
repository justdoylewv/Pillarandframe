import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import { BOOKING_URL, CTA_LABEL } from "@/lib/content/site";
import {
  TIERS,
  TIER_DETAILS,
  TIER_TABLE_NOTE,
  TRUST_ENGINE_FAQ,
  VALUE_FLOOR,
} from "@/lib/content/services";
import type { Tier } from "@/lib/content/types";

export const metadata: Metadata = {
  title: "The Trust Engine",
  description:
    "Three ways in, one engine. Capture real stories, turn them into a content waterfall, put them to work. DIY with our software, one onsite filming day, or the full library. Coaching built in.",
  alternates: { canonical: "/trust-engine" },
};

const ENGINE_MOVES = [
  {
    number: "01",
    title: "Capture.",
    body: "Real stories, real people. Part documentary, part promo. We do the homework first: what you want to be known for, what your audience actually cares about. The topics come from that. On the day, we run the topics and stay open for the moments you didn't plan.",
  },
  {
    number: "02",
    title: "The content waterfall.",
    body: "One interview transcript, and everything flows down from it. We cut the long films and short videos, then keep going in writing: post captions, email newsletters, and quote images, all in your own words. Each transcript also trains a growing voice profile that learns how you talk, so every round sounds more like you and takes less work. It compounds over time.",
  },
  {
    number: "03",
    title: "Put to work.",
    body: "A distribution guide for where it all goes, and if you'd rather not run it, we do it for you. The focus for trust is LinkedIn and your Google Business Profile, the two surfaces buyers and AI check first. Post there consistently, then retarget the people already paying attention.",
  },
];

const TABLE_ROWS: { label: string; key: keyof Tier }[] = [
  { label: "Best for", key: "bestFor" },
  { label: "Filming", key: "filming" },
  { label: "Long films", key: "longFilms" },
  { label: "Short videos", key: "shortVideos" },
  { label: "Foundations + guides", key: "foundations" },
  { label: "Distribution guide", key: "distributionGuide" },
  { label: "Monthly coaching", key: "monthlyCoaching" },
  { label: "Delivery", key: "delivery" },
];

function MostPopularBadge() {
  return (
    <span className="inline-block rounded-[2px] bg-gold-500 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-black">
      Most popular
    </span>
  );
}

export default function TrustEnginePage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero: light, big serif */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">
            The Trust Engine &middot; For founder-driven service brands
          </Kicker>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl">
            You know your work. You just don&rsquo;t know what to say about it.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            That&rsquo;s not a talent problem. It&rsquo;s a system problem. The
            Trust Engine captures your real stories, turns them into a content
            waterfall, and puts them to work where buyers are looking. With
            coaching every month, so you&rsquo;re never doing this alone.
          </p>
          <div className="mt-12">
            <CtaButton href={BOOKING_URL}>{CTA_LABEL}</CtaButton>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Why content stalls</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Your best proof is invisible.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              It lives in your head. It lives in finished work nobody outside
              the building sees. It lives in clients who would say wonderful
              things on camera, except nobody ever asked.
            </p>
            <p>
              And the usual fixes don&rsquo;t hold. Posting when inspiration
              strikes turns into silence by March. Hiring a videographer gets
              you one nice video and no plan. Ads rent attention that stops the
              day the spend stops.
            </p>
            <p>
              Meanwhile your buyers are doing quiet research. LinkedIn. Your
              Google profile. What AI says when they ask who to trust.
            </p>
          </div>
          <p className="mt-16 border-l border-purple-600 pl-8 font-serif text-2xl leading-snug text-black md:text-3xl">
            Ads rent attention. Proof compounds.
          </p>
        </div>
      </section>

      {/* The engine */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">One engine</Kicker>
          <h2 className="max-w-4xl font-serif text-4xl tracking-tight text-black md:text-5xl">
            Capture real stories. Turn them into a waterfall. Put them to work.
          </h2>
          <p className="mt-6 text-lg text-ash-700">
            Every tier runs on the same method.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {ENGINE_MOVES.map((move) => (
              <div key={move.number} className="border-t border-ash-100 pt-8">
                <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                  {move.number}
                </span>
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {move.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">
                  {move.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-16 max-w-3xl text-lg leading-relaxed text-ash-700">
            And through all of it:{" "}
            <strong className="font-semibold text-black">
              monthly coaching built in.
            </strong>{" "}
            What to post, how to say it, what to film next. A system plus
            someone in your corner.
          </p>
        </div>
      </section>

      {/* Three ways in: the tier table */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">How to work with us</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Three ways in. One engine.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ash-700">
            Do it yourself with our software. Have us film a simple day. Or go
            all in. Every tier comes with the foundations, the guides, and
            everything we can pull from your transcripts. The only thing that
            changes is who holds the camera, and how much we make.
          </p>

          {/* Desktop table */}
          <div className="mt-16 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-ash-100">
                  <th className="w-1/4 pb-6" aria-label="Feature" />
                  {TIERS.map((tier) => (
                    <th key={tier.name} className="w-1/4 px-6 pb-6 align-bottom font-normal">
                      {tier.mostPopular && (
                        <div className="mb-3">
                          <MostPopularBadge />
                        </div>
                      )}
                      <span className="block font-serif text-3xl tracking-tight text-black">
                        {tier.number}. {tier.name}
                      </span>
                      <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                        {tier.subtitle}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-ash-100">
                    <td className="py-5 pr-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                      {row.label}
                    </td>
                    {TIERS.map((tier) => (
                      <td key={tier.name} className="px-6 py-5 text-sm text-ash-700">
                        {tier[row.key] as string}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="py-6 pr-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                    Investment
                  </td>
                  {TIERS.map((tier) => (
                    <td key={tier.name} className="px-6 py-6">
                      <span className="font-serif text-2xl tracking-tight text-black">
                        {tier.investment}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards */}
          <div className="mt-12 space-y-8 md:hidden">
            {TIERS.map((tier) => (
              <div key={tier.name} className="border border-ash-100 bg-paper p-6">
                {tier.mostPopular && (
                  <div className="mb-4">
                    <MostPopularBadge />
                  </div>
                )}
                <h3 className="font-serif text-3xl tracking-tight text-black">
                  {tier.number}. {tier.name}
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                  {tier.subtitle}
                </p>
                <dl className="mt-6 space-y-4">
                  {TABLE_ROWS.map((row) => (
                    <div key={row.label} className="flex justify-between gap-4 border-t border-ash-100 pt-4">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                        {row.label}
                      </dt>
                      <dd className="text-right text-sm text-ash-700">
                        {tier[row.key] as string}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 border-t border-ash-100 pt-6">
                  <span className="font-serif text-3xl tracking-tight text-black">
                    {tier.investment}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-ash-500">
            {TIER_TABLE_NOTE}
          </p>
        </div>
      </section>

      {/* Tier details */}
      <section className="border-t border-ash-100 bg-paper pb-24 sm:pb-32">
        <div className="mx-auto max-w-[980px] px-6">
          {TIER_DETAILS.map((tier) => (
            <div key={tier.number} className="border-b border-ash-100 py-14">
              <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                {tier.number}
              </span>
              <h3 className="mb-6 font-serif text-2xl tracking-tight text-black md:text-3xl">
                {tier.heading}
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-ash-700">
                {tier.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What every tier includes */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">The value floor</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-black md:text-5xl">
            If a transcript can make it, it&rsquo;s in the box.
          </h2>
          <p className="mt-6 text-lg text-ash-700">
            Same floor, no matter which tier you pick:
          </p>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
            {VALUE_FLOOR.map((item) => (
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
          <p className="mt-14 max-w-3xl text-lg leading-relaxed text-ash-700">
            On the DIY tier, the software produces these for you. On Onsite and
            Full, we do. Either way, it comes from your own words.
          </p>
        </div>
      </section>

      {/* Where it goes */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Where trust gets checked</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Two surfaces decide how safe you look.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              <strong className="font-semibold text-black">LinkedIn</strong> is
              where your buyers spend their research time. A real person with a
              clear point of view and filmed proof beats any company page.
            </p>
            <p>
              <strong className="font-semibold text-black">
                Google Business Profile
              </strong>{" "}
              is the second check. Reviews, photos, videos, activity. A profile
              that looks alive reads safer and ranks better.
            </p>
            <p>
              And the newer reality: when someone asks AI who to trust, it
              builds the answer from what it finds on exactly these surfaces.
              Fresh, real proof, posted consistently. That&rsquo;s how you end
              up in the answer.
            </p>
            <p>
              You get the guide for all of it. Prefer it handled? We run the
              posting for you, so the content actually goes out on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Running now</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            The engine, in the wild.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Link
              href="/work/frontier-technologies"
              className="group block border-t border-ash-100 pt-8"
            >
              <h3 className="mb-4 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                Frontier Technologies
              </h3>
              <p className="mb-6 text-base leading-relaxed text-ash-700">
                A 35-year IT company&rsquo;s leadership becomes the visible
                authority in their lane. Founder story content, a newsletter, a
                daily motion into named accounts.
              </p>
              <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                Read the story
                <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
              </span>
            </Link>
            <Link
              href="/work/memorial-health"
              className="group block border-t border-ash-100 pt-8"
            >
              <h3 className="mb-4 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                Memorial Health
              </h3>
              <p className="mb-6 text-base leading-relaxed text-ash-700">
                A hospital foundation films its new emergency department while
                it&rsquo;s built. Donor stories now, opening-day content later,
                from the same effort.
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
            Built for businesses that run on trust.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                For you if
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                Your clients choose you because they trust you. Lenders,
                advisors, consultants, builders, IT partners, healthcare. You
                have real stories and happy clients. You&rsquo;re willing to
                get on camera, even nervously. Nervous works. We coach you
                through it.
              </p>
            </div>
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                Not for you if
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                You want overnight virality, or content nobody has to show up
                for. The engine runs on real people.
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
            {TRUST_ENGINE_FAQ.map((item) => (
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
            No pitch on the call
          </Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-paper md:text-6xl">
            See what the engine would look like for you.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl">
            Thirty minutes. We talk through your story, your content, and where
            it should go. Written report in 48 hours, whether we work together
            or not.
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

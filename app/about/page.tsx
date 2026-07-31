import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import MediaFrame from "@/components/MediaFrame";
import JsonLd from "@/components/JsonLd";
import { BOOKING_URL, CITY_SPOTLIGHT_URL, CTA_LABEL, SITE_URL } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Most good businesses run on referrals until the referrals dry up. After fifteen years filming everyone from local shops to the Fortune 500, we built a studio that fixes exactly that.",
  alternates: { canonical: "/about" },
};

const ABOUT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Pillar & Frame",
  description:
    "A story-led film studio in Ohio for businesses that run on referrals and want something more durable underneath them.",
  url: `${SITE_URL}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Pillar & Frame",
    url: SITE_URL,
  },
};

const HEARD = [
  "Most of my business comes through referrals.",
  "I know I should be active online. I do not have the time.",
  "And honestly, I would not know what to say if I did.",
];

const HOW_WE_WORK = [
  {
    title: "Part documentary, part promo.",
    body: "We do the homework before the camera comes out. On the day, we run the plan and stay open for the moments you did not script. The truth of a documentary. The punch of an ad.",
  },
  {
    title: "Real human origin.",
    body: "Real people, on camera. Verbatim quotes. No stock. No AI-generated content. If it did not happen, it does not go in the work.",
  },
  {
    title: "Built to hand over.",
    body: "Everything we make is yours: the films, the photos, the words, the guides. Organized so your team can keep using it for years, with or without us.",
  },
];

export default function AboutPage() {
  return (
    <div className="animate-fadeIn">
      <JsonLd data={ABOUT_JSONLD} />

      {/* Hero */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">The studio</Kicker>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-black sm:text-6xl md:text-7xl">
            Referrals are a great business.{" "}
            <span className="italic text-purple-600">Until they are not.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            Pillar &amp; Frame is a story-led film studio in Ohio. We build the
            thing most good businesses never got around to building: proof that
            works when word of mouth goes quiet.
          </p>
        </div>
      </section>

      {/* What we keep hearing */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">What we keep hearing</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            The same three sentences, for fifteen years.
          </h2>
          <div className="mt-12 divide-y divide-ash-100 border-y border-ash-100">
            {HEARD.map((line) => (
              <p
                key={line}
                className="py-6 font-serif text-2xl italic leading-snug text-black md:text-3xl"
              >
                &ldquo;{line}&rdquo;
              </p>
            ))}
          </div>
          <div className="mt-12 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              Every one of those is said by someone who is good at their work.
              That is what makes it worth fixing. The business runs on
              relationships, the relationships send people, and it works.
            </p>
            <p>
              Until the year it does not. A referral partner retires. A big
              client consolidates. The phone is quieter than last spring and
              nobody can point to why.
            </p>
            <p>
              Then the search starts, and there is nothing to find. No story. No
              proof. A Google profile with four photos from 2019. The business
              did not get worse. It just was never visible in the first place.
            </p>
          </div>
          <p className="mt-16 border-l border-purple-600 pl-8 font-serif text-2xl leading-snug text-black md:text-3xl">
            Referrals are the best thing that can happen to you. They are a
            terrible thing to depend on.
          </p>
        </div>
      </section>

      {/* Behind the scenes */}
      <div className="mx-auto max-w-7xl px-6">
        <MediaFrame aspect="wide" alt="Pillar and Frame on a capture day" caption="Behind the scenes coming soon" />
      </div>

      {/* What we do about it */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">What we do about it</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            We take it off your desk.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              The two hard parts are knowing what to say and finding the time to
              say it. So we removed both. You talk for one day. We ask the
              questions, pull the story out of you, and write it back in your
              own words.
            </p>
            <p>
              Then we organize it by exactly where it goes, so it does not sit in
              a folder waiting on the busiest person in the building. That is{" "}
              <Link
                href="/"
                className="text-purple-600 underline underline-offset-4 hover:text-purple-500"
              >
                The Foundation
              </Link>
              . If you want to stay visible after it is set, that is{" "}
              <Link
                href="/engine"
                className="text-purple-600 underline underline-offset-4 hover:text-purple-500"
              >
                The Engine
              </Link>
              .
            </p>
            <p>
              None of this replaces referrals. It backs them up. When someone
              hears your name, what they find should sound like the person who
              earned the referral in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker dark className="mb-6">
            Where this comes from
          </Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-paper md:text-5xl">
            Fifteen years. Corner shops to the Fortune 500.
          </h2>
          <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-ash-300">
            <p>
              We have spent more than fifteen years behind a camera. Hundreds of
              interviews. Shoots in more than ten countries. Hospitals, job
              sites, kitchens, boardrooms. Local shops with three employees and
              global companies with thirty thousand.
            </p>
            <p>
              The budgets were wildly different. The problem was identical. Every
              one of them had something true worth saying and no reliable way to
              say it.
            </p>
            <p>
              The big companies solved it by hiring a department. Small
              businesses cannot do that, and they do not need to. They need the
              same thinking, sized down and finished in thirty days.
            </p>
            <p className="text-paper">
              So we took the process we built for the largest clients, cut
              everything a local business does not need, and priced what was
              left so an owner can actually buy it.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 divide-y divide-shale border border-shale sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { v: "15+", k: "years behind the camera" },
              { v: "10+", k: "countries filmed in" },
              { v: "100s", k: "of interviews" },
            ].map((s) => (
              <div key={s.k} className="bg-ink p-8">
                <span className="block font-serif text-4xl tracking-tight text-gold-500">
                  {s.v}
                </span>
                <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                  {s.k}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">How we work</Kicker>
          <h2 className="mb-16 max-w-3xl font-serif text-4xl tracking-tight text-black md:text-5xl">
            Real people. Real proof. No shortcuts.
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {HOW_WE_WORK.map((block) => (
              <div key={block.title} className="border-t border-ash-100 pt-8">
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {block.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-20 border-b border-t border-ash-100 py-16 text-center">
            <p className="font-serif text-2xl italic leading-tight tracking-tight text-black md:text-4xl">
              &ldquo;Trust is the most important piece of gear.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* City Spotlight */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Also from the studio</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            City Spotlight Ohio
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            We publish a documentary magazine about the best local businesses in
            Central Ohio towns. Film, photography, and longform features. Same
            craft, pointed at the places we live. It is also most of what we do
            all week, which is why you will not be our first interview.
          </p>
          <a
            href={CITY_SPOTLIGHT_URL}
            target="_blank"
            rel="noopener"
            className="group mt-10 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black"
          >
            Visit City Spotlight Ohio
            <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <Kicker dark className="mb-8 justify-center">
            Talk to us
          </Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-paper md:text-6xl">
            What happens when the referrals slow down?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl">
            Fifteen minutes. Tell us what you do and where you are stuck, and we
            will tell you straight whether we can help.
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

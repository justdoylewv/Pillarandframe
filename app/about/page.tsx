import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import MediaFrame from "@/components/MediaFrame";
import JsonLd from "@/components/JsonLd";
import { BOOKING_URL, CITY_SPOTLIGHT_URL, CTA_LABEL, SITE_URL } from "@/lib/content/site";
import { ORG_ID, breadcrumbSchema } from "@/lib/content/schema";
import { ABOUT_PHOTO, ABOUT_STRIP } from "@/lib/content/photos";
import ServiceArea from "@/components/ServiceArea";

export const metadata: Metadata = {
  title: "About | Columbus and central Ohio",
  description:
    "Referrals are the best business you get. We help you get more of them, and make sure they close. A video and copy studio in Columbus and central Ohio.",
  alternates: { canonical: "/about" },
};

// The entity anchor. This page points at the organization node defined once in
// lib/content/schema.ts rather than describing a second, slightly different
// company, which is how an entity gets muddled in the first place.
const ABOUT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Pillar & Frame",
  description:
    "A video and copy studio serving Columbus and central Ohio that helps referral-driven businesses earn more referrals and convert the ones they already get.",
  url: `${SITE_URL}/about`,
  mainEntity: { "@id": ORG_ID },
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
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* Hero */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">The studio</Kicker>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-black sm:text-6xl md:text-7xl">
            Referrals are the best business you get.{" "}
            <span className="italic text-purple-600">
              We help you get more.
            </span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            Pillar &amp; Frame is a story-led film studio working across
            Columbus and central Ohio. We build the proof that makes a referral
            easy to give, easy to say yes to, and far more likely to happen
            again.
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
              Every one of those is said by someone who is good at their work,
              running a business built on relationships. That is a real asset,
              and it is the reason this is worth doing rather than a reason to
              start over.
            </p>
            <p>
              Here is what most people miss. A referral is only the first half.
              Somebody gives your name, and the next thing that happens is they
              look you up. If what they find is thin, the referral cools before
              you ever hear about it. Good proof is what closes that loop.
            </p>
            <p>
              The second half is memory. Your network can only refer you when
              they are thinking about you. People who see you show up, say
              something useful, and look like they are busy doing good work send
              you more business. Not because they were sold, because they were
              reminded.
            </p>
          </div>
          <p className="mt-16 border-l border-purple-600 pl-8 font-serif text-2xl leading-snug text-black md:text-3xl">
            A referral gets you named. What they find decides whether you get
            called.
          </p>
        </div>
      </section>

      {/* Behind the scenes */}
      <div className="mx-auto max-w-7xl px-6">
        <MediaFrame aspect="wide" image={ABOUT_PHOTO} alt="Pillar and Frame on a capture day" />
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
              None of this replaces referrals. It feeds them. When someone hears
              your name, what they find should sound like the person who earned
              the referral in the first place. And every time you show up, the
              people who already like you get a reminder, and something clear to
              forward when a friend asks who they should call.
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
              same thinking, sized down and finished in ninety days.
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
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {ABOUT_STRIP.map((p) => (
              <MediaFrame key={p.src} image={p.src} alt={p.alt} aspect="square" dark />
            ))}
          </div>

          <div className="mt-16 border-t border-shale pt-10">
            <Kicker dark className="mb-6">
              Where we work
            </Kicker>
            <ServiceArea dark />
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
            Want more referrals, and more of them to close?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl">
            Fifteen minutes. Tell us what you do and how people find you, and
            we will tell you straight whether we can help.
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

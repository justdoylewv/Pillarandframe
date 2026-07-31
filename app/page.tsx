import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import MediaFrame from "@/components/MediaFrame";
import HomeReel from "@/components/HomeReel";
import { BOOKING_URL, CONTACT_EMAIL, CTA_LABEL } from "@/lib/content/site";
import { getCaseStudy } from "@/lib/content/caseStudies";

export const metadata: Metadata = {
  title: {
    absolute: "Pillar & Frame | Story-led film studio. The Foundation.",
  },
  description:
    "One filming day. Thirty days later your Google profile, social profiles, and website copy are written, shot, and installed. Not handed over. For founder-led service businesses.",
  alternates: { canonical: "/" },
};

const HERO_IMAGE: string | null = null; // TODO: drop in real interview/BTS still (public/uploads/...)

const PROBLEM_BLOCKS = [
  {
    number: "01",
    title: "They check you out before they call.",
    body: "Someone gets your name. Then they Google you. In the next 48 hours they compare you against every competitor they can find, and decide who to call first.",
  },
  {
    number: "02",
    title: "You are not in that room.",
    body: "Your Google profile is. Your photos, your reviews, your story. If those are empty or say nothing, you look smaller online than you actually are.",
  },
  {
    number: "03",
    title: "Fixing it keeps landing on you.",
    body: "Your web guy is waiting on copy you never send. You sit down to write your About page and freeze. It has been stuck on your desk for two years.",
  },
];

const PROOF_STATS = [
  { value: "80+", label: "videos delivered for a single client" },
  { value: "60", label: "pieces of content from one filming day" },
  { value: "10+", label: "countries filmed in" },
];

const HOW_WE_WORK = [
  {
    title: "Real proof.",
    body: "We film real people saying true things. No stock footage. No AI-generated anything. Quotes stay verbatim. Proof like that can't be copied, because it only happened to you.",
  },
  {
    title: "Installed, not delivered.",
    body: "Anyone can hand you a folder. We log in and load every profile ourselves, then send you before and after screenshots of exactly what changed.",
  },
  {
    title: "You keep everything.",
    body: "The films, the photos, the quote bank, the written copy, the guides. Yours forever. Your team works from it for years.",
  },
];

const SELECTED_WORK = [
  {
    slug: "frontier-technologies",
    client: "Frontier Technologies",
    industry: "IT services",
    line: "A 35-year company makes its leadership impossible to miss on LinkedIn.",
  },
  {
    slug: "memorial-health",
    client: "Memorial Health",
    industry: "Healthcare",
    line: "A new emergency department, filmed while it's built.",
  },
];

export default function HomePage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero: dark, full-bleed film still */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-black sm:min-h-[85vh]">
        {HERO_IMAGE && (
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Behind the scenes on a Pillar and Frame interview shoot"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
          </div>
        )}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 sm:py-32">
          <div className="max-w-[980px]">
            <Kicker dark className="mb-8 animate-slideUp">
              A story-led film studio &middot; Ohio
            </Kicker>
            <h1
              className="animate-slideUp font-serif text-4xl leading-[1.02] tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ animationDelay: "100ms" }}
            >
              In 30 days, be the one they{" "}
              <span className="italic text-purple-400">call first</span>.
            </h1>
            <p
              className="mt-8 max-w-[700px] animate-slideUp font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl"
              style={{ animationDelay: "200ms" }}
            >
              Right now you are losing jobs in a room you are not in. We film
              you for one day, write every word your business needs, and then we
              log in and install all of it ourselves.
            </p>
            <div
              className="mt-12 flex animate-slideUp flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
              style={{ animationDelay: "300ms" }}
            >
              <CtaButton href={BOOKING_URL} variant="solidLight">
                {CTA_LABEL}
              </CtaButton>
              <CtaButton href="/foundation" variant="outlineLight">
                See The Foundation
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Reel showcase */}
      <section className="bg-black py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Kicker dark className="mb-6">
                In motion
              </Kicker>
              <h2 className="font-serif text-3xl tracking-tight text-paper md:text-4xl">
                Short-form work, always running.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-300 transition-colors hover:text-paper"
            >
              See all work
              <span className="h-[1px] w-8 bg-current" />
            </Link>
          </div>
          <HomeReel />
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-ash-500">
            Trusted by Frontier Technologies &middot; Memorial Health &middot; DG
            Lending
          </p>
        </div>
      </section>

      {/* The real problem */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">The real problem</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-black md:text-5xl">
            You look smaller online than you actually are.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {PROBLEM_BLOCKS.map((block) => (
              <div key={block.number} className="border-t border-ash-100 pt-8">
                <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                  {block.number}
                </span>
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {block.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-20 max-w-3xl font-serif text-2xl leading-snug text-black md:text-3xl">
            We take it off your desk. All of it. In 30 days.
          </p>
        </div>
      </section>

      {/* The two services */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">What we do</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-black md:text-5xl">
            Everyone hands you a folder.{" "}
            <span className="italic text-purple-600">We log in.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash-700">
            Every agency delivers files and a guide, and then six hours of
            copying and pasting lands on you. It never gets done. So we do it.
          </p>

          {/* The Foundation: the core offer */}
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Link href="/foundation" className="group block">
              <MediaFrame aspect="video" alt="The Foundation" caption="Filming still coming soon" />
            </Link>
            <div>
              <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                The Foundation &middot; $5,000 &middot; 30 days
              </span>
              <h3 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
                One filming day. Everything installed.
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-ash-700">
                We film you once, write every word your business needs, and then
                load it into your Google profile, your social profiles, and your
                website copy ourselves. Eight videos, thirty photos, and every
                field filled in. Live, not in a folder.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Your Google Business Profile, filled in and live",
                  "Eight videos and thirty photos from one day",
                  "Website copy, social bios, and your bio bank",
                  "We install it. Nothing left on your desk.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-ash-700">
                    <span className="mt-2 h-[3px] w-[3px] shrink-0 bg-gold-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <CtaButton href="/foundation">See The Foundation</CtaButton>
              </div>
            </div>
          </div>

          {/* The Engine: the secondary, after-the-fact offer */}
          <div className="mt-16 border-t border-ash-100 pt-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between">
              <div className="max-w-2xl">
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-300">
                  After the foundation
                </span>
                <h3 className="font-serif text-2xl tracking-tight text-black md:text-3xl">
                  The Engine
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ash-700">
                  Want to stay visible after it is installed? We film you once a
                  month and turn it into a full month of content. Only if you
                  want it, and only once the foundation is set.
                </p>
              </div>
              <Link
                href="/engine"
                className="group inline-flex shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black"
              >
                See The Engine
                <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How we film */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">The method</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Part documentary. Part promo.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              We don&rsquo;t point a camera and hope. Before we show up, we do
              the homework: what you want to be known for, and what your
              audience actually cares about. The topics come from that.
            </p>
            <p>
              Then on the day, we run those topics and stay open. The best
              moments are the ones you didn&rsquo;t plan. We catch those too.
            </p>
          </div>
          <p className="mt-16 border-l border-purple-600 pl-8 font-serif text-2xl leading-snug text-black md:text-3xl">
            The truth of a documentary. The punch of an ad. Real, but on
            message.
          </p>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-ash-100 bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-ash-100 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {PROOF_STATS.map((stat) => (
            <div key={stat.label} className="py-12 sm:px-10 sm:first:pl-0">
              <span className="block font-serif text-5xl tracking-tight text-black md:text-6xl">
                {stat.value}
              </span>
              <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <Kicker className="mb-6">Selected work</Kicker>
              <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
                Real clients. Real numbers.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500 transition-colors hover:text-black md:inline-flex"
            >
              View all work
              <span className="h-[1px] w-8 bg-current" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
            {SELECTED_WORK.map((work) => {
              const study = getCaseStudy(work.slug);
              return (
                <Link
                  key={work.slug}
                  href={`/work/${work.slug}`}
                  className="group block"
                >
                  <MediaFrame
                    aspect="video"
                    image={study?.heroImage ?? null}
                    videoUrl={study?.videoUrl ?? null}
                    videoProvider={study?.videoProvider ?? null}
                    alt={work.client}
                    caption={`${work.client} still coming soon`}
                  />
                  <div className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-300">
                    <span>{work.industry}</span>
                  </div>
                  <h3 className="mb-3 mt-3 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                    {work.client}
                  </h3>
                  <p className="mb-6 font-serif text-lg italic leading-relaxed text-ash-500">
                    {work.line}
                  </p>
                  <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                    Read the story
                    <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500 transition-colors hover:text-black"
            >
              View all work
              <span className="h-[1px] w-8 bg-current" />
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Why us</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-black md:text-5xl">
            Real people. Real proof. No shortcuts.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <Kicker dark className="mb-8 justify-center">
            No pitch on the call
          </Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-paper md:text-6xl">
            You talk for one day. We{" "}
            <span className="italic text-gold-500">install</span> the rest.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl">
            Fifteen minutes, and we will tell you in the first five whether this
            is right for you. If it is not, we will say so and tell you what we
            would do instead. No deck. No proposal.
          </p>
          <div className="mt-12">
            <CtaButton href={BOOKING_URL} variant="solidLight">
              {CTA_LABEL}
            </CtaButton>
          </div>
          <p className="mt-8 text-sm text-ash-500">
            Or email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-ash-300 transition-colors hover:text-paper"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

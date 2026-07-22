import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { BOOKING_URL, CONTACT_EMAIL, CTA_LABEL } from "@/lib/content/site";

export const metadata: Metadata = {
  title: {
    absolute: "Pillar & Frame | Story-led film studio. The Trust Engine.",
  },
  description:
    "You know your work. We help you say it. Real stories captured on film, turned into a year of content, put to work on LinkedIn and Google. A system, with coaching along the way.",
  alternates: { canonical: "/" },
};

const HERO_IMAGE: string | null = null; // TODO: drop in real interview/BTS still (public/uploads/...)

const PROBLEM_BLOCKS = [
  {
    number: "01",
    title: "You don't know what to say.",
    body: "You have twenty years of stories and a blank page. That's not a talent problem. Nobody hands you the topics.",
  },
  {
    number: "02",
    title: "You don't know how to say it.",
    body: "On camera you tighten up. In writing you sound like everyone else. The real version of you, the one clients trust, never makes it into the content.",
  },
  {
    number: "03",
    title: "You don't know where it goes.",
    body: "One post here, one video there, then silence for a month. Meanwhile your buyers are checking LinkedIn, reading your Google profile, and asking AI who to trust.",
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
    title: "A system, not a shoot.",
    body: "Anyone can hand you a video. We hand you a library, a plan for where it all goes, and coaching every month so it keeps moving.",
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
  {
    slug: "dg-lending",
    client: "DG Lending",
    industry: "Mortgage lending",
    line: "80+ videos, then a CRM that finally matches how loans move.",
  },
  {
    slug: "wealthstrong",
    client: "Wealthstrong",
    industry: "Wealth management",
    line: "The audit that said \"don't send yet\" and mapped what to fix first.",
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
              The deal doesn&rsquo;t go to whoever does better work. It goes to
              whoever looks safer online.
            </h1>
            <p
              className="mt-8 max-w-[700px] animate-slideUp font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl"
              style={{ animationDelay: "200ms" }}
            >
              You know your work is good. What&rsquo;s missing is the system:
              what to say, how to say it, and where it goes. We build that
              system with you, and coach you the whole way.
            </p>
            <div
              className="mt-12 flex animate-slideUp flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
              style={{ animationDelay: "300ms" }}
            >
              <CtaButton href={BOOKING_URL} variant="solidLight">
                {CTA_LABEL}
              </CtaButton>
              <CtaButton href="/work" variant="outlineLight">
                See the work
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* The real problem */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">The real problem</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-black md:text-5xl">
            Making content isn&rsquo;t hard. Making it without a system is.
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
            A system answers all three. Coaching keeps it moving.
          </p>
        </div>
      </section>

      {/* The two services */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">What we do</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-black md:text-5xl">
            Two services. One job: make you the obvious choice.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Card 1: The Trust Engine */}
            <Link href="/trust-engine" className="group block bg-paper">
              <ImagePlaceholder aspect="video" label="Filming still coming soon" />
              <div className="p-8 md:p-10">
                <h3 className="mb-4 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                  The Trust Engine
                </h3>
                <p className="mb-8 text-base leading-relaxed text-ash-700">
                  We capture your real stories on film, turn them into a system
                  of assets, and put them to work on LinkedIn and Google. Three
                  ways in: do it yourself with our software, have us film a day,
                  or go all in. Coaching built in, every month.
                </p>
                <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  See the Trust Engine
                  <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
                </span>
              </div>
            </Link>
            {/* Card 2: Systems Coaching */}
            <Link href="/systems-coaching" className="group block bg-paper">
              <ImagePlaceholder aspect="video" label="Working session still coming soon" />
              <div className="p-8 md:p-10">
                <h3 className="mb-4 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                  Systems Coaching
                </h3>
                <p className="mb-8 text-base leading-relaxed text-ash-700">
                  The other half: the follow-up. We get inside the tools you
                  already pay for (CRM, email, automations) and fix the leaks
                  with your team, so attention becomes clients.
                </p>
                <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  See Systems Coaching
                  <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
                </span>
              </div>
            </Link>
          </div>
          <p className="mx-auto mt-16 max-w-2xl text-center font-serif text-xl italic leading-relaxed text-ash-700 md:text-2xl">
            Content brings people in. Systems turn them into clients. We built a
            service for each half.
          </p>
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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {SELECTED_WORK.map((work) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
                className="group block border-t border-ash-100 pt-8"
              >
                <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-300">
                  <span>{work.industry}</span>
                </div>
                <h3 className="mb-3 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
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
            ))}
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
            Open to a strategy call?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl">
            Thirty minutes. We talk through your story, your content, and your
            systems. You get a written report within 48 hours, whether we work
            together or not.
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

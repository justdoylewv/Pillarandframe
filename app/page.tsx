import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import MediaFrame from "@/components/MediaFrame";
import HomeReel from "@/components/HomeReel";
import { BOOKING_URL } from "@/lib/content/site";
import { getCaseStudy } from "@/lib/content/caseStudies";
import { HERO_PHOTO, PHOTO_STRIP } from "@/lib/content/photos";

export const metadata: Metadata = {
  title: {
    absolute:
      "Pillar & Frame | The Foundation. In 30 days, be the one they call first.",
  },
  description:
    "One filming day. Thirty days later you have every word, photo, and video your business needs, organized by exactly where it goes, and your Google profile live. For founder-led service businesses.",
  alternates: { canonical: "/" },
};

// Placeholder capture-day photo. Swap in lib/content/photos.ts.
const HERO_IMAGE: string | null = HERO_PHOTO;

const FIT_CALL = "Book a 15-minute fit call";

const STEPS = [
  {
    n: "01",
    title: "We do our homework",
    body: "Before we film, we read your reviews and study your market, so your copy is written in the words your customers actually use. Not industry jargon.",
  },
  {
    n: "02",
    title: "You talk, once",
    body: "One kickoff call for your story. Then one capture day. We come to you, film the videos, shoot the photos. That is your whole part.",
  },
  {
    n: "03",
    title: "We build it",
    body: "Every video, photo, and word, written in your voice and organized by destination. Your Messaging Playbook lands in week one, before we roll camera.",
  },
  {
    n: "04",
    title: "We put it live",
    body: "Not a folder and a good-luck email. We load your Google profile and your social profiles ourselves, on a call where you watch it happen. Then you keep the full mapped kit.",
  },
];

const GOOGLE_DESTINATION = {
  title: "Your Google Business Profile",
  tag: "Start here",
  why: "The first thing a stranger sees, and the thing that decides who gets called first. The highest-leverage square foot you own, and it is free.",
  items: [
    "Business description, paste-ready",
    "Every service, in buyer language",
    "Categories and service area",
    "10 seeded Q&As",
    "Your photo set, ordered for upload",
    "Your first 4 posts, written",
    "A review-request message",
  ],
};

const DESTINATIONS: { title: string; why: string; items: string[] }[] = [
  {
    title: "Your website",
    why: "Three pages, written as a copy-paste document your developer can build from.",
    items: [
      "Home, with headline, proof, and services",
      "About, your full founder story",
      "Services, with objections answered",
    ],
  },
  {
    title: "Your media library",
    why: "Eight videos and thirty photos from one filming day, mapped to where each goes.",
    items: [
      "Your story, and what you do",
      "5 answers to why people hesitate",
      "One customer win",
      "30 photos. No stock.",
      "Intro, outro, and titles",
    ],
  },
  {
    title: "Your social profiles",
    why: "The vetting stop. They check here after Google and before they call.",
    items: [
      "Facebook and Instagram bios",
      "LinkedIn headline, About, featured",
      "A pinned founder story post",
      "5 launch posts",
      "Profile photo and banner, sized",
    ],
  },
  {
    title: "Your bio bank",
    why: "Write it once, use it forever. Next time someone asks for a bio, it is done.",
    items: [
      "Short, medium, and long bios",
      "Your one-liner",
      "Email signature copy",
      "Directory listing copy",
    ],
  },
];

const VALUE_STACK: { piece: string; price: string }[] = [
  { piece: "Positioning and messaging strategy", price: "$2,000" },
  { piece: "Website copy, three pages, strategic", price: "$2,500" },
  { piece: "Google Business Profile built out properly", price: "$1,000" },
  { piece: "Social profile copy, founder post, 5 launch posts", price: "$1,000" },
  { piece: "Bio bank: three lengths, one-liner, signature, directories", price: "$500" },
  { piece: "Photography, one day, 30 finished images", price: "$2,000" },
  { piece: "Eight finished videos from one filming day", price: "$6,000" },
  { piece: "Your branded intro, outro, and titles", price: "$750" },
];

const PROMISES = [
  {
    n: "1",
    title: "It will not die in your downloads.",
    body: "On handoff day we do not email you a folder and wish you luck. We get on a call and put your Google Business Profile live together. Description, services, photos, Q&As, posts. It is done before we hang up.",
  },
  {
    n: "2",
    title: "It will sound like you.",
    body: "Every word comes out of your own mouth on capture day, written back in your voice. If you read something and think “I would never say that,” we rewrite it. No charge, no argument about revision rounds.",
  },
  {
    n: "3",
    title: "If it misses, we rebuild it or refund the build.",
    body: "Show up and tell us your stories. If you look at the finished kit and you would not put your name on it, we rebuild it. If you still would not, we refund the build half, the $2,500 you pay on delivery. The capture day is the one thing we cannot refund, because the crew, the gear, and the day are already spent. You keep everything we made either way.",
  },
];

const TIMELINE = [
  {
    when: "Week 1",
    body: "Kickoff call. We do our research and build your Messaging Playbook. You see it before we film anything.",
  },
  { when: "Week 2", body: "Capture day. We come to you and film everything." },
  { when: "Weeks 3 to 4", body: "We build. Editing, writing, design, organizing." },
  {
    when: "Day 30",
    body: "Handoff. Your kit, the call where we put Google live together, and your launch-week checklist.",
  },
];

const FAQ: { question: string; answers: string[] }[] = [
  {
    question: "I am terrible on camera.",
    answers: [
      "Everybody says this. Nobody has been right yet.",
      "There is no teleprompter and no script to memorize. We sit down and talk. We ask questions, you answer them the way you would answer a customer standing in their driveway. It is a conversation, not a performance. You will say “wait, can I start over” about forty times and every one of those gets cut.",
      "If you can explain your work to a customer, you can do this.",
    ],
  },
  {
    question: "I already have a website. Do I need this?",
    answers: [
      "Then we are not starting from zero, which makes this faster. The question is not whether you have a website. It is whether the words on it are doing any work, and whether the four other places people check you out are filled in at all.",
      "Most of the time the website is the least broken thing. The Google profile is the emergency.",
    ],
  },
  {
    question: "How do I know this will not sound like AI wrote it?",
    answers: [
      "Because you said all of it. Every line traces back to something that came out of your mouth on capture day. We write it back in your words, tightened.",
      "No AI-generated copy. No stock photos. No models pretending to be your crew. That is what Real Human Origin means, and if you ever catch us breaking it, the project is free.",
    ],
  },
  {
    question: "What if I need more than three website pages?",
    answers: [
      "Then we add them, and we quote it before we start so there are no surprises. But start with three. Nobody has ever lost a job because a business had too few pages. Plenty have lost jobs because the three that matter said nothing.",
    ],
  },
  {
    question: "Why is it $5,000 when it says $7,500?",
    answers: [
      "This is early founder pricing. The first ten clients pay $5,000, and in exchange we get to document the build and use it as a case study.",
      "After those ten, it goes to $7,500. Same work either way. You are getting the early rate for being early.",
    ],
  },
  {
    question: "What happens after 30 days?",
    answers: [
      "You own everything and you owe us nothing. There is no monthly, no contract, nothing to cancel.",
      "If it works and you want help keeping it current, that is The Engine, and it is a conversation for day 30. Not today.",
    ],
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

function Tick({ gold = false }: { gold?: boolean }) {
  return (
    <span
      className={`mt-[9px] h-[5px] w-[5px] shrink-0 ${gold ? "bg-gold-500" : "bg-purple-600"}`}
      aria-hidden="true"
    />
  );
}

export default function HomePage() {
  return (
    <div className="animate-fadeIn">
      {/* 1. Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-black sm:min-h-[80vh]">
        {HERO_IMAGE && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="A capture day, shot on location"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
          </div>
        )}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 sm:py-32">
          <div className="max-w-[980px]">
            <Kicker dark className="mb-8 animate-slideUp">
              The Foundation &middot; 30 days
            </Kicker>
            <h1
              className="animate-slideUp font-serif text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl md:text-7xl"
              style={{ animationDelay: "100ms" }}
            >
              In 30 days, be the one they{" "}
              <span className="italic text-purple-400">call first</span>.
            </h1>
            <p
              className="mt-8 animate-slideUp font-serif text-2xl italic leading-snug text-paper md:text-3xl"
              style={{ animationDelay: "200ms" }}
            >
              Right now you are losing jobs in a room you are not in.
            </p>
            <div
              className="mt-8 max-w-2xl animate-slideUp space-y-5 text-lg leading-relaxed text-ash-300"
              style={{ animationDelay: "250ms" }}
            >
              <p>
                Someone gets your name. Then they Google you. In the next 48
                hours they compare you against every competitor they can find.
                Your photos. Your reviews. Your website. Your story. Then they
                decide who to call first.
              </p>
              <p>
                You are not in that room.{" "}
                <strong className="font-semibold text-paper">
                  Your Google profile is.
                </strong>
              </p>
            </div>
            <div
              className="mt-12 flex animate-slideUp flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
              style={{ animationDelay: "300ms" }}
            >
              <CtaButton href={BOOKING_URL} variant="solidLight">
                {FIT_CALL}
              </CtaButton>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                <span className="text-gold-500">$5,000 early founder pricing</span>{" "}
                &middot; first 10 clients &middot; then $7,500
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The problem */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Why it is still not fixed</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            You look smaller online than you actually are.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>And fixing it has been stuck on you for two years.</p>
            <p>
              Your web guy is waiting on copy you never send. You sit down to
              write your About page and freeze, because writing about yourself
              feels either braggy or boring. Someone referred you last month and
              you quietly cringed imagining them looking you up.
            </p>
            <p>
              You are not behind because you are bad at the work. You are behind
              because the work of saying what you do keeps landing on the busiest
              person in the building.
            </p>
          </div>
          <p className="mt-16 border-l border-purple-600 pl-8 font-serif text-2xl leading-snug text-black md:text-3xl">
            We take it off your desk. In 30 days.
          </p>
        </div>
      </section>

      {/* 3. What it is */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker dark className="mb-8">
            What it is
          </Kicker>
          <p className="font-serif text-4xl leading-tight tracking-tight text-paper md:text-5xl">
            You talk for one day. We hand you everything a customer sees{" "}
            <span className="italic text-gold-500">before they call.</span>
          </p>
          <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-ash-300">
            <p>
              One day of filming and photography, plus every word your business
              needs. Written, shot, mapped to where it belongs, and loaded into
              your Google profile, your social profiles, and your website.
            </p>
            <p>
              We work inside the look you already have. What we fix is the part
              that is actually costing you jobs, which is that every place a
              customer checks you out is either empty or says nothing.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Proof: the reel */}
      <section className="bg-black pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Kicker dark className="mb-6">
                What it looks like
              </Kicker>
              <h2 className="font-serif text-3xl tracking-tight text-paper md:text-4xl">
                Real people. Real rooms. No stock.
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

      {/* 5. The mechanism */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">What makes it different</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Every piece mapped to{" "}
            <span className="italic text-purple-600">where you need it</span>.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
            <div className="space-y-5 text-lg leading-relaxed text-ash-700">
              <p>
                Most agencies hand you a folder of files and a style guide. You
                open it, feel overwhelmed, and it dies in your downloads.
              </p>
              <p>
                Nothing here arrives loose. Every line is written for one exact
                place, at the right length for that field, on the right platform.
              </p>
              <p className="text-black">
                <strong className="font-semibold">
                  Then we put it there for you.
                </strong>{" "}
                You still keep the full kit, mapped and labeled, so anyone you
                hire later can pick it up and keep going.
              </p>
            </div>
            <div className="border border-ash-100 bg-bone p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                Your kit, mapped
              </span>
              <ul className="mt-6 divide-y divide-ash-100">
                {[
                  { where: "Google Business Profile", what: "Description, 750 characters" },
                  { where: "Google Business Profile", what: "Services, categories, 10 Q&As" },
                  { where: "LinkedIn", what: "Headline and About section" },
                  { where: "Facebook and Instagram", what: "Bio and about copy" },
                  { where: "Your website", what: "Home headline and subhead" },
                ].map((row, i) => (
                  <li key={i} className="py-3 first:pt-0 last:pb-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">
                      {row.where}
                    </span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-ash-700">
                      {row.what}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ash-100 pt-5 text-[15px] leading-relaxed text-black">
                We load every one of these. You watch it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">How it works</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Four steps. One of them is yours.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {STEPS.map((s) => (
              <div key={s.n} className="border-t border-ash-100 pt-8">
                <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                  {s.n}
                </span>
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What you get */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">What you get, by destination</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Five destinations. Every field filled in.
          </h2>
          {/* Featured: Google */}
          <div className="mt-12 border border-ash-100 border-l-[3px] border-l-gold-500 bg-bone p-8 md:p-10">
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="font-serif text-2xl tracking-tight text-black md:text-3xl">
                {GOOGLE_DESTINATION.title}
              </h3>
              <span className="border border-gold-500 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-gold-700">
                {GOOGLE_DESTINATION.tag}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ash-700">
              {GOOGLE_DESTINATION.why}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
              {GOOGLE_DESTINATION.items.map((it) => (
                <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-ash-700">
                  <Tick gold />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The other four */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {DESTINATIONS.map((d) => (
              <div key={d.title} className="border border-ash-100 p-8">
                <h3 className="font-serif text-xl tracking-tight text-black md:text-2xl">
                  {d.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ash-500">
                  {d.why}
                </p>
                <ul className="mt-5 space-y-2">
                  {d.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-ash-700">
                      <Tick />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Also included */}
          <div className="mt-16 border-t border-ash-100 pt-10">
            <Kicker className="mb-8">Also included</Kicker>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-serif text-xl tracking-tight text-black md:text-2xl">
                  Your Messaging Playbook
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ash-700">
                  The one-page source of truth. Your story, your pillars, what
                  you say and how you say it. Everything we build follows it, and
                  so can anything you make later. Yours forever.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl tracking-tight text-black md:text-2xl">
                  Your Content Map
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ash-700">
                  More comes out on capture day than we can use. You get all of
                  it written out: every topic worth talking about, sorted by where
                  it belongs. We film eight during your 30 days. The rest is your
                  runway.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photography, shown rather than described */}
        <div className="mx-auto mt-16 max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {PHOTO_STRIP.map((photo) => (
              <MediaFrame
                key={photo.src}
                image={photo.src}
                alt={photo.alt}
                aspect="portrait"
              />
            ))}
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ash-500">
            Thirty finished photos from one day. Real people, real rooms, no
            stock.
          </p>
        </div>
      </section>

      {/* 8. Selected work */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <Kicker className="mb-6">Selected work</Kicker>
              <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
                We have done this before.
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
                <Link key={work.slug} href={`/work/${work.slug}`} className="group block">
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
        </div>
      </section>

      {/* 9. Price */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker dark className="mb-6">
            Let us do the math
          </Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-paper md:text-5xl">
            What this costs in pieces.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-ash-300">
            If you hired this out one vendor at a time, at real market rates:
          </p>
          <div className="mt-8 divide-y divide-shale border-y border-shale">
            {VALUE_STACK.map((row) => (
              <div key={row.piece} className="flex items-baseline justify-between gap-6 py-3">
                <span className="text-base text-ash-300">{row.piece}</span>
                <span className="font-mono text-sm tabular-nums text-ash-500">
                  {row.price}
                </span>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-6 py-5">
              <span className="font-serif text-xl tracking-tight text-paper">Total</span>
              <span className="font-serif text-2xl tracking-tight text-gold-500">
                $15,750
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ash-300">
            That is five vendors, four months, and you are the project manager.
            Which is exactly how this got stuck on your desk the first time.
          </p>

          <div className="mt-12 border border-shale bg-ink p-10 text-center md:p-16">
            <span className="inline-block rounded-[2px] bg-gold-500 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-black">
              Early founder pricing &middot; first 10 clients
            </span>
            <p className="mt-8 font-mono text-sm uppercase tracking-[0.15em] text-ash-500 line-through">
              $7,500
            </p>
            <p className="my-3 font-serif text-7xl tracking-tight text-gold-500 md:text-8xl">
              $5,000
            </p>
            <p className="text-ash-300">
              <strong className="text-paper">
                $2,500 to book your capture day. $2,500 on delivery.
              </strong>
              <br />
              One project. One price. Yours forever.
              <br />
              No monthly commitment. Nothing to cancel.
            </p>
            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ash-500">
              This is early founder pricing. The first ten clients pay $5,000. In
              exchange, we get to document yours and use it as the case study.
              After ten, it goes to $7,500.
            </p>
            <div className="mt-10">
              <CtaButton href={BOOKING_URL} variant="solidLight">
                {FIT_CALL}
              </CtaButton>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 divide-y divide-shale border border-shale sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { v: "48 hrs", k: "The window you are absent for" },
              { v: "1 job", k: "What this has to win to pay for itself" },
              { v: "Forever", k: "How long you own it" },
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
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash-300">
            Your average job is what, ten thousand? Twenty? If looking bigger
            online wins you one job this year that you would otherwise have lost
            in that window, this paid for itself twice over.
          </p>
        </div>
      </section>

      {/* 10. Promises */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Our promise</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Three promises.
          </h2>
          <div className="mt-12 divide-y divide-ash-100 border-y border-ash-100">
            {PROMISES.map((p) => (
              <div key={p.n} className="grid grid-cols-[auto_1fr] gap-6 py-8">
                <span className="font-serif text-4xl leading-none text-purple-300">
                  {p.n}
                </span>
                <div>
                  <h3 className="mb-3 font-serif text-xl tracking-tight text-black md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ash-700">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 font-serif text-xl text-black">
            Everything we make is yours. Forever.
          </p>
        </div>
      </section>

      {/* 11. Timeline and scope */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Timeline</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Thirty days. Not six months.
          </h2>
          <div className="mt-10 divide-y divide-ash-100 border-y border-ash-100">
            {TIMELINE.map((t) => (
              <div key={t.when} className="grid grid-cols-1 gap-x-8 gap-y-2 py-5 sm:grid-cols-[9rem_1fr]">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-600">
                  {t.when}
                </span>
                <p className="text-base leading-relaxed text-ash-700">{t.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                What we need from you
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                A 10-minute intake form. One kickoff call. One capture day. One
                round of thumbs-up on the drafts.
              </p>
              <p className="mt-4 font-semibold text-black">
                That is it. That is your whole part.
              </p>
            </div>
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                What we do not do
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                No logo, no color palette, no truck wrap. We work inside the look
                you already have. We also do not build or host the website. If you
                do not have a developer, we will hand you two we trust.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ash-500">
                Keeping this focused is exactly why it lands in 30 days instead of
                six months.
              </p>
            </div>
          </div>
          <p className="mt-10 text-sm leading-relaxed text-ash-500">
            Scope is one location, one capture day, one founder on camera, and two
            rounds of revisions.
          </p>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">What people ask before they book</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Straight answers.
          </h2>
          <div className="mt-10">
            {FAQ.map((item) => (
              <div key={item.question} className="border-t border-ash-100 py-10">
                <h3 className="mb-4 font-serif text-xl tracking-tight text-black md:text-2xl">
                  {item.question}
                </h3>
                <div className="space-y-4">
                  {item.answers.map((a, i) => (
                    <p key={i} className="text-base leading-relaxed text-ash-700 md:text-lg">
                      {a}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Credibility and capacity */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">Who you are working with</Kicker>
          <p className="font-serif text-3xl leading-tight tracking-tight text-black md:text-4xl">
            We shoot these{" "}
            <span className="italic text-purple-600">ourselves.</span>
          </p>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ash-700">
            <p>
              This method is not new. It is the same process we have built for a
              regional health system, an IT services company, a wealth management
              firm, and a city economic development office. Real people, on
              camera, in their own words, organized into something their team can
              actually use.
            </p>
            <p>
              What is new is the price and the packaging. We took the parts a
              local business actually needs, cut everything else, and made it land
              in 30 days instead of six months.
            </p>
            <p>
              We also run City Spotlight Ohio, where we sit down with local
              business owners and film their stories for the sake of the story.
              You are not going to be our first interview.
            </p>
          </div>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-ash-500">
            Real Human Origin &middot; No AI &middot; No Stock &middot; Verbatim
          </p>

          <div className="mt-12 border border-ash-100 border-l-[3px] border-l-gold-500 bg-bone p-8">
            <Kicker className="mb-5">Why now, honestly</Kicker>
            <div className="space-y-4 text-base leading-relaxed text-ash-700">
              <p>
                We shoot the capture days ourselves. That caps us at{" "}
                <strong className="font-semibold text-black">three a month</strong>
                , so the calendar books out four to six weeks ahead and whoever
                books first gets the slot.
              </p>
              <p>
                You also want this live{" "}
                <strong className="font-semibold text-black">before</strong> your
                season, not during it. Film in the slow weeks. Be the obvious
                choice when the phone starts ringing.
              </p>
              <p>
                And this is early founder pricing. The{" "}
                <strong className="font-semibold text-black">
                  first ten clients pay $5,000
                </strong>
                . After that it is $7,500, because by then we will have the case
                studies to justify it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <p className="font-serif text-4xl leading-tight tracking-tight text-paper md:text-5xl">
            You talk for one day. We fill in{" "}
            <span className="italic text-gold-500">every blank.</span>
          </p>
          <p className="mx-auto mt-6 max-w-md text-lg text-ash-300">
            That is the whole deal.
          </p>
          <div className="mt-10">
            <CtaButton href={BOOKING_URL} variant="solidLight">
              {FIT_CALL}
            </CtaButton>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-ash-500">
            Fifteen minutes, and we will tell you in the first five whether this
            is right for you. If it is not, we will say so and tell you what we
            would do instead. No deck. No proposal. Just tell us what you do and
            where you are stuck.
          </p>
          <p className="mt-10">
            <Link
              href="/engine"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-300 transition-colors hover:text-paper"
            >
              Already have your foundation? See The Engine &rarr;
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

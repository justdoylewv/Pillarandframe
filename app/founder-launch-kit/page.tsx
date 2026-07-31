import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import { BOOKING_URL } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "The Founder Launch Kit",
  description:
    "One filming day. Thirty days later your Google profile, social profiles, and website copy are written, shot, and installed. Not handed over. For founder-led service businesses.",
  alternates: { canonical: "/founder-launch-kit" },
};

const FIT_CALL = "Book a 15-minute fit call";

const DELIVERED = [
  "A folder of files",
  "A style guide you will not read",
  "A document full of copy",
  "Six hours of data entry, on you",
  "Nothing live until you do the work",
  "Results depend on your free time",
];

const INSTALLED = [
  "Your Google profile, filled in and live",
  "Your services, categories, and Q&As loaded",
  "Your photos uploaded and ordered",
  "Your social bios rewritten and live",
  "Your founder story posted and pinned",
  "Nothing left on your desk",
];

const PLATFORMS: { who: string; lead: string; body: string }[] = [
  {
    who: "We install it",
    lead: "Google Business Profile.",
    body: "Description, every service, categories and service area, 10 seeded Q&As, your photo set uploaded and ordered, your first 4 posts scheduled. You add us as a manager. No password changes hands.",
  },
  {
    who: "We install it",
    lead: "Facebook and Instagram.",
    body: "Bio and about copy, profile photo and banner sized for each, your founder story post published and pinned, 5 launch posts queued. Standard business page access, revoked whenever you like.",
  },
  {
    who: "We install it",
    lead: "Directory and association listings.",
    body: "Chamber, trade associations, anywhere your business is already listed with stale copy. We update what we can reach.",
  },
  {
    who: "Together, 30 min",
    lead: "LinkedIn.",
    body: "A personal profile cannot be delegated to anyone, by design. So we hop on a screen share, you click, we read out the headline, About, and featured section. Ten minutes of it, honestly.",
  },
  {
    who: "Together, 30 min",
    lead: "Your email signature and anywhere else you log in.",
    body: "Same call. We work down the list until it is empty.",
  },
  {
    who: "Your developer",
    lead: "Your website.",
    body: "We write it as a build-ready document and hand it straight to whoever builds your site. If you do not have someone, we will give you two we trust with their pricing and turnaround. This is the one piece we do not push live ourselves, and it is why this lands in 30 days instead of six months.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "We do our homework",
    body: "Before we film, we read your reviews and study your market, so your copy is written in the words your actual customers use. Not industry jargon. Your Messaging Playbook lands in week one, before we ever roll camera.",
  },
  {
    n: "02",
    title: "You talk, once",
    body: "One kickoff call to get your story and what you want to be known for. Then one capture day. We come to you, film the videos, shoot the photos. That is your whole part.",
  },
  {
    n: "03",
    title: "We build it",
    body: "Every video, photo, and word. Written in your voice, organized by destination, and checked against the Playbook before anything goes near your profiles.",
  },
  {
    n: "04",
    title: "We install it",
    body: "Install day. We log in and load every profile ourselves, then walk the last few with you on one 30-minute call. You get before and after screenshots of every platform so you can see exactly what changed.",
  },
];

const DESTINATIONS: {
  title: string;
  tag: string;
  primary?: boolean;
  muted?: boolean;
  why: string;
  items: { lead: string; rest: string }[];
}[] = [
  {
    title: "Your Google Business Profile",
    tag: "We install this",
    primary: true,
    why: "The first thing a stranger sees, and the thing that decides who gets called first. Most owners in your trade have never filled it out properly. This is the single highest-leverage square foot of real estate you own, and it is free.",
    items: [
      { lead: "Optimized business description", rest: ", written and loaded." },
      { lead: "Every service written out", rest: " in buyer language, not industry language, and entered." },
      { lead: "Categories and service area", rest: " set so you show up in the right searches." },
      { lead: "10 seeded Q&As", rest: " published. The real questions buyers ask, answered in your words." },
      { lead: "Your photo set", rest: " uploaded and ordered." },
      { lead: "Your first 4 profile posts", rest: " written and scheduled." },
      { lead: "A review-request message", rest: " you can send to any happy client." },
    ],
  },
  {
    title: "Your Website",
    tag: "Build-ready for your dev",
    muted: true,
    why: "Three pages. The only three that matter to start. Written as a copy-paste document your developer can build from immediately, with photo placements marked.",
    items: [
      { lead: "Home.", rest: " Headline, subhead, proof section, three service blurbs, story section, closing call to action." },
      { lead: "About.", rest: " Your full founder story, written properly. Credentials, values, why you do this." },
      { lead: "Services.", rest: " Each service in buyer language, with the objections answered and a clear next step." },
    ],
  },
  {
    title: "Your Media Library",
    tag: "",
    why: "Eight videos and thirty photos, all from one filming day. Deployed where they go, and yours to use anywhere else forever.",
    items: [
      { lead: "Your story.", rest: " Who you are and why people trust you." },
      { lead: "What you do.", rest: " Your service explained properly." },
      { lead: "5 answers to the reasons people hesitate.", rest: " The objections killed before they are spoken." },
      { lead: "One customer win.", rest: " Proof you deliver." },
      { lead: "30 professional photos.", rest: " Headshots in multiple looks, real working shots, your space, your team. No stock." },
      { lead: "Intro, outro, and title graphics", rest: " built in your existing colors, so every video looks like it belongs to you." },
    ],
  },
  {
    title: "Your Social Profiles",
    tag: "We install this",
    why: "The vetting stop. They check here after Google and before they call.",
    items: [
      { lead: "Facebook and Instagram:", rest: " bio and about copy, written and live." },
      { lead: "LinkedIn:", rest: " headline, About section, featured section, banner." },
      { lead: "Your pinned founder story post", rest: ", published and pinned to the top." },
      { lead: "5 launch posts", rest: " queued so the feed is not a ghost town when they land on it." },
      { lead: "Profile photo and banner", rest: ", sized and uploaded for each platform." },
    ],
  },
  {
    title: "Your Bio Bank",
    tag: "",
    why: "Write it once, use it forever. Every time someone asks you for a bio, it is already done.",
    items: [
      { lead: "Short bio (50 words), medium (100), long (250).", rest: "" },
      { lead: "Your one-liner.", rest: " What you say when someone asks what you do." },
      { lead: "Email signature copy", rest: ", installed." },
      { lead: "Directory and association listing copy", rest: ", updated where we can reach it." },
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
  { piece: "Someone to actually load all of it into every platform", price: "$750" },
];

const BONUSES: { value: string; title: string; body: string }[] = [
  {
    value: "Value $2,000",
    title: "Your Messaging Playbook",
    body: "The one-page source of truth. Your story, your pillars, what you say and how you say it. Everything we build follows it, and everything you or anyone else makes later can too. Yours forever, whether you ever work with us again or not.",
  },
  {
    value: "Value $500",
    title: "10 seeded Google Q&As",
    body: "The real questions buyers ask before they call, answered in your words and published on your profile. Go look at your three closest competitors. Most of them have zero.",
  },
  {
    value: "Value $500",
    title: "Your review engine",
    body: "A review-request message you can send to any happy client, plus four profile posts scheduled to keep Google seeing activity on your listing after we are done.",
  },
  {
    value: "Value $750",
    title: "Your before and after file",
    body: "Screenshots of every platform the day we started and the day we finished, side by side. Partly so you can see exactly what you paid for. Mostly because it is a good thing to show people.",
  },
];

const PROMISES = [
  {
    n: "1",
    title: "It goes live, or you do not pay for it.",
    body: "Not a folder. Not a walkthrough video. We log in and load your Google profile, your Facebook and Instagram, your pinned post and your launch posts ourselves, and we sit with you for the two that need your own login. If every one of those is not live within 45 days of your capture day, you do not pay the second half. The only thing outside this promise is your website build, because that is your developer's timeline and not ours.",
  },
  {
    n: "2",
    title: "It will sound like you.",
    body: "Every word comes out of your own mouth on capture day, written back in your voice. If you read something and think “I would never say that,” we rewrite it. No charge, no argument about revision rounds, no limit on that specific promise. And nothing goes live on any profile until you have signed off on it.",
  },
  {
    n: "3",
    title: "If you would rather not have it, do not pay for it.",
    body: "Show up and tell us your stories. If you look at the finished kit and you would not put your name on it, we rebuild it. If you still would not, keep everything and we refund you. We would rather eat a project than have our work sitting on a business that is not proud of it.",
  },
];

const TIMELINE: { when: string; body: string }[] = [
  {
    when: "Week 1",
    body: "Kickoff call. We do our research and build your Messaging Playbook. You see it this week, before we film anything. We also take the before screenshots.",
  },
  { when: "Week 2", body: "Capture day. We come to you and film everything." },
  {
    when: "Weeks 3 to 4",
    body: "We build. Editing, writing, design, organizing. You approve the drafts.",
  },
  {
    when: "Day 30",
    body: "Install day. We load every profile, run the 30-minute call for the ones needing your login, and send your before and after file.",
  },
];

const FLK_FAQ: { question: string; answers: string[] }[] = [
  {
    question: "So I have to give you my passwords?",
    answers: [
      "Almost never. Google, Facebook and Instagram all have a built-in way to add someone as a manager without sharing a password, and you can remove us with two clicks the second we are done. That covers most of it.",
      "LinkedIn personal profiles have no way to do that, so that one we do on a screen share where you stay logged in and click while we read it out. Same with anything else that has no manager option. It is one 30-minute call and it is the only part of install that needs you in the room.",
      "We will never ask you to email us a password.",
    ],
  },
  {
    question: "I am terrible on camera.",
    answers: [
      "Everybody says this. Nobody has been right yet.",
      "There is no teleprompter and no script to memorize. We sit down and talk. We ask questions, you answer them the way you would answer a customer standing in their driveway. It is a conversation, not a performance. You will say “wait, can I start over” about forty times and every one of those gets cut.",
      "Our job is to make you look like the version of you that shows up on a good day. If you can explain your work to a customer, you can do this.",
    ],
  },
  {
    question: "What if I hate something after it is already live?",
    answers: [
      "Nothing goes live until you have seen it and said yes. Install happens after approval, not before.",
      "And if you change your mind two weeks later, tell us and we will change it. It is your business.",
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
      "Because you said all of it. Every line in your kit traces back to something that came out of your mouth on capture day. We write it back in your words, tightened.",
      "No AI-generated copy. No stock photos. No models pretending to be your crew. That is what the Real Human Origin stamp means, and if you ever catch us breaking it, the project is free.",
    ],
  },
  {
    question: "What happens after 30 days?",
    answers: [
      "You own everything and you owe us nothing. There is no monthly, no contract, nothing to cancel.",
      "If it works and you want help keeping it current, that is a conversation for day 30. That is the Trust Engine. Not today.",
    ],
  },
];

function Tick({ color = "gold" }: { color?: "gold" | "purple" | "subtle" }) {
  const bg =
    color === "purple" ? "bg-purple-600" : color === "subtle" ? "bg-ash-300" : "bg-gold-500";
  return <span className={`mt-2 h-[6px] w-[6px] shrink-0 ${bg}`} aria-hidden="true" />;
}

export default function FounderLaunchKitPage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">
            The Founder Launch Kit &middot; 30 days &middot; Installed
          </Kicker>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-black sm:text-6xl md:text-7xl">
            In 30 days, be the one they{" "}
            <span className="italic text-purple-600">call first</span>.
          </h1>
          <p className="mt-8 font-serif text-2xl italic leading-snug text-black md:text-3xl">
            Right now you are losing jobs in a room you are not in.
          </p>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ash-700">
            <p>
              Someone gets your name. Then they Google you. In the next 48 hours
              they compare you against every competitor they can find. Your
              photos. Your reviews. Your website. Your story. Then they decide
              who to call first.
            </p>
            <p>
              You are not in that room.{" "}
              <strong className="font-semibold text-black">
                Your Google profile is.
              </strong>
            </p>
            <p className="text-black">
              So we do not hand you a folder and wish you luck. We film you for
              one day, write every word your business needs, and then we log in
              and install all of it ourselves.
            </p>
          </div>
          <div className="mt-12">
            <CtaButton href={BOOKING_URL}>{FIT_CALL}</CtaButton>
          </div>
        </div>
      </section>

      {/* The stuck */}
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
            We take it off your desk. All of it. In 30 days.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker dark className="mb-8">
            What it is
          </Kicker>
          <p className="font-serif text-4xl leading-tight tracking-tight text-paper md:text-5xl">
            You talk for one day. We{" "}
            <span className="italic text-gold-500">install</span> the rest.
          </p>
          <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-ash-300">
            <p>
              One day of filming and photography, plus every word your business
              needs. Written, shot, and then loaded into your Google profile,
              your social profiles, and your website copy. Live. Not in a folder.
            </p>
            <p>
              To be clear about what this is:{" "}
              <strong className="font-semibold text-paper">
                this is words, photos, and video. Not a logo.
              </strong>{" "}
              If you have a look you like, we build inside it. If you do not, that
              is a different job and we will tell you who to call for it. What we
              fix is the part that is actually costing you jobs, which is that
              every place a customer checks you out is either empty or says
              nothing.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">What makes it different</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Everyone hands you a folder.{" "}
            <span className="italic text-purple-600">We log in.</span>
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              Here is what happens with every agency you have ever hired. They do
              good work. They deliver a folder of files and a style guide. You
              open it on a Tuesday, realize it is six hours of copying and pasting
              into eight different websites, close the laptop, and mean to get to
              it.
            </p>
            <p className="text-black">
              <strong className="font-semibold">
                You never get to it. Nobody does. That is not a character flaw, it
                is just what happens to the busiest person in the building.
              </strong>
            </p>
            <p>
              So the folder sits in your downloads next to the last thing you
              bought, nothing changes online, and eventually you decide marketing
              does not work for a business like yours.
            </p>
          </div>

          {/* Delivered vs Installed */}
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-ash-100 bg-ash-100 md:grid-cols-2">
            <div className="bg-bone p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                What you have bought before
              </span>
              <h3 className="mt-3 font-serif text-2xl tracking-tight text-ash-500">
                Delivered
              </h3>
              <ul className="mt-6 space-y-3">
                {DELIVERED.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-ash-500">
                    <Tick color="subtle" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                What this is
              </span>
              <h3 className="mt-3 font-serif text-2xl tracking-tight text-black">
                Installed
              </h3>
              <ul className="mt-6 space-y-3">
                {INSTALLED.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-ash-700">
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash-700">
            The kit is still organized by destination, and you still keep it
            forever. That is how we can install it in an afternoon, and it is how
            anyone you hire later can keep it going. But you are not the one doing
            the pasting. We are.
          </p>
        </div>
      </section>

      {/* What installed means */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">What installed actually means</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Who does what, plainly.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ash-700">
            Most of this we can do without ever touching your passwords. Google,
            Facebook and Instagram all let you add us as a manager, and you can
            remove us with two clicks whenever you want. A couple of places have
            no way to delegate access, so for those we get on one screen share and
            you click while we read it out. Thirty minutes, and then it is done
            too.
          </p>
          <div className="mt-12 divide-y divide-ash-100 border-y border-ash-100">
            {PLATFORMS.map((p) => (
              <div
                key={p.lead}
                className="grid grid-cols-1 gap-x-8 gap-y-2 py-6 sm:grid-cols-[12rem_1fr]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-600">
                  {p.who}
                </span>
                <p className="text-base leading-relaxed text-ash-700">
                  <strong className="font-semibold text-black">{p.lead}</strong>{" "}
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl border-l border-gold-500 pl-8 text-lg leading-relaxed text-ash-700">
            At the end of install day, you open your phone, Google your own
            business, and it looks like the company you actually run. You did not
            do anything. That is the whole point.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-paper py-24 sm:py-32">
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

      {/* What you get, by destination */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">What you get, by destination</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Five destinations. Every field filled in.
          </h2>
          <div className="mt-14 space-y-12">
            {DESTINATIONS.map((d) => (
              <div
                key={d.title}
                className={`border-l-2 pl-6 md:pl-8 ${
                  d.primary ? "border-gold-500" : "border-purple-600"
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-serif text-2xl tracking-tight text-black md:text-3xl">
                    {d.title}
                  </h3>
                  {d.tag && (
                    <span
                      className={`border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] ${
                        d.muted
                          ? "border-ash-100 text-ash-500"
                          : "border-gold-500 text-gold-700"
                      }`}
                    >
                      {d.tag}
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ash-700">
                  {d.why}
                </p>
                <ul className="mt-6 divide-y divide-ash-100 border-t border-ash-100">
                  {d.items.map((it) => (
                    <li key={it.lead} className="flex gap-3 py-3 text-base leading-relaxed text-ash-700">
                      <Tick color={d.primary ? "gold" : "purple"} />
                      <span>
                        <strong className="font-semibold text-black">{it.lead}</strong>
                        {it.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value stack */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Let us do the math</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            What this costs in pieces.
          </h2>
          <p className="mt-6 text-lg text-ash-700">
            If you hired this out one vendor at a time, at real market rates:
          </p>
          <div className="mt-10 divide-y divide-ash-100 border-y border-ash-100">
            {VALUE_STACK.map((row) => (
              <div key={row.piece} className="flex items-baseline justify-between gap-6 py-4">
                <span className="text-base text-ash-700">{row.piece}</span>
                <span className="font-mono text-sm tabular-nums text-ash-500">
                  {row.price}
                </span>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-6 py-5">
              <span className="font-serif text-xl tracking-tight text-black">Total</span>
              <span className="font-serif text-2xl tracking-tight text-purple-600">
                $16,500
              </span>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash-700">
            That is six vendors, four months, and you are the project manager.
            Which is exactly how this got stuck on your desk the first time. And
            the last line is the one nobody sells you, which is why the other
            eight end up unused.
          </p>
        </div>
      </section>

      {/* Price */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <div className="border border-shale bg-ink p-10 text-center md:p-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
              One vendor. One day of your time. Thirty days. Installed.
            </span>
            <p className="mt-6 font-mono text-sm uppercase tracking-[0.15em] text-ash-500 line-through">
              $7,500
            </p>
            <p className="my-3 font-serif text-7xl tracking-tight text-gold-500 md:text-8xl">
              $5,000
            </p>
            <p className="text-ash-300">
              <strong className="text-paper">
                $2,500 to book your capture day. $2,500 on install day.
              </strong>
              <br />
              One project. One price. Yours forever.
              <br />
              No monthly commitment. Nothing to cancel.
            </p>
            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ash-500">
              $5,000 is the founding-client rate for the first ten Launch Kits. In
              exchange, we get to document yours and use it as the case study.
              After ten, it goes to $7,500.
            </p>
            <div className="mt-10">
              <CtaButton href={BOOKING_URL} variant="solidLight">
                {FIT_CALL}
              </CtaButton>
            </div>
          </div>

          <div className="mt-16">
            <Kicker dark className="mb-4">
              Do the math on your end
            </Kicker>
            <h3 className="font-serif text-3xl tracking-tight text-paper md:text-4xl">
              One recovered job pays for it. Everything after that is margin.
            </h3>
            <div className="mt-8 grid grid-cols-1 divide-y divide-shale border border-shale sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[
                { v: "48 hrs", k: "The window you are absent for" },
                { v: "1 job", k: "What this has to win to pay for itself" },
                { v: "0 hrs", k: "Of data entry, on you" },
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
              Your average job is what, twenty thousand? Forty? If looking bigger
              online wins you one job this year that you would otherwise have lost
              in that window, this paid for itself several times over. If it wins
              you two, we should talk about what else we can do.
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Included for founding clients</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Five things we are throwing in.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {BONUSES.map((b) => (
              <div key={b.title} className="border border-ash-100 bg-bone p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">
                  {b.value}
                </span>
                <h3 className="mb-3 mt-3 font-serif text-xl tracking-tight text-black md:text-2xl">
                  {b.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">{b.body}</p>
              </div>
            ))}
          </div>

          {/* Content Map */}
          <div className="mt-6 border border-ash-100 border-l-2 border-l-gold-500 bg-bone p-8 md:p-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-700">
              Value $1,000 &middot; And one more thing
            </span>
            <h3 className="mb-4 mt-3 font-serif text-2xl tracking-tight text-black md:text-3xl">
              Your Content Map
            </h3>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-ash-700">
              <p>
                When we sit down on capture day, more comes out than we can use.
                Stories, opinions, the questions you answer over and over, the
                things you wish every customer understood before they called. We
                do not waste it.
              </p>
              <p>
                You get all of it written out as a map. Every topic worth talking
                about, sorted by what belongs on your website, what belongs on
                Google, what belongs in a post, and what deserves its own video.
                In the order we would do them.
              </p>
              <p className="text-black">
                <strong className="font-semibold">
                  We film eight of them during your 30 days. The rest is your
                  runway.
                </strong>{" "}
                Hand it to anyone. Do them yourself on your phone. Or leave it in a
                drawer. It is yours either way, and you will never again sit down
                wondering what to say.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three promises */}
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

      {/* Timeline */}
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
                round of thumbs-up on the drafts. Manager access to Google and
                your business pages. One 30-minute install call.
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
                you already have.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ash-700">
                We also do not build or host the website. If you do not have a
                developer, we will hand you two we trust, with what they charge and
                how fast they work. Both can build from our document without asking
                you a single question.
              </p>
            </div>
          </div>
          <p className="mt-10 text-sm leading-relaxed text-ash-500">
            Scope is one location, one capture day, one founder on camera, and two
            rounds of revisions. Clean and finished, on time.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">What people ask before they book</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Straight answers.
          </h2>
          <div className="mt-10">
            {FLK_FAQ.map((item) => (
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

      {/* Credibility */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">Who you are working with</Kicker>
          <p className="font-serif text-3xl leading-tight tracking-tight text-black md:text-4xl">
            We shoot these{" "}
            <span className="italic text-purple-600">ourselves.</span>
          </p>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-ash-700">
            <p>
              This method is not new. It is the same process we have built for a
              regional health system, an IT services company, a wealth management
              firm, and a city economic development office. Real people, on
              camera, in their own words, organized into something their team can
              actually use.
            </p>
            <p>
              What is new is the price, the packaging, and the fact that we install
              it instead of handing it over. We took the parts a local business
              actually needs, cut everything else, and made it land in 30 days
              instead of six months.
            </p>
            <p>
              We also run City Spotlight Ohio, where we sit down with local
              business owners and film their stories for the sake of the story.
              That is most of what we do all week. You are not going to be our
              first interview.
            </p>
          </div>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-ash-500">
            Real Human Origin &middot; No AI &middot; No Stock &middot; Verbatim
          </p>
        </div>
      </section>

      {/* Urgency */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <div className="border border-ash-100 border-l-[3px] border-l-gold-500 bg-paper p-8 md:p-10">
            <Kicker className="mb-5">Why now, honestly</Kicker>
            <div className="space-y-5 text-lg leading-relaxed text-ash-700">
              <p>
                We shoot the capture days ourselves. That caps us at{" "}
                <strong className="font-semibold text-black">three a month</strong>,
                so the calendar books out four to six weeks ahead and whoever books
                first gets the slot.
              </p>
              <p>
                The other reason: you want this live{" "}
                <strong className="font-semibold text-black">before</strong> your
                season, not during it. Film in the slow weeks. Be the obvious
                choice when the phone starts ringing.
              </p>
              <p>
                And the founding rate holds for the first ten Launch Kits. After
                that it is $7,500, because by then we will have the case studies to
                justify it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <p className="font-serif text-4xl leading-tight tracking-tight text-paper md:text-5xl">
            You talk for one day. We{" "}
            <span className="italic text-gold-500">install</span> the rest.
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
            Fifteen minutes, and we will tell you in the first five whether this is
            right for you. If it is not, we will say so and tell you what we would
            do instead. No deck. No proposal. Just tell us what you do and where
            you are stuck.
          </p>
          <p className="mt-10">
            <Link
              href="/trust-engine"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-300 transition-colors hover:text-paper"
            >
              Already launched? See the Trust Engine retainer &rarr;
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

import type { FaqItem } from "./types";

// The Trust Engine offer. Transcribed from the offer sheet, one-pager, and
// discovery doc. Done-for-you monthly content service: we film you once a
// month and turn it into a month of content in your voice.

// How it works, in four steps.
export const HOW_IT_WORKS: { num: string; title: string; body: string }[] = [
  {
    num: "1",
    title: "You talk.",
    body: "We plan your topics on a short call, then film you. That is your part, and we guide you the whole way.",
  },
  {
    num: "2",
    title: "We build.",
    body: "One filming session becomes a full month of content. Videos, captions, written posts, and quote graphics, all in your voice.",
  },
  {
    num: "3",
    title: "You approve.",
    body: "Everything lands in one place. Give it a thumbs up. Done.",
  },
  {
    num: "4",
    title: "It goes live.",
    body: "Post it yourself, or let us post it for you. Your call.",
  },
];

// The kickoff launch kit that fills your library. The same kit for every
// client; only the stories change.
export const LAUNCH_KIT: { label: string; body: string }[] = [
  {
    label: "A messaging playbook",
    body: "Your brand story map: what to say, how to say it, your content pillars. Every video topic planned before we film.",
  },
  {
    label: "Your story, on film",
    body: "Who you are and why people should trust you.",
  },
  {
    label: "A customer win",
    body: "One real success story. Proof that you deliver.",
  },
  {
    label: "What you do, in depth",
    body: "Your service explained in a longer film, cut into clips all year.",
  },
  {
    label: "Five objections, answered",
    body: "The five reasons people hesitate to buy, handled on camera before they even call.",
  },
  {
    label: "30 professional images",
    body: "Portraits and real, in-action working shots.",
  },
  {
    label: "A free lead-magnet guide",
    body: "A simple giveaway that turns viewers into leads.",
  },
  {
    label: "Five branded graphics",
    body: "On-brand images for your feed: quotes, proof, key numbers, with templates.",
  },
  {
    label: "A distribution guide",
    body: "Where everything goes. What to pin, what to put on your website.",
  },
  {
    label: "Your branded look",
    body: "A branded intro, outro, and name-and-title motion. Built once, on everything after.",
  },
];

// What lands every month, same set every time.
export const MONTHLY_DELIVERABLES: {
  count: string;
  label: string;
  body: string;
}[] = [
  {
    count: "8",
    label: "Short videos",
    body: "Ready to post, captioned and branded.",
  },
  {
    count: "8",
    label: "Written posts",
    body: "In your voice, ready to post.",
  },
  {
    count: "4",
    label: "Image graphics",
    body: "On-brand for your feed, styles rotating quarterly.",
  },
  {
    count: "All",
    label: "Captions and quotes",
    body: "Captions for every video, plus quote graphics from your best lines.",
  },
  {
    count: "1",
    label: "Long-form piece",
    body: "A guide, an article, or a customer story.",
  },
];

// How we film you across the year.
export const CADENCE: { when: string; body: string }[] = [
  {
    when: "To start",
    body: "One bigger kickoff shoot that builds your whole launch kit. Content that lasts all year.",
  },
  {
    when: "Every quarter",
    body: "We come to you in person to film. Better footage, deeper stories, real face time.",
  },
  {
    when: "Every month",
    body: "A short online filming session between visits, so your content stays fresh.",
  },
  {
    when: "Optional",
    body: "Film from your phone. We send a few questions, you film short clips whenever it suits you.",
  },
];

// Pricing: two headline offers, an optional posting add-on, and on-ramps.
export interface Offer {
  name: string;
  badge?: string;
  price: string;
  period: string;
  setup?: string;
  note?: string;
  includes: string[];
}

export const FULL_ENGINE: Offer = {
  name: "The full engine",
  badge: "Most popular",
  price: "$2,500",
  period: "/month",
  setup: "+ $5,000 to build your launch kit up front",
  note: "3-month minimum. Start it all up front and the kit drops to $5,000.",
  includes: [
    "Your content plan and launch kit to start",
    "Your branded look on every video",
    "We come to you once a quarter to film",
    "A quick monthly filming session in between",
    "A planning and coaching call every month",
    "A full month of content, every month, in your voice",
  ],
};

export const LAUNCH_KIT_OFFER: Offer = {
  name: "Just the launch kit",
  price: "$7,500",
  period: "one-time",
  note: "The whole kit, built once, yours to keep. No monthly plan. You run it yourself.",
  includes: [
    "Your content plan to keep",
    "The complete launch kit",
    "Your story, a customer win, your service explained, five answers to doubts",
    "A free guide, five graphics, a how-to guide",
    "Your branded look for every video",
  ],
};

export const POST_FOR_YOU = {
  price: "+$750",
  period: "/mo",
  body: "Don't want to post it yourself? We post everything from your accounts and reply to your comments on LinkedIn and Google, so you stay active without lifting a finger.",
};

export const A_LA_CARTE: { what: string; price: string; goodIf: string }[] = [
  {
    what: "A content plan",
    price: "$1,500",
    goodIf: "You want the plan, not the filming. One call, and you walk away with a clear plan for your content.",
  },
  {
    what: "A monthly coach",
    price: "$750/mo",
    goodIf: "You film and post yourself, but want an expert to plan, review, and guide you each month.",
  },
  {
    what: "Your branded look",
    price: "$2,000",
    goodIf: "A branded intro, outro, and matching graphics so your videos look like a show. Yours to keep.",
  },
  {
    what: "Just the guides",
    price: "from $500",
    goodIf: "The plan and how-to guides, built for you to run with.",
  },
];

export const PRICING_NOTE =
  "Prices are a starting point and get confirmed before you sign. Not ready for all of it? Start with one piece and grow into the full engine. Whatever you buy now counts toward it.";

export const TRUST_ENGINE_FAQ: FaqItem[] = [
  {
    question: "How much of my time does this take?",
    answer:
      "Almost none. A short planning call and one filming session a month. We come to you in person every quarter and hop on a quick video call in between. You show up as yourself. We handle everything after.",
  },
  {
    question: "I freeze on camera. Will this work?",
    answer:
      "Yes. We ask the questions and pull the story out of you. Real questions, real answers, no scripts to memorize. Most people are nervous before. The footage never shows it.",
  },
  {
    question: "We tried posting. Nothing happened.",
    answer:
      "One-off posting isn't a system. This is a full month of content, planned around one clear story, delivered on time every month. Consistency is the strategy.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "A studio team: producers, editors, and coaches, with senior review on everything before it ships. You get a service that runs, not a freelancer who disappears.",
  },
  {
    question: "Can I start smaller, or get more?",
    answer:
      "Start with the full engine, or start with one piece: a content plan, your branded look, or a monthly coach. Whatever you buy now counts toward the full engine. Want more each month? Move up a plan.",
  },
  {
    question: "Is there a contract?",
    answer:
      "A three-month minimum, because trust takes a little time to build. After that you can leave anytime, and everything we make is yours to keep, forever.",
  },
  {
    question: "Is it really all filmed? No AI, no stock?",
    answer:
      "Real human origin. No AI-generated content, no stock footage. If it didn't happen, it doesn't go in the work.",
  },
];

// Systems Coaching.

// [PRICE PLACEHOLDER] Set these when the coaching prices are final; the
// price line stays hidden while null.
export const AUDIT_PRICE: string | null = null; // e.g. "$XXX, one time"
export const COACHING_PRICE: string | null = null; // e.g. "$XXX/mo"

export const LEAKS: string[] = [
  "Appointment reminder workflows, fully built, saved as drafts. Never published. Never fired once.",
  "Seven phone numbers. Four of them forwarding to nowhere.",
  "Thousands of contacts, half of them untagged. Nobody can send the right message to the right people.",
  "A big email blast, ready to go, on a sending domain that was never verified. One click from landing the whole list in spam.",
];

export const WHAT_GETS_FIXED: { title: string; body: string }[] = [
  {
    title: "Pipelines",
    body: "that match how your clients actually move, not how the software wishes they did.",
  },
  {
    title: "Follow-up and nurture",
    body: "that pause and restart themselves. A returning client never gets the wrong email at the wrong time.",
  },
  {
    title: "Review requests",
    body: "that go out on time and build your Google profile while you sleep.",
  },
  {
    title: "Email deliverability",
    body: "so the messages you send actually arrive.",
  },
  {
    title: "Calendars and call routing",
    body: "so every number rings somewhere and every booking lands.",
  },
  {
    title: "Tags and data hygiene",
    body: "so \"send this to past clients\" takes one minute, not one week.",
  },
];

export const SYSTEMS_COACHING_FAQ: FaqItem[] = [
  {
    question: "Which tools do you work in?",
    answer:
      "GoHighLevel is home turf. We also work across the usual stack around it: Zapier, email platforms, calendars, phone systems. If you own it, we can probably coach it.",
  },
  {
    question: "Do we need GoHighLevel?",
    answer:
      "No. The method is the same: audit, priorities, build together. The tool is just where we do it.",
  },
  {
    question: "Can you just do it for us?",
    answer:
      "For urgent, high-risk fixes, yes. Long term, coaching wins. Your team keeps the knowledge, and you stop paying rent on your own systems.",
  },
  {
    question: "How long does this run?",
    answer:
      "The audit takes about a week. Coaching runs month to month. Most teams keep a rhythm until the roadmap is done, then call us when something new comes up.",
  },
  {
    question: "What if we already have a marketing agency?",
    answer:
      "Keep them. This is the plumbing their campaigns drain into. Agencies love us, because their leads stop leaking.",
  },
];

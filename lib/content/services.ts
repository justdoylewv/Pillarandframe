import type { FaqItem } from "./types";

// The Engine: the monthly retainer that runs after the Founder Launch
// Kit sets the foundations. We film you once a month and turn it into a month
// of content in your voice.

// How it works, in four steps (the monthly loop).
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

// The filming rhythm across the year.
export const CADENCE: { when: string; body: string }[] = [
  {
    when: "Every quarter",
    body: "We come to you in person to film. Better footage, deeper stories, real face time.",
  },
  {
    when: "Every month",
    body: "A short online filming session between visits, so your content stays fresh.",
  },
  {
    when: "Every month",
    body: "A planning and coaching call: review what ran, plan what is next, unstick whatever is stuck.",
  },
  {
    when: "Optional",
    body: "Film from your phone. We send a few questions, you film short clips whenever it suits you.",
  },
];

export interface Offer {
  name: string;
  badge?: string;
  price: string;
  period: string;
  setup?: string;
  note?: string;
  includes: string[];
}

export const RETAINER: Offer = {
  name: "The Engine",
  badge: "The retainer",
  price: "$2,500",
  period: "/month",
  note: "Three-month minimum. After that you are month to month. Leave anytime, and everything we make is yours to keep.",
  includes: [
    "A full month of content, every month, in your voice",
    "We come to you once a quarter to film",
    "A quick monthly filming session in between",
    "A planning and coaching call every month",
    "Captions, quote graphics, and a long-form piece",
    "Your voice profile, kept current",
  ],
};

export const POST_FOR_YOU = {
  price: "+$750",
  period: "/mo",
  body: "Don't want to post it yourself? We post everything from your accounts and reply to your comments on LinkedIn and Google, so you stay active without lifting a finger.",
};

export const TRUST_ENGINE_FAQ: FaqItem[] = [
  {
    question: "Do I need The Foundation first?",
    answer:
      "Usually, yes. The Foundation is your starting point: your story, your Content Marketing Guide, your branded look, your profiles installed. The Engine keeps it running every month. If your foundations are already solid, we can start the retainer directly.",
  },
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
    question: "Is there a contract?",
    answer:
      "A three-month minimum, because trust takes a little time to build. After that you are month to month, and everything we make is yours to keep, forever.",
  },
  {
    question: "Why not just run ads?",
    answer:
      "Ads amplify a working system. They can't replace one. Organic first, then retargeting the people already watching. You own the asset either way.",
  },
];

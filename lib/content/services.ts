import type { FaqItem, Tier, TierDetail } from "./types";

// The Trust Engine tier table, transcribed from CONTENT.md.

export const TIERS: Tier[] = [
  {
    number: "1",
    name: "DIY",
    subtitle: "Software · you film",
    bestFor: "Doers on a budget",
    filming: "Your phone (guided)",
    longFilms: "Your own",
    shortVideos: "Your own",
    foundations: "Yes",
    distributionGuide: "Yes",
    monthlyCoaching: "Yes",
    delivery: "Software, studio review",
    investment: "$149/mo",
    mostPopular: false,
  },
  {
    number: "2",
    name: "Onsite",
    subtitle: "We film · one day",
    bestFor: "A clean, simple start",
    filming: "1 onsite day",
    longFilms: "3",
    shortVideos: "12 objection-busters",
    foundations: "Yes",
    distributionGuide: "Yes",
    monthlyCoaching: "Yes",
    delivery: "Done for you",
    investment: "$6,000",
    mostPopular: true,
  },
  {
    number: "3",
    name: "Full",
    subtitle: "We film · 1-2 days",
    bestFor: "All in on content",
    filming: "1-2 onsite days",
    longFilms: "5",
    shortVideos: "52",
    foundations: "Yes",
    distributionGuide: "Yes",
    monthlyCoaching: "Yes",
    delivery: "Done for you",
    investment: "$12,000",
    mostPopular: false,
  },
];

export const TIER_TABLE_NOTE =
  "If you're not sure, start with Onsite. It's the sweet spot: we do the filming, you get real assets, without a full production. Prices are starting points. Filming is $2,500 a day, edits are $350 a long film and $100 a short, so any tier scopes up or down cleanly.";

export const TIER_DETAILS: TierDetail[] = [
  {
    number: "1",
    heading: "DIY · Service as a software · $149/mo",
    paragraphs: [
      "Our software builds your brand from your story, then coaches you to film your own content on your phone.",
      "The system runs the backend. It drafts your positioning, your assets, and your distribution plan: organic first, then retargeting the people already watching.",
      "Nothing ships without our studio's review. You get the system and the review, not the crew.",
    ],
  },
  {
    number: "2",
    heading: "Onsite · Simple, clean, the one most people pick · $6,000",
    paragraphs: [
      "We come to you for a day. Simple, well-made videos.",
      "Three long films and twelve short objection-busters: the answers to the questions that stop people from buying.",
      "Plus the full foundations. A real start without a big production, at the price that makes the most sense for most businesses.",
    ],
  },
  {
    number: "3",
    heading: "Full · The 52 and 5 · $12,000",
    paragraphs: [
      "The big one. One or two filming days, and the full library: fifty-two short videos and five films.",
      "A year of content in a couple of days. Everything the engine can produce.",
    ],
  },
];

export const VALUE_FLOOR: { title: string; body: string }[] = [
  {
    title: "Brand positioning and storytelling.",
    body: "Who you are, and the story that pulls people in.",
  },
  {
    title: "The evergreen asset pack.",
    body: "Templates, a phone-filming guide, stills from your footage, a quote bank, and written copy. Everything we can pull from your transcripts.",
  },
  {
    title: "A distribution guide.",
    body: "Where it all goes. Organic first, then retargeting the people already paying attention.",
  },
  {
    title: "Monthly coaching.",
    body: "A standing session with our team: review what ran, plan what's next, unstick whatever's stuck.",
  },
];

export const TRUST_ENGINE_FAQ: FaqItem[] = [
  {
    question: "How much of my time does this take?",
    answer:
      "DIY: a few phone sessions a month, guided. Onsite: one day on camera. Full: one or two. After that, the system and the coaching carry it.",
  },
  {
    question: "I freeze on camera. Will this work?",
    answer:
      "Yes. The interview format does the heavy lifting: real questions, real answers, no scripts to memorize. Most people are nervous before. The footage never shows it.",
  },
  {
    question: "We tried posting. Nothing happened.",
    answer:
      "One-off posting isn't a system. This is a library, a plan for where it goes, and monthly coaching to keep it moving. Consistency is the strategy.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "A studio team: producers, editors, and coaches. Senior review on everything before it ships. You get a system that runs, not a freelancer who disappears.",
  },
  {
    question: "What if I outgrow my tier?",
    answer:
      "They stack cleanly. DIY clients add a filming day. Onsite clients come back for the Full library. Filming is $2,500 a day, edits are $350 a long film and $100 a short.",
  },
  {
    question: "Why not just run ads?",
    answer:
      "Ads amplify a working system. They can't replace one. Organic first, then retargeting the people already watching. You own the asset either way.",
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

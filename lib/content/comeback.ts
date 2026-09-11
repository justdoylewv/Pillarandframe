// The Comeback landing page.
//
// This is the live site for now. Everything else stays behind the gate, which
// middleware.ts points here instead of at the old holding page.
//
// Two things about the source copy that had to change to work here:
//
//   1. The {{custom_values.*}} merge tags are GoHighLevel syntax. On a page
//      GoHighLevel renders they resolve; here they would print literally. They
//      are constants below, so changing the spots left or the cohort still
//      means editing one value rather than the page.
//   2. The Memorial Health line in section 12 was bracketed "with permission".
//      No permission is on record, so it is not here. Add it when there is.
//
// Nothing on this page states a result we cannot show. Section 13 is the
// pre-proof version until there are real numbers with written permission.

// ---------------------------------------------------------------------------
// The values that change without the page changing
// ---------------------------------------------------------------------------

// Founding spots remaining. At zero the pricing section swaps itself to the
// standard price, so closing the founding offer is this one number.
export const FOUNDING_SPOTS_LEFT = 5;

export const COHORT_NAME = "Fall cohort";
export const COHORT_DEADLINE = "October 31";

export const FOUNDING_SETUP = "$500";
export const STANDARD_SETUP = "$1,750";
export const PER_JOB = "$500";
export const STANDARD_CAP = "$5,000";

export const GUARANTEE_APPOINTMENTS = 3;
export const GUARANTEE_DAYS = 45;
export const MIN_QUOTES = 150;

// The hero film. Empty until it exists: an empty player is worse than no
// player, so the hero simply renders without one. Set it to the YouTube URL
// and the block appears with a poster and a play button, never autoplaying.
export const COMEBACK_VIDEO_URL: string = "";
export const COMEBACK_VIDEO_LENGTH = "2:04";

// The counties this offer is sold into.
//
// WARNING: this is a wider list than COUNTIES in site.ts, which drives the
// LocalBusiness schema and matches the Google Business Profile. That is a real
// inconsistency and it is deliberate rather than accidental: the service area
// on the profile should not be widened from a page. Reconcile the two, in the
// profile first, then in site.ts.
export const COMEBACK_COUNTIES = [
  "Franklin",
  "Delaware",
  "Union",
  "Licking",
  "Fairfield",
  "Madison",
  "Pickaway",
  "Knox",
  "Marion",
];

// ---------------------------------------------------------------------------
// The calculator
// ---------------------------------------------------------------------------

// The worked example from section 4. Also the calculator's starting position,
// so the page arrives with a real number already on it.
export const EXAMPLE_QUOTES = 180;
export const EXAMPLE_JOB_VALUE = 9000;

// The recovery rate the whole offer is argued on. Deliberately low: the point
// of the section is that the maths works even when you are pessimistic.
export const RECOVERY_RATE = 0.03;

// ---------------------------------------------------------------------------
// Copy
// ---------------------------------------------------------------------------

export const TOP_BAR = "Filmed in Central Ohio. One company per trade, per county.";

export const HERO = {
  eyebrow: "For Central Ohio businesses that sell big jobs from quotes",
  headline: "Turn your unsold quotes into booked appointments in 45 days.",
  headlineEmphasis: "Or your money back.",
  subhead:
    "We spend two hours filming you and your crew on one of your job sites, then send your old quotes a short campaign of texts, emails, and video in your voice. Homeowners book right on your calendar. Your office never chases a lead.",
  trust: "Guaranteed. No long contracts. Based in Delaware, Ohio.",
};

export const PROBLEM = {
  heading: "Here's what happened to last year's quotes.",
  body: [
    "You paid for every one of those leads. Google, Angi, the yard signs, the referral from your brother-in-law.",
    "Your guy drove out. Walked the house. Looked at the system, the basement, the backyard. Wrote up a real number.",
    "And then the homeowner went quiet.",
    "Most of them didn't say no. They said “let me talk to my wife.” They said “we're getting a couple more quotes.” They said “maybe after the holidays.”",
    "Then the busy season hit, your office got buried, and nobody followed up in a way that actually built any trust.",
    "Those quotes are still sitting in your CRM. So are the people behind them. Most of them still haven't decided.",
  ],
};

export const WHY_FOLLOWUP_FAILS = {
  heading: "Why “just checking in” doesn't work.",
  intro:
    "Most follow-up sounds like this: “Hi, just checking in on your estimate!” Maybe twice. Then nothing.",
  reasons: [
    {
      title: "It's easy to ignore.",
      body: "It sounds like every other company that quoted them.",
    },
    {
      title: "It doesn't answer the real question.",
      body: "The homeowner isn't wondering if you're still in business. They're wondering if they can trust you with $10,000 and their house.",
    },
    {
      title: "Your office doesn't have time.",
      body: "Your team is running today's calls. Last spring's quotes aren't getting touched.",
    },
  ],
  close:
    "The fix isn't more follow-up. It's better follow-up. The kind that shows a homeowner your real work, your crew, and your face, before it ever asks for anything.",
};

export const HOW_IT_WORKS = [
  {
    n: "01",
    title: "We film.",
    body: "Two hours on one of your job sites, wherever you're working: a basement in Newark, a mechanical room in Dublin, a backyard in Pickerington. You and your crew, doing the work, shot like a documentary. We capture the story of the job, why you started the company, your team, and your answers to the questions every homeowner is afraid to ask. No customers needed.",
  },
  {
    n: "02",
    title: "We send.",
    body: "Your unsold quotes get a 14-day campaign of texts, emails, and short videos, written in your voice. The first text doesn't sell anything. It just asks, “Is the old unit still hanging in there?”",
  },
  {
    n: "03",
    title: "They book.",
    body: "When a homeowner replies, they get a link to book a quick call or a visit, right on your calendar. If they'd rather talk, you get a heads-up to call them. Your office never chases anyone.",
  },
  {
    n: "04",
    title: "You get the numbers.",
    body: "At Day 45, a one-page report: who replied, who booked, and what it turned into, pulled from your own records.",
  },
];

export const WHY_VIDEO = {
  heading: "Anyone can text your old leads. That's not the point.",
  body: [
    "There are companies that will blast your old list with “Are you still interested?” texts. Some of it works a little. Most of it feels like spam, because it is.",
    "We lead with trust.",
    "Before we ever ask for an appointment, your homeowner sees a 60-second story of a job that looked a lot like theirs, start to finish. They hear why you started the company. They meet the crew who'd be in their house. They see your face explaining financing, and answering the question every homeowner has: “Why not just go with the cheaper bid?”",
    "People around here don't hand a stranger a five-figure job. They hire people they feel like they've already met. We make sure they've met you.",
  ],
};

export const WHAT_YOU_GET = [
  {
    label: "Your Leak Number",
    body: "We pull your unsold quotes and show you exactly what's sitting there.",
  },
  {
    label: "One capture day",
    body: "Two hours on one of your job sites: the project story, your founder story, team intros, and you answering the big objections like price and “the other guy was cheaper.” No customers needed.",
  },
  {
    label: "The 14-day Comeback Campaign",
    body: "Texts, emails, and video to every unsold quote, written in your voice and approved by you before anything sends.",
  },
  {
    label: "A booking page with your face on it",
    body: "Homeowners pick a quick call or an in-home visit. It lands on your calendar with a summary of who they are and what you quoted.",
  },
  {
    label: "Your videos, forever",
    body: "Every story and clip is yours to keep, whether we keep working together or not.",
  },
  {
    label: "The Day 45 results report",
    body: "Replies, bookings, and revived jobs, pulled from your own records.",
  },
];

export const ABOUT = {
  heading: "Who's behind this",
  body: [
    "I'm Doyle Maurer. I run Pillar & Frame out of Delaware, Ohio.",
    "I'm a documentary filmmaker. I've spent years pointing a camera at real people and asking them what actually happened. I also run City Spotlight Ohio, where we tell the stories of small businesses in towns all over the state.",
    "Here's what I learned: people don't trust ads. They trust people. When a homeowner sees the actual crew who'd be in their house, and hears the owner explain why he started the company, it does more than any coupon ever will.",
    "So I built the Comeback to put those stories to work on the quotes you've already paid for.",
    "I'm local. I'll be the one in your customer's kitchen with the camera. And if it's not a fit, I'll tell you on the first call.",
  ],
};

export const SEASONS = {
  heading: "Ohio has a season for everything. Including second chances.",
  open: "Every trade around here runs on the weather.",
  close:
    "Old quotes don't stay old. They come back to life when the season hits. The question is whether you're the one they hear from when it does.",
};

// Section 15's swappable middle line, as something the visitor picks. The line
// that lands is the one about their own trade, which is the whole idea, and it
// costs a tap instead of a separate page per industry.
export const TRADE_LINES: { trade: string; line: string }[] = [
  {
    trade: "HVAC",
    line: "The homeowner who patched their AC in a July heat wave is about to find out if their furnace makes it through January.",
  },
  {
    trade: "Basement waterproofing",
    line: "The family that got a quote in spring is about to watch the fall rains come in.",
  },
  {
    trade: "Outdoor living",
    line: "Everyone who priced a patio last year is about to plan next summer, and the best crews book up by March.",
  },
  {
    trade: "Mortgage",
    line: "Everyone who got pre-approved and paused is watching rates and listings, waiting for a reason to call someone.",
  },
];

export const FIT_YES = [
  "You sell jobs worth $5,000 or more from quotes, estimates, or consultations",
  "You sent at least 150 quotes last year that didn't close",
  "You own the company, or you can make the call",
  "Your crews can handle more work",
  "You're in Central Ohio",
];

export const FIT_NO = [
  "You need more brand-new leads, not better follow-up on the ones you have",
  "You're a franchise with locked-down marketing",
  "You don't keep records of your quotes",
  "You're looking for the cheapest option. We're not it.",
];

export const COMEBACK_FAQ: { question: string; answer: string }[] = [
  {
    question:
      "We already run Google ads and Local Services Ads. Why do we need this?",
    answer:
      "Your ads fill the top. We stop the leaks underneath. Ads get the phone to ring. We work the quotes that came out of those calls and never closed. Most companies are paying for leads they never finish.",
  },
  {
    question: "My office is slammed. Who handles the replies?",
    answer:
      "Nobody on your team. Every reply gets an instant text with a booking link. Your office only sees booked appointments, plus a heads-up when someone specifically asks for a call.",
  },
  {
    question: "I don't have time to film.",
    answer:
      "It's two hours at a job site you're already working. We film your crew doing what they'd be doing anyway, and grab you for the talking parts. We plan it around your schedule.",
  },
  {
    question: "Do my customers have to be on camera?",
    answer:
      "No. We film you and your crew at a job site. We'll ask the homeowner's permission to film the property, and we'll put your best Google reviews on screen as text. If a homeowner offers to say something on camera, great, but it's never required. Nothing goes out without your approval.",
  },
  {
    question: "Is it legal to text my old quotes?",
    answer:
      "Yes, when it's done right, and we do it right. We only text people whose consent is on record, everyone else gets email, every campaign honors opt-outs immediately, and your number gets properly registered with the carriers before anything sends.",
  },
  {
    question:
      "We use ServiceTitan (or Housecall Pro, or Jobber). Does this work with it?",
    answer:
      "Yes. You export your unsold quotes and we handle the rest. No need to change your software.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "Then the guarantee kicks in. If we don't put at least 3 booked appointments on your calendar in 45 days, you get your setup fee back and keep the videos.",
  },
  {
    question:
      "How is this different from the “database reactivation” agencies?",
    answer:
      "They text your list. We show it your real work, your crew, and your face first. That's the difference between a reply and a block.",
  },
  {
    question: "Do you run ads or do SEO?",
    answer:
      "No. If you have an agency for that, keep them. We make their leads close better, which makes everyone look good.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Any business that sells big-ticket jobs from quotes and depends on trust: HVAC, basement waterproofing, remodeling, outdoor living, and more. If you're not sure, the Leak Number call will tell us both.",
  },
  {
    question: "What happens after the 45 days?",
    answer:
      "You get your results report. If it worked, most companies keep it going with our quarterly program: fresh stories every season, a campaign on every new batch of unsold quotes, and more. If not, you keep your videos and we part as friends.",
  },
  {
    question: "Why are you only taking a few companies?",
    answer:
      "Because each one gets a real capture day with me behind the camera, and because we promised one company per trade in each county. That's not a sales trick. It's just how many I can do right.",
  },
];

// The exact wording a person agrees to when they tick the SMS box. Recorded
// verbatim with every submission, because the record of what was consented to
// is the thing a carrier asks for.
export const SMS_CONSENT_TEXT =
  "I agree to receive texts from Pillar & Frame, including a demo campaign. Msg and data rates may apply. Msg frequency varies. Reply STOP to opt out.";

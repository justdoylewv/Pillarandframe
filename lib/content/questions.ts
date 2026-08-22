// The questions people actually type, and answers written to be quoted.
//
// This file exists because the FAQs elsewhere on the site are objection
// handling. "I am terrible on camera" is a good thing to answer on a sales
// page and nobody has ever typed it into a search box. These are different:
// every question here is phrased the way somebody outside the business would
// ask it, which is the only phrasing a search engine or an assistant can match
// against.
//
// The rule that makes an answer citable:
//
//   The first paragraph has to stand completely alone.
//
// An assistant lifts one paragraph and shows it without the question above it,
// without the page around it, and without the sentence before it. So the lead
// answer names the subject rather than saying "we", carries its own numbers,
// and does not depend on anything that came earlier. Roughly forty to eighty
// words: shorter reads as a stub, longer gets truncated mid-thought.
//
// Anything that needs the page around it goes in `more`, which renders on the
// page and is appended to the schema, but is not doing the retrieval work.
//
// Second rule, which matters more: every number here has to be true and has to
// appear somewhere a human can check. No invented market rates, no made-up
// turnaround averages, no "most businesses see" statistics. A fabricated figure
// that gets picked up and repeated is worse than no answer at all, because it
// is then attributed to us in places we cannot correct.

import {
  BASE_CITY,
  BASE_REGION,
  SERVICE_AREA_TOWNS,
  SITE_NAME,
} from "@/lib/content/site";

export interface Question {
  question: string;
  /** Self-contained. This is the paragraph that gets lifted. */
  answer: string;
  /** Context for a human reading the page. Not doing retrieval work. */
  more?: string[];
}

/** Both shapes the schema builder accepts, from one source. */
export function toFaqItems(items: Question[]) {
  return items.map((q) => ({
    question: q.question,
    answers: [q.answer, ...(q.more ?? [])],
  }));
}

// ---------------------------------------------------------------------------
// Money, time, and how this compares. The highest-intent questions there are,
// and the ones almost nobody in this category answers with a real number.
// ---------------------------------------------------------------------------

export const BUYING_QUESTIONS: Question[] = [
  {
    question: "How much does video production cost in Columbus, Ohio?",
    answer: `${SITE_NAME} charges $5,000 for The Foundation: one filming day turned into eight films, thirty photos, and the written pieces a service business needs, installed across its website and profiles over ninety days. That is early founder pricing for the first ten clients and goes to $7,500 after. Ongoing work is The Engine, at $2,500 a month with a three-month minimum.`,
    more: [
      "Payment on The Foundation is split: $2,500 to book your capture day and $2,500 on delivery.",
      "Publishing everything for you, from your own accounts, is another $750 a month on top of The Engine.",
    ],
  },
  {
    question: "How long does it take to produce a business video?",
    answer: `Ninety days from kickoff to an installed library, working with ${SITE_NAME}. One kickoff call to find the story, then one capture day at your location, then the writing, editing, and installation happen over the ninety days that follow. Your own time commitment is an intake form, the kickoff call, and the capture day. Two rounds of revisions are included.`,
  },
  {
    question:
      "Is it better to hire a freelance videographer or a video production studio?",
    answer:
      "It depends on what happens after the footage. A freelance videographer delivers files, and deciding what to make and where to put it stays your job. A studio plans what gets filmed against where each finished piece has to go, then installs it. If you already know exactly what you need and where it belongs, a freelancer costs less and is the right call.",
    more: [
      "The question worth asking either way is what you are left holding. A hard drive of footage is not the same asset as a website, a Google profile, and a set of films that answer the questions people ask before they hire you.",
    ],
  },
  {
    question: "What do you actually get for the money?",
    answer: `A Foundation from ${SITE_NAME} is eight films, thirty photographs, and the written pieces for a website, a Google Business Profile, and the platforms where people check a business out. The films are three core ones, your story, what you do, and a client win, plus five that answer the objections people raise before they hire anyone. Every piece is mapped to where it goes.`,
  },
];

// ---------------------------------------------------------------------------
// Where we work. Location questions, answered with the place names in them.
// ---------------------------------------------------------------------------

export const AREA_QUESTIONS: Question[] = [
  {
    question: `What areas does ${SITE_NAME} serve?`,
    answer: `${SITE_NAME} is based in ${BASE_CITY}, ${BASE_REGION}, and serves Columbus and the surrounding counties of Delaware, Franklin, and Union. That covers ${SERVICE_AREA_TOWNS.slice(0, -1).join(", ")}, and ${SERVICE_AREA_TOWNS[SERVICE_AREA_TOWNS.length - 1]}. Filming happens at your place of business, so there is no studio for you to travel to.`,
  },
  {
    question: "Do you work with businesses in Columbus itself?",
    answer: `Yes. Columbus is inside the service area, along with the Franklin County suburbs of Westerville, Worthington, Dublin, New Albany, Upper Arlington, and Hilliard. ${SITE_NAME} is based in ${BASE_CITY}, about twenty-five miles north of downtown Columbus, and films on location rather than from a fixed studio.`,
  },
  {
    question: "Do you travel to film, or do I come to you?",
    answer: `We come to you. A capture day happens at your place of business, and the cameras, lighting, and audio arrive with us. Scope is one location, one capture day, and up to two people from your team on camera. There is nothing for you to set up and nowhere for you to drive.`,
  },
  {
    question: "What kinds of businesses do you work with in central Ohio?",
    answer:
      "Founder-led professional services businesses: real estate, mortgage and lending, legal and financial, and home and trade services. The common thread is work that arrives by referral, where what somebody finds online decides whether the referral turns into a call. Current clients include Frontier Technologies, Dowling Group, Marco Randazzo, and Lauryn Dempsey.",
  },
];

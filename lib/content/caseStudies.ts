import type { CaseStudy } from "./types";

// All copy transcribed verbatim from CONTENT.md. Pull quotes for DG Lending
// and Wealthstrong are pending collection and render nothing while null.
// Hero images, galleries, and video links are pending picks and approvals;
// empty slots render the placeholder pattern or hide.

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "frontier-technologies",
    client: "Frontier Technologies",
    service: "Trust Engine",
    tags: ["Trust Engine", "IT services"],
    oneLiner: "Thirty-five years of proof, finally visible.",
    metaTitle: "Frontier Technologies | Work",
    metaDescription:
      "How a 35-year IT services company turned its founder's credibility into a LinkedIn trust engine: story strategy, capture days, and a daily motion into named accounts.",
    story: `Thirty-five years in business. Contracts that ran nearly a decade. A founder whose philosophy you could build a company on, because she did.

Almost none of it was visible.

Frontier Technologies is an IT services company with the kind of proof most businesses can only claim. Twenty-plus years of federal work. An early win that became an 8-year government IT modernization contract. The problem was never credibility. The problem was that buyers doing their quiet research could not find it.

So we built the engine.

It started with story strategy: what Frontier wants to be known for, said plainly, in the leadership's real voice. Then capture. We filmed the founder's story and mined it for the moments that carry weight. Her operating principles came out in single sentences you do not forget.

From one capture, a library. Founder story content. Short clips. Written posts in a documented voice, so every piece sounds like her and none of it sounds like a content calendar. A newsletter on the themes their buyers actually worry about.

Then the part most people skip: distribution with an aim. A named list of ideal accounts. Daily, human, one-to-one motion into that list, in the founder's voice. Not ads. People.

Along the way, the numbers taught us something. The organic founder content was outreaching the paid ads with the buyers who mattered. So the plan followed the evidence. More of what works, aimed at the list.

The feed stays full. The leadership stays visible. The proof does the selling before the first call.`,
    pullQuote: {
      quote:
        "It's not about the technology, but it's about the outcome the customer is looking for.",
      attribution: "Jayashree, Founder, Frontier Technologies",
    },
    whatWeBuilt: [
      "Story strategy and a documented founder voice profile",
      "Capture days: founder story, deep-dive interview, solution content",
      "Monthly founder content engine for LinkedIn",
      "LinkedIn newsletter on modernization themes",
      "Daily one-to-one outreach motion into a named account list",
      "Monthly reporting in accounts reached, conversations, and calls booked",
    ],
    stats: [
      { value: "35", label: "years in business" },
      { value: "8", label: "videos a month" },
      { value: "1", label: "named account list worked daily" },
    ],
    heroImage: null,
    gallery: [],
    videoUrl: null,
    videoProvider: null,
    nextSlug: "memorial-health",
    ctaHeading: "Want your proof working like this?",
    ctaServiceLabel: "See the Trust Engine",
    ctaServiceHref: "/trust-engine",
  },
  {
    slug: "memorial-health",
    client: "Memorial Health",
    service: "Trust Engine",
    tags: ["Trust Engine", "Healthcare", "Capital campaign"],
    oneLiner: "A new emergency department, filmed while it's built.",
    metaTitle: "Memorial Health | Work",
    metaDescription:
      "A hospital foundation films the story of its new emergency department while it's built. Donor films now, opening-day content later, from the same effort.",
    story: `"Emergencies don't wait for convenience."

That is the first line of the film, and it is the whole argument.

Memorial Health's emergency department in Marysville, Ohio opened in the late 1990s. Today it runs at a capacity the community outgrew years ago. Essentially a 15-bed ER. Hallways occupied by ultrasound machines and EKG carts, because there is nowhere else to put them. Days when the whole department fills and ten more patients sit in the waiting room.

The community keeps growing. The department cannot.

So Memorial Health is building. A new emergency department, expanding to 24 beds, designed for faster access, advanced care, and the teams who deliver it. And a build like that comes with a story problem most campaigns miss: the fundraising needs donor content now, but the most powerful moments are happening in real time, and they do not wait for a ribbon cutting.

Our job: capture the story while it happens.

We filmed the people who carry the argument better than any brochure. The doctors and nurses working around the limits of a building from another era. Hospital leadership laying out what 2050 looks like for this community. And a husband who got a phone call no one wants, about a car accident, about his wife. The emergency department is where that story turned.

One effort, two payoffs. Donor films that move people to give during the campaign. And a documented record of the build that becomes opening-day content when the doors open.

From the same footage, we mined the soundbites and cut the standalone pieces: 30 to 60 second stories, each one built around a moment that actually happened.`,
    pullQuote: {
      quote: "They saved my wife's life.",
      attribution: "From the campaign film",
    },
    whatWeBuilt: [
      "Campaign hero film for the emergency department expansion",
      "Soundbite mining across all filmed interviews",
      "Standalone 30-60 second donor stories cut from the best moments",
      "A filmed record of the build for opening-day content",
    ],
    stats: [
      { value: "15", label: "beds today" },
      { value: "24", label: "beds in the new ED" },
      { value: "1", label: "story, filmed as it happens" },
    ],
    heroImage: null,
    gallery: [],
    videoUrl: null,
    videoProvider: null,
    nextSlug: "dg-lending",
    ctaHeading: "Raising money to build something?",
    ctaServiceLabel: "See the Trust Engine",
    ctaServiceHref: "/trust-engine",
  },
  {
    slug: "dg-lending",
    client: "DG Lending",
    service: "Systems Coaching",
    tags: ["Systems Coaching", "Mortgage lending"],
    oneLiner: "The library came first. Then the machine behind it.",
    metaTitle: "DG Lending | Work",
    metaDescription:
      "80+ videos for a Colorado mortgage team, then systems coaching that rebuilt the CRM around how borrowers actually move.",
    story: `The videos were working. The follow-up was guessing.

DG Lending is a Colorado mortgage team led by Stacey Dowling. The first phase of the work was content: a library of 80-plus videos, short and long form, answering the questions borrowers actually ask. The library went everywhere: social, email, text follow-ups, the website.

Content brings people in. Then the system has to catch them.

Behind the scenes, the CRM was fighting itself. Automations created duplicate deal cards. Marketing could not tell a new lead from a past client. A returning borrower could get a "thanks for closing" email and a "welcome, new lead" email in the same season.

The fix was not more automation. It was a simpler rule.

A borrower is only ever in one stage at a time, so a status field tells the whole truth. Investors juggling several deals at once are the exception, so only they get deal cards. Two tracks. One rule. The duplicate problem did not get managed. It disappeared.

Then we wired the rhythm around it. When a lead arrives, nurture starts and the post-close marketing pauses. When the loan closes, the marketing loop restarts, fresh. A past client who comes back for a second loan moves through the whole cycle again without a single wrong-context email.

All of it built on recorded coaching calls, documented as we went. Their system. Their team's knowledge. Our job is to not be needed.`,
    pullQuote: null,
    whatWeBuilt: [
      "80+ video content library, short and long form",
      "A two-track CRM design: status-driven for borrowers, deal cards for investors only",
      "Simplified loan-status integration from the point-of-sale system into the CRM",
      "Nurture and post-close marketing loops that pause and restart themselves",
      "Recorded coaching calls with summaries and a running progress log",
    ],
    stats: [
      { value: "80+", label: "videos delivered" },
      { value: "2", label: "tracks in the CRM" },
      { value: "0", label: "duplicate deal cards by design" },
    ],
    heroImage: null,
    gallery: [],
    videoUrl: null,
    videoProvider: null,
    nextSlug: "wealthstrong",
    ctaHeading: "Leads slipping between tools?",
    ctaServiceLabel: "See Systems Coaching",
    ctaServiceHref: "/systems-coaching",
  },
  {
    slug: "wealthstrong",
    client: "Wealthstrong",
    service: "Systems Coaching",
    tags: ["Systems Coaching", "Wealth management"],
    oneLiner: "The audit that said \"don't send yet.\"",
    metaTitle: "Wealthstrong | Work",
    metaDescription:
      "A wealth management team was ready to hit send on a big list. The systems audit said wait, showed why, and mapped the fixes in priority order.",
    story: `The email was written. The list was loaded. The audit said wait.

Wealthstrong is a Colorado wealth management team serving federal employees. When we met them, they had a time-sensitive message ready for more than eight hundred of the right people, and a question that deserved a straight answer: can we send this?

Not yet. And knowing that early is worth real money.

They had migrated platforms, and the migration did what migrations do. The data moved. The wiring did not. Our diagnostic audit went through the whole account, read-only, nothing changed without them. What it found:

5,582 contacts, more than half of them untagged, so the right segment could not be trusted. 306 tags where about 150 would do. Appointment reminders and welcome emails fully built, saved as drafts, never published. Seven phone numbers, four of them forwarding to nowhere, which explained the "voicemail is failing" mystery. And the one that mattered most that week: the sending domain was not fully verified. A big blast from it risked landing the list in spam and dragging their domain reputation down for months.

None of it was carelessness. It was a move that left the connective tissue behind, at a business busy doing its actual job.

The deliverable was a written report the team could act on. Every finding, in plain language, in priority order. What risks real damage now. What breaks core functions. What drags. And a safe path to that urgent send: verify the domain, validate the segment, start small, ramp as the numbers hold.

The blast that could have burned the list never got sent. The one that works gets built on solid ground.`,
    pullQuote: null,
    whatWeBuilt: [
      "A full diagnostic audit across nine systems: deliverability, contacts, tags, fields, automations, calendars, phone routing, account structure, and user access",
      "A written report in plain language, prioritized from \"fix this week\" to \"cleanup\"",
      "A safe-send path for the time-sensitive campaign",
      "A roadmap for the rebuild: hands-on for the urgent fixes, coaching for the rest",
    ],
    stats: [
      { value: "5,582", label: "contacts audited" },
      { value: "9", label: "systems reviewed" },
      { value: "1", label: "risky send caught in time" },
    ],
    heroImage: null,
    gallery: [],
    videoUrl: null,
    videoProvider: null,
    nextSlug: "frontier-technologies",
    ctaHeading: "Not sure what your stack is hiding?",
    ctaServiceLabel: "See Systems Coaching",
    ctaServiceHref: "/systems-coaching",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

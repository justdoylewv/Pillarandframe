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
    tags: ["Trust Engine", "Personal brand", "IT services"],
    oneLiner: "A founder's personal brand, built and run every week.",
    metaTitle: "Frontier Technologies | Work",
    metaDescription:
      "How we built a founder's personal brand on LinkedIn: brand story, content pillars, weekly founder video, images, and captions, reaching director-level buyers in their niche.",
    story: `The credibility was already there. Nobody outside the company could see it.

Frontier Technologies is an IT services company with more than thirty years behind it and a CEO, Reshma Moorthy, whose point of view could carry a company. It has. The question was never whether Reshma had something to say. It was that the people who needed to hear it, director-level buyers doing quiet research, had no way to find her.

So we built her a personal brand from the ground up.

First the story. Who she is, what she stands for, the handful of ideas she wants to be known for. We turned that into content pillars, so every post ladders up to a point of view instead of chasing a feed.

Then the engine. We film Reshma, long form and short. We cut the videos, design the images, and write the captions in her voice. Then we post to LinkedIn every week. She shows up on camera. We handle everything after.

A little over a year in, the account has grown by around five hundred followers. The number is not the point. Who they are is. Most of them sit at director level inside the exact accounts Frontier wants to be known in. This is not reach for its own sake. It is the right room, filling up.

And the brand is starting to do what a brand does. More conversations. Invitations to guest on other people's podcasts. People reaching out because they finally understand what Frontier does, and who is behind it.

The best proof is quieter. Relationships that reopened. People who went back and looked again, because they watched her show up, week after week, saying true things. Respect that came from the work, not from asking for it.

A personal brand does not arrive in a launch. It comes online slowly, then all at once. Reshma's is coming online.`,
    pullQuote: null,
    whatWeBuilt: [
      "A personal brand story and positioning for the CEO",
      "Content pillars every post ladders up to",
      "Founder filming, long form and short form",
      "Branded images and carousels, captions written in her voice",
      "Weekly LinkedIn posting, filmed, edited, and published for her",
      "A documented voice profile that keeps every post sounding like her",
      "Monthly reporting on who is following and engaging, not just how many",
    ],
    stats: [
      { value: "500+", label: "new followers, mostly director-level" },
      { value: "52+", label: "founder posts, filmed and written for them" },
      { value: "1", label: "personal brand, coming online" },
    ],
    heroImage:
      "https://drive.google.com/thumbnail?id=1p7haul1hesAqRWqQV0fweJFPCje1coLu&sz=w1200",
    heroImageAspect: "portrait",
    gallery: [
      "https://drive.google.com/thumbnail?id=1Vk5budj0XHurz61RWXA7D0H6q8JBLq8z&sz=w1200",
      "https://drive.google.com/thumbnail?id=15c7g0CtsctA0ijDetRbDmKPrJOxmP01d&sz=w1200",
      "https://drive.google.com/thumbnail?id=1kkRGebf6GdquQFEVI56hAYtpMHRaxP5J&sz=w1200",
      "https://drive.google.com/thumbnail?id=1rnGVtCvEr70QG_TfE4ZGdROyUBWIqYJj&sz=w1200",
      "https://drive.google.com/thumbnail?id=1z7KOfGhw9Hc0SxfV0XHEDba4VfkqgSWW&sz=w1200",
      "https://drive.google.com/thumbnail?id=1pKK20dq67eV7t4OCvk8xY1mOwzerVdwp&sz=w1200",
    ],
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

That is the first line of the film. It is also the whole reason we made it.

Memorial Health is building a new emergency department in Marysville, Ohio. A $56 million project, breaking ground in 2026. The current ED opened in the late 1990s, and the community outgrew it years ago.

Here is what that looks like from the inside. Essentially a 15-bed ER. Hallways holding ultrasound machines and EKG carts, because there is nowhere else to put them. Days when the whole department fills and ten more people wait in the lobby.

The community keeps growing. The department cannot.

A capital campaign has a timing problem most people miss. The fundraising needs donor content now. But the moments that actually move people are happening in real time, and they do not wait for a ribbon cutting.

So we filmed the story while it happened.

We pointed the camera at the people who carry the argument better than any brochure. A doctor who runs the department at 15 beds and knows exactly what 24 would change. A board member who runs a utility and thinks about infrastructure for a living. And a husband named Joe, who got a call from a number he did not recognize, about a car accident, about his wife.

His line is the one that stays with you. "They saved my wife's life."

That is the whole job. Find the true moment and protect it. Don't script it. Don't polish it into something it isn't. Let the person say the real thing, and get out of the way.

One shoot, two payoffs. Donor films that move people to give during the campaign. And a documented record of the build that becomes opening-day content when the doors open. Same footage, twice the life.

From that footage we mined the soundbites and cut the standalone pieces. Thirty to sixty second stories, each one built around a moment that actually happened.

The film is done. The campaign has what it needs to raise the money. And when the new department opens, the story of how it got built is already told.`,
    pullQuote: {
      quote: "They saved my wife's life.",
      attribution: "Joe Rhea, Husband and Caregiver, from the Build Forward campaign film",
    },
    whatWeBuilt: [
      "Campaign hero film for the emergency department expansion, delivered in four cuts: captioned and clean, with two title-card versions",
      "Soundbite mining across every filmed interview",
      "Standalone 30 to 60 second donor stories cut from the best moments",
      "A subtitle file so the clean cuts caption anywhere they run",
      "A filmed record of the build for opening-day content",
    ],
    stats: [
      { value: "$56M", label: "Build Forward capital campaign" },
      { value: "15 → 24", label: "beds in the new emergency department" },
      { value: "1", label: "story, filmed as it happens" },
    ],
    heroImage: null,
    gallery: [],
    videoUrl: "https://drive.google.com/file/d/1gwlPto68E1S5QE4Z3nlmGfEGiCeHdDQA/view?usp=drive_link",
    videoProvider: "gdrive",
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

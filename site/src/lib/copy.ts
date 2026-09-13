// Every word on every page, from 01-website-copy.md and 07 §6, verbatim.
//
// Pages compose from this file and add nothing. Where the plan told me to
// write something in the site's voice (the offer-page FAQ answers and
// disqualifier bodies), it is marked WRITTEN, holds to two sentences, and
// states no number that is not already on the page.
//
// Brackets are literal placeholders and render as text on purpose.

export const CONTACT_EMAIL = "doyle@pillarandframe.com";

export const CTA_FOOTNOTE = "Fixed deliverables · fixed price · refund if unused";

export const ERRORS = {
  email: "We need an email to send this to.",
  send: `That didn't send. Try again, or email ${CONTACT_EMAIL}.`,
};

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

export const HOME = {
  h1: "One day on your site.",
  h1Emphasis: "A year of proof.",
  sub: "We film the work you actually do and put it where it wins bids, hires crews, shows stakeholders progress, and fills the schedule. Central Ohio, and wherever the project is.",
  doors: [
    {
      title: "I need to win bids and hire.",
      body: "One project, filmed in a day. A film for your pre-qual package, a piece that helps you hire, and a quarter of content already running.",
      href: "/commercial",
    },
    {
      title: "I need stakeholders to see progress.",
      body: "Monthly site visits turned into short visual updates for owners, lenders and boards. NDA-ready. Stays inside your systems.",
      href: "/operations",
    },
    {
      title: "I need the phone to ring before the season.",
      body: "We film your team for half a day and use it to wake up the customers who haven't called in two years. Guaranteed appointments.",
      href: "/residential",
    },
  ],
  doorLink: "See how it works",
  steps: [
    { title: "Clearance", body: "We handle the media release with your GC or owner before anyone steps on site." },
    { title: "One day", body: "We work around your crew. Two short interviews, nobody pulled off the job." },
    { title: "Two weeks", body: "Your team gets a tracker with every asset, what it's for, and the caption already written. They approve in one pass." },
    { title: "It runs", body: "Twelve weeks loaded and scheduled. Nobody on your side manages anything." },
  ],
  stats: [
    { number: "14 days", label: "from capture to delivery" },
    { number: "9 deliverables", label: "every project, same list" },
    { number: "1 approval", label: "your team clicks once" },
    { number: "0 files", label: "we don't hand over folders" },
  ],
  comparison: {
    columns: ["Pillar & Frame", "Video production company", "Social media agency"],
    rows: [
      { label: "Films on your job site", values: [true, true, false] },
      { label: "Fixed deliverable list, fixed price", values: [true, false, "sometimes"] },
      { label: "Objection videos for after the estimate", values: [true, false, false] },
      { label: "A hiring piece from a labour budget", values: [true, false, false] },
      { label: "Captions written, calendar loaded", values: [true, false, true] },
      { label: "Your actual crews, not stock", values: [true, true, false] },
      { label: "Handles site clearance", values: [true, "sometimes", false] },
      { label: "Ongoing without a posting fee", values: [true, false, false] },
      { label: "Refund if unused", values: [true, false, false] },
    ] as { label: string; values: (boolean | string)[] }[],
  },
  disqualifiers: [
    { title: "You want the cheapest video guy.", body: "We're not the line item to negotiate. Same list, same price, every project." },
    { title: "Nobody on your team will click approve.", body: "We load twelve weeks. Someone has to press one button. If that's nobody, it stays in a folder like the last one." },
    { title: "Your projects can't be filmed and you don't want the operations version.", body: "Confidential builds are a different offer with a different contract. We'll say so on the call." },
    { title: "You're finishing one project a year.", body: "The quarterly needs supply. One project is a Project Capture, and that's fine — but it's not a retainer." },
  ],
  founder: {
    imgSrc: "/images/founder.jpg",
    captionLines: ["Central Ohio · 2026", "Doyle Maurer", "On a commercial solar install"],
    title: "Nine videos for one installer. Then they asked for more.",
    paragraphs: [
      "I've filmed job sites, run Meta ads, built funnels, and coached contractors on their CRM. The thing I kept seeing: good work, no proof, and video that got delivered and never used.",
      "Pillar & Frame is built around the part after the shoot. Fixed deliverables, captions written, calendar loaded, one approval. If the footage doesn't get used, the shoot didn't happen.",
    ],
    stats: [
      { number: "[X]", label: "projects filmed" },
      { number: "[X]", label: "assets delivered" },
    ],
  },
  quotesHeading: "Operators don't sugarcoat.",
  // One bracketed quote until PowerField's land. Never three fakes.
  quotes: [{ text: "[Operator quote, 1–2 sentences.]", name: "[Name]", title: "[Title]", company: "[Company]" }],
  faq: [
    { q: "Who's this for?", a: "Commercial contractors, specialty subs and installers doing $10M+, and residential trades doing $2–5M. Central Ohio first, and wherever the project is." },
    { q: "Are you a video production company?", a: "We film, but that's the input. What we deliver is a fixed set of assets already loaded into a system your team approves once. The difference is what happens after the shoot." },
    { q: "What does it cost?", a: "One commercial project, one day: $8,500. Quarterly: $7,500. Operations: $4,000 a visit. Residential reactivation: $6,000. It's on every page." },
    { q: "We've paid for video before and it sat in a folder. Why is this different?", a: "That's the problem we built around. You get a tracker with every asset, what it's for, and the caption written. Your team clicks approve, twelve weeks go live. If they don't use a single piece in 30 days, we refund it." },
    { q: "Do you manage our social media?", a: "No. We set it up and hand it over. Ongoing means the next capture, not a posting fee." },
    { q: "What about site clearance and safety?", a: "We handle the media release with your GC or owner before scheduling. Your team reviews everything before it goes out. On confidential builds, it's work-for-hire and NDA first." },
    { q: "How fast?", a: "Fourteen days from capture to delivery. First post live day fifteen. Residential campaigns launch when texting registration clears, usually three to four weeks." },
    { q: "Can we just buy the raw footage?", a: "It's included. But the footage was never the problem." },
  ],
  cta: { title: "Want this on your next project?", primary: { label: "Get your audit", href: "/audit" }, secondary: { label: "See the work", href: "/work" } },
};

// ---------------------------------------------------------------------------
// Commercial
// ---------------------------------------------------------------------------

export const COMMERCIAL = {
  h1: "Every project you finish is proof you'll never use again.",
  sub: "One day on your active site. Two weeks later your team has a film for the pre-qual package, a piece that helps you hire, and a quarter of content written, approved once, and running. If they don't use a single piece of it in 30 days, you don't pay.",
  cta: { label: "Get your free proof audit", href: "/audit?type=commercial" },
  reel: { src: "/video/commercial-reel.mp4", poster: "/video/hero-poster.jpg", caption: "The one-day cut · PowerField" },
  stats: [
    { number: "14", label: "days" },
    { number: "9", label: "deliverables" },
    { number: "1", label: "approval" },
    { number: "$8,500", label: "one project, one day" },
  ],
  problemHeading: "The problem",
  problem: [
    "You've finished ten projects this year. What do you have from them? Photos on a superintendent's phone. A pre-qual package that looks like everyone else's. A careers page with a stock photo on it. And a marketing person who's asking the field for content and getting nothing back.",
    "The work was real. The proof is gone.",
  ],
  tableHeading: "What one day produces",
  table: [
    { asset: "Project film", spec: "2–3 min", where: "Pre-quals, bid presentations, trade shows, homepage" },
    { asset: "Objection videos", spec: "4 × 45s", where: "Sent 48 hours after every estimate" },
    { asset: "Crew piece", spec: "60s", where: "Careers page, job posts, hiring ads" },
    { asset: "Leadership interview", spec: "90s", where: "About page, bid decks, owner relationships" },
    { asset: "Stills library", spec: "40–60", where: "Proposals, print, everything" },
    { asset: "Social verticals + graphics", spec: "20+", where: "Twelve weeks of posts" },
    { asset: "Content tracker", spec: "captions written", where: "Your team approves once" },
    { asset: "Twelve weeks scheduled", spec: "", where: "It runs" },
    { asset: "Raw archive", spec: "organized", where: "Yours" },
  ],
  tableLine: "Same list, every project. That's how it's fast, and that's how it's $8,500 instead of $25,000.",
  nobodyHeading: "What nobody else tells you",
  nobody: "Your last video vendor handed you files. That's why they're still in a folder. We don't deliver files. We deliver assets already loaded into a calendar your team approves once — and a one-page guide for where the rest goes: which film in the pre-qual package, which piece on the careers page, which video follows every estimate out the door.",
  priceHeading: "Price",
  price: "One project, one day: $8,500. Ongoing, one project a quarter: $7,500 per quarter. After a year you have a library covering everything you built. If someone's finishing a project you're proud of, the site demobilizes in weeks. After that, it's gone.",
  guaranteeHeading: "Guarantee",
  guarantee: "If your team doesn't use a single asset in the first 30 days, full refund. We've never had to.",
  auditHeading: "Free proof audit",
  audit: "Send us your website. We'll pull everything you've published in three years, do the same for two competitors, and send you a five-minute walkthrough of the gap and what one day on site would fix. Free, specific to your company, nothing required from you.",
  // WRITTEN. Two sentences each, no new numbers.
  faq: [
    { q: "Who's it for?", a: "Commercial contractors, specialty subs and installers doing $10M+, with an active site we can get onto. Central Ohio first, and wherever the project is." },
    { q: "What if we don't have a marketing person?", a: "Then the tracker is your marketing person. Every asset arrives with its caption written and its destination named, and one person on your side clicks approve." },
    { q: "Do you handle clearance?", a: "Yes. We handle the media release with your GC or owner before anyone steps on site, and your team reviews everything before it goes out." },
    { q: "Can we buy just the film?", a: "The film is one of nine. Same list, same price, every project, and the raw archive is yours either way." },
    { q: "What's the quarterly?", a: "One project a quarter at $7,500 instead of $8,500 for one. After a year you have a library covering everything you built." },
  ],
  disqualifiers: [
    { title: "You want the cheapest video guy.", body: "We're not the line item to negotiate. Same list, same price, every project." },
    { title: "Nobody on your team will click approve.", body: "We load twelve weeks. Someone has to press one button. If that's nobody, it stays in a folder like the last one." },
    { title: "You're finishing one project a year.", body: "The quarterly needs supply. One project is a Project Capture, and that's fine — but it's not a retainer." },
  ],
  band: { title: "Want this on your next project?" },
};

// ---------------------------------------------------------------------------
// Operations
// ---------------------------------------------------------------------------

export const OPERATIONS = {
  h1: "Your stakeholders shouldn't have to picture it from a PDF.",
  sub: "Monthly site visits on active builds, turned into three-minute visual updates for owners, lenders, investors and boards. NDA-ready. Delivered inside your systems. Nothing leaves.",
  cta: { label: "Book a 15-minute call", href: "/audit?type=operations" },
  reel: { src: "/video/operations-sample.mp4", poster: "/video/hero-poster.jpg", caption: "A progress update sample" },
  stats: [
    { number: "10", label: "days" },
    { number: "3", label: "deliverables" },
    { number: "NDA", label: "before scheduling" },
    { number: "$4,000", label: "per visit" },
  ],
  problemHeading: "The problem",
  problem: [
    "Right now the people who funded the project see it through a written report, a few phone photos, and a call with the PM. Then they ask the same questions again next month. They're not on site. They're in another city. Some of them are on a board that meets quarterly and needs to understand a $40M build in four minutes.",
  ],
  tableHeading: "What every visit produces",
  table: [
    { asset: "Progress update", spec: "3–5 min", where: "Narrated by your PM or superintendent, dated, milestone-marked" },
    { asset: "Executive cut", spec: "60s", where: "For the board deck and the lender email" },
    { asset: "Stills", spec: "30+", where: "Dated, labeled, organized by area" },
    { asset: "Archive", spec: "organized", where: "A visual record of the build, month by month" },
  ],
  tableLine: "Same format every visit. Stakeholders learn to read it in one.",
  whoHeading: "Who this is for",
  who: "Owner's reps, developers, project executives, and contractors on builds they can't show anyone. Data centers. Industrial. Healthcare. Multi-family. Anything with investors, lenders, or a corporate client who can't be on site.",
  confidentialHeading: "On confidential projects",
  confidential: "Work-for-hire. Your footage, not ours. No portfolio use, ever. NDA signed before scheduling. Delivered into your storage, not a public link. Named recipients only. We understand what a data center build can and can't show. Say what's off-limits and it never gets framed.",
  steps: [
    { title: "Scope", body: "One call. Which stakeholders, what cadence, what can't be filmed." },
    { title: "Clearance", body: "Site access, PPE, badging, NDA — handled before the first visit." },
    { title: "Visit", body: "Half a day, monthly or per milestone. We work around the schedule." },
    { title: "Delivery", body: "Ten days. Into your systems." },
  ],
  priceHeading: "Price",
  price: "$4,000 per visit. Monthly plans from $7,500 for the life of the project. Confidential projects carry a premium because we can never show the work. Say so at the start — it's fair, and it's cheaper than a stakeholder losing confidence.",
  guaranteeHeading: "Guarantee",
  guarantee: "If the first update doesn't get forwarded to a stakeholder, you don't pay for it.",
  // WRITTEN.
  faq: [
    { q: "Who receives the updates?", a: "Named recipients only, the ones you list at scoping. Owners, lenders, investors, boards, or a corporate client who can't be on site." },
    { q: "What can't be filmed?", a: "Whatever you say. Tell us what's off-limits at scoping and it never gets framed, and your team reviews every cut before it's delivered." },
    { q: "Do you keep any footage?", a: "No. Work-for-hire, your footage, delivered into your storage rather than a public link, and never used in a portfolio." },
    { q: "How often?", a: "Monthly, or per milestone. Half a day a visit, delivered in ten days, same format every time." },
    { q: "What does a data center need?", a: "NDA before scheduling, badging and PPE handled before the first visit, and a list of what's off-limits. We understand what a data center build can and can't show." },
  ],
  disqualifiers: [
    { title: "You want it for marketing.", body: "That's the commercial offer, and it's a different contract. This footage stays inside your systems and is never shown publicly." },
    { title: "No one owns stakeholder comms.", body: "Someone on your side has to send the update on. If nobody does, the first one costs you nothing and there's no reason for a second." },
    { title: "The site won't badge a crew.", body: "We handle badging and PPE before the first visit, but the site has to allow it. If it won't, there's nothing to film." },
  ],
  band: { title: "Want this on your next project?" },
};

// ---------------------------------------------------------------------------
// Residential
// ---------------------------------------------------------------------------

export const RESIDENTIAL = {
  h1: "You're sitting on six figures in customers you already paid for.",
  sub: "Answer three questions. We'll tell you what's dormant in your customer list — usually six figures — in about 20 minutes. Free.",
  cta: { label: "Get my number", href: "/audit?type=residential" },
  reel: { src: "/video/residential-explainer.mp4", poster: "/video/hero-poster.jpg", caption: "The explainer" },
  stats: [
    { number: "45", label: "days" },
    { number: "30", label: "booked appointments" },
    { number: "5", label: "assets" },
    { number: "$6,000", label: "or $3,000 down and $3,000 at 30" },
  ],
  problemHeading: "The problem",
  problem: [
    "Every season you pay for new leads while hundreds of past customers sit in your CRM untouched. They already trust you. They already bought once. Nobody's asked them back.",
  ],
  stepsHeading: "What we do",
  steps: [
    { title: "Half a day of filming", body: "Your owner answering the four questions that stall a job. A tech on a real site. A customer on camera." },
    { title: "Five assets", body: "The explainer, the walkthrough, the objections, the case study, the trust piece." },
    { title: "One campaign", body: "To the customers who had service 12–24 months ago and haven't been back. Pointed at one seasonal service, with a real reason to act — not a discount." },
    { title: "The system stays", body: "Missed-call text back, booking, follow-up. You keep it." },
  ],
  calculator: {
    sliders: [
      { id: "customers", label: "Customers in your system", min: 500, max: 10000, step: 100, default: 2500 },
      { id: "contacted", label: "Contacted last season", min: 0, max: 5000, step: 50, default: 300 },
      { id: "ticket", label: "Average tune-up ticket", min: 99, max: 499, step: 10, default: 189, prefix: "$" },
    ],
    outputLine: "sitting in your system right now, before plan sign-ups and replacements.",
    footnote: "Your math, not a guarantee. 6% is conservative for a 12–24 month cold list with a seasonal reason to act.",
  },
  guaranteeHeading: "Guarantee",
  guarantee: "30 booked appointments within 45 days of launch, or we keep working free until you have them. Conditions, stated up front: you answer the phone within an hour during business hours, you don't change the offer mid-campaign, your list has at least 1,500 cold contacts, and you complete the texting registration paperwork within five business days.",
  priceHeading: "Price",
  price: "$6,000. Or $3,000 down and $3,000 when you hit 30. Founding clients, first three: $3,000 plus $100 per booked appointment, capped at $8,000, in exchange for a case study and a testimonial. Then the system runs on $297/month — the CRM, automations, and missed-call text back. Said now, not later.",
  // WRITTEN.
  faq: [
    { q: "What if my list is small?", a: "The guarantee needs at least 1,500 cold contacts. Under that the math doesn't hold, and we'll say so before you spend anything." },
    { q: "Do you text my customers?", a: "Yes. That's why the texting registration paperwork is a condition, and why the campaign launches when it clears, usually three to four weeks." },
    { q: "What if we don't answer the phone fast?", a: "The guarantee needs the phone answered within an hour during business hours. Missed-call text back covers the gaps, but it can't book a job for a company that never calls back." },
    { q: "What happens after the campaign?", a: "The system stays. Missed-call text back, booking, and follow-up on $297 a month, and you keep it." },
    { q: "Why not a discount?", a: "A discount teaches customers to wait for the next one. The campaign points at one seasonal service with a real reason to act, and the ticket stays whole." },
  ],
  disqualifiers: [
    { title: "Under 1,500 cold contacts.", body: "That's the floor for the guarantee. Below it we'd be guessing, and we don't guarantee guesses." },
    { title: "Nobody answering the phone.", body: "Thirty booked appointments need someone picking up within the hour. If that's nobody, the campaign fills a voicemail." },
    { title: "You want a discount campaign.", body: "We don't run them. The offer is one seasonal service with a real reason to act, not a coupon." },
  ],
  band: { title: "Want this on your next project?" },
};

// ---------------------------------------------------------------------------
// Work, audit, thanks
// ---------------------------------------------------------------------------

export const WORK = { h1: "The work.", chips: ["All", "Commercial", "Operations", "Residential"] };

export const AUDIT = {
  commercial: { heading: "Free proof audit", subline: "You'll have a five-minute walkthrough within two business days." },
  operations: { heading: "Book a 15-minute call", subline: "Calendar appears after submit." },
  residential: { heading: "Get your number", subline: "You'll have your number within two business days." },
};

export const THANKS = {
  h1: "Got it.",
  commercial: "Your audit is on the way. Two business days, usually faster. In the meantime, here's the PowerField reel.",
  operations: "Pick a time below.",
  residential: "Your number's coming. Two business days, usually faster. Here's what the campaign looks like.",
};

export const CASE_STUDY_BAND = { title: "Want this on your next project?", primary: { label: "Get your free proof audit", href: "/audit?type=commercial" } };

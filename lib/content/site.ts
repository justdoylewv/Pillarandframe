// The canonical entity sheet.
//
// This file is the single source of truth for who we are, where we work, and
// how to reach us. Google, the LLMs, and every page on this site read the same
// facts from here, so the name, service area, and contact details cannot drift
// apart the way they did across the launch kit assets.
//
// Rule: if a fact about the business appears on a page, it comes from this
// file. Do not retype it inline anywhere.

// ---------------------------------------------------------------------------
// The launch switch
// ---------------------------------------------------------------------------

// While this is true, every route serves the coming soon page and the real
// site is unreachable. The pages themselves are untouched, so turning it off
// brings the whole site back with no other edits.
//
// Gated by default. It takes an explicit "false" to open the site, so a
// missing or misspelled variable fails closed rather than publishing early.
//
// Two ways to turn it off:
//
//   Preview the real site without launching it
//     In Vercel, add NEXT_PUBLIC_COMING_SOON = false and scope it to the
//     Preview environment only. Every branch deploy then serves the full site
//     at its own preview URL, while production stays behind the holding page.
//     This is the one to use for review.
//
//   Launch
//     Set the same variable to false on Production, or edit the fallback
//     below. Read at build time, so it takes a redeploy either way.
export const COMING_SOON = process.env.NEXT_PUBLIC_COMING_SOON !== "false";

// The reviewer's way in, while the site is still gated.
//
//   https://pillarandframe.vercel.app/?preview=<token>
//
// That opens the real site for that browser for a month and works on any
// deployment that is already live, production included. No rebuild, no
// environment variable. Add ?preview=off to any page to put the holding page
// back and check what a stranger sees.
//
// This repository is public, so treat the token as a soft latch rather than a
// lock. The worst case is that someone reads the code and looks at an
// unlaunched marketing site early. Set PREVIEW_TOKEN in Vercel to override it
// with something only you know.
export const PREVIEW_TOKEN = process.env.PREVIEW_TOKEN || "frame-the-shot";

// ---------------------------------------------------------------------------
// Identity
// ---------------------------------------------------------------------------

// Exact business name. This matches the Google Business Profile character for
// character. Nothing is ever appended to it, whatever it correlates with.
export const SITE_NAME = "Pillar & Frame";

export const SITE_URL = "https://pillarandframe.com";

// The primary Google Business Profile category.
export const PRIMARY_CATEGORY = "Video Production Service";

// One line, reused in schema and meta. Keep it factual and keep it short.
export const ENTITY_DESCRIPTION =
  "A video and copy studio serving Columbus and central Ohio, based in Delaware, Ohio. We film founder-led service businesses once, then write, shoot, and install the words, photos, and videos the business needs across its website, Google profile, and social platforms.";

// Schema only. The visible copy on this site stays studio-voiced: "we" is the
// studio and "you" is the buyer. This exists so Google and the language models
// can resolve the organization to a real person behind it.
export const FOUNDER_NAME = "Doyle Maurer";

// Profiles that corroborate the entity. Every one of these strengthens the
// link between the name and the business for both Google and the LLMs.
//
// The Google entry is the share shortlink. Swap it for the canonical Maps
// place URL (google.com/maps/place/?q=place_id:...) when you have it: a
// shortlink is a redirect, and the place URL is the stable identifier.
//
// TODO: add LinkedIn (company and personal), YouTube, and Instagram as they
// go live. LinkedIn and YouTube are the two that move the needle most.
export const SAME_AS: string[] = [
  "https://www.facebook.com/pillarandframe/",
  "https://share.google/teZsErN6NGCl4L5es",
];

// TODO: same, for the founder. The personal LinkedIn is the highest value one.
export const FOUNDER_SAME_AS: string[] = [];

// Profiles we link to in the footer. A visible link plus the schema entry is
// a stronger association than schema on its own.
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "Facebook", href: "https://www.facebook.com/pillarandframe/" },
];

// ---------------------------------------------------------------------------
// Where we work
// ---------------------------------------------------------------------------

// Service-area business. The street address is deliberately not published and
// not in the schema. City and state are, because they are true and because
// proximity is what the map pack reads.
export const BASE_CITY = "Delaware";
export const BASE_REGION = "Ohio";
export const BASE_REGION_CODE = "OH";

// Home county first, then the metro, then the western edge.
export const COUNTIES = ["Delaware", "Franklin", "Union"];

// The one public service-area sentence. This exact wording goes on the site,
// the Google profile, the directories, and the socials. One sentence, one
// meaning, everywhere.
export const SERVICE_AREA_SENTENCE =
  "Based in Delaware, Ohio, serving Columbus and the surrounding counties of Delaware, Franklin, and Union.";

// The towns we serve, ordered outward from Delaware.
//
// These must match the service area set on the Google Business Profile
// exactly. Google reads a mismatch between the profile and the site as
// inconsistency, and a town claimed here but missing there is a claim with
// nothing behind it. If you add or remove a town on the profile, change it
// here in the same sitting.
//
// Columbus is on the list because we do serve it. That is separate from what
// we expect to rank for: proximity means the map pack is realistic around
// Delaware and the northern suburbs, and Columbus proper is not a promise.
export const SERVICE_AREA_TOWNS: string[] = [
  // Delaware County, closest to home
  "Delaware",
  "Powell",
  "Lewis Center",
  "Sunbury",
  "Galena",
  "Ostrander",
  // Franklin County
  "Westerville",
  "Worthington",
  "Dublin",
  "New Albany",
  "Upper Arlington",
  "Hilliard",
  "Columbus",
  // Union County
  "Marysville",
  "Plain City",
  "Richwood",
  "Milford Center",
];

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const CONTACT_EMAIL = "doyle@pillarandframe.com";

// The tracked local number. It is not published anywhere until it exists:
// the old 720 number is a Colorado area code, and once a wrong number is
// indexed and cited it is slow and expensive to correct.
//
// To publish: set CONTACT_PHONE to the 937 number and PHONE_IS_PUBLIC to true.
// Nothing else needs to change. The number will appear in the footer, on the
// book page, and in the LocalBusiness schema at the same moment.
// Typed wider than their current values on purpose, so setting the number and
// flipping the flag is a one-line change that does not fail the type check.
export const CONTACT_PHONE: string = "";
export const PHONE_IS_PUBLIC: boolean = false;

export const BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/bookings/strategycallpillarandframe";

export const CTA_LABEL = "Book a free strategy call";

// The GoHighLevel form behind the 90 Day Trust Calendar.
//
// GoHighLevel handles the capture and the automation sends the file, so the
// site holds no lead data and the file link never has to live in the page.
//
// The id at the end of this URL is also the id their resize script looks for,
// so the embed derives it from here rather than repeating it.
//
// While this is empty the download page asks people to email instead, rather
// than showing a form that goes nowhere.
export const GHL_FORM_URL: string =
  "https://api.leadconnectorhq.com/widget/form/8ezJCESKey2C44zJhyiy";

// Matches the form name in GoHighLevel, so the two are recognisable as the
// same thing when a submission comes through.
export const GHL_FORM_NAME = "Trust Calendar";

// ---------------------------------------------------------------------------
// Related
// ---------------------------------------------------------------------------

export const CITY_SPOTLIGHT_URL = "https://cityspotlightohio.com";

export const FOOTER_TAGLINE = "A story-led film studio in Ohio.";
export const CITY_SPOTLIGHT_LINE = "City Spotlight Ohio is a Pillar & Frame project.";

// ---------------------------------------------------------------------------
// Measurement
// ---------------------------------------------------------------------------

// Set to the bare domain, for example "pillarandframe.com", to load Plausible.
// The script does not render while this is empty, so nothing ships to a
// property that does not exist yet.
export const PLAUSIBLE_DOMAIN: string = "";

// Plausible reads goal names off the class list, so a CTA is tagged by adding
// one of these. No client-side JavaScript is needed to fire them.
export const EVENT_BOOK_CALL = "plausible-event-name=Book+Call";
export const EVENT_EMAIL = "plausible-event-name=Email+Click";
export const EVENT_PHONE = "plausible-event-name=Phone+Click";

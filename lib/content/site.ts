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
// site is unreachable. The pages themselves are untouched, so flipping this to
// false brings the whole site back with no other edits.
export const COMING_SOON = true;

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
  "A video and copy studio in Marysville, Ohio. We film founder-led service businesses once, then write, shoot, and install the words, photos, and videos the business needs across its website, Google profile, and social platforms.";

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
export const BASE_CITY = "Marysville";
export const BASE_REGION = "Ohio";
export const BASE_REGION_CODE = "OH";

export const COUNTIES = ["Union", "Delaware", "Franklin"];

// The one public service-area sentence. This exact wording goes on the site,
// the Google profile, the directories, and the socials. One sentence, one
// meaning, everywhere.
export const SERVICE_AREA_SENTENCE =
  "Based in Marysville, Ohio, serving Union, Delaware, and Franklin counties.";

// The towns we serve, ordered outward from Marysville.
//
// These must match the service area set on the Google Business Profile
// exactly. Google reads a mismatch between the profile and the site as
// inconsistency, and a town claimed here but missing there is a claim with
// nothing behind it. If you add or remove a town on the profile, change it
// here in the same sitting.
//
// Columbus is on the list because we do serve it. That is separate from what
// we expect to rank for: proximity means the map pack is realistic around
// Marysville and Union County, and Columbus proper is not a promise.
export const SERVICE_AREA_TOWNS: string[] = [
  // Union County
  "Marysville",
  "Plain City",
  "Milford Center",
  "Richwood",
  // Delaware County
  "Delaware",
  "Powell",
  "Lewis Center",
  "Sunbury",
  "Galena",
  "Ostrander",
  // Franklin County
  "Dublin",
  "Westerville",
  "Worthington",
  "Hilliard",
  "New Albany",
  "Upper Arlington",
  "Columbus",
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

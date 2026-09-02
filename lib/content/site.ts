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

// The towns we serve, grouped by county and ordered outward from Delaware.
//
// These must match the service area set on the Google Business Profile
// exactly. Google reads a mismatch between the profile and the site as
// inconsistency, and a town claimed here but missing there is a claim with
// nothing behind it. If you add or remove a town on the profile, change it
// here in the same sitting.
//
// Grouped rather than flat so the service area page can lay them out by
// county, which reads as a real place description instead of a keyword list.
// A run-on list of town names separated by dots is the oldest local SEO tell
// there is, and it is the thing that makes a page look automated.
//
// Columbus is on the list because we do serve it. That is separate from what
// we expect to rank for: proximity means the map pack is realistic around
// Delaware and the northern suburbs, and Columbus proper is not a promise.
export const SERVICE_AREA: { county: string; towns: string[] }[] = [
  {
    county: "Delaware",
    towns: [
      "Delaware",
      "Powell",
      "Lewis Center",
      "Sunbury",
      "Galena",
      "Ostrander",
    ],
  },
  {
    county: "Franklin",
    towns: [
      "Westerville",
      "Worthington",
      "Dublin",
      "New Albany",
      "Upper Arlington",
      "Hilliard",
      "Columbus",
    ],
  },
  {
    county: "Union",
    towns: ["Marysville", "Plain City", "Richwood", "Milford Center"],
  },
];

// Flat, for the schema and anywhere a plain list is wanted. Derived so the
// two can never disagree.
export const SERVICE_AREA_TOWNS: string[] = SERVICE_AREA.flatMap(
  (group) => group.towns
);

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const CONTACT_EMAIL = "doyle@pillarandframe.com";

// The tracked local number. 380 is a central Ohio overlay on the 614 area
// code, so it reads local to Columbus, which is the point.
//
// Published everywhere at once: the footer, the coming soon page, the legal
// pages, and the LocalBusiness schema all read these two values. A2P 10DLC
// registration requires the number to be reachable and the business to be
// contactable, so this stays public and stays correct.
export const CONTACT_PHONE: string = "+1 380-324-0535";
export const PHONE_IS_PUBLIC: boolean = true;

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

// The GoHighLevel chat widget, loaded on every page including the holding
// page and the legal pages. Empty means no widget renders at all.
//
// If this widget is ever set to ask for a phone number, that turns it into an
// SMS opt-in point and the consent wording and the terms have to match what
// was filed with the carrier. Check the widget settings in GoHighLevel, not
// this file: the fields live there.
export const GHL_CHAT_WIDGET_ID: string = "6a978ded80392d2a8cce2370";

// ---------------------------------------------------------------------------
// Legal
// ---------------------------------------------------------------------------

// The registered legal name of the business, exactly as it appears on the
// filing. This is not decoration: A2P 10DLC registration checks the name on
// the privacy policy against the name on the campaign, and a mismatch is a
// common rejection reason.
//
// While this is empty the legal pages fall back to the trading name, which is
// fine to read but is NOT ready to submit for A2P. Set it to the registered
// name, including the entity suffix, before registering.
export const LEGAL_ENTITY_NAME: string = "";

// Mailing address for the legal pages. Carriers and app stores expect a real
// postal address on a privacy policy. A PO box or registered agent address is
// acceptable; this does not have to be where anybody sits.
//
// Left empty, the address block is omitted rather than printing a placeholder.
export const BUSINESS_ADDRESS: string[] = [];

// The date the current wording took effect. Update it whenever the substance
// of either legal page changes, not for a typo fix.
export const LEGAL_EFFECTIVE_DATE = "September 2, 2026";

// What the SMS program is called on the consent checkbox and in the terms.
// Keep it identical to the campaign description filed with the carrier.
export const SMS_PROGRAM_NAME = "Pillar & Frame client and enquiry messaging";

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

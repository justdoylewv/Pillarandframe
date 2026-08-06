// Structured data builders.
//
// Every schema block on the site is assembled here from the canonical entity
// sheet, so the facts a crawler reads on one page cannot contradict another.
//
// Two rules held throughout:
//   1. Nothing is asserted that is not true and not visible somewhere. No
//      invented hours, no coordinates we have not confirmed, no ratings.
//   2. Service-area business, so no street address is published. The area
//      served carries the location signal instead.

import {
  BASE_CITY,
  BASE_REGION,
  BASE_REGION_CODE,
  COUNTIES,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  ENTITY_DESCRIPTION,
  FOUNDER_NAME,
  FOUNDER_SAME_AS,
  PHONE_IS_PUBLIC,
  PRIMARY_CATEGORY,
  SAME_AS,
  SERVICE_AREA_TOWNS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/content/site";

// Stable node ids so the graph on every page points at one organization and
// one place rather than minting a new entity per page.
export const ORG_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Drops keys that came back empty so we never emit a hollow property. */
function compact<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => {
      if (v === null || v === undefined || v === "") return false;
      if (Array.isArray(v) && v.length === 0) return false;
      return true;
    })
  ) as T;
}

/**
 * Everywhere we work, as schema. Counties and towns are listed separately
 * because Google reads the administrative area and the town list differently.
 */
function areaServed() {
  const counties = COUNTIES.map((name) => ({
    "@type": "AdministrativeArea",
    name: `${name} County, ${BASE_REGION}`,
  }));
  const towns = SERVICE_AREA_TOWNS.map((name) => ({
    "@type": "City",
    name: `${name}, ${BASE_REGION}`,
  }));
  return [...counties, ...towns];
}

/** City and state only. A service-area business does not publish the street. */
function addressWithoutStreet() {
  return {
    "@type": "PostalAddress",
    addressLocality: BASE_CITY,
    addressRegion: BASE_REGION_CODE,
    addressCountry: "US",
  };
}

/**
 * The founder, as a node rather than a page. The visible copy stays
 * studio-voiced, so this exists purely to give the organization a real person
 * to resolve to.
 */
export function founderNode() {
  return compact({
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: FOUNDER_NAME,
    worksFor: { "@id": ORG_ID },
    sameAs: FOUNDER_SAME_AS,
  });
}

/**
 * The business itself. ProfessionalService inherits from LocalBusiness, which
 * is what the map pack and the local AI answers read.
 */
export function localBusinessNode() {
  return compact({
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: ENTITY_DESCRIPTION,
    knowsAbout: [
      "Video production",
      "Brand storytelling",
      "Google Business Profile optimization",
      "Local search visibility",
      "Copywriting",
      "Commercial photography",
    ],
    address: addressWithoutStreet(),
    areaServed: areaServed(),
    serviceType: PRIMARY_CATEGORY,
    email: CONTACT_EMAIL,
    telephone: PHONE_IS_PUBLIC ? CONTACT_PHONE : "",
    founder: { "@id": FOUNDER_ID },
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/photos/hero-operations.webp`,
    sameAs: SAME_AS,
  });
}

/** The site node, so page-level types have something to belong to. */
export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

/**
 * The graph that ships on every page. One request, one set of facts, all
 * cross-referenced by id.
 */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [localBusinessNode(), founderNode(), websiteNode()],
  };
}

/**
 * A service we sell, with the real price attached. Price queries trigger an AI
 * answer far more often than anything else, and almost nobody in this category
 * publishes numbers, so the number is the point.
 */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  price?: string;
  priceCurrency?: string;
  unit?: string;
}) {
  return compact({
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: PRIMARY_CATEGORY,
    provider: { "@id": ORG_ID },
    areaServed: areaServed(),
    offers: opts.price
      ? compact({
          "@type": "Offer",
          price: opts.price,
          priceCurrency: opts.priceCurrency ?? "USD",
          url: opts.url,
          availability: "https://schema.org/InStock",
          ...(opts.unit ? { description: opts.unit } : {}),
        })
      : undefined,
  });
}

/**
 * Questions and answers, built from the same array the page renders, so the
 * markup and the visible text cannot drift.
 *
 * Takes either shape used on this site: a single answer string, or the
 * multi-paragraph form the home page uses.
 */
export function faqSchema(
  items: { question: string; answer?: string; answers?: string[] }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answers ? item.answers.join(" ") : (item.answer ?? ""),
      },
    })),
  };
}

/**
 * A video, with its transcript.
 *
 * Retrievability is binary: a crawler that cannot read the words in a video
 * cannot cite them, so the transcript is the part that actually does the work.
 *
 * On the two location fields, which are not interchangeable:
 *   embedUrl   the player. For a film hosted on YouTube this is the
 *              youtube.com/embed/ID form, and it is what connects this page to
 *              the video Google has already indexed on YouTube.
 *   contentUrl the media file itself. Only for video we serve directly, such
 *              as an mp4 in public/. Never point this at a YouTube page.
 *
 * uploadDate is required for video rich results. It stays empty until a real
 * date is known rather than being guessed, so a video without one simply is
 * not eligible instead of carrying a date that is wrong.
 */
export function videoSchema(opts: {
  name: string;
  description: string;
  url: string;
  thumbnailUrl?: string | null;
  embedUrl?: string | null;
  contentUrl?: string | null;
  transcript?: string | null;
  uploadDate?: string | null;
}) {
  return compact({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    thumbnailUrl: opts.thumbnailUrl ?? "",
    embedUrl: opts.embedUrl ?? "",
    contentUrl: opts.contentUrl ?? "",
    transcript: opts.transcript ?? "",
    uploadDate: opts.uploadDate ?? "",
    publisher: { "@id": ORG_ID },
  });
}

/** Trail for a nested page. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.name,
      item: `${SITE_URL}${step.path}`,
    })),
  };
}

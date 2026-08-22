// Town pages, and the rule that decides whether one may exist.
//
// A town page is only allowed here when there is a City Spotlight Ohio film
// for that town. That is the whole gate, and it is enforced by the types
// below rather than by anyone remembering.
//
// The reason is the failure mode this avoids. Seventeen pages built from one
// template with the town name swapped is the doorway pattern named in Google's
// own spam policy, and an assistant collapses near-duplicates before it cites
// anything, so the pages would not earn a mention either. The test a town page
// has to pass is simple: is there anything on it that a person in that town
// could not have read on the page for the next town over?
//
// A film shot in that town passes the test on its own. It is footage of that
// place, a transcript full of that town's specifics, and something no
// competitor can copy. Without one, the town stays on the service area page,
// which names every town we cover and is a legitimate single page.
//
// This list is empty on purpose. No town pages are generated until a film is
// added, so the route builds zero pages today and an unknown town returns 404
// rather than rendering an empty shell.
//
// To add one, fill in every field. There is no partial entry: a page without a
// transcript cannot be read by the crawlers this is for, and a page without an
// upload date is not eligible for a video result.

import { SERVICE_AREA } from "@/lib/content/site";

export interface TownFilm {
  /** Full YouTube watch or share URL for the City Spotlight film. */
  url: string;
  /** The film's title as published. */
  title: string;
  /** One or two sentences. What the film is actually about. */
  description: string;
  /** ISO 8601, the date it went live. Required for a video result. */
  uploadDate: string;
  /**
   * The spoken words. This is the part that does the work: a crawler that
   * cannot read what was said cannot quote it, and a town film's transcript is
   * where the local specifics actually live.
   */
  transcript: string;
}

export interface Town {
  /** URL segment. Lowercase, hyphenated. */
  slug: string;
  /** Must match a town in SERVICE_AREA exactly. */
  name: string;
  /** County, without the word "County". */
  county: string;
  /**
   * What is true about working here that is not true of the next town over.
   * If this could be pasted onto another town's page unchanged, the page is
   * not ready.
   */
  intro: string;
  /** The film. Not optional: no film, no page. */
  film: TownFilm;
  /** Clients in this town, by name. Empty is fine. */
  clients?: string[];
}

export const TOWNS: Town[] = [];

/** Look up one town page. */
export function getTown(slug: string): Town | undefined {
  return TOWNS.find((t) => t.slug === slug);
}

/**
 * Guards against a town page for somewhere we do not claim to serve, which
 * would contradict the service area on the site and on the Google profile.
 * Runs at build time, so a bad entry fails the build rather than shipping.
 */
export function assertTownsAreServed(): void {
  const served = new Set(SERVICE_AREA.flatMap((g) => g.towns));
  for (const town of TOWNS) {
    if (!served.has(town.name)) {
      throw new Error(
        `Town page "${town.name}" is not in SERVICE_AREA. Add it to the service area and the Google Business Profile first, or remove the page.`
      );
    }
  }
}

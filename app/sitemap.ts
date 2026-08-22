import type { MetadataRoute } from "next";
import { COMING_SOON, SITE_URL } from "@/lib/content/site";
import { CASE_STUDIES } from "@/lib/content/caseStudies";
import { TOWNS } from "@/lib/content/towns";

export default function sitemap(): MetadataRoute.Sitemap {
  // While the holding page is up, every route serves the same thing. Only
  // list the one URL so crawlers do not index a dozen copies of it.
  if (COMING_SOON) {
    return [{ url: SITE_URL, changeFrequency: "daily", priority: 1 }];
  }

  // Stamped at build time. A sitemap without dates gives a crawler no reason
  // to recheck anything, and every deploy is a genuine rebuild of these pages.
  const lastModified = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/engine`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${SITE_URL}/service-area`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/book`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const caseStudyUrls: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE_URL}/work/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Empty until a town has a City Spotlight film to carry its page. Listed
  // automatically once one does, so adding a film is a single data edit.
  const townUrls: MetadataRoute.Sitemap = TOWNS.map((t) => ({
    url: `${SITE_URL}/service-area/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...townUrls, ...caseStudyUrls].map((entry) => ({
    lastModified,
    ...entry,
  }));
}

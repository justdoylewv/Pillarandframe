import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content/site";
import { CASE_STUDIES } from "@/lib/content/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/trust-engine`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/systems-coaching`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/book`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const caseStudyUrls: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE_URL}/work/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...caseStudyUrls];
}

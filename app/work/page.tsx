import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import MediaFrame from "@/components/MediaFrame";
import JsonLd from "@/components/JsonLd";
import { BOOKING_URL, CTA_LABEL, SITE_URL } from "@/lib/content/site";
import { CASE_STUDIES } from "@/lib/content/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real clients, real systems, real numbers. Trust engines and systems coaching across healthcare, lending, wealth management, and IT.",
  alternates: { canonical: "/work" },
};

const FILTERS = [
  { key: "all", label: "All" },
  { key: "trust-engine", label: "Trust Engine" },
  { key: "systems-coaching", label: "Systems Coaching" },
] as const;

const SERVICE_KEYS: Record<string, string> = {
  "Trust Engine": "trust-engine",
  "Systems Coaching": "systems-coaching",
};

interface PageProps {
  searchParams: { service?: string };
}

export default function WorkPage({ searchParams }: PageProps) {
  const active =
    FILTERS.find((f) => f.key === searchParams.service)?.key ?? "all";
  const studies =
    active === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => SERVICE_KEYS[c.service] === active);

  // Lead with a project that has real media so the featured frame showcases
  // footage, not an empty placeholder.
  const featured = studies.find((s) => s.videoUrl || s.heroImage) ?? studies[0];
  const rest = studies.filter((s) => s.slug !== featured?.slug);

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Work | Pillar & Frame",
    description:
      "Real clients, real systems, real numbers. Trust engines and systems coaching across healthcare, lending, wealth management, and IT.",
    url: `${SITE_URL}/work`,
    publisher: { "@type": "Organization", name: "Pillar & Frame", url: SITE_URL },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: CASE_STUDIES.length,
      itemListElement: CASE_STUDIES.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.client,
        url: `${SITE_URL}/work/${c.slug}`,
      })),
    },
  };

  return (
    <div className="animate-fadeIn">
      <JsonLd data={collectionLd} />

      {/* Hero */}
      <section className="border-b border-ash-100 bg-paper pt-24 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-8">The work</Kicker>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl">
            Real clients. Real systems. Real numbers.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            Four stories. Two services. Every number below is real, and every
            quote is verbatim.
          </p>

          {/* Filter chips */}
          <div className="mt-12 flex flex-wrap gap-3">
            {FILTERS.map((filter) => (
              <Link
                key={filter.key}
                href={
                  filter.key === "all" ? "/work" : `/work?service=${filter.key}`
                }
                className={`rounded-[2px] border px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  active === filter.key
                    ? "border-black bg-black text-paper"
                    : "border-ash-300 text-ash-700 hover:border-black hover:text-black"
                }`}
              >
                {filter.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Featured project */}
          {featured && (
            <Link href={`/work/${featured.slug}`} className="group block">
              <MediaFrame
                aspect="wide"
                image={featured.heroImage}
                videoUrl={featured.videoUrl}
                videoProvider={featured.videoProvider}
                alt={featured.client}
                caption={`${featured.client} still coming soon`}
              />
              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em]">
                    <span className="text-purple-600">{featured.service}</span>
                    <span className="text-ash-100">|</span>
                    <span className="text-ash-500">
                      {featured.tags
                        .filter((t) => t !== featured.service)
                        .join(" · ")}
                    </span>
                  </div>
                  <h2 className="font-serif text-4xl tracking-tight text-black transition-colors group-hover:text-purple-600 md:text-5xl">
                    {featured.client}
                  </h2>
                  <p className="mt-3 max-w-xl font-serif text-lg italic leading-relaxed text-ash-500">
                    {featured.oneLiner}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  Read the story
                  <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
                </span>
              </div>
            </Link>
          )}

          {/* Remaining projects */}
          {rest.length > 0 && (
            <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:mt-20">
              {rest.map((study) => (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="group block"
                >
                  <MediaFrame
                    aspect="video"
                    image={study.heroImage}
                    videoUrl={study.videoUrl}
                    videoProvider={study.videoProvider}
                    alt={study.client}
                    caption={`${study.client} still coming soon`}
                  />
                  <div className="mt-6">
                    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em]">
                      <span className="text-purple-600">{study.service}</span>
                      <span className="text-ash-100">|</span>
                      <span className="text-ash-500">
                        {study.tags
                          .filter((t) => t !== study.service)
                          .join(" · ")}
                      </span>
                    </div>
                    <h2 className="mb-3 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                      {study.client}
                    </h2>
                    <p className="mb-6 font-serif text-lg italic leading-relaxed text-ash-500">
                      {study.oneLiner}
                    </p>
                    <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                      Read the story
                      <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <h2 className="text-center font-serif text-2xl tracking-tight text-paper md:text-left md:text-3xl">
            Your business could be the fifth story.
          </h2>
          <CtaButton href={BOOKING_URL} variant="solidLight" className="shrink-0">
            {CTA_LABEL}
          </CtaButton>
        </div>
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import JsonLd from "@/components/JsonLd";
import PullQuoteBlock from "@/components/PullQuoteBlock";
import VideoEmbed from "@/components/VideoEmbed";
import Writeup from "@/components/Writeup";
import { BOOKING_URL, CTA_LABEL, SITE_URL } from "@/lib/content/site";
import { CASE_STUDIES, getCaseStudy } from "@/lib/content/caseStudies";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.metaTitle} | Pillar & Frame`,
      description: study.metaDescription,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const next = getCaseStudy(study.nextSlug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.client}: ${study.oneLiner}`,
    description: study.metaDescription,
    url: `${SITE_URL}/work/${study.slug}`,
    mainEntityOfPage: `${SITE_URL}/work/${study.slug}`,
    articleSection: study.service,
    keywords: study.tags,
    publisher: {
      "@type": "Organization",
      name: "Pillar & Frame",
      url: SITE_URL,
    },
    author: { "@type": "Organization", name: "Pillar & Frame" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      {
        "@type": "ListItem",
        position: 3,
        name: study.client,
        item: `${SITE_URL}/work/${study.slug}`,
      },
    ],
  };

  return (
    <div className="animate-fadeIn bg-paper pb-24">
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />

      {/* Hero */}
      <header className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="border border-ash-100 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mb-8 font-serif text-5xl leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
            {study.client}
          </h1>
          <p className="mx-auto max-w-3xl font-serif text-lg italic leading-snug text-ash-500 md:text-2xl">
            {study.oneLiner}
          </p>
        </div>
      </header>

      {/* Hero image */}
      <div className="mx-auto max-w-7xl px-6">
        {study.heroImage ? (
          <div className="relative aspect-video overflow-hidden bg-bone">
            <Image
              src={study.heroImage}
              alt={study.client}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        ) : (
          <ImagePlaceholder aspect="video" />
        )}
      </div>

      {/* Video */}
      {study.videoUrl && study.videoProvider && (
        <section className="mx-auto my-16 max-w-5xl px-6">
          <VideoEmbed
            url={study.videoUrl}
            provider={study.videoProvider}
            title={`${study.client} film`}
          />
        </section>
      )}

      {/* The story */}
      <article className="mx-auto mt-24 max-w-[980px] px-6">
        <Kicker className="mb-10">The story</Kicker>
        <Writeup content={study.story} />
      </article>

      {/* Pull quote */}
      <div className="mx-auto max-w-[980px] px-6">
        <PullQuoteBlock pullQuote={study.pullQuote} />
      </div>

      {/* What we built */}
      <section className="mx-auto mt-24 max-w-[980px] px-6">
        <Kicker className="mb-10">What we built</Kicker>
        <ul className="space-y-5">
          {study.whatWeBuilt.map((item) => (
            <li
              key={item}
              className="border-l border-purple-600 pl-6 text-lg leading-relaxed text-ash-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Stat strip */}
      <section className="mx-auto mt-24 max-w-[980px] px-6">
        <div className="grid grid-cols-1 divide-y divide-ash-100 border-y border-ash-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {study.stats.map((stat) => (
            <div key={stat.label} className="py-10 sm:px-8 sm:first:pl-0">
              <span className="block font-serif text-5xl tracking-tight text-black">
                {stat.value}
              </span>
              <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {study.gallery.length > 0 && (
        <section className="mx-auto mt-24 max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {study.gallery.map((img, i) => (
              <div key={img} className="relative aspect-[4/3] overflow-hidden bg-bone">
                <Image
                  src={img}
                  alt={`${study.client} photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next story */}
      {next && (
        <section className="mx-auto mt-24 max-w-[980px] px-6">
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between border-t border-ash-100 pt-10"
          >
            <div>
              <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                Next story
              </span>
              <span className="font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600 md:text-4xl">
                {next.client}
              </span>
            </div>
            <span className="h-[1px] w-10 bg-black transition-all group-hover:w-20 group-hover:bg-purple-600" />
          </Link>
        </section>
      )}

      {/* CTA strip */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 bg-black px-8 py-14 text-center md:flex-row md:px-14 md:text-left">
          <h2 className="font-serif text-2xl tracking-tight text-paper md:text-3xl">
            {study.ctaHeading}
          </h2>
          <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
            <CtaButton href={study.ctaServiceHref} variant="outlineLight">
              {study.ctaServiceLabel}
            </CtaButton>
            <CtaButton href={BOOKING_URL} variant="solidLight">
              {CTA_LABEL}
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}

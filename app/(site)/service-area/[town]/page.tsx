import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import JsonLd from "@/components/JsonLd";
import CtaButton from "@/components/CtaButton";
import VideoEmbed from "@/components/VideoEmbed";
import { AREA_QUESTIONS } from "@/lib/content/questions";
import {
  assertTownsAreServed,
  getTown,
  TOWNS,
  type Town,
} from "@/lib/content/towns";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  videoSchema,
} from "@/lib/content/schema";
import { normalizeVideoUrl, deriveThumbnail } from "@/lib/video";
import {
  BASE_CITY,
  BASE_REGION,
  BOOKING_URL,
  CITY_SPOTLIGHT_LINE,
  CITY_SPOTLIGHT_URL,
  CTA_LABEL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/content/site";

// One page per town, generated only for towns that have a film.
//
// TOWNS is empty until a City Spotlight film is added, so this route builds
// nothing today. That is deliberate: see lib/content/towns.ts for why a town
// page without a film is a liability rather than a gap.

export const dynamicParams = false;

export function generateStaticParams() {
  // Fails the build rather than shipping a page for a town we do not serve.
  assertTownsAreServed();
  return TOWNS.map((town) => ({ town: town.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) return {};

  return {
    title: `Video production in ${town.name}, ${BASE_REGION}`,
    description: `${SITE_NAME} films founder-led businesses in ${town.name}, ${BASE_REGION}. ${town.intro}`,
    alternates: { canonical: `/service-area/${town.slug}` },
  };
}

function TownBody({ town }: { town: Town }) {
  const embedUrl = normalizeVideoUrl(town.film.url, "youtube");
  const thumbnail = deriveThumbnail(town.film.url, "youtube");
  const pageUrl = `${SITE_URL}/service-area/${town.slug}`;

  return (
    <div className="animate-fadeIn">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service area", path: "/service-area" },
          { name: town.name, path: `/service-area/${town.slug}` },
        ])}
      />
      <JsonLd
        data={videoSchema({
          name: town.film.title,
          description: town.film.description,
          url: pageUrl,
          embedUrl,
          thumbnailUrl: thumbnail,
          transcript: town.film.transcript,
          uploadDate: town.film.uploadDate,
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: `Video production in ${town.name}, ${BASE_REGION}`,
          description: town.intro,
          url: pageUrl,
        })}
      />
      <JsonLd data={faqSchema(AREA_QUESTIONS)} />

      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker dark className="mb-8">
            {town.county} County
          </Kicker>
          <h1 className="max-w-[20ch] font-serif text-4xl leading-[0.95] font-black tracking-tighter text-paper sm:text-5xl md:text-6xl">
            Video production in{" "}
            <span className="italic text-gold-500">
              {town.name}, {BASE_REGION}.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash-300">
            {town.intro}
          </p>
          {town.clients?.length ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash-300">
              Businesses we have filmed here: {town.clients.join(", ")}.
            </p>
          ) : null}
        </div>
      </section>

      {/* The film. This is the reason the page is allowed to exist, so it
          leads rather than sitting at the bottom as decoration. */}
      <section className="bg-ink py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker dark className="mb-6">
            Filmed in {town.name}
          </Kicker>
          <h2 className="max-w-[24ch] font-serif text-3xl font-black tracking-tighter text-paper md:text-5xl">
            {town.film.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash-300">
            {town.film.description}
          </p>
          <div className="mt-12">
            <VideoEmbed
              url={town.film.url}
              provider="youtube"
              title={town.film.title}
            />
          </div>
          <p className="mt-6 text-base leading-relaxed text-ash-500">
            {CITY_SPOTLIGHT_LINE}{" "}
            <Link
              href={CITY_SPOTLIGHT_URL}
              className="underline underline-offset-4 transition-colors hover:text-paper"
            >
              See the rest of the towns
            </Link>
            .
          </p>
        </div>
      </section>

      {/* The transcript, visible. A film nobody can read is a film nobody can
          quote, and this is the only text on the page that is specific to
          this town in a way no template could produce. */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">What was said</Kicker>
          <h2 className="font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            The transcript.
          </h2>
          <div className="mt-10 space-y-5 border-l-[3px] border-l-gold-500 bg-bone px-6 py-8 sm:px-8">
            {town.film.transcript
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line, i) => (
                <p key={i} className="text-lg leading-relaxed text-ash-700">
                  {line}
                </p>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Common questions</Kicker>
          <h2 className="font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            Straight answers.
          </h2>
          <div className="mt-12">
            {AREA_QUESTIONS.map((item) => (
              <div key={item.question} className="border-t border-ash-100 py-9">
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black md:text-3xl">
                  {item.question}
                </h3>
                <p className="text-lg leading-relaxed text-ash-700">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <h2 className="mx-auto max-w-[22ch] font-serif text-4xl leading-tight font-black tracking-tighter text-paper md:text-6xl">
            We are up the road in{" "}
            <span className="italic text-gold-500">{BASE_CITY}.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-[46ch] text-lg leading-relaxed text-ash-300">
            One filming day at your place in {town.name}, then ninety days of
            work installed for you.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton href={BOOKING_URL} variant="solidLight">
              {CTA_LABEL}
            </CtaButton>
            <CtaButton href="/service-area" variant="outlineLight">
              The whole service area
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) notFound();
  return <TownBody town={town} />;
}

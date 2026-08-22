import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import JsonLd from "@/components/JsonLd";
import CtaButton from "@/components/CtaButton";
import { AREA_QUESTIONS, toFaqItems } from "@/lib/content/questions";
import { breadcrumbSchema, faqSchema } from "@/lib/content/schema";
import {
  BASE_CITY,
  BASE_REGION,
  BOOKING_URL,
  CTA_LABEL,
  SERVICE_AREA,
  SITE_NAME,
  SITE_URL,
} from "@/lib/content/site";

// One page for the whole service area, rather than one page per town.
//
// The tempting version of this is seventeen near-identical pages with the town
// name swapped. That pattern has a name in Google's own spam policy, doorway
// pages, and the give-away is exactly what it would be here: nothing on the
// Powell page that a person in Powell could not have read on the Sunbury page.
// Assistants are worse for it than search is, because near-duplicate pages get
// collapsed to one before anything is cited.
//
// So: one page that earns the area terms with real detail, and separate town
// pages only where there is a client, a story, or something true to say that
// is specific to that town.

export const metadata: Metadata = {
  title: "Video production in Columbus and central Ohio",
  description:
    "Pillar & Frame is a video and copy studio based in Delaware, Ohio, serving Columbus and the surrounding counties of Delaware, Franklin, and Union. Filming happens at your place of business.",
  alternates: { canonical: "/service-area" },
};

const HOW_LOCAL_HELPS = [
  {
    n: "01",
    title: "We film where you work",
    body: "Your office, your job site, your kitchen table. The rooms your clients already recognize, rather than a rented white wall that could be anywhere in the country.",
  },
  {
    n: "02",
    title: "We know the market you sell into",
    body: "A mortgage broker in Delaware County and one in Upper Arlington are answering different worries. What goes on camera reflects the market you are actually in.",
  },
  {
    n: "03",
    title: "Being close means we show up",
    body: "One capture day, in person, at your place. Same county or the next one over, which is why the day happens at all rather than turning into a Zoom link.",
  },
];

export default function ServiceAreaPage() {
  const faqs = toFaqItems(AREA_QUESTIONS);

  return (
    <div className="animate-fadeIn">
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service area", path: "/service-area" },
        ])}
      />

      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker dark className="mb-8">
            Where we work
          </Kicker>
          <h1 className="max-w-[20ch] font-serif text-4xl leading-[0.95] font-black tracking-tighter text-paper sm:text-5xl md:text-6xl">
            Video production for{" "}
            <span className="italic text-gold-500">
              Columbus and central Ohio.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash-300">
            {SITE_NAME} is based in {BASE_CITY}, {BASE_REGION}, about
            twenty-five miles north of downtown Columbus. We film on location,
            so the work happens at your place of business rather than at a
            studio you have to drive to.
          </p>
        </div>
      </section>

      {/* The counties, laid out as places rather than as a keyword list. */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Three counties</Kicker>
          <h2 className="max-w-[24ch] font-serif text-4xl font-black tracking-tighter text-black md:text-6xl">
            Close enough to be there in person.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {SERVICE_AREA.map((group) => (
              <div key={group.county} className="border-t border-ash-100 pt-8">
                <h3 className="font-serif text-2xl tracking-tight text-black md:text-3xl">
                  {group.county} County
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.towns.map((town) => (
                    <li
                      key={town}
                      className="flex items-baseline gap-4 text-lg leading-relaxed text-ash-700"
                    >
                      <span
                        className="h-[5px] w-[5px] shrink-0 translate-y-[-3px] bg-gold-500"
                        aria-hidden="true"
                      />
                      <span>
                        {town}, {BASE_REGION}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-[60ch] text-lg leading-relaxed text-ash-700">
            Outside these three counties, ask. We take work further out when the
            project is right, and we would rather tell you honestly whether the
            travel makes sense than quietly add it to the invoice.
          </p>
        </div>
      </section>

      {/* Why the location is not just a claim */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Why local matters here</Kicker>
          <h2 className="max-w-[24ch] font-serif text-4xl font-black tracking-tighter text-black md:text-6xl">
            This is not work that ships remotely.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {HOW_LOCAL_HELPS.map((item) => (
              <div key={item.n} className="border-t border-ash-100 pt-8">
                <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.3em] text-gold-700">
                  {item.n}
                </span>
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-ash-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The questions, answered so they can be quoted whole. */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Common questions</Kicker>
          <h2 className="font-serif text-4xl font-black tracking-tighter text-black md:text-6xl">
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
                {item.more?.map((p) => (
                  <p
                    key={p}
                    className="mt-4 text-lg leading-relaxed text-ash-700"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <h2 className="mx-auto max-w-[22ch] font-serif text-4xl leading-tight font-black tracking-tighter text-paper md:text-6xl">
            One day of filming.{" "}
            <span className="italic text-gold-500">Ninety days of work.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-[46ch] text-lg leading-relaxed text-ash-300">
            See what a Foundation covers, or book a call and we will tell you
            straight whether it is a fit.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton href={BOOKING_URL} variant="solidLight">
              {CTA_LABEL}
            </CtaButton>
            <CtaButton href="/engine" variant="outlineLight">
              See The Engine
            </CtaButton>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Video production in Columbus and central Ohio",
          url: `${SITE_URL}/service-area`,
          description:
            "The counties and towns Pillar & Frame serves from Delaware, Ohio.",
        }}
      />
    </div>
  );
}

import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import JsonLd from "@/components/JsonLd";
import { BOOKING_URL, CITY_SPOTLIGHT_URL, CTA_LABEL, SITE_URL } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pillar & Frame is a story-led film studio in Ohio. Real people, real proof, and the systems that keep trust working.",
  alternates: { canonical: "/about" },
};

const ABOUT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Pillar & Frame",
  description:
    "Pillar & Frame is a story-led film studio in Ohio. Real people, real proof, and the systems that keep trust working.",
  url: `${SITE_URL}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Pillar & Frame",
    url: SITE_URL,
  },
};

const HOW_WE_WORK = [
  {
    title: "Part documentary, part promo.",
    body: "We do the homework before the camera comes out. On the day, we run the plan and stay open for the moments you didn't script. The truth of a documentary. The punch of an ad.",
  },
  {
    title: "Real human origin.",
    body: "Real people, on camera. Verbatim quotes. No stock. No AI-generated content. If it didn't happen, it doesn't go in the work.",
  },
  {
    title: "Built to hand over.",
    body: "Everything we make is yours: the films, the library, the guides, the documentation. A studio team runs the work: producers, editors, coaches, with senior review before anything ships. And we build your side to run without us.",
  },
];

export default function AboutPage() {
  return (
    <div className="animate-fadeIn">
      <JsonLd data={ABOUT_JSONLD} />

      {/* Hero: light, editorial */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">The studio</Kicker>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-black sm:text-6xl md:text-7xl">
            The story and the system.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            Pillar &amp; Frame is a story-led film studio in Ohio. We help
            businesses that run on trust become the obvious choice: real
            stories on film, and the systems that keep them working.
          </p>
        </div>
      </section>

      {/* Hero image slot */}
      <div className="mx-auto max-w-7xl px-6 pt-16">
        <ImagePlaceholder aspect="wide" label="Behind the scenes coming soon" />
      </div>

      {/* What we believe */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <div className="space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              Every business we work with has the same two halves. The story:
              why you do this, who you&rsquo;ve helped, what you know that
              nobody else says out loud. And the system: the pipeline, the
              follow-up, the rhythm that keeps it all moving.
            </p>
            <p>
              Most vendors pick one half. A videographer hands you a film and
              leaves. A consultant hands you a plan and leaves. Both halves sit
              unfinished.
            </p>
            <p>We build both, together, because they only work together.</p>
            <p>
              The studio came out of years behind a camera: hundreds of
              interviews, shoots in more than ten countries, hospitals, job
              sites, kitchens, boardrooms. Somewhere in all of it, a pattern
              became a conviction: the moment a person decides you are safe to
              talk to is the moment the real story shows up.
            </p>
          </div>
          <div className="my-20 border-b border-t border-ash-100 py-16 text-center">
            <p className="font-serif text-2xl italic leading-tight tracking-tight text-black md:text-4xl">
              &ldquo;Trust is the most important piece of gear.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {HOW_WE_WORK.map((block) => (
              <div key={block.title} className="border-t border-ash-100 pt-8">
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {block.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Spotlight */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Also from the studio</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            City Spotlight Ohio
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            We publish a documentary magazine about the best local businesses
            in Central Ohio towns. Film, photography, and longform features.
            Same craft, pointed at the places we live.
          </p>
          <a
            href={CITY_SPOTLIGHT_URL}
            target="_blank"
            rel="noopener"
            className="group mt-10 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black"
          >
            Visit City Spotlight Ohio
            <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <Kicker dark className="mb-8 justify-center">
            Talk to us
          </Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-paper md:text-6xl">
            Open to a strategy call?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl">
            Thirty minutes. Written report within 48 hours, whether we work
            together or not.
          </p>
          <div className="mt-12">
            <CtaButton href={BOOKING_URL} variant="solidLight">
              {CTA_LABEL}
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}

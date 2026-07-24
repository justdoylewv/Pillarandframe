import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import { BOOKING_URL, CTA_LABEL } from "@/lib/content/site";
import {
  A_LA_CARTE,
  CADENCE,
  FULL_ENGINE,
  HOW_IT_WORKS,
  LAUNCH_KIT,
  LAUNCH_KIT_OFFER,
  MONTHLY_DELIVERABLES,
  POST_FOR_YOU,
  PRICING_NOTE,
  TRUST_ENGINE_FAQ,
  type Offer,
} from "@/lib/content/services";

export const metadata: Metadata = {
  title: "The Trust Engine",
  description:
    "A done-for-you content engine for founder-driven service brands. We film you once a month and turn it into a month of videos, posts, captions, and graphics in your voice. A launch kit to start, coaching built in.",
  alternates: { canonical: "/trust-engine" },
};

function Tick() {
  return (
    <span className="mt-2 h-[3px] w-[3px] shrink-0 bg-gold-500" aria-hidden="true" />
  );
}

function OfferCard({ offer, featured = false }: { offer: Offer; featured?: boolean }) {
  return (
    <div
      className={`flex flex-col border p-8 md:p-10 ${
        featured ? "border-purple-600 bg-paper" : "border-ash-100 bg-paper"
      }`}
    >
      {offer.badge && (
        <div className="mb-6">
          <span className="inline-block rounded-[2px] bg-gold-500 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-black">
            {offer.badge}
          </span>
        </div>
      )}
      <h3 className="font-serif text-2xl tracking-tight text-black md:text-3xl">
        {offer.name}
      </h3>
      <p className="mt-4 flex items-baseline gap-2">
        <span className="font-serif text-5xl tracking-tight text-black">
          {offer.price}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-500">
          {offer.period}
        </span>
      </p>
      {offer.setup && (
        <p className="mt-3 text-sm text-ash-700">{offer.setup}</p>
      )}
      {offer.note && (
        <p className="mt-2 text-sm leading-relaxed text-ash-500">{offer.note}</p>
      )}
      <ul className="mt-8 space-y-3 border-t border-ash-100 pt-8">
        {offer.includes.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-ash-700">
            <Tick />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <CtaButton
          href={BOOKING_URL}
          variant={featured ? "solid" : "outline"}
          className="w-full text-center"
        >
          {CTA_LABEL}
        </CtaButton>
      </div>
    </div>
  );
}

export default function TrustEnginePage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero: light, big serif */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">
            The Trust Engine &middot; For founder-driven service brands
          </Kicker>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl">
            You&rsquo;re great at the work. You&rsquo;re invisible online.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            That&rsquo;s not a talent problem. It&rsquo;s a visibility problem.
            We film you once a month and turn it into a full month of content in
            your voice. Videos, posts, captions, graphics. You show up as
            yourself. We do the rest.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ash-500">
            Done for you &middot; Filmed in your voice &middot; Real human
            origin, no AI, no stock
          </p>
          <div className="mt-12">
            <CtaButton href={BOOKING_URL}>{CTA_LABEL}</CtaButton>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Why content stalls</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Your best proof is invisible.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              You know you should post. But you&rsquo;re busy running the
              business. So you don&rsquo;t, or you start and go quiet by March.
            </p>
            <p>
              Meanwhile your buyers look you up before they ever call. Show up
              looking trustworthy and you win. Stay quiet and the competitor who
              posts gets the deal. You never even know it happened.
            </p>
            <p>
              The two hard jobs are making the content and keeping it
              consistent. We take both off your plate.
            </p>
          </div>
          <p className="mt-16 border-l border-purple-600 pl-8 font-serif text-2xl leading-snug text-black md:text-3xl">
            The deal goes to whoever looks safer online. Not whoever does better
            work.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">How it works</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            You do almost nothing.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.num} className="border-t border-ash-100 pt-8">
                <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                  {step.num}
                </span>
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery / North Star */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Before the camera</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            It starts with your story, not a camera.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              Great content starts with a clear story. Before we film anything,
              we get to the core of who you are and what you stand for. A short
              survey on your own time, then one focused hour where we ask the
              questions and pull the story out of you.
            </p>
            <p>
              That hour becomes your Content Marketing Guide: what you want to be
              known for, what your audience actually wants, and the one belief
              everything hangs on. Every clip, post, and caption gets checked
              against it. It&rsquo;s why your content sounds like you and points
              one direction. You keep it, whether you stay with us or not.
            </p>
          </div>
        </div>
      </section>

      {/* The launch kit */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">To start</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            One shoot fills your library.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ash-700">
            Your first shoot builds a whole kit of content. It works all year,
            and we keep using it for months before we film again.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {LAUNCH_KIT.map((item) => (
              <div key={item.label} className="flex gap-4 border-t border-ash-100 pt-6">
                <Tick />
                <div>
                  <h3 className="font-serif text-xl tracking-tight text-black">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-ash-700">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-base leading-relaxed text-ash-500">
            The same kit for every client. Everything you need to get going, a
            branded look that makes every video yours, and a simple guide to use
            it all. Only your stories change.
          </p>
        </div>
      </section>

      {/* Every month */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Every month</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Same set of content, every month.
          </h2>
          <div className="mt-14 divide-y divide-ash-100 border-y border-ash-100">
            {MONTHLY_DELIVERABLES.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 py-6 sm:grid-cols-[6rem_14rem_1fr]"
              >
                <span className="font-serif text-4xl tracking-tight text-black">
                  {item.count}
                </span>
                <span className="font-serif text-xl tracking-tight text-black">
                  {item.label}
                </span>
                <span className="col-span-2 mt-2 text-base leading-relaxed text-ash-700 sm:col-span-1 sm:mt-0">
                  {item.body}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-base leading-relaxed text-ash-500">
            One filming session becomes a full month of content. Your launch kit
            keeps working underneath it all year.
          </p>
        </div>
      </section>

      {/* The rhythm / cadence */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">The rhythm</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            One big shoot to start. Then we keep it alive.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {CADENCE.map((item) => (
              <div key={item.when} className="border-t border-ash-100 pt-8">
                <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                  {item.when}
                </h3>
                <p className="text-base leading-relaxed text-ash-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where it goes */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Where trust gets checked</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Your audience checks LinkedIn. AI reads the rest.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              <strong className="font-semibold text-black">LinkedIn</strong> is
              where you build a personal brand in front of your audience. A real
              person with a clear point of view and filmed proof beats any
              company page. It is how buyers get to know you before the first
              call.
            </p>
            <p>
              When someone asks AI who to trust, it can&rsquo;t read your
              LinkedIn. It reads{" "}
              <strong className="font-semibold text-black">
                your website, your pinned social posts, and your Google Business
                Profile
              </strong>
              . Those three are the core of AI SEO. Keep them fed with fresh,
              real proof, and that is how you end up in the answer.
            </p>
            <p>
              A Google Business Profile that looks alive, with recent photos,
              videos, and posts, reads safer and ranks better. The pinned posts
              come straight from your launch kit.
            </p>
            <p>
              You get the guide for all of it. Prefer it handled? We run the
              posting for you, so the content actually goes out on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Simple pricing</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            One number. No surprises.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <OfferCard offer={FULL_ENGINE} featured />
            <OfferCard offer={LAUNCH_KIT_OFFER} />
          </div>

          {/* Optional posting */}
          <div className="mt-8 flex flex-col gap-4 border border-ash-100 bg-bone p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-baseline gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
                  Optional
                </span>
                <span className="font-serif text-2xl tracking-tight text-black">
                  {POST_FOR_YOU.price}
                  <span className="ml-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ash-500">
                    {POST_FOR_YOU.period}
                  </span>
                </span>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-ash-700">
                {POST_FOR_YOU.body}
              </p>
            </div>
          </div>

          {/* A la carte */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl tracking-tight text-black md:text-3xl">
              Not ready for all of it? Start with one piece.
            </h3>
            <div className="mt-8 divide-y divide-ash-100 border-y border-ash-100">
              {A_LA_CARTE.map((item) => (
                <div
                  key={item.what}
                  className="grid grid-cols-1 gap-x-8 gap-y-2 py-6 sm:grid-cols-[14rem_1fr]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-xl tracking-tight text-black">
                      {item.what}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-purple-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-ash-700">
                    {item.goodIf}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-ash-500">
            {PRICING_NOTE}
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">The guarantee</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Love it, or we keep working.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                Love it, or we fix it
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                Show up and tell your stories, and you&rsquo;ll get content
                you&rsquo;re proud to put your name on. If something misses, we
                redo it until it&rsquo;s right. No charge.
              </p>
            </div>
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                No lock-in
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                After three months, you&rsquo;re free to leave anytime. And
                everything we make is yours to keep, forever.
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-ash-500">
            Why three months? Trust takes a little time to build. If you
            can&rsquo;t give it ninety days, we&rsquo;re probably not the right
            fit.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">Running now</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            The engine, in the wild.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Link
              href="/work/frontier-technologies"
              className="group block border-t border-ash-100 pt-8"
            >
              <h3 className="mb-4 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                Frontier Technologies
              </h3>
              <p className="mb-6 text-base leading-relaxed text-ash-700">
                A founder&rsquo;s personal brand, built from scratch and posted
                every week. Director-level buyers, more conversations, podcast
                invitations. The brand coming online.
              </p>
              <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                Read the story
                <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
              </span>
            </Link>
            <Link
              href="/work/memorial-health"
              className="group block border-t border-ash-100 pt-8"
            >
              <h3 className="mb-4 font-serif text-3xl tracking-tight text-black transition-colors group-hover:text-purple-600">
                Memorial Health
              </h3>
              <p className="mb-6 text-base leading-relaxed text-ash-700">
                A hospital foundation films its new emergency department while
                it&rsquo;s built. Donor stories now, opening-day content later,
                from the same effort.
              </p>
              <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                Read the story
                <span className="h-[1px] w-8 bg-black transition-all group-hover:w-16 group-hover:bg-purple-600" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Fit</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            Built for owners who are great at the work.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                For you if
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                Your clients choose you because they trust you. Lenders,
                advisors, consultants, builders, IT partners, healthcare.
                You&rsquo;re too busy running the business to post consistently,
                and you&rsquo;re willing to get on camera, even nervously.
                Nervous works. We coach you through it.
              </p>
            </div>
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                Not for you if
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                You want overnight virality, or content nobody has to show up
                for. The engine runs on real people, and it needs ninety days to
                build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Questions, answered straight</Kicker>
          <div className="mt-10">
            {TRUST_ENGINE_FAQ.map((item) => (
              <div key={item.question} className="border-t border-ash-100 py-10">
                <h3 className="mb-4 font-serif text-xl tracking-tight text-black md:text-2xl">
                  {item.question}
                </h3>
                <p className="text-base leading-relaxed text-ash-700 md:text-lg">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-[980px] px-6 text-center">
          <Kicker dark className="mb-8 justify-center">
            No pitch on the call
          </Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-paper md:text-6xl">
            You show up as yourself. We do the rest.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ash-300 md:text-xl">
            Thirty minutes. We talk through your story, your content, and where
            it should go. Written report in 48 hours, whether we work together
            or not.
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

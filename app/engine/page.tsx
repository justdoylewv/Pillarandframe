import type { Metadata } from "next";
import Link from "next/link";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import MediaFrame from "@/components/MediaFrame";
import HomeReel from "@/components/HomeReel";
import { BOOKING_URL, CTA_LABEL } from "@/lib/content/site";
import { ENGINE_STRIP } from "@/lib/content/photos";
import {
  CADENCE,
  HOW_IT_WORKS,
  MONTHLY_DELIVERABLES,
  POST_FOR_YOU,
  RETAINER,
  TRUST_ENGINE_FAQ,
} from "@/lib/content/services";

export const metadata: Metadata = {
  title: "The Engine",
  description:
    "The monthly retainer for founder-led service brands. We film you once a month and turn it into a month of videos, posts, captions, and graphics in your voice. Coaching built in. Picks up where The Foundation leaves off.",
  alternates: { canonical: "/engine" },
};

function Tick() {
  return <span className="mt-2 h-[3px] w-[3px] shrink-0 bg-gold-500" aria-hidden="true" />;
}

export default function TrustEnginePage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">The Engine &middot; The retainer</Kicker>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl">
            The hardest part isn&rsquo;t the first post. It&rsquo;s the fiftieth.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            Once your foundations are set, staying visible is a consistency
            problem. The Engine solves it. We film you once a month and
            turn it into a full month of content in your voice. Videos, posts,
            captions, graphics. You show up as yourself. We do the rest.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ash-700">
            New here? Start with{" "}
            <Link
              href="/"
              className="text-purple-600 underline underline-offset-4 hover:text-purple-500"
            >
              The Foundation
            </Link>
            . It builds the foundation. The Engine keeps it running.
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
            Posting when inspiration strikes turns into silence by March.
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ash-700 md:text-xl">
            <p>
              You launch strong. Then a busy week hits, the posts stop, and the
              momentum you paid to build quietly leaks away.
            </p>
            <p>
              Meanwhile your buyers keep doing their quiet research. LinkedIn.
              Your Google profile. What AI says when they ask who to trust. A
              feed that went dark in the spring reads as a business that stopped
              paying attention.
            </p>
            <p>
              The two hard jobs are making the content and keeping it consistent.
              We take both off your plate, every month.
            </p>
          </div>
          <p className="mt-16 border-l border-purple-600 pl-8 font-serif text-2xl leading-snug text-black md:text-3xl">
            Ads rent attention. Proof compounds.
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
            One filming session becomes a full month of content. Your Foundation
            keeps working underneath it all year.
          </p>
        </div>
      </section>

      {/* The short-form output */}
      <section className="bg-black py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Kicker dark className="mb-6">
                The output
              </Kicker>
              <h2 className="font-serif text-3xl tracking-tight text-paper md:text-4xl">
                Eight of these, every month.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-300 transition-colors hover:text-paper"
            >
              See all work
              <span className="h-[1px] w-8 bg-current" />
            </Link>
          </div>
          <HomeReel />
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-ash-300">
            Captioned, branded, and ready to post. Cut from the session we film
            with you, in your voice, on your schedule.
          </p>
        </div>
      </section>

      {/* What a month looks like */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">What a month looks like</Kicker>
          <h2 className="max-w-3xl font-serif text-4xl tracking-tight text-black md:text-5xl">
            Stills, graphics, and long form, from the same day.
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {ENGINE_STRIP.map((photo) => (
              <MediaFrame
                key={photo.src}
                image={photo.src}
                alt={photo.alt}
                aspect="square"
              />
            ))}
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ash-500">
            Real people, real rooms, no stock
          </p>
        </div>
      </section>

      {/* The rhythm */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">The rhythm</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            We film you once a month. That is the whole ask.
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {CADENCE.map((item, i) => (
              <div key={i} className="border-t border-ash-100 pt-8">
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
              You get the guide for all of it. Prefer it handled? We run the
              posting for you, so the content actually goes out on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-6">Simple pricing</Kicker>
          <h2 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
            One number. No surprises.
          </h2>
          <div className="mt-16 border border-purple-600 bg-paper p-8 md:p-12">
            {RETAINER.badge && (
              <div className="mb-6">
                <span className="inline-block rounded-[2px] bg-gold-500 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-black">
                  {RETAINER.badge}
                </span>
              </div>
            )}
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div>
                <h3 className="font-serif text-3xl tracking-tight text-black">
                  {RETAINER.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-6xl tracking-tight text-black">
                    {RETAINER.price}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-500">
                    {RETAINER.period}
                  </span>
                </p>
                {RETAINER.note && (
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash-500">
                    {RETAINER.note}
                  </p>
                )}
              </div>
              <ul className="flex-1 space-y-3 md:max-w-md">
                {RETAINER.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ash-700">
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 border-t border-ash-100 pt-8">
              <CtaButton href={BOOKING_URL}>{CTA_LABEL}</CtaButton>
            </div>
          </div>

          {/* Optional posting */}
          <div className="mt-8 border border-ash-100 bg-bone p-8">
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

          <p className="mt-8 text-base leading-relaxed text-ash-500">
            Not launched yet? Start with{" "}
            <Link
              href="/"
              className="text-purple-600 underline underline-offset-4 hover:text-purple-500"
            >
              The Foundation
            </Link>{" "}
            ($5,000 one-time), then continue on the retainer. Prices get confirmed
            before you sign.
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
                A three-month minimum, then month to month. Leave anytime, and
                everything we make is yours to keep, forever.
              </p>
            </div>
          </div>
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
            Built for owners who want to stay visible.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                For you if
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                Your clients choose you because they trust you, and you want to
                stay in front of them without it landing on your desk every week.
                You&rsquo;re willing to get on camera once a month. We handle the
                rest.
              </p>
            </div>
            <div className="border-t border-ash-100 pt-8">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ash-500">
                Not for you if
              </h3>
              <p className="text-lg leading-relaxed text-ash-700">
                You want overnight virality, or content nobody has to show up
                for. The engine runs on real people, and it rewards consistency
                over months, not days.
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

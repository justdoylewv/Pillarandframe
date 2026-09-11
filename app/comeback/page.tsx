import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import JsonLd from "@/components/JsonLd";
import MediaFrame from "@/components/MediaFrame";
import VideoEmbed from "@/components/VideoEmbed";
import LeakCalculator from "@/components/comeback/LeakCalculator";
import DemoForm from "@/components/comeback/DemoForm";
import { Faq, TradeSwitcher } from "@/components/comeback/Interactive";
import { faqSchema, serviceSchema } from "@/lib/content/schema";
import { PHOTO_STRIP } from "@/lib/content/photos";
import { BOOKING_URL, SITE_NAME, SITE_URL } from "@/lib/content/site";
import {
  ABOUT,
  COHORT_DEADLINE,
  COHORT_NAME,
  COMEBACK_COUNTIES,
  COMEBACK_FAQ,
  COMEBACK_VIDEO_LENGTH,
  COMEBACK_VIDEO_URL,
  EXAMPLE_JOB_VALUE,
  EXAMPLE_QUOTES,
  FIT_NO,
  FIT_YES,
  FOUNDING_SETUP,
  FOUNDING_SPOTS_LEFT,
  GUARANTEE_APPOINTMENTS,
  GUARANTEE_DAYS,
  HERO,
  HOW_IT_WORKS,
  MIN_QUOTES,
  PER_JOB,
  PROBLEM,
  SEASONS,
  STANDARD_CAP,
  STANDARD_SETUP,
  TOP_BAR,
  WHAT_YOU_GET,
  WHY_FOLLOWUP_FAILS,
  WHY_VIDEO,
} from "@/lib/content/comeback";

export const metadata: Metadata = {
  title: { absolute: "Turn Unsold Quotes Into Booked Jobs | Central Ohio" },
  description:
    "Two hours filming your crew on a job, then your unsold quotes come back with video, text, and email. 3 booked appointments in 45 days, guaranteed.",
  alternates: { canonical: "/comeback" },
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const exampleLeak = EXAMPLE_QUOTES * EXAMPLE_JOB_VALUE;
const exampleBack = Math.round(exampleLeak * 0.03);

/** Both calls to action, together, in the order the page argues for them. */
function Actions({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <a
        href="#leak"
        className={`rounded-[2px] border px-8 py-5 text-center font-mono text-[12px] uppercase tracking-[0.2em] transition-colors ${
          dark
            ? "border-paper bg-paper text-black hover:bg-bone"
            : "border-black bg-black text-paper hover:bg-coal"
        }`}
      >
        See my Leak Number
      </a>
      <a
        href="#demo"
        className={`rounded-[2px] border px-8 py-5 text-center font-mono text-[12px] uppercase tracking-[0.2em] transition-colors ${
          dark
            ? "border-ash-500 text-paper hover:border-paper"
            : "border-ash-300 text-black hover:border-black"
        }`}
      >
        Text me the demo
      </a>
    </div>
  );
}

export default function ComebackPage() {
  return (
    <div className="animate-fadeIn">
      <JsonLd data={faqSchema(COMEBACK_FAQ)} />
      <JsonLd
        data={serviceSchema({
          name: "The Comeback",
          description:
            "A 45-day campaign that brings unsold quotes back with documentary video filmed on the contractor's own job site, plus text and email, booking homeowners directly onto their calendar.",
          url: `${SITE_URL}/comeback`,
          price: FOUNDING_SPOTS_LEFT > 0 ? "500" : "1750",
          unit: "Setup, then $500 per job recovered",
        })}
      />

      {/* 1. Top bar */}
      <div className="border-b border-shale bg-black">
        <p className="mx-auto max-w-7xl px-6 py-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ash-300">
          {TOP_BAR}
        </p>
      </div>

      {/* 2. Hero */}
      <section className="bg-black py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker dark className="mb-8">
            {HERO.eyebrow}
          </Kicker>
          <h1 className="max-w-[19ch] font-serif text-4xl leading-[0.98] font-black tracking-tighter text-paper sm:text-6xl md:text-7xl">
            {HERO.headline}{" "}
            <span className="italic text-gold-500">
              {HERO.headlineEmphasis}
            </span>
          </h1>
          <p className="mt-8 max-w-[58ch] text-xl leading-relaxed text-ash-300 md:text-2xl">
            {HERO.subhead}
          </p>

          {COMEBACK_VIDEO_URL ? (
            <div className="mt-12 max-w-3xl">
              <VideoEmbed
                url={COMEBACK_VIDEO_URL}
                provider="youtube"
                title="The Comeback, explained in two minutes"
              />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ash-500">
                {COMEBACK_VIDEO_LENGTH}
              </p>
            </div>
          ) : null}

          <div className="mt-12">
            <Actions dark />
          </div>
          <p className="mt-6 text-base text-ash-500">{HERO.trust}</p>
        </div>
      </section>

      {/* 3. The problem */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-[880px] px-6">
          <h2 className="max-w-[22ch] font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            {PROBLEM.heading}
          </h2>
          <div className="mt-10 space-y-6">
            {PROBLEM.body.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ash-700">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The math, and the calculator it argues for */}
      <section id="leak" className="scroll-mt-4 bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker className="mb-6">The math</Kicker>
          <h2 className="max-w-[22ch] font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            Do the math with me for a second.
          </h2>
          <div className="mt-10 max-w-[62ch] space-y-6 text-lg leading-relaxed text-ash-700">
            <p>
              Say you sent {EXAMPLE_QUOTES} quotes last year that never closed,
              and your average job runs about {money.format(EXAMPLE_JOB_VALUE)}.
            </p>
            <p>
              That's{" "}
              <strong className="font-semibold text-black">
                {money.format(exampleLeak)}
              </strong>{" "}
              sitting in your CRM.
            </p>
            <p>
              We don't need most of it. Bring back just 3%, and that's{" "}
              <strong className="font-semibold text-black">
                {money.format(exampleBack)}
              </strong>{" "}
              in jobs you'd already written off.
            </p>
            <p className="text-base text-ash-500">
              Those are example numbers. Move the dials below and use yours.
              That's the point.
            </p>
          </div>

          <div className="mt-12">
            <LeakCalculator />
          </div>
        </div>
      </section>

      {/* 5. Why follow-up fails */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-[22ch] font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            {WHY_FOLLOWUP_FAILS.heading}
          </h2>
          <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-ash-700">
            {WHY_FOLLOWUP_FAILS.intro}
          </p>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
            {WHY_FOLLOWUP_FAILS.reasons.map((r) => (
              <div key={r.title} className="border-t border-ash-100 pt-8">
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-black">
                  {r.title}
                </h3>
                <p className="text-lg leading-relaxed text-ash-700">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 max-w-[60ch] text-lg leading-relaxed text-ash-700">
            {WHY_FOLLOWUP_FAILS.close}
          </p>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="bg-black py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker dark className="mb-6">
            The process
          </Kicker>
          <h2 className="font-serif text-4xl font-black tracking-tighter text-paper md:text-5xl">
            How the Comeback works
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.n} className="border-t border-shale pt-8">
                <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.3em] text-gold-500">
                  {step.n}
                </span>
                <h3 className="mb-4 font-serif text-2xl tracking-tight text-paper">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-ash-300">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why video */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <h2 className="max-w-[20ch] font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
                {WHY_VIDEO.heading}
              </h2>
              <div className="mt-10 space-y-6">
                {WHY_VIDEO.body.map((p) => (
                  <p key={p} className="text-lg leading-relaxed text-ash-700">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PHOTO_STRIP.slice(0, 4).map((photo) => (
                <MediaFrame
                  key={photo.src}
                  image={photo.src}
                  alt={photo.alt}
                  aspect="portrait"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Try it */}
      <section id="demo" className="scroll-mt-4 bg-ink py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Kicker dark className="mb-6">
            Try it
          </Kicker>
          <h2 className="max-w-[22ch] font-serif text-4xl font-black tracking-tighter text-paper md:text-5xl">
            Don't take my word for it.{" "}
            <span className="italic text-gold-500">Feel it.</span>
          </h2>
          <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-ash-300">
            Put your cell number in below. In the next 10 minutes, you'll get
            the exact texts a homeowner with an old quote would get, including a
            real project story video.
          </p>
          <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ash-300">
            Four texts, then it stops. It takes less time than reading this
            page.
          </p>
          <div className="mt-12">
            <DemoForm dark />
          </div>
        </div>
      </section>

      {/* 9. What you get */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            Everything's done for you.
          </h2>
          <dl className="mt-14 divide-y divide-ash-100 border-y border-ash-100">
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[18rem_1fr] md:gap-10"
              >
                <dt className="font-serif text-xl tracking-tight text-black md:text-2xl">
                  {item.label}
                </dt>
                <dd className="text-lg leading-relaxed text-ash-700">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 max-w-[56ch] text-lg leading-relaxed text-ash-700">
            You give us two hours at one of your job sites and a spreadsheet of
            old quotes. We do the rest.
          </p>
        </div>
      </section>

      {/* 10. Price. Swaps itself when the founding spots run out. */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-[880px] px-6">
          <h2 className="font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            What it costs
          </h2>

          {FOUNDING_SPOTS_LEFT > 0 ? (
            <>
              <p className="mt-10 text-lg leading-relaxed text-ash-700">
                For our first {FOUNDING_SPOTS_LEFT} founding companies:
              </p>
              <p className="mt-6 font-serif text-3xl font-black leading-tight tracking-tighter text-black md:text-4xl">
                {FOUNDING_SETUP} to start. Then {PER_JOB} for each job it brings
                back.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-ash-700">
                That's it. And if it doesn't put at least{" "}
                {GUARANTEE_APPOINTMENTS} appointments on your calendar, the
                guarantee below gives you that {FOUNDING_SETUP} back.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ash-700">
                Why so low? Because we want your results on this page. Founding
                companies agree to let us share their numbers.
              </p>
            </>
          ) : (
            <>
              <p className="mt-10 font-serif text-3xl font-black leading-tight tracking-tighter text-black md:text-4xl">
                {STANDARD_SETUP} to start. Then {PER_JOB} for each job it brings
                back, capped at {STANDARD_CAP}.
              </p>
            </>
          )}

          <p className="mt-10 max-w-[62ch] border-t border-ash-100 pt-8 text-lg leading-relaxed text-ash-700">
            Here's how to think about it. At around $100 a lead, the setup fee
            buys you somewhere between 5 and 17 brand-new strangers, and half of
            them won't book. Or it works the quotes you've already paid for,
            from people who already let you in the house.
          </p>
        </div>
      </section>

      {/* 11. The guarantee */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-[880px] px-6">
          <div className="border-2 border-black p-8 sm:p-12">
            <Kicker className="mb-6">The guarantee</Kicker>
            <p className="font-serif text-2xl leading-snug font-black tracking-tighter text-black md:text-4xl">
              If we don't put at least {GUARANTEE_APPOINTMENTS} booked
              appointments from your old quotes on your calendar within{" "}
              {GUARANTEE_DAYS} days of launch, you get your setup fee back.{" "}
              <span className="italic text-gold-700">
                And you keep every video.
              </span>
            </p>
            <p className="mt-8 text-base leading-relaxed text-ash-700">
              To make the guarantee fair to both of us, we need: at least{" "}
              {MIN_QUOTES} unsold quotes from the last 12 months, real
              appointment slots on your calendar each week, and two hours at one of
              your job sites with you and your crew. That's all.
            </p>
          </div>
        </div>
      </section>

      {/* 12. Who's behind this */}
      <section className="bg-black py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <MediaFrame
              image="/photos/session-01.webp"
              alt="Doyle Maurer filming a contractor's crew on a central Ohio job site"
              aspect="still"
              dark
            />
            <div>
              <h2 className="font-serif text-4xl font-black tracking-tighter text-paper md:text-5xl">
                {ABOUT.heading}
              </h2>
              <div className="mt-10 space-y-6">
                {ABOUT.body.map((p) => (
                  <p key={p} className="text-lg leading-relaxed text-ash-300">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Proof. The pre-results version, until there are real numbers. */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-[880px] px-6">
          <h2 className="font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            Results are coming in.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ash-700">
            Our founding companies are running their campaigns now. We'll post
            their real numbers here, with their permission, as they come in. No
            made-up testimonials, no stock photos.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ash-700">
            In the meantime, the best proof is on your own phone.{" "}
            <a
              href="#demo"
              className="text-black underline decoration-gold-500 underline-offset-4"
            >
              Text me the demo
            </a>
            .
          </p>
        </div>
      </section>

      {/* 14. Scarcity */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-[880px] px-6">
          <h2 className="max-w-[20ch] font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            One company per trade, per county.
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-ash-700">
            We won't run the Comeback for you and the company down the road.
            Once we take on a trade in your county, that county is closed for
            that trade.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ash-700">
            We're currently working in:{" "}
            <strong className="font-semibold text-black">
              {COMEBACK_COUNTIES.slice(0, -1).join(", ")}, and{" "}
              {COMEBACK_COUNTIES[COMEBACK_COUNTIES.length - 1]} counties.
            </strong>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ash-700">
            The {COHORT_NAME} launches by {COHORT_DEADLINE}. Texting
            registration takes 1 to 3 weeks, so we set up in order.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="mt-10 inline-block rounded-[2px] border border-black bg-black px-8 py-5 font-mono text-[12px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-coal"
          >
            Check if my county's open
          </a>
          <p className="mt-4 text-sm text-ash-500">
            15 minutes. I'll tell you straight if it's a fit.
          </p>
        </div>
      </section>

      {/* 15. Why now, with the trade line the visitor picks */}
      <section className="bg-black py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-[22ch] font-serif text-4xl font-black tracking-tighter text-paper md:text-5xl">
            {SEASONS.heading}
          </h2>
          <p className="mt-10 max-w-[58ch] text-lg leading-relaxed text-ash-300">
            {SEASONS.open}
          </p>
          <div className="mt-10">
            <TradeSwitcher />
          </div>
          <p className="mt-12 max-w-[58ch] text-lg leading-relaxed text-ash-300">
            {SEASONS.close}
          </p>
        </div>
      </section>

      {/* 16. Fit */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-black tracking-tighter text-black md:text-4xl">
                This is for you if:
              </h2>
              <ul className="mt-8 space-y-4">
                {FIT_YES.map((line) => (
                  <li
                    key={line}
                    className="flex gap-4 text-lg leading-relaxed text-ash-700"
                  >
                    <span
                      className="mt-[11px] h-[5px] w-[5px] shrink-0 bg-gold-500"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-black tracking-tighter text-black md:text-4xl">
                This isn't for you if:
              </h2>
              <ul className="mt-8 space-y-4">
                {FIT_NO.map((line) => (
                  <li
                    key={line}
                    className="flex gap-4 text-lg leading-relaxed text-ash-500"
                  >
                    <span
                      className="mt-[11px] h-[5px] w-[5px] shrink-0 bg-ash-300"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 18. FAQ */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-[980px] px-6">
          <h2 className="font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
            Questions
          </h2>
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      {/* 19. Final call to action */}
      <section className="bg-black py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-[880px] px-6">
          <h2 className="max-w-[22ch] font-serif text-4xl leading-tight font-black tracking-tighter text-paper md:text-6xl">
            Your old quotes are still out there.{" "}
            <span className="italic text-gold-500">
              So are the people behind them.
            </span>
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-ash-300">
            Two ways to start:
          </p>
          <div className="mt-8">
            <Actions dark />
          </div>

          <div className="mt-16 border-t border-shale pt-10">
            <p className="max-w-[64ch] text-lg leading-relaxed text-ash-300">
              <strong className="font-semibold text-paper">P.S.</strong> If you
              only remember one thing: you already paid for those leads. The
              Comeback is guaranteed to put at least {GUARANTEE_APPOINTMENTS} of
              them on your calendar in {GUARANTEE_DAYS} days, or your setup fee
              comes back and you keep the videos. The risk is on us, not you.
              {FOUNDING_SPOTS_LEFT > 0
                ? ` ${FOUNDING_SPOTS_LEFT} founding spots left for the ${COHORT_NAME}.`
                : ""}
            </p>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "The Comeback",
          url: `${SITE_URL}/comeback`,
          description:
            "Turn unsold quotes into booked appointments in 45 days, guaranteed.",
          publisher: { name: SITE_NAME },
        }}
      />
    </div>
  );
}

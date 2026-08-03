import CtaButton from "@/components/CtaButton";
import Wordmark from "@/components/Wordmark";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CTA_LABEL,
} from "@/lib/content/site";
import { MARQUEE_PHOTOS } from "@/lib/content/photos";

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-paper">
      {/* Top bar */}
      <header className="border-b border-shale">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <span className="text-xl text-paper sm:text-2xl">
            <Wordmark />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash-500">
            Ohio
          </span>
        </div>
      </header>

      {/* The message */}
      <main className="flex flex-1 items-center py-14 sm:py-16">
        <div className="mx-auto w-full max-w-[980px] px-6">
          <span className="inline-flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">
            <span
              className="h-[6px] w-[6px] shrink-0 animate-recDot bg-gold-500"
              aria-hidden="true"
            />
            Now in post
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-tight text-paper sm:text-6xl md:text-7xl">
            The site is{" "}
            <span className="italic text-purple-400">in post.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ash-300 md:text-xl">
            We spend our days telling other founder stories. Now we are
            working on ours. The new site is coming soon.
          </p>

          <p className="mt-10 max-w-2xl border-t border-shale pt-8 font-serif text-2xl leading-snug text-paper md:text-3xl">
            One filming day. Then every word, photo, and video your business
            needs to close more deals. We plan, capture, write, and install
            your marketing system in ninety days.
          </p>

          <div className="mt-10 flex flex-col items-start gap-x-6 gap-y-4 sm:flex-row sm:items-center">
            <CtaButton href={BOOKING_URL} variant="solidLight">
              {CTA_LABEL}
            </CtaButton>
            <span className="text-sm text-ash-500">
              Fifteen minutes, no pitch. Or email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-ash-300 underline underline-offset-4 transition-colors hover:text-paper"
              >
                {CONTACT_EMAIL}
              </a>
            </span>
          </div>
        </div>
      </main>

      {/* The work, still rolling */}
      <div
        className="overflow-hidden border-y border-shale py-6"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee gap-4">
          {[...MARQUEE_PHOTOS, ...MARQUEE_PHOTOS].map((photo, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={`${photo.src}-${i}`}
              src={photo.src}
              alt=""
              loading="lazy"
              /* Sources run portrait and landscape. Biasing the crop above
                 center keeps faces in the tile either way. */
              className="h-32 w-52 shrink-0 border border-shale object-cover object-[50%_28%] grayscale transition-all duration-500 hover:grayscale-0 sm:h-40 sm:w-64"
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-3 text-sm text-ash-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif italic">A story-led film studio in Ohio.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`tel:${CONTACT_PHONE.replace(/[^0-9+]/g, "")}`}
              className="transition-colors hover:text-paper"
            >
              {CONTACT_PHONE}
            </a>
            <span className="text-ash-700">&copy; 2026 Pillar &amp; Frame</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

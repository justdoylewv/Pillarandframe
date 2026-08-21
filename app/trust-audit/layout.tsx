import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import CtaButton from "@/components/CtaButton";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  SERVICE_AREA_SENTENCE,
} from "@/lib/content/site";

/**
 * Landing page chrome: a wordmark and one action, nothing else.
 *
 * This sits outside the (site) group on purpose. Every nav link on a
 * lead-capture page is a way out of it, so the header carries the mark and the
 * booking link and stops there.
 */
export default function TrustAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-ash-100 bg-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <Link href="/" className="text-xl text-black sm:text-2xl">
            <Wordmark />
          </Link>
          <CtaButton href={BOOKING_URL} variant="solid" className="hidden sm:inline-block">
            Book a call instead
          </CtaButton>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-ash-100 bg-paper py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-ash-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{SERVICE_AREA_SENTENCE}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-black"
            >
              {CONTACT_EMAIL}
            </a>
            <span className="text-ash-300">&copy; 2026 Pillar &amp; Frame</span>
          </div>
        </div>
      </footer>
    </>
  );
}

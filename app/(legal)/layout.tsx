import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { CONTACT_EMAIL, LEGAL_EFFECTIVE_DATE, SITE_NAME } from "@/lib/content/site";

// Deliberately outside the (site) group.
//
// These pages stay reachable while the rest of the site is behind the holding
// page, because a carrier reviewing an A2P registration has to be able to open
// them from a plain link. With the main header they would show a nav full of
// links that all bounce back to the holding page, which reads as broken. So
// they carry their own minimal chrome instead.

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="border-b border-ash-100">
        <div className="mx-auto flex max-w-[880px] items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl text-black">
            <Wordmark />
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-700 transition-colors hover:text-black"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-ash-100">
        <div className="mx-auto flex max-w-[880px] flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ash-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Effective{" "}
            {LEGAL_EFFECTIVE_DATE}.
          </p>
          <nav className="flex gap-6">
            <Link
              href="/privacy"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-700 transition-colors hover:text-black"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-700 transition-colors hover:text-black"
            >
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

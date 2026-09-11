import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import {
  BUSINESS_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  PHONE_IS_PUBLIC,
} from "@/lib/content/site";

// Minimal chrome, on purpose. Every nav link on a direct response page is a way
// out of it, so the header carries the wordmark and a phone number and nothing
// that leads away.
//
// The footer carries the full contact details and the legal links because this
// page is the live site for now, and it is also the page that collects mobile
// numbers. A2P registration is reviewed against whatever is actually published.

export default function ComebackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tel = CONTACT_PHONE.replace(/[^0-9+]/g, "");

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="border-b border-shale bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/comeback" className="text-xl text-paper sm:text-2xl">
            <Wordmark />
          </Link>
          {PHONE_IS_PUBLIC && CONTACT_PHONE && (
            <a
              href={`tel:${tel}`}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-300 transition-colors hover:text-paper"
            >
              {CONTACT_PHONE}
            </a>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-shale bg-black py-12 text-paper">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2 text-sm text-ash-500">
              <p className="text-ash-300">Pillar &amp; Frame · Delaware, Ohio</p>
              {BUSINESS_ADDRESS.length > 0 && (
                <address className="not-italic">
                  {BUSINESS_ADDRESS.join(", ")}
                </address>
              )}
              <p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-paper"
                >
                  {CONTACT_EMAIL}
                </a>
                {PHONE_IS_PUBLIC && CONTACT_PHONE && (
                  <>
                    {" · "}
                    <a
                      href={`tel:${tel}`}
                      className="transition-colors hover:text-paper"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </>
                )}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ash-500">
              <Link href="/privacy" className="transition-colors hover:text-paper">
                Privacy policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-paper">
                Terms
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-paper"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Required wherever an SMS opt-in lives. */}
          <p className="mt-10 border-t border-shale pt-8 text-sm leading-relaxed text-ash-500">
            Texts are sent only with consent. Msg and data rates may apply. Msg
            frequency varies. Reply STOP to opt out, HELP for help.
          </p>
          <p className="mt-4 text-sm text-ash-700">
            &copy; {new Date().getFullYear()} Pillar &amp; Frame
          </p>
        </div>
      </footer>
    </div>
  );
}

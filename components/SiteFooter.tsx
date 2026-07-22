import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import {
  BOOKING_URL,
  CITY_SPOTLIGHT_LINE,
  CITY_SPOTLIGHT_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  FOOTER_TAGLINE,
} from "@/lib/content/site";

const COLUMNS: {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    heading: "Services",
    links: [
      { label: "The Trust Engine", href: "/trust-engine" },
      { label: "Systems Coaching", href: "/systems-coaching" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Frontier Technologies", href: "/work/frontier-technologies" },
      { label: "Memorial Health", href: "/work/memorial-health" },
      { label: "DG Lending", href: "/work/dg-lending" },
      { label: "Wealthstrong", href: "/work/wealthstrong" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Book a call", href: "/book" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-ash-100 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-2xl text-black">
              <Wordmark />
            </Link>
            <p className="mt-5 font-serif text-base italic leading-relaxed text-ash-500">
              {FOOTER_TAGLINE}
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ash-700 transition-colors hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-ash-100 pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 text-sm text-ash-500 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-black"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/[^0-9+]/g, "")}`}
                className="transition-colors hover:text-black"
              >
                {CONTACT_PHONE}
              </a>
            </div>
            <a
              href={BOOKING_URL}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500 transition-colors hover:text-black"
            >
              Book a free strategy call
            </a>
          </div>
          <p className="mt-8 text-xs text-ash-500">
            <a
              href={CITY_SPOTLIGHT_URL}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-black"
            >
              {CITY_SPOTLIGHT_LINE}
            </a>
          </p>
          <p className="mt-3 text-xs text-ash-300">
            &copy; 2026 Pillar &amp; Frame &middot; Ohio
          </p>
        </div>
      </div>
    </footer>
  );
}

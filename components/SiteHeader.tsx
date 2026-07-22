"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { BOOKING_URL, CTA_LABEL } from "@/lib/content/site";

const NAV_LINKS = [
  { href: "/trust-engine", label: "The Trust Engine" },
  { href: "/systems-coaching", label: "Systems Coaching" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-ash-100 bg-paper/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link href="/" className="text-xl text-black sm:text-2xl">
              <Wordmark />
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center space-x-10 font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BOOKING_URL}
                className="hidden rounded-[2px] bg-black px-6 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-coal sm:inline-block"
              >
                {CTA_LABEL}
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 items-center justify-center lg:hidden"
                aria-label="Toggle menu"
              >
                <div className="flex w-5 flex-col gap-1.5">
                  <span
                    className={`block h-[1px] bg-black transition-all duration-300 ${
                      menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-[1px] bg-black transition-all duration-300 ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-[1px] bg-black transition-all duration-300 ${
                      menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-paper lg:hidden">
          <div className="h-full overflow-y-auto px-6 pb-8 pt-24">
            <div className="mb-10 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-3 font-serif text-2xl text-black transition-colors hover:text-purple-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href={BOOKING_URL}
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-[2px] bg-black py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper"
            >
              {CTA_LABEL}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

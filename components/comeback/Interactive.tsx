"use client";

import { useState } from "react";
import { COMEBACK_FAQ, TRADE_LINES } from "@/lib/content/comeback";

/**
 * Two small interactive pieces.
 *
 * The trade switcher is section 15's swappable line, turned into something the
 * visitor picks rather than something we guess. The source copy offered a
 * separate page per industry; one tap gets the same line in front of the right
 * person without four near-identical pages to maintain.
 *
 * The FAQ is an accordion because twelve open answers is a wall nobody reads.
 * Both the question and the answer stay in the DOM whatever is open, so the
 * schema and the page agree and a crawler sees every answer.
 */

export function TradeSwitcher() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {TRADE_LINES.map((t, i) => (
          <button
            key={t.trade}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`min-h-[48px] rounded-[2px] border px-5 py-3 text-[15px] font-medium transition-colors ${
              i === active
                ? "border-gold-500 bg-gold-500 text-black"
                : "border-shale text-ash-300 hover:border-ash-500 hover:text-paper"
            }`}
          >
            {t.trade}
          </button>
        ))}
      </div>
      <p
        className="mt-8 max-w-[60ch] font-serif text-2xl leading-snug text-paper md:text-3xl"
        aria-live="polite"
      >
        {TRADE_LINES[active].line}
      </p>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {COMEBACK_FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="border-t border-ash-100">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full items-baseline justify-between gap-6 py-7 text-left"
              >
                <span className="font-serif text-xl tracking-tight text-black md:text-2xl">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1 shrink-0 font-mono text-lg leading-none text-gold-700 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div id={`faq-${i}`} hidden={!isOpen}>
              <p className="max-w-[68ch] pb-8 text-lg leading-relaxed text-ash-700">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

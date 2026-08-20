import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import GhlForm from "@/components/GhlForm";
import { SITE_NAME } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "The 90 Day Trust Calendar",
  description:
    "A day-by-day plan for the ninety days that decide whether people find you and believe you. Free for Columbus and central Ohio business owners.",
  alternates: { canonical: "/trust-calendar" },
};

const INSIDE = [
  "What to publish in each of the ninety days, in order",
  "The five questions people ask before they hire anyone, and where each answer belongs",
  "Which Google Business Profile fields move the needle, and which are noise",
  "A one-page checklist you can hand to whoever helps you",
];

export default function TrustCalendarPage() {
  return (
    <div className="animate-fadeIn">
      <section className="bg-black py-24 text-paper sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <Kicker dark className="mb-8">
                Free download
              </Kicker>
              <h1 className="font-serif text-4xl leading-[0.95] font-black tracking-tighter text-paper sm:text-5xl md:text-6xl">
                The 90 Day{" "}
                <span className="italic text-gold-500">Trust Calendar.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ash-300">
                Ninety days of what to publish and where, in the order that
                builds trust fastest. The same sequence we run for clients,
                written so you can run it yourself.
              </p>

              <ul className="mt-10 max-w-xl divide-y divide-shale border-y border-shale">
                {INSIDE.map((line) => (
                  <li
                    key={line}
                    className="flex gap-4 py-4 text-base leading-relaxed text-ash-300"
                  >
                    <span
                      className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-gold-500"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-ash-500">
                No call required, and nothing to cancel. If you want a hand
                running it, that is what {SITE_NAME} is for.
              </p>
            </div>

            <div className="border border-shale bg-ink p-8 sm:p-10">
              <GhlForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

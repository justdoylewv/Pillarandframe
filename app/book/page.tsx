import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import CtaButton from "@/components/CtaButton";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Book a free strategy call",
  description:
    "Thirty minutes. We talk through your story, your content, and your systems. Written report within 48 hours. No pitch on the call.",
  alternates: { canonical: "/book" },
};

const CALL_STEPS = [
  {
    number: "01",
    title: "You talk. We listen.",
    body: "Your business, your buyers, and what you've already tried.",
  },
  {
    number: "02",
    title: "We look together.",
    body: "Your LinkedIn, your Google profile, your follow-up. The same surfaces your buyers check.",
  },
  {
    number: "03",
    title: "You get the report.",
    body: "A written rundown within 48 hours: what's working, what's leaking, what we'd fix first. It's yours either way.",
  },
];

const HONEST_ANSWERS = [
  {
    question: "Is this a sales call?",
    answer:
      "No. If we think we can help, we'll say exactly how and what it costs. If we're not the right fit, the report still gives your team a plan.",
  },
  {
    question: "Who is the call with?",
    answer:
      "Someone senior from the studio who can actually scope the work. Not a setter reading a script. You'll get real answers on the call itself.",
  },
];

export default function BookPage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero */}
      <section className="border-b border-ash-100 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-8">The strategy call</Kicker>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl">
            Thirty minutes. A written report in 48 hours. No pitch.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ash-700 md:text-xl">
            We talk through your story, your content, and your systems. Where
            trust is being won, where it is leaking, and what we would fix
            first. Then we write it up and send it to you within 48 hours,
            whether we work together or not.
          </p>
          <div className="mt-12">
            <CtaButton href={BOOKING_URL}>Pick a time</CtaButton>
          </div>
          <p className="mt-8 text-sm text-ash-500">
            Prefer email?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-ash-700 transition-colors hover:text-black"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>

      {/* What happens on the call */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
            {CALL_STEPS.map((step) => (
              <div key={step.number} className="border-t border-ash-100 pt-8">
                <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-ash-300">
                  {step.number}
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

      {/* Two honest answers */}
      <section className="bg-bone py-24 sm:py-32">
        <div className="mx-auto max-w-[980px] px-6">
          <Kicker className="mb-10">Two honest answers</Kicker>
          <div>
            {HONEST_ANSWERS.map((item) => (
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
    </div>
  );
}

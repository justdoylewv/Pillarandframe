import { LEGAL_EFFECTIVE_DATE } from "@/lib/content/site";

// One renderer for both legal pages, so they cannot drift apart in structure
// or type size. Long text at a comfortable measure, numbered sections, and
// nothing decorative: these get read closely by two audiences, a carrier
// reviewing an A2P registration and anybody who wants to know what happens to
// their details.

export type Block =
  | string
  | { list: string[] }
  | { note: string }
  | { subhead: string };

export interface Section {
  heading: string;
  blocks: Block[];
}

function renderBlock(block: Block, i: number) {
  if (typeof block === "string") {
    return (
      <p key={i} className="mt-5 text-[17px] leading-relaxed text-ash-700">
        {block}
      </p>
    );
  }
  if ("subhead" in block) {
    return (
      <h3
        key={i}
        className="mt-8 font-serif text-xl tracking-tight text-black md:text-2xl"
      >
        {block.subhead}
      </h3>
    );
  }
  if ("note" in block) {
    // The clauses a carrier looks for, set apart so they are easy to find.
    return (
      <p
        key={i}
        className="mt-6 border-l-[3px] border-l-gold-500 bg-bone px-6 py-5 text-[17px] leading-relaxed text-black"
      >
        {block.note}
      </p>
    );
  }
  return (
    <ul key={i} className="mt-5 space-y-3">
      {block.list.map((item) => (
        <li
          key={item}
          className="flex gap-4 text-[17px] leading-relaxed text-ash-700"
        >
          <span
            className="mt-[11px] h-[5px] w-[5px] shrink-0 bg-gold-500"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LegalDoc({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <article className="mx-auto max-w-[880px] px-6 py-16 sm:py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ash-500">
        Effective {LEGAL_EFFECTIVE_DATE}
      </p>
      <h1 className="mt-5 font-serif text-4xl font-black tracking-tighter text-black md:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ash-700">{intro}</p>

      <nav aria-label="Contents" className="mt-12 border-y border-ash-100 py-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-ash-500">
          Contents
        </h2>
        <ol className="mt-5 space-y-2">
          {sections.map((s, i) => (
            <li key={s.heading} className="text-[17px] leading-relaxed">
              <a
                href={`#s${i + 1}`}
                className="text-ash-700 underline decoration-ash-300 underline-offset-4 transition-colors hover:text-black hover:decoration-black"
              >
                {i + 1}. {s.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {sections.map((section, i) => (
        <section key={section.heading} id={`s${i + 1}`} className="mt-14 scroll-mt-8">
          <h2 className="font-serif text-2xl font-black tracking-tighter text-black md:text-3xl">
            {i + 1}. {section.heading}
          </h2>
          {section.blocks.map(renderBlock)}
        </section>
      ))}
    </article>
  );
}

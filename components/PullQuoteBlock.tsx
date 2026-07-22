import type { PullQuote } from "@/lib/content/types";

export default function PullQuoteBlock({ pullQuote }: { pullQuote: PullQuote | null }) {
  if (!pullQuote) return null;
  return (
    <div className="my-24 border-b border-t border-ash-100 py-16 text-center md:my-32">
      <p className="font-serif text-2xl italic leading-tight tracking-tight text-black md:text-4xl lg:text-5xl">
        &ldquo;{pullQuote.quote}&rdquo;
      </p>
      {pullQuote.attribution && (
        <cite className="mt-10 block font-mono text-[10px] uppercase not-italic tracking-[0.4em] text-ash-500">
          {pullQuote.attribution}
        </cite>
      )}
    </div>
  );
}

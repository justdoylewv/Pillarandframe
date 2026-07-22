import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-8 font-serif text-8xl text-ash-100">404</h1>
        <p className="mb-12 font-serif text-xl italic text-ash-500">
          This page doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-[2px] bg-black px-9 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-coal"
        >
          Back to Pillar &amp; Frame
        </Link>
      </div>
    </section>
  );
}

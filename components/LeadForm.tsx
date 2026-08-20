"use client";

import { useState } from "react";

/**
 * Name and email in exchange for the download.
 *
 * The file URL is never in this bundle. It comes back from the API only after
 * a submission is accepted, so the gate cannot be walked around by reading the
 * page source.
 */
export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      if (data.url) {
        setUrl(data.url);
        window.open(data.url, "_blank", "noopener");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  if (url) {
    return (
      <div>
        <h2 className="font-serif text-2xl tracking-tight text-paper">
          It is on its way.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ash-300">
          It should have opened in a new tab. If your browser blocked that, here
          it is.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="mt-8 inline-block rounded-[2px] border border-paper bg-paper px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-bone"
        >
          Open the calendar
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      <h2 className="font-serif text-2xl tracking-tight text-paper">
        Where should we send it?
      </h2>

      <label
        htmlFor="lead-name"
        className="mt-8 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500"
      >
        Name
      </label>
      <input
        id="lead-name"
        name="name"
        autoComplete="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-3 w-full rounded-[2px] border border-shale bg-black px-4 py-3 text-paper outline-none transition-colors focus:border-purple-400"
      />

      <label
        htmlFor="lead-email"
        className="mt-6 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500"
      >
        Email
      </label>
      <input
        id="lead-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-3 w-full rounded-[2px] border border-shale bg-black px-4 py-3 text-paper outline-none transition-colors focus:border-purple-400"
      />

      {/* Off-screen rather than display:none, which some bots skip. Nobody
          using a keyboard or a screen reader lands on it. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="lead-company">Company</label>
        <input
          id="lead-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {error && <p className="mt-6 text-sm leading-relaxed text-gold-300">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        className="mt-8 w-full rounded-[2px] border border-paper bg-paper px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-bone disabled:cursor-not-allowed disabled:opacity-40"
      >
        {busy ? "Sending" : "Send me the calendar"}
      </button>

      <p className="mt-5 text-xs leading-relaxed text-ash-500">
        We will email you the calendar and the occasional thing worth reading.
        Unsubscribe whenever you like.
      </p>
    </form>
  );
}

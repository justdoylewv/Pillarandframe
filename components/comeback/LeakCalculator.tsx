"use client";

import { useState } from "react";
import {
  EXAMPLE_JOB_VALUE,
  EXAMPLE_QUOTES,
  MIN_QUOTES,
  RECOVERY_RATE,
} from "@/lib/content/comeback";

/**
 * The Leak Number, calculated live.
 *
 * The number appears the moment a slider moves, before any email is asked for.
 * That is the whole argument of the page made tactile: a person who drags their
 * own quote count and watches six figures appear has understood the offer in a
 * way no paragraph achieves. Gating it behind a form would trade the thing that
 * convinces them for an address they will give up anyway once convinced.
 *
 * Sliders and typed inputs both, bound to the same state. Sliders are what make
 * it feel like a discovery; typing is what someone does once they want their
 * real figure rather than a rough one.
 */

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const QUOTES_MAX = 1200;
const VALUE_MAX = 50000;

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

export default function LeakCalculator() {
  const [quotes, setQuotes] = useState(EXAMPLE_QUOTES);
  const [jobValue, setJobValue] = useState(EXAMPLE_JOB_VALUE);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [honey, setHoney] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const leak = quotes * jobValue;
  const recovered = Math.round(leak * RECOVERY_RATE);
  const belowMinimum = quotes > 0 && quotes < MIN_QUOTES;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/comeback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: "leak",
          name,
          email,
          company,
          quotes,
          jobValue,
          company_website: honey,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="border border-ash-100 border-l-[3px] border-l-gold-500 bg-paper">
      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* The two dials */}
          <div className="space-y-10">
            <Dial
              id="leak-quotes"
              label="Quotes that didn't close in the last 12 months"
              helper="A rough guess is fine."
              value={quotes}
              onChange={setQuotes}
              min={0}
              max={QUOTES_MAX}
              step={10}
              format={(v) => v.toLocaleString("en-US")}
            />
            <Dial
              id="leak-value"
              label="Your average job size"
              helper="What a typical job is worth to you."
              value={jobValue}
              onChange={setJobValue}
              min={1000}
              max={VALUE_MAX}
              step={500}
              format={(v) => money.format(v)}
            />
          </div>

          {/* The number */}
          <div className="flex flex-col justify-center border-t border-ash-100 pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ash-500">
              Your Leak Number
            </p>
            <p
              className="mt-4 font-serif text-5xl font-black tracking-tighter text-black md:text-6xl"
              aria-live="polite"
            >
              {money.format(leak)}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ash-700">
              Sitting in your CRM right now, from people who already let you in
              the house.
            </p>
            <div className="mt-8 border-t border-ash-100 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-700">
                A conservative 3 percent back
              </p>
              <p className="mt-3 font-serif text-3xl font-black tracking-tighter text-black md:text-4xl">
                {money.format(recovered)}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ash-700">
                In jobs you'd already written off.
              </p>
            </div>
            {belowMinimum && (
              <p className="mt-8 border-l-[3px] border-l-ash-300 bg-bone px-5 py-4 text-base leading-relaxed text-ash-700">
                The guarantee needs at least {MIN_QUOTES} unsold quotes from the
                last 12 months. Below that we should talk before you spend
                anything.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* The ask, after the number rather than in front of it */}
      <div className="border-t border-ash-100 bg-bone p-6 sm:p-10">
        {done ? (
          <div>
            <h3 className="font-serif text-2xl font-black tracking-tighter text-black md:text-3xl">
              On its way.
            </h3>
            <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-ash-700">
              Your Leak Number and a short walkthrough are heading to your
              inbox. If anything looks off, reply to it and tell me.
            </p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h3 className="font-serif text-2xl font-black tracking-tighter text-black md:text-3xl">
              Send me my number.
            </h3>
            <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-ash-700">
              We'll email your number and a 60-second walkthrough of where it
              comes from. No spam.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Field
                id="leak-name"
                label="Your name"
                value={name}
                onChange={setName}
                autoComplete="name"
              />
              <Field
                id="leak-company"
                label="Company"
                value={company}
                onChange={setCompany}
                autoComplete="organization"
              />
              <Field
                id="leak-email"
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                autoComplete="email"
              />
            </div>

            {/* Off-screen rather than hidden, which some bots skip. */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="leak-hp">Company website</label>
              <input
                id="leak-hp"
                tabIndex={-1}
                autoComplete="off"
                value={honey}
                onChange={(e) => setHoney(e.target.value)}
              />
            </div>

            {error && (
              <p className="mt-5 text-base leading-relaxed text-purple-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="mt-7 min-h-[56px] w-full rounded-[2px] border border-black bg-black px-8 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-coal disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              {busy ? "Sending" : "Send me my number"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Dial({
  id,
  label,
  helper,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  id: string;
  label: string;
  helper: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  format: (n: number) => string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[11px] uppercase tracking-[0.2em] text-ash-700"
      >
        {label}
      </label>
      <p className="mt-2 text-sm text-ash-500">{helper}</p>
      <div className="mt-4 flex items-center gap-4">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) =>
            onChange(clamp(Number(e.target.value) || 0, min, max))
          }
          className="min-h-[52px] w-36 rounded-[2px] border border-ash-100 bg-white px-4 py-3 text-[17px] font-medium text-black outline-none transition-colors focus:border-purple-600"
        />
        <span className="font-serif text-2xl tracking-tight text-black">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        aria-label={`${label}, slider`}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-5 h-[3px] w-full cursor-pointer appearance-none bg-ash-100 accent-gold-500"
      />
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (s: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[11px] uppercase tracking-[0.2em] text-ash-700"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-[52px] w-full rounded-[2px] border border-ash-100 bg-white px-4 py-3 text-[17px] text-black outline-none transition-colors focus:border-purple-600"
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import Wordmark from "@/components/Wordmark";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Sign in failed.");
      // Full load rather than a router push, so the layout picks up the
      // cookie and mounts the editing bar.
      window.location.href = "/";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-sm">
        <span className="text-2xl text-paper">
          <Wordmark />
        </span>
        <h1 className="mt-8 font-serif text-3xl font-black tracking-tighter text-paper">
          Sign in to edit
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ash-500">
          Editing the site copy in place. Everyone else sees the site exactly
          as it is now.
        </p>
        <form onSubmit={submit} className="mt-8">
          <label
            htmlFor="password"
            className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3 w-full rounded-[2px] border border-shale bg-ink px-4 py-3 text-paper outline-none transition-colors focus:border-purple-400"
          />
          {error && <p className="mt-4 text-sm text-gold-300">{error}</p>}
          <button
            type="submit"
            disabled={busy || password.length === 0}
            className="mt-6 w-full rounded-[2px] border border-paper bg-paper px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-bone disabled:cursor-not-allowed disabled:opacity-30"
          >
            {busy ? "Checking" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

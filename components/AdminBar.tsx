"use client";

import { useAdmin } from "@/components/AdminProvider";

/**
 * The editing toolbar. Renders for nobody unless the admin UI cookie is
 * present, so a normal visitor never sees or downloads a control surface.
 */
export default function AdminBar() {
  const {
    isAdmin,
    editing,
    setEditing,
    dirtyCount,
    discard,
    save,
    saveState,
    message,
  } = useAdmin();

  if (!isAdmin) return null;

  const busy = saveState === "saving";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-shale bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setEditing(!editing)}
            aria-pressed={editing}
            className={`rounded-[2px] border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
              editing
                ? "border-gold-500 bg-gold-500 text-black"
                : "border-paper/30 text-paper hover:border-paper"
            }`}
          >
            {editing ? "Editing on" : "Edit text"}
          </button>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500">
            {dirtyCount === 0
              ? "No changes"
              : `${dirtyCount} change${dirtyCount === 1 ? "" : "s"}`}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {message && (
            <span
              className={`max-w-md text-xs leading-relaxed ${
                saveState === "error" ? "text-gold-300" : "text-ash-300"
              }`}
            >
              {message}
            </span>
          )}
          {dirtyCount > 0 && (
            <button
              type="button"
              onClick={discard}
              disabled={busy}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500 transition-colors hover:text-paper disabled:opacity-40"
            >
              Discard
            </button>
          )}
          <button
            type="button"
            onClick={save}
            disabled={busy || dirtyCount === 0}
            className="rounded-[2px] border border-paper bg-paper px-5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-bone disabled:cursor-not-allowed disabled:opacity-30"
          >
            {busy ? "Saving" : "Save"}
          </button>
          <a
            href="/api/admin/logout"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500 transition-colors hover:text-paper"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}

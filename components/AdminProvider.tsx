"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ADMIN_UI_COOKIE } from "@/lib/admin/auth";

type SaveState = "idle" | "saving" | "saved" | "error";

interface AdminContext {
  isAdmin: boolean;
  editing: boolean;
  setEditing: (on: boolean) => void;
  drafts: Record<string, string>;
  setDraft: (id: string, value: string) => void;
  dirtyCount: number;
  discard: () => void;
  save: () => Promise<void>;
  saveState: SaveState;
  message: string | null;
}

const Ctx = createContext<AdminContext | null>(null);

export function useAdmin(): AdminContext {
  const ctx = useContext(Ctx);
  // Editable is used on pages that render for everyone, so a missing provider
  // has to degrade to plain text rather than throw.
  return (
    ctx ?? {
      isAdmin: false,
      editing: false,
      setEditing: () => {},
      drafts: {},
      setDraft: () => {},
      dirtyCount: 0,
      discard: () => {},
      save: async () => {},
      saveState: "idle",
      message: null,
    }
  );
}

// Unsaved edits survive a reload or a click through to another page. Without
// this, navigating mid-edit silently throws the work away.
const DRAFT_KEY = "pf-admin-drafts";

export default function AdminProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editing, setEditing] = useState(false);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // This cookie carries no authority. It only says whether to offer the
    // bar; every save is re-checked against the signed cookie server-side.
    setIsAdmin(
      document.cookie.split("; ").some((c) => c.startsWith(`${ADMIN_UI_COOKIE}=`))
    );
    try {
      const stored = sessionStorage.getItem(DRAFT_KEY);
      if (stored) setDrafts(JSON.parse(stored));
    } catch {
      // A malformed draft store is not worth breaking the page over.
    }
  }, []);

  const persist = useCallback((next: Record<string, string>) => {
    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(next));
    } catch {
      // Private browsing and full quotas both land here. Edits still work for
      // this page view, they just will not survive a reload.
    }
  }, []);

  const setDraft = useCallback(
    (id: string, value: string) => {
      setDrafts((prev) => {
        const next = { ...prev, [id]: value };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const discard = useCallback(() => {
    setDrafts({});
    persist({});
    setSaveState("idle");
    setMessage(null);
    // The DOM still holds the typed text, so a reload is the honest way to
    // show what discarding actually left behind.
    window.location.reload();
  }, [persist]);

  const save = useCallback(async () => {
    setSaveState("saving");
    setMessage(null);
    try {
      const res = await fetch("/api/admin/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ drafts }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? `Save failed (${res.status})`);
      setDrafts({});
      persist({});
      setSaveState("saved");
      setMessage(
        "Saved and committed. The live site updates once the deploy finishes, usually about a minute."
      );
    } catch (err) {
      setSaveState("error");
      setMessage(err instanceof Error ? err.message : "Save failed.");
    }
  }, [drafts, persist]);

  const dirtyCount = Object.keys(drafts).length;

  // Closing the tab mid-edit should ask, the same as any other editor.
  useEffect(() => {
    if (dirtyCount === 0) return;
    function warn(e: BeforeUnloadEvent) {
      e.preventDefault();
      e.returnValue = "";
    }
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirtyCount]);

  const value = useMemo(
    () => ({
      isAdmin,
      editing: isAdmin && editing,
      setEditing,
      drafts,
      setDraft,
      dirtyCount,
      discard,
      save,
      saveState,
      message,
    }),
    [isAdmin, editing, drafts, setDraft, dirtyCount, discard, save, saveState, message]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

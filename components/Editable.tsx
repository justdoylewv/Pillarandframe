"use client";

import { useEffect, useRef, useState } from "react";
import { getOverride } from "@/lib/content/overrides";
import { useAdmin } from "@/components/AdminProvider";

/**
 * One editable string.
 *
 * Renders the saved override when there is one, otherwise the text written in
 * the page. In admin mode it becomes directly editable in place, so the copy
 * is edited where it lives rather than in a form somewhere else.
 *
 * `id` is the storage key. It must stay stable: changing it orphans whatever
 * was saved against the old one.
 *
 * Only plain text. Anything with links or emphasis inside stays in the page,
 * because round-tripping markup through contentEditable is how a stray <div>
 * ends up in the middle of a headline.
 */
export default function Editable({
  id,
  as: Tag = "span",
  className = "",
  children,
}: {
  id: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
  className?: string;
  children: string;
}) {
  const { editing, drafts, setDraft } = useAdmin();
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  const saved = getOverride(id);
  const base = saved ?? children;
  const draft = drafts[id];
  const text = draft ?? base;

  // The server renders `base`. Deferring any draft to after mount keeps the
  // first client render identical and avoids a hydration mismatch.
  useEffect(() => setMounted(true), []);

  // Push text in only when it changed underneath us. Writing on every render
  // would fight the caret while typing.
  useEffect(() => {
    if (!editing || !ref.current) return;
    if (ref.current.textContent !== text) ref.current.textContent = text;
  }, [editing, text]);

  if (!editing) {
    return (
      <Tag className={className}>{mounted && draft !== undefined ? draft : base}</Tag>
    );
  }

  const changed = draft !== undefined && draft !== base;

  return (
    <Tag
      ref={ref as never}
      contentEditable
      suppressContentEditableWarning
      spellCheck
      data-editable-id={id}
      onInput={(e: React.FormEvent<HTMLElement>) =>
        setDraft(id, e.currentTarget.textContent ?? "")
      }
      onPaste={(e: React.ClipboardEvent) => {
        // Paste as plain text, so copying from a styled document does not
        // drag its markup into the page.
        e.preventDefault();
        const plain = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, plain);
      }}
      className={`${className} rounded-[2px] outline-none ring-1 ring-offset-2 transition-shadow ${
        changed
          ? "ring-gold-500 ring-offset-paper"
          : "ring-purple-400/40 ring-offset-transparent focus:ring-purple-500"
      }`}
    >
      {base}
    </Tag>
  );
}

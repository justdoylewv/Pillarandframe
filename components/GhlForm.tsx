import Script from "next/script";
import { CONTACT_EMAIL, GHL_FORM_URL } from "@/lib/content/site";

/**
 * A GoHighLevel form, embedded.
 *
 * The capture and the follow-up both live in GoHighLevel, so the site holds no
 * lead data and the file link never has to appear in the page. Their script
 * resizes the frame to fit whatever the form grows into.
 *
 * With no form URL configured this falls back to the email address rather than
 * rendering an empty frame, so the page is never a dead end.
 */
export default function GhlForm({
  id = "trust-calendar",
  title = "Get the calendar",
  minHeight = 560,
}: {
  id?: string;
  title?: string;
  minHeight?: number;
}) {
  if (!GHL_FORM_URL) {
    return (
      <div>
        <h2 className="font-serif text-2xl tracking-tight text-paper">
          Ask us for it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ash-300">
          The form is not connected yet. Email us and we will send the calendar
          straight over.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("The 90 Day Trust Calendar")}`}
          className="mt-8 inline-block rounded-[2px] border border-paper bg-paper px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-bone"
        >
          Email for the calendar
        </a>
      </div>
    );
  }

  return (
    <>
      <iframe
        src={GHL_FORM_URL}
        id={`inline-${id}`}
        title={title}
        style={{ width: "100%", minHeight, border: "none" }}
        data-layout="{'id':'INLINE'}"
        data-form-id={id}
        data-form-name={title}
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}

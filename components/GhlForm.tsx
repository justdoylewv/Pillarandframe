import Script from "next/script";
import { CONTACT_EMAIL, GHL_FORM_NAME, GHL_FORM_URL } from "@/lib/content/site";

/**
 * A GoHighLevel form, embedded.
 *
 * The capture and the follow-up both live in GoHighLevel, so the site holds no
 * lead data and the file link never has to appear in the page.
 *
 * With no form URL configured this falls back to the email address rather than
 * rendering an empty frame, so the page is never a dead end.
 */
export default function GhlForm({
  height = 462,
}: {
  /** Starting height. Their script measures the real form and adjusts. */
  height?: number;
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
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(GHL_FORM_NAME)}`}
          className="mt-8 inline-block rounded-[2px] border border-paper bg-paper px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-bone"
        >
          Email for the calendar
        </a>
      </div>
    );
  }

  // Their resize script finds the frame by an id of inline-<formId>, so the id
  // is taken from the URL rather than written out separately. Kept apart, the
  // two drift and the form silently stops resizing.
  const formId = GHL_FORM_URL.split("/").filter(Boolean).pop() ?? "";

  return (
    <>
      <iframe
        src={GHL_FORM_URL}
        id={`inline-${formId}`}
        title={GHL_FORM_NAME}
        // Square, to match everything else here. Their snippet ships 3px.
        style={{ width: "100%", height, border: "none" }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={GHL_FORM_NAME}
        data-height={height}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}

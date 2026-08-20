import "server-only";

// The gated download.
//
// This module is server-only on purpose. If the file URL were a normal
// constant it would be bundled into the page JavaScript, and anyone could read
// it out of view-source without ever filling in the form. It is handed back by
// the API route, and only after a submission has been accepted.

export const LEAD_MAGNET_TITLE = "The 90 Day Trust Calendar";

export const LEAD_MAGNET_URL =
  process.env.LEAD_MAGNET_URL ??
  "https://drive.google.com/file/d/1KAf4mmZO9hK9iNZRSzA82Xq4tTpMfnj-/view?usp=drive_link";

// Where a captured lead goes. A GoHighLevel inbound webhook, a Make scenario,
// or anything that accepts a JSON POST.
//
// Deliberately no fallback: with nowhere to send them, a form would take
// somebody's name and email and quietly drop them, which is worse than not
// asking. The route refuses to accept a submission until this is set.
export function leadWebhook(): string | null {
  const url = process.env.LEAD_WEBHOOK_URL;
  return url && url.startsWith("https://") ? url : null;
}

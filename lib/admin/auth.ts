// Admin session tokens.
//
// One password, held only in an environment variable, exchanged for a signed
// cookie. The signature is an HMAC over the expiry, keyed by the password
// itself, so a token cannot be forged without knowing it and changing the
// password invalidates every session that is already out there.
//
// Web Crypto is used throughout so this runs unchanged in middleware on the
// edge and in the route handlers on Node.

const encoder = new TextEncoder();

/** Admin is off entirely unless a password is configured. Fails closed. */
export function adminPassword(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  return pw && pw.length > 0 ? pw : null;
}

export const ADMIN_COOKIE = "pf-admin";
// A second, readable cookie carrying no authority. It only tells the browser
// whether to draw the editing bar, which keeps every page statically
// rendered: reading the real cookie on the server would make them dynamic.
export const ADMIN_UI_COOKIE = "pf-admin-ui";

export const SESSION_SECONDS = 60 * 60 * 12;

async function key(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createToken(secret: string): Promise<string> {
  const expiry = Date.now() + SESSION_SECONDS * 1000;
  const sig = await crypto.subtle.sign(
    "HMAC",
    await key(secret),
    encoder.encode(String(expiry))
  );
  return `${expiry}.${toHex(sig)}`;
}

export async function verifyToken(
  token: string | undefined,
  secret: string | null
): Promise<boolean> {
  if (!token || !secret) return false;
  const [expiryRaw, sig] = token.split(".");
  const expiry = Number(expiryRaw);
  if (!expiry || !sig || Number.isNaN(expiry)) return false;
  if (Date.now() > expiry) return false;

  const expected = toHex(
    await crypto.subtle.sign("HMAC", await key(secret), encoder.encode(expiryRaw))
  );
  // Length-independent compare, so a wrong signature cannot be narrowed down
  // by timing how long the rejection takes.
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  }
  return diff === 0;
}

/** Same constant-time compare, for checking the submitted password. */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

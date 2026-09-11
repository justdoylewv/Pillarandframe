import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COMING_SOON, PREVIEW_TOKEN } from "@/lib/content/site";

// The holding page is decided here, per request, rather than baked into the
// pages at build time. Two consequences worth knowing:
//
//   1. A preview link works on any deployment that is already live, including
//      production. No rebuild, no environment variable, no waiting.
//   2. Launching is still a deliberate act. Nothing opens on its own.

const PREVIEW_COOKIE = "pf-preview";

// What the gate serves. The Comeback landing page is the live site for now, so
// every address that is not otherwise public renders it. The old holding page
// is still in the repository and is simply no longer what anybody lands on.
const GATE_TARGET = "/comeback";

// Pages that stay public even while the site is gated.
//
// A2P 10DLC registration is reviewed against the live site: a carrier opens
// the privacy policy and the terms from a plain link and looks for the mobile
// data clause and the STOP and HELP wording. Behind the holding page they
// would serve the holding page, and the registration fails. These are also the
// pages a visitor is entitled to reach at any time, so they are not gated.
// /comeback is on this list rather than only being the gate target, so it keeps
// its own address after launch instead of redirecting to the home page. It is a
// funnel page that outlives the gate.
const ALWAYS_PUBLIC = ["/privacy", "/terms", "/comeback"];

// A month. Long enough to review over several sittings without re-entering it.
const PREVIEW_MAX_AGE = 60 * 60 * 24 * 30;

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Admin sign-in and its API stay reachable while the site is gated, so the
  // copy can be edited before launch. The routes check the signed cookie
  // themselves; this only keeps the holding page from swallowing them.
  if (pathname === "/admin") {
    return NextResponse.next();
  }

  // Every API route, always. Rewriting a POST to a page returns 405, which is
  // how the Comeback forms failed silently the first time this was wired: the
  // browser posts, the gate hands it a page, and nothing arrives. The routes
  // do their own validation and their own auth, so the gate has no business
  // in front of them.
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // The legal pages, before the gate and before the preview handling, so they
  // answer the same way for everybody whatever the launch switch is set to.
  if (ALWAYS_PUBLIC.includes(pathname)) {
    return NextResponse.next();
  }

  // ?preview=TOKEN opens the door for this browser, then gets stripped from
  // the address so the token does not travel on in shared links or referrers.
  const offered = searchParams.get("preview");
  if (offered !== null) {
    const clean = request.nextUrl.clone();
    clean.searchParams.delete("preview");
    const response = NextResponse.redirect(clean);
    if (offered === PREVIEW_TOKEN) {
      response.cookies.set(PREVIEW_COOKIE, PREVIEW_TOKEN, {
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        path: "/",
        maxAge: PREVIEW_MAX_AGE,
      });
    } else {
      // ?preview=off, or a wrong token, puts the holding page back.
      response.cookies.delete(PREVIEW_COOKIE);
    }
    return response;
  }

  const previewing =
    request.cookies.get(PREVIEW_COOKIE)?.value === PREVIEW_TOKEN;

  if (!COMING_SOON || previewing) {
    // The real site. Send anyone who lands on the retired holding page to the
    // home page, so a stale bookmark does not strand a reviewer on it.
    if (pathname === "/coming-soon") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // Gated. Every address serves the Comeback page, and the address bar keeps
  // whatever the visitor typed.
  return NextResponse.rewrite(new URL(GATE_TARGET, request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|opengraph-image|robots.txt|sitemap.xml|.*\\.).*)",
  ],
};

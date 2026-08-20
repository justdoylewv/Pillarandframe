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
const HOLDING_PAGE = "/coming-soon";

// A month. Long enough to review over several sittings without re-entering it.
const PREVIEW_MAX_AGE = 60 * 60 * 24 * 30;

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Admin sign-in and its API stay reachable while the site is gated, so the
  // copy can be edited before launch. The routes check the signed cookie
  // themselves; this only keeps the holding page from swallowing them.
  if (pathname === "/admin" || pathname.startsWith("/api/admin")) {
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
    // The real site. Send anyone who lands on the holding page to the home
    // page, so a stale bookmark does not strand a reviewer on it.
    if (pathname === HOLDING_PAGE) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // Gated. Every address serves the holding page, and the address bar keeps
  // whatever the visitor typed.
  if (pathname === HOLDING_PAGE) return NextResponse.next();
  return NextResponse.rewrite(new URL(HOLDING_PAGE, request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|opengraph-image|robots.txt|sitemap.xml|.*\\.).*)",
  ],
};

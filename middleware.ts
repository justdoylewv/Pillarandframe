import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COMING_SOON } from "@/lib/content/site";

// While the site is in coming soon mode, every page route serves the holding
// page. Assets, the OG image, robots, and the sitemap are matched out below so
// they keep working. Set COMING_SOON to false and this becomes a no-op.
export function middleware(request: NextRequest) {
  if (!COMING_SOON) return NextResponse.next();
  if (request.nextUrl.pathname === "/") return NextResponse.next();
  return NextResponse.rewrite(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|opengraph-image|robots.txt|sitemap.xml|.*\\.).*)",
  ],
};

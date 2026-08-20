import { NextResponse } from "next/server";
import { ADMIN_COOKIE, ADMIN_UI_COOKIE } from "@/lib/admin/auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const res = NextResponse.redirect(new URL("/", request.url));
  res.cookies.delete(ADMIN_COOKIE);
  res.cookies.delete(ADMIN_UI_COOKIE);
  return res;
}

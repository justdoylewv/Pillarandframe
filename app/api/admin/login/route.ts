import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  ADMIN_UI_COOKIE,
  SESSION_SECONDS,
  adminPassword,
  createToken,
  safeEqual,
} from "@/lib/admin/auth";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const secret = adminPassword();
  if (!secret) {
    return NextResponse.json(
      { error: "Admin mode is not configured on this deployment." },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const submitted = typeof body.password === "string" ? body.password : "";

  if (!safeEqual(submitted, secret)) {
    // Deliberately vague, and slow enough that guessing at scale is
    // unattractive without being noticeable to a real sign-in.
    await new Promise((r) => setTimeout(r, 600));
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  const token = await createToken(secret);
  const res = NextResponse.json({ ok: true });
  const common = {
    path: "/",
    maxAge: SESSION_SECONDS,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
  // The signed one is the credential and stays out of reach of scripts.
  res.cookies.set(ADMIN_COOKIE, token, { ...common, httpOnly: true });
  // The readable one only tells the page to offer the editing bar.
  res.cookies.set(ADMIN_UI_COOKIE, "1", { ...common, httpOnly: false });
  return res;
}

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, adminPassword, verifyToken } from "@/lib/admin/auth";
import { allOverrides } from "@/lib/content/overrides";

export const dynamic = "force-dynamic";

// Where saved copy lands. Committing to the repository is what makes an edit
// permanent here: there is no database on a statically built site, and a
// commit is versioned, diffable, and revertible, which a database row is not.
const FILE_PATH = "content-overrides.json";

const OWNER = process.env.GITHUB_OWNER ?? "justdoylewv";
const REPO = process.env.GITHUB_REPO ?? "Pillarandframe";
// The branch production deploys from.
const BRANCH = process.env.GITHUB_BRANCH ?? "claude/implement-index-html-Kn78C";

// A headline is a headline, not an essay. This is a guard against a runaway
// paste, not a style rule.
const MAX_LENGTH = 5000;
const MAX_FIELDS = 500;

function ghHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };
}

export async function POST(request: Request) {
  const secret = adminPassword();
  const token = cookies().get(ADMIN_COOKIE)?.value;
  if (!(await verifyToken(token, secret))) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const gh = process.env.GITHUB_TOKEN;
  if (!gh) {
    return NextResponse.json(
      {
        error:
          "Saving needs GITHUB_TOKEN set in Vercel. Without it there is nowhere permanent to write.",
      },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const drafts = body?.drafts;
  if (!drafts || typeof drafts !== "object" || Array.isArray(drafts)) {
    return NextResponse.json({ error: "Nothing to save." }, { status: 400 });
  }

  const entries = Object.entries(drafts as Record<string, unknown>);
  if (entries.length === 0) {
    return NextResponse.json({ error: "Nothing to save." }, { status: 400 });
  }
  if (entries.length > MAX_FIELDS) {
    return NextResponse.json({ error: "Too many fields." }, { status: 400 });
  }

  const clean: Record<string, string> = {};
  for (const [id, value] of entries) {
    if (typeof value !== "string") continue;
    if (!/^[a-zA-Z0-9._-]{1,120}$/.test(id)) {
      return NextResponse.json(
        { error: `Bad field name: ${id}` },
        { status: 400 }
      );
    }
    if (value.length > MAX_LENGTH) {
      return NextResponse.json(
        { error: `That edit is too long: ${id}` },
        { status: 400 }
      );
    }
    clean[id] = value;
  }

  // Merge over what is already saved, then drop anything edited back to empty
  // so the file does not accumulate blanks.
  const merged: Record<string, string> = { ...allOverrides(), ...clean };
  for (const [id, value] of Object.entries(merged)) {
    if (value.trim() === "") delete merged[id];
  }
  const sorted = Object.fromEntries(
    Object.entries(merged).sort(([a], [b]) => a.localeCompare(b))
  );
  const contents = `${JSON.stringify(sorted, null, 2)}\n`;

  const base = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`;

  try {
    // The current blob sha is required to replace a file, and it is also what
    // makes the write safe: if someone else saved in between, GitHub rejects
    // this rather than quietly overwriting them.
    const head = await fetch(`${base}?ref=${encodeURIComponent(BRANCH)}`, {
      headers: ghHeaders(gh),
      cache: "no-store",
    });
    if (!head.ok && head.status !== 404) {
      const detail = await head.text();
      return NextResponse.json(
        { error: `Could not read the current file (${head.status}). ${detail.slice(0, 200)}` },
        { status: 502 }
      );
    }
    const sha = head.ok ? (await head.json()).sha : undefined;

    const put = await fetch(base, {
      method: "PUT",
      headers: ghHeaders(gh),
      body: JSON.stringify({
        message: `Update site copy from admin mode\n\n${Object.keys(clean).length} field(s) edited.`,
        content: Buffer.from(contents, "utf8").toString("base64"),
        branch: BRANCH,
        ...(sha ? { sha } : {}),
      }),
    });

    if (!put.ok) {
      const detail = await put.text();
      if (put.status === 409) {
        return NextResponse.json(
          {
            error:
              "Someone else saved while you were editing. Reload and make the change again.",
          },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: `GitHub refused the write (${put.status}). ${detail.slice(0, 200)}` },
        { status: 502 }
      );
    }

    const result = await put.json();
    return NextResponse.json({
      ok: true,
      commit: result?.commit?.sha ?? null,
      fields: Object.keys(clean).length,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Save failed." },
      { status: 500 }
    );
  }
}

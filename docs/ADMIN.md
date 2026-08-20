# Admin mode

Edit the site copy in place, in the browser, and save it permanently.

## Setup, once

Three environment variables in Vercel, under Settings then Environment
Variables. Set all three for **Production** and **Preview** so editing works in
both.

| Variable | What it is |
| --- | --- |
| `ADMIN_PASSWORD` | The password you sign in with. Pick something long. Nothing else gates access, so this is the whole lock. |
| `GITHUB_TOKEN` | A GitHub fine-grained personal access token with **Contents: read and write** on this repository, and nothing else. This is what lets a save write back. |
| `GITHUB_BRANCH` | Optional. The branch production builds from. Defaults to `claude/implement-index-html-Kn78C`. |

Admin mode is off until `ADMIN_PASSWORD` is set. A deployment without it has no
sign-in and no editing, which is the safe default given this repository is
public.

To make the token: GitHub, Settings, Developer settings, Personal access tokens,
Fine-grained tokens. Repository access limited to `Pillarandframe`. Under
Repository permissions set Contents to Read and write. Leave everything else
alone. Give it an expiry you will remember to renew.

## Using it

1. Go to `/admin` and sign in.
2. The bar appears at the bottom of every page. Press **Edit text**.
3. Editable copy gets a thin outline. Click into any of it and type. Edited
   fields turn gold so you can see what you changed.
4. Press **Save**.

Saving commits the change to the repository, which starts a deploy. The live
site updates when that finishes, usually about a minute. Until then the site
still shows the old copy, which is expected rather than a failed save.

**Discard** throws away everything since the last save. Unsaved edits survive a
reload and follow you between pages, and the browser warns before you close the
tab with work outstanding.

## What is editable

Copy wrapped in the `Editable` component. That is the main headings and lead
paragraphs on the home page today. Anything else is still in the page source.

To make another string editable, wrap it and give it an id that will not change:

```tsx
<Editable id="engine.hero.line1">You show up once a month.</Editable>
```

Ids are the storage key. Renaming one orphans whatever was saved against the old
name, and the page falls back to the text written in the source, so it fails
visibly rather than silently.

Only plain text. Anything containing a link or bold runs stays in the page,
because editing markup through a contentEditable field is how stray tags end up
inside a headline.

## Where the copy lives

`content-overrides.json` at the repository root. It holds only the strings that
have been changed. Empty means the site reads exactly as written in the source.

That file is the record. Every save is an ordinary commit, so the history shows
who changed what and when, and reverting a bad edit is a normal revert rather
than a database restore.

## If something goes wrong

- **"Admin mode is not configured"**: `ADMIN_PASSWORD` is not set on the
  environment you are on. Preview and Production are configured separately.
- **"Saving needs GITHUB_TOKEN"**: the token is missing.
- **"GitHub refused the write (401)"**: the token is wrong or expired.
- **"GitHub refused the write (404)"**: the token cannot see the repository, or
  `GITHUB_BRANCH` names a branch that does not exist.
- **Someone else saved while you were editing**: two sessions edited at once.
  Reload and redo the change. The save is refused rather than overwriting the
  other person, on purpose.


---

# The 90 Day Trust Calendar download

The download at `/trust-calendar` asks for a name and email before handing the
file over.

## Setup

One environment variable in Vercel, for **Production** and **Preview**:

| Variable | What it is |
| --- | --- |
| `LEAD_WEBHOOK_URL` | An https endpoint that accepts a JSON POST. A GoHighLevel inbound webhook, or a Make scenario with a webhook trigger. |
| `LEAD_MAGNET_URL` | Optional. The file to hand over. Defaults to the Drive link already in the code. |

Until `LEAD_WEBHOOK_URL` is set the form refuses to accept anybody, and tells
them to email instead. That is deliberate: taking a name and an email with
nowhere to put them is worse than not asking.

The POST body looks like this:

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "source": "pillarandframe.com",
  "magnet": "The 90 Day Trust Calendar",
  "submittedAt": "2026-08-20T14:02:11.000Z"
}
```

## Two things worth knowing

The file URL is never in the page. It is returned by the API only after a
submission is accepted, so the form cannot be walked around by reading the page
source. That also means the Drive file has to be shared as **anyone with the
link** or the download will fail for everyone but you.

If the webhook is down, the visitor still gets the file and the lead is lost.
They asked properly, so making them pay for an outage on our side would be the
wrong trade. The response carries `delivered: false` when that happens.

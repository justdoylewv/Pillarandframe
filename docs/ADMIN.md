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

`/trust-calendar` explains what is in the calendar and embeds a GoHighLevel
form. GoHighLevel captures the lead and its automation sends the file.

## Setup

Build the form in GoHighLevel, then copy its embed URL. It looks like:

```
https://api.leadconnectorhq.com/widget/form/<formId>
```

Paste that into `GHL_FORM_URL` in `lib/content/site.ts`. That is the only step.

Until it is set the page asks people to email instead, rather than showing a
form that goes nowhere.

## Why it is set up this way

The site holds no lead data and never sees the file link. Everything after the
submit is a GoHighLevel automation, which is where the follow-up sequence
belongs anyway, and it means there is nothing here to keep in sync when the
offer or the file changes.

Make sure the automation attaches the file or links to it, and that the Drive
file is shared as **anyone with the link** if you link rather than attach.

## Form colours

The card behind the form is light (`#FAF8F3`) with a gold edge, so set the form
for a light background:

| Setting | Hex |
| --- | --- |
| Form background | transparent, or `#FAF8F3` |
| Heading text | `#0A0A0B` |
| Field labels | `#4A463E` |
| Field background | `#FFFFFF` |
| Field text | `#0A0A0B` |
| Placeholder | `#807A6E` |
| Field border | `#E5DFD3` |
| Field border, focused | `#5B27D4` |
| Button background | `#0A0A0B` |
| Button text | `#FAF8F3` |
| Button hover | `#1F1D26` |
| Fine print | `#807A6E` |

Font DM Sans, radius 0 with 2px on the button, no shadow, and set the form's own
padding to 0 since the card already frames it.

## If you would rather it were a pop-up

The button currently opens the page. A modal on the home page is the other
option and converts a little better for a download, at the cost of a page that
can be linked, indexed, and shared. Say the word and it is a small change.

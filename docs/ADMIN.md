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


---

# The Trust Audit landing page

`/trust-audit` is the lead-capture page. Five tap-to-answer questions, then
name, email, business, and website. It sits outside the main site chrome on
purpose: every nav link on a landing page is a way out of it, so the header
carries the wordmark and one booking link and nothing else.

## The questions are the rubric

The audit scores five categories: **Findability, Proof, Voice, Answers,
Freshness**. The survey asks about four of them directly, plus one question up
front that sets which competitors we compare against. Freshness is the one we
check without asking.

That is the reason the survey is worth a minute to the person filling it in.
They are not being sorted, they are being handed the framework, and the
question about where they rank makes them go and look. Two of the answer sets
are written so the honest answer is usually the uncomfortable one, which is the
finding.

## The finding on the last step

Each option carries a `note` and a `weight`. On the last step, above the name
and email fields, we show **one** note: the answer with the heaviest weight,
with an earlier question breaking a tie. So somebody who cannot be found at all
hears about that rather than about their reviews.

One rather than all five, because the last step is where people abandon and a
recap of what they just clicked through is not worth the height it costs. That
choice is what keeps the step to roughly one screen instead of two.

The weights, roughly: 5 is invisible in search, 4 is a real gap, 3 is a gap
worth naming, 2 is minor, 1 is informative but not a failure, and 0 means the
answer is healthy and never leads. The question about what people ask before
deciding is 1 across the board, since no answer to it is a failure. That is
what leads when everything else comes back clean, so there is always something
to show.

**Every note has to be true of the answer alone.** We have not looked at their
business at that point, so a note may say what the answer implies and what we
will go and check. It may not state anything about them as fact. Keep that rule
if you edit the copy.

To change a question, edit `STEPS` in `components/TrustAuditModal.tsx`. If you
rename a field, rename it in `ANSWER_FIELDS` in `app/api/survey/route.ts` in the
same sitting, or that answer reaches the webhook empty. If you add or drop a
category, `CATEGORIES` in `app/trust-audit/page.tsx` has to match.

## Setup

One environment variable in Vercel, for **Production** and **Preview**:

| Variable | What it is |
| --- | --- |
| `SURVEY_WEBHOOK_URL` | An https endpoint that takes a JSON POST. A GoHighLevel inbound webhook, or a Make scenario. |

Until it is set the last step tells people to email instead.

The POST body:

```json
{
  "business_type": "Real estate",
  "findability": "I did not look",
  "proof": "A few months back",
  "voice": "No",
  "answers": "Why us and not the bigger name",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "business": "Smith Realty",
  "website": "smithrealty.com",
  "source": "pillarandframe.com/trust-audit",
  "offer": "Free Trust Audit",
  "submittedAt": "2026-08-20T14:02:11.000Z"
}
```

## Two things worth knowing

The webhook is called from the server, not the browser, so the endpoint is not
sitting in the page source for anyone to flood. That is the one change from the
template, which posts straight from the client.

Nothing is sent until the last step, so an abandoned survey leaves no
half-finished record behind. If the webhook fails, the visitor still sees the
thank-you: somebody who answered five questions should not be told to start
again because our endpoint blinked. The response carries `delivered: false`.

## The promise on this page

It commits to a written audit within two business days, scored out of a hundred
across the five named categories, against two competitors we name and score the
same way. That is a real deliverable someone has to produce by hand, and naming
the rubric on the page means the scoring has to be consistent between one audit
and the next. Change the copy if the offer changes.


---

# Local search and AI answers

Two things drive this: the questions the site answers, and where the towns
live. Neither needs a blog.

## The questions

`lib/content/questions.ts` holds the questions people actually type. The FAQs
elsewhere on the site are objection handling, which is a different job: "I am
terrible on camera" belongs on a sales page and nobody has ever searched it.

**The rule that makes an answer citable: the first paragraph has to stand
completely alone.** An assistant lifts one paragraph and shows it without the
question above it, without the page around it, and without the sentence before
it. So a lead answer names its subject instead of saying "we", carries its own
numbers, and depends on nothing earlier. Forty to eighty words: shorter reads
as a stub, longer gets cut mid-thought.

Anything that needs the page around it goes in `more`. It renders and is added
to the schema, but it is not doing the retrieval work.

**Every number has to be true and checkable somewhere a human can see it.** No
invented market rates, no made-up turnaround averages, no "most businesses
see" statistics. A fabricated figure that gets picked up is then attributed to
us in places we cannot correct.

`BUYING_QUESTIONS` renders at the top of the home page FAQ. `AREA_QUESTIONS`
renders on the service area page and on every town page.

## Why there is one service area page and not seventeen

The obvious move is a page per town with the name swapped. That pattern is
named in Google's own spam policy as a doorway page, and assistants are worse
for it than search is, because near-duplicates get collapsed before anything
is cited. The whole domain can be dragged down by it.

The test a town page has to pass: **is there anything on it that somebody in
that town could not have read on the page for the next town over?**

So `/service-area` covers all seventeen towns on one legitimate page, and town
pages exist only where there is a City Spotlight Ohio film for that town. A
film passes the test on its own. It is footage of that place, a transcript
full of that town's specifics, and something no competitor can copy.

## Adding a town page

`TOWNS` in `lib/content/towns.ts` is empty, so the route builds nothing today.
Add an entry and the page, the sitemap entry, and the link from the service
area page all appear together.

Every field is required. There is no partial entry, because a page without a
transcript cannot be read by the crawlers this is for, and one without an
upload date is not eligible for a video result.

| Field | What it is |
| --- | --- |
| `slug` | URL segment, lowercase and hyphenated |
| `name` | Must match a town in `SERVICE_AREA` exactly |
| `county` | Without the word "County" |
| `intro` | What is true about working here that is not true of the next town over. If it could be pasted onto another town's page unchanged, the page is not ready. |
| `film.url` | The YouTube URL for the City Spotlight film |
| `film.title` | As published |
| `film.description` | One or two sentences on what it is about |
| `film.uploadDate` | ISO date it went live |
| `film.transcript` | The spoken words. Newlines become paragraphs. |
| `clients` | Optional. Businesses filmed there, by name. |

Two build-time guards, so a mistake fails the build rather than shipping:

- A town not listed in `SERVICE_AREA` stops the build by name. Add it to the
  service area and the Google Business Profile first.
- An unknown slug returns 404 rather than rendering an empty page.

## What the site cannot do on its own

Worth being straight about: for a query like "best video production company in
Columbus", an assistant assembles its answer mostly from **other people's**
pages, not yours. Directories, chamber listings, local press, podcast
appearances, and roundups are the input it reads. Your own site establishes
what you are and what you charge, and it cannot vote for itself.

The highest-return work is off this repository:

1. Google Business Profile: categories, services, photos, and posts, with
   review recency mattering more than review count.
2. Consistent name, description, and service area everywhere the business is
   listed. The sentence in `SERVICE_AREA_SENTENCE` is the one to paste.
3. Getting named on local pages that already rank: chamber, sponsorships,
   supplier and partner sites, local news.
4. `SAME_AS` in `lib/content/site.ts`, filled in as profiles go live.
   LinkedIn and YouTube are the two that move the needle most.


---

# Legal pages and A2P 10DLC

`/privacy` and `/terms` exist for A2P 10DLC registration, which is what lets a
GoHighLevel number send text messages that actually arrive.

## Not legal advice

These were written to meet what carriers check for and to describe what this
site truly does. They are not a substitute for a lawyer reading them. Before
registering, have somebody qualified look at the disclaimer, the limitation of
liability, and the governing law sections in particular.

## Fill these in before registering

Three constants in `lib/content/site.ts`. The pages read fine without them and
are **not ready to submit** until they are set.

| Constant | Why it matters |
| --- | --- |
| `LEGAL_ENTITY_NAME` | The registered legal name, with its entity suffix. Carriers compare the name on the privacy policy against the name on the campaign, and a mismatch is a common rejection. Empty falls back to "Pillar & Frame", which is the trading name, not the legal one. |
| `BUSINESS_ADDRESS` | A postal address, as an array of lines. A PO box or registered agent address is fine. Empty omits the address block rather than printing a placeholder. |
| `LEGAL_EFFECTIVE_DATE` | Update whenever the substance changes, not for a typo. |

## Why these two pages are not behind the holding page

`middleware.ts` has an `ALWAYS_PUBLIC` list. A carrier reviewing the
registration opens these from a plain link, and behind the gate they would
serve the holding page and the registration would fail. They answer the same
way whatever the launch switch is set to.

The same reasoning puts the chat widget in `app/layout.tsx` rather than in the
site chrome: it has to be live on whatever is actually published today.

## What a carrier looks for, and where it is

| Requirement | Where |
| --- | --- |
| Mobile data not shared or sold | Privacy, section 4, in the boxed clause |
| Opt-in consent never shared | Privacy, section 4 |
| Program description | Terms, section 3 |
| Message frequency varies | Terms, section 3 |
| Message and data rates may apply | Terms, section 3 |
| STOP to opt out | Terms, section 3 |
| HELP for help, with contact | Terms, section 3 |
| Carriers not liable | Terms, section 3 |
| Consent not a condition of purchase | Terms, section 3, in the boxed clause |
| Business contactable | Email and phone in both footers and both pages |

The boxed clause in privacy section 4 is quoted in the wording carriers
recognise. **Do not paraphrase it.** Reviewers scan for that phrasing, and a
tidier rewrite is a slower approval.

## Forms and phone numbers

The chat widget loads on every page, so every form on the site shares a page
with it. Audited at the time of writing:

| Form | Collects a phone number? |
| --- | --- |
| Trust Audit survey (`components/TrustAuditModal.tsx`) | No. Name, email, business, website. |
| Admin sign-in | No. Password only. |
| Booking (`/book`) | Not on our page. It is a link out to the GoHighLevel calendar, which opens in a new tab. |
| Trust Calendar form (`components/GhlForm.tsx`) | **Cannot be checked from this repository.** It is an iframe and its fields are configured in GoHighLevel. |

**Check the Trust Calendar form in GoHighLevel yourself.** If it asks for a
phone number it becomes an SMS opt-in point, and it then needs consent wording
that matches the campaign filed with the carrier, plus a link to the privacy
policy. The same applies if the chat widget is ever set to ask for a number.

## The address and the schema

`BUSINESS_ADDRESS` prints on the site. It is deliberately **not** added to the
LocalBusiness schema, which still publishes city and state only. That is not an
oversight: this is a service-area business, Google's guidance is to leave the
street address out for one, and the address on the privacy policy is there to
satisfy a different requirement. Keep them separate.


---

# The Comeback (`/comeback`)

The live site for now. `middleware.ts` points the gate here, so every address
that is not otherwise public renders this page. The rest of the site is built
and unpublished behind it, and launching is still the same one switch.

`/comeback` is also on the always-public list, not just the gate target, so it
keeps its own address after launch instead of redirecting to the home page. It
is a funnel page that outlives the gate.

## The numbers that change without the page changing

All in `lib/content/comeback.ts`. The GoHighLevel `{{custom_values.*}}` tags
from the source copy do not resolve on this site, so they are constants here.

| Constant | Effect |
| --- | --- |
| `FOUNDING_SPOTS_LEFT` | The count in the pricing section and the P.S. **At zero the pricing section swaps itself to the standard price**, so closing the founding offer is this one number. |
| `COHORT_NAME`, `COHORT_DEADLINE` | Named in the scarcity section and the P.S. |
| `COMEBACK_VIDEO_URL` | Empty, so the hero renders without a player. Set it to the YouTube URL and the block appears with a poster and a play button. It never autoplays. |

## The interactive parts

**The Leak calculator** is the argument of the page made tactile. Two dials,
and the number moves as they drag. It is deliberately **not** gated behind the
email: somebody who drags their own quote count and watches six figures appear
has understood the offer in a way no paragraph manages, and gating that trades
the thing that convinces them for an address they will hand over anyway once
convinced. The email form sits underneath, after the number.

It opens on 180 quotes at $9,000, which is the worked example in the copy
above it, so the two always agree.

Under 150 quotes it says so, because that is the guarantee's own condition and
finding out later would be worse.

**The trade switcher** in the Why Now section is the swappable line from the
source copy, turned into something the visitor picks. That was offered as
"build industry versions of this page"; one tap gets the same line in front of
the right person without four near-identical pages to maintain.

**The FAQ** is an accordion. Every answer stays in the DOM whatever is open, so
the FAQPage schema and the page agree and a crawler sees all twelve.

## SMS consent

This page collects mobile numbers, which makes the demo form the site's SMS
opt-in point. Three rules in `components/comeback/DemoForm.tsx`:

1. The consent box starts unticked and the form will not submit without it. A
   pre-ticked box is not consent.
2. The wording beside the box comes from `SMS_CONSENT_TEXT`, the same constant
   stored with the record, so what somebody agreed to and what we say they
   agreed to cannot drift.
3. Every submission stores the consent text, an ISO timestamp, and the page it
   came from. That record is what a carrier asks for, and a checkbox column on
   its own does not answer the question.

The server refuses a demo submission without `smsConsent: true` even if the
browser is bypassed.

## Connecting it

One environment variable in Vercel, Production and Preview:

| Variable | What it is |
| --- | --- |
| `COMEBACK_WEBHOOK_URL` | An https endpoint taking a JSON POST. A GoHighLevel inbound webhook, or a Make scenario. Falls back to `SURVEY_WEBHOOK_URL` if unset. |

Until it is set, both forms tell the visitor to email instead rather than
silently dropping a lead.

Two payload shapes, distinguished by `intent`: `leak_number` carries the
quote count, average job value, the leak, and the 3 percent figure;
`demo_request` carries the phone in E.164 and the consent record.

## Still to fill in

- **The hero video.** Script is section 17 of the source copy. Set
  `COMEBACK_VIDEO_URL` when it exists.
- **Section 13 proof.** Currently the honest pre-results version. Swap it the
  day there are real numbers with written permission.
- **Memorial Health** is not on the page. The source copy bracketed it "with
  permission" and no permission is on record.
- **The counties.** `COMEBACK_COUNTIES` lists nine. `COUNTIES` in `site.ts`,
  which drives the LocalBusiness schema and should match the Google Business
  Profile, lists three. Reconcile them, on the profile first.

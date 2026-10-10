# Pillar & Frame content handoff

The site remains an owner-private review. Do not change its audience without Doyle's instruction.

## Plugging in content

Edit `dist/content.js`. No page markup changes are required for these slots:
- `bookingUrl`: approved HTTPS scheduling link. All booking CTAs use it. While empty, the CTA opens an honest booking-coming-soon message.
- `reel`: the full-width hero reel.
- `samples`: one named slot per use case: sales-1, stakeholders-1, hiring-1. The page renders exactly one sample per section, so adding more keys has no effect until `build-page.py` widens the range.
- `quotes`: three objects with quote, name, title, and company. A quote with both a `quote` and a `name` is written into the static page; anything short of that falls back to the dashed placeholder card. `title` and `company` are optional and are joined to the name with a middle dot when present.

For a media item:
- `kind: "video"`: set `src` to a local MP4 path such as `/media/project-story.mp4` or an HTTPS media URL. Set `poster` to an approved still and `captions` to an English WebVTT file. Native controls include play/pause, seeking, volume and fullscreen. Mobile inline playback, no autoplay, preload none.
- `kind: "embed"`: set `src` to the actual player embed URL from Wistia, Vimeo, or YouTube. Supported hosts: fast.wistia.net, fast.wistia.com, player.vimeo.com, www.youtube-nocookie.com, www.youtube.com, and any *.cloudflarestream.com customer subdomain. Provider controls and captions are configured in the provider. Use an embed URL, not a sharing page URL or pasted HTML.
- `title`: accessible player title.
- `caption`: project name and client shown beneath a sample. Label reused projects honestly; do not imply a different project or outcome.

Empty sources show labeled placeholders; no client footage, quotes, results or logos have been fabricated. Client quotes are reproduced word for word, including punctuation and the word "customers", and are trimmed only by whole sentences if ever shortened. The previous AI illustration is retained as an unused asset and is not presented as project evidence. No Testimonial Hero footage, brand assets, or third-party players are embedded.

Testimonial Hero reference inspection: full-width Wistia brand film and groups of three Wistia samples (via Embedly), with poster images and play buttons; the pricing page toggles between two package ladders. This page uses those presentation patterns with original design and configurable first-party content.

## Doyle's confirmation notes — not website copy

- Three approved client quotes are live: Marco Randazzo, Stacey Dowling, Rachel Watson. Supplied by Doyle on 19 September 2026 and reproduced verbatim. Names only, no title or company, because none of the three is a commercial contractor and the page sells to commercial contractors. A PowerField quote is still pending.
- The PowerField result is missing. Do not invent a number.
- Validate the day's coverage in October before a public launch: client interview, crew interview and b-roll.
- Confirm tier pricing: video plus written at $8,500 / $9,500 / $11,500, video only at $6,500 / $7,500 / $9,500. Approximately $2,000 delivery cost is an internal estimate; cold-buyer pricing remains untested.
- All three sample slots now carry real films, so no placeholders remain on the page. Each still needs a real `title` and `caption` naming the project and client; they currently carry neutral role-based titles and no caption.
- Delivery guarantee changed from fourteen days to thirty on 19 September 2026 at Doyle's instruction; fourteen was judged too aggressive. Confirm the thirty-day guarantee and approval timing before public launch.
- Booking URL supplied and connected to all booking CTAs on both landing pages: https://api.leadconnectorhq.com/widget/bookings/30minchatdoyle
- The call is a **30 minute discovery call** as of 2 October 2026. The hero and closing buttons say "Book a 30-minute discovery call"; the header button says "Book a discovery call" because the full label wraps on a phone. The previous 15 minute link is retired.

The supplied marketing claims, capacity, deadlines, prices and guarantees are reproduced as requested; they have not been independently substantiated.

## DG Lending work on /mortgage-brokers (10 October 2026)

**Photos.** Five real photos from the DG Lending foundation shoot, in
`dist/media/dg/`: the conference-table meeting (also the hero), a team member at
her desk with a client, Stacey at an outdoor table, a loan officer on a call, and
Stacey's portrait. Four came out of the DG Lending Activation Guide PDF, which
holds curated picks from the shoot; the portrait is `Stacey-30.jpg` from
`DG Lending / 1. Content / 5. Images (Final)`. **The Drive connector cannot move
files over roughly 7 MB, and every other final photo is 7 to 14 MB**, so the rest
of the 200-plus finals were not reviewed. To add more, export web-size copies
(under 2 MB) into a Drive folder and they can be pulled in.

Only Stacey is named in alt text; the other team members are described, not
named. **The DG Lending logo in the guide was deliberately not used.**

**Videos.** Three short-form square cuts play on the page: "Closing fast",
"When other lenders say no, we look deeper" and "Why your lender matters". **They
are the only three in the tracker with a direct, public Dropbox link**; every
other row links to Dropbox Replay review pages, which cannot be embedded. They
stream from Dropbox (`raw=1`), which could not be tested from the build
environment. Dropbox throttles busy shared links, so **move them to Cloudflare
Stream**, like the other films, before any real traffic. No public links were
created for other files; that would publish client video and needs Doyle.

**Permission.** All three cuts feature a DG Lending borrower telling his own
story. He is not named on the page, but he is on camera. Confirm DG Lending, and
through them the borrower, are fine with Pillar & Frame showing these as
portfolio work.

**Counts.** The tracker lists 85 finished pieces (80 short-form, 5 long-form);
the page says 60 videos, Doyle's figure. Confirm which number to publish.

## 10 October 2026, second pass: the conversion review, and the mortgage page refocused

### What the 9 October conversion review changed

Applied across the shared copy, so `/`, `/editorial`, `/founding` and
`/built-on-trust` stay identical in offer and terms:

- **Portfolio permission is now the stated reason for the founding price.** The
  three founding clients agree in writing which approved work Pillar & Frame can
  feature. Consequence: **a project that must stay confidential no longer
  qualifies for the founding rate** (it used to say "work for hire, same price").
  Honest feedback is asked for after delivery; a review, referral or endorsement
  is never a condition of the price. If a founding client's words are ever used
  in advertising, disclose the reduced rate.
- **The clock.** It pauses only for a specific input only the client can give,
  named when it happens. Internal editing and staffing never pause it.
- **No more absolute promises.** "Nobody stops working" became brief interviews
  arranged around the job. The case study page no longer says it is "yours",
  because hosting terms are undecided.
- **FAQ rebuilt around the review's questions**: why the founding rate, who
  qualifies, whether you have to manage the shoot, whether the client must be on
  camera (a fact-led story with no implied endorsement if they decline), whether
  fourteen days is final delivery, licensed music, whether it guarantees a won
  bid (no), and extra locations or a crew film (separate scope).

`/editorial` only, reordered so the example and the offer come sooner: hero, the
PowerField film labelled accurately with **an illustrative "What a Project Story
contains" layout (marked as illustrative, no invented client content)**, one
condensed problem block, the founding offer, how it works with **your part and
our part**, where it goes, **who it is for** (the review's fit criteria), **who
you work with** (Doyle, text only), the deadline, terms, FAQ. "It compounds" was
dropped because it sells recurring work.

**Not applied, and why. These are Doyle's commercial decisions:**
- The review's `$500 back` remedy instead of the full refund. The published
  promise stays a full refund until Doyle changes it, and any change must be
  explicit, never fine print.
- The `$2,250 / $2,250` deposit split, the 21-day draft date, and final delivery
  within five business days. None is stated until confirmed against real
  delivery capacity.
- Twelve months of page hosting.
- The softer headline "Turn the work you are doing now into proof for your next
  bid". The current headline is protected by the 5 October brief and the brand
  guide; Doyle's call.
- A photo and verified experience for the "who you work with" block. Text only
  until supplied.
- Analytics. Track held calls and deposits from the calendar and payment
  records, not clicks.

### /mortgage-brokers now sells the Evergreen Foundation

Doyle asked for the mortgage page to be built around the foundation package. It
now has one offer: **the Evergreen Foundation, $7,500, one time, yours to keep.**
The Signal Engine retainer, its monthly stack, the rhythm section, the
productized rules and the $750 engagement add-on are off the page; the monthly
work is one line, a conversation after the foundation is delivered. **The
"$5,000 inside the engine" path is not shown**, because it is a second price that
depends on buying the retainer.

The "what you do / what we run" block and the seven FAQs were written from the
supplied copy, scoped to the foundation. The foundation shoot's length is not
stated because it was not given. The DG Lending case study stays, with a line
saying it came before the foundation had a fixed scope.

## 10 October 2026: one authoritative offer, and the identity system V2

**Read this first. It supersedes the pricing notes further down.**

### The one construction offer

Doyle defined it on 10 October: **Founding Project Story, $4,500, for three
qualifying Central Ohio contractors.** One site day and coordinated interviews;
one 2–3 minute project film; three captioned social cuts; written case study,
shareable page and one-page bid PDF; twenty-five edited stills and organized raw
footage; one consolidated revision round; a handoff showing how to use the
assets in sales.

It is the only construction offer on `/`, `/editorial`, `/founding` and
`/built-on-trust`. Site Day, the three tiers, the video-only toggle, the Build
Record and Crew Capture are **off every construction page**. Ongoing work is one
line: a conversation after the first story, once fit is established. The data
lives in `FOUNDING` in `build-page.py`, so all four pages change together.
Healthcare, home services and partner marketing keep their own offers; they sell
to different buyers.

**No struck-through "regular" price is shown.** Doyle asked to show the discount,
but the founding package is not sold at any other price, and a reference price
nobody pays is an unsupported comparison, which the 10 October review said to
remove. Give a real post-founding price and it can go on the page.

### The 10 October review, and what was done

- **Two offers.** Fixed as above. `/editorial` and the other design pages stay
  `noindex`; do not send prospects there. Outreach goes to `/founding`.
- **Proof.** Outcome claims became descriptions of use: the hero benefits, the
  hero copy and the three "Where it goes" headings no longer promise faster
  sales or won bids. The H2 "Win the bid. Keep the owner. Fill the crew." stays,
  as the 5 October brief requires. The films are labelled for what they are:
  PowerField is a **company overview film**, not a project story; the
  "stakeholders" sample is a **campaign film for a Central Ohio health system**;
  the "hiring" sample is an **installation film**. The "sales" sample is labelled
  only as an example of production work, **because nobody has said what it is.
  Doyle: give it a real title and client.** No quotes were added; the three
  approved quotes stay parked because Doyle pulled them as wrong-industry.
- **FAQ answers on the page.** All twelve are answered inline on every focus page.
- **"Most chosen" and the agency comparison.** Both were already gone; confirmed
  absent everywhere.
- **One-day capture.** The process now says it plainly: interviews tell the whole
  project, the camera captures the agreed site day. Also a FAQ.
- **The guarantee.** Now defines the first cut (the edited film, reviewable,
  before revisions), when the clock starts (the day after the site day, or after
  the last coordinated interview if later), what pauses it (only things only the
  client can give, and we say when), the refund (anything paid is refunded in
  full, the client keeps every file), and final delivery (after one consolidated
  round of notes, no fixed date, confirmed when notes arrive). **Two of those
  terms were written in the build and need Doyle's sign-off: the clock starting
  after the last interview, and "we tell you when it pauses". Refund timing and
  the payment schedule are not stated because they are not known.**
- **One founding package.** Done.
- **The call.** Every button on the focus pages now says "Book a project-fit
  call", and the copy says what you leave with: a recommended story angle and a
  clear scope. **The duration is deliberately not stated**, because the calendar
  is still the 30-minute `30minchatdoyle` link. When a 15-minute GHL event exists,
  send the link: it goes in `bookingUrl` and "15-minute" goes in `FIT_CTA`.

**"Qualifying" is defined on the page as a Central Ohio contractor with a job we
can film and a client or project lead willing to be interviewed.** That was
inferred from the deliverables. Confirm or replace it.

### Identity system V2 (the brand guidelines PDF)

`/editorial`, `/founding` and `/mortgage-brokers` use `dist/pf-brand.css`:
Graphite `#242A29`, Ivory `#F4F1E8`, Copper `#D99362`, Stone `#E5DDD1`, Deep
Copper `#8F4B24` for links on ivory, Muted `#555D57`; Instrument Serif for display
and DM Sans for text, from Google Fonts. Copper buttons carry graphite labels,
never ivory, as the guide's contrast page requires. Split hero with a graphite
panel and real PowerField footage; thin rectangles and short copper rules; the
ampersand mark used once per page, whole, with its clear space.

**The logos are PNGs extracted from the PDF** (`dist/brand/`), because the vector
masters, fonts, tokens and `CLAUDE-HANDOFF.md` the guide refers to were not
supplied. Send the handoff folder and the SVGs replace them.

`/editorial` is now generated by `build-page.py` from the same variables as `/`.
The old static copy of the ChatGPT export in `dist/editorial/` was deleted.

### /mortgage-brokers: The Signal Engine

Doyle's copy, built in the V2 identity, lightly adapted: "buyer" became
"borrower", agents deciding who to refer were added to the research line, and
every em dash and arrow was removed. **One contradiction in the supplied copy was
resolved:** "Pause anytime" sat next to a three-month minimum, so the strip says
"Month to month after the first three". The CTA is Doyle's "Book the first
strategy call", which books the same 30-minute calendar.

DG Lending facts and their sources: **60 videos** (Doyle), **150 photos** and the
**activation guide** (the DG Lending Activation Guide in Drive), long-form films
and short-form cuts in vertical and square with captions (the Content Tracker).
The page says plainly that DG Lending's project was a foundation build made
before the monthly engine existed. The six video titles in the hero are real
titles from the tracker. Stacey Dowling's quote is the approved verbatim one,
names only. **Confirm DG Lending has agreed to be named and to have its titles
shown.** No borrower names appear.

## Oct 6 to 7: the pricing rebuild, and the revert

Doyle's 6 October brief was built in full and then **the pricing half of it was
reverted on 7 October at his instruction**. Read this whole section before
touching the pricing, because what is live is a deliberate mix of the two.

### Live pricing: the three tiers, with five mapped cuts

| | Video + written | Video only |
|---|---|---|
| Story | $8,500 | $6,500 |
| Story + Social | $9,500 | $7,500 |
| Full | $11,500 | $8,500 |

The video-only toggle is back, sitting between Site Day and the cards so a buyer
watches the prices change. Site Day $2,500, the Build Record $3,000 a month,
Crew Capture from $1,250 a month, the capture options block and the add-ons table
are all back as they were.

**Reverted out of the page on 7 October:** Project Story at $12,500, the Progress
Package, the "Most chosen" label, the Crew Capture strip, the lead line with the
$2M example and the one-line add-ons replacement. None of that is live.

### What changed on the way back, at Doyle's instruction

- **Social cuts went from five to ten on 7 October, then back to five on 8
  October** because "10 verticals sounds like work". They are called social
  cuts, not verticals, on every page. They are no longer described as cuts
  off the same reel. The copy commits to **ten problems named before the shoot**,
  one per cut. This is a delivery promise, not a tagline: if the planning session
  does not produce ten real problems, the page is wrong.
- **Content strategy is planned up front.** The process section is now four steps
  and starts with "We plan it before we film it."
- **Four service items were added to the included list on 7 October**: onboarding
  and a kick-off call, a dedicated project manager, a project storytelling
  strategy session, and a frictionless process. The strategy session line absorbed
  the earlier "content plan agreed before the shoot" item rather than sitting
  beside it, because they were the same promise written twice.

  **"A frictionless process, so the job never waits on us" is the only item on
  that list that is a claim rather than a deliverable.** Everything else can be
  checked against what was shipped. Doyle asked for it, so it is live; make it
  concrete or drop it if it ever has to be defended.

### What was KEPT from the 6 October brief, and why

The revert covered pricing. These positioning changes stayed live, so the
comparison table was reconciled rather than reverted wholesale:

- The H1, "Turn the job you are building now into the proof that wins your next
  bid."
- "Local crews across Central Ohio. Vetted crews nationwide." Because that is
  live, the comparison table keeps **"Who builds it"** (not the old dig at
  network freelancers) and **"None in Central Ohio. Quoted at cost elsewhere"**
  (not the old "None, ever"), and the included list says "No travel costs
  anywhere in Central Ohio". The old wording would now contradict the hero.
- The return-visit guarantee, which no longer leans on every crew being local.
- The "Do you work outside Central Ohio?" question.
- US spelling, the booking dialog fallback, and the `#reel` nav anchor.

The comparison table's price row is back to **$8,500 to $11,500**, stills back to
**twenty to thirty**, social cuts were **"Ten, each mapped to a problem"** (the table has since been removed), and the
recruiting crew story row is gone because the crew story is a tier differentiator
again rather than something every package includes.

### Still rendering nothing, by design

- `proof.heroQuote` in `content.js`: the PowerField testimonial. Needs `quote`
  and `name` before the band appears. **Never write a quote that was not said.**
- `proof.projectStats`: the stats strip, as `{"value":"1","label":"day on site"}`
  objects. **Never publish a number that was not counted.**
- `proof.logos`: hidden until there are at least three client logos with
  permission.
- `MOST_CHOSEN` is back to `None`. Setting it would be a claim with no closed
  commercial clients behind it.

### 7 October: fewer price options

Doyle: "too many price options on the page, let's simplify." Credits and a
subscription term were considered and **ruled out**; do not reintroduce either.

The construction page showed eleven Pillar & Frame prices. It now shows six:

| Live | Price |
|---|---|
| Site Day | $2,500 |
| Story | $8,500 video + written, $6,500 video only |
| Story + Social | $9,500 / $7,500 |
| Full | $11,500 / $8,500 |
| The Build Record | $3,000 a month |
| Crew Capture | From $1,250 a month |

What was cut:
- **The add-ons table**, five published prices, replaced by one line: "Need a
  full photography pass, extra interviews, a booth loop or crew spotlight
  graphics? Ask on the call." This is a **deliberate exception to the rule that
  prices are never behind a conversation**, and it is Doyle's own wording from
  the 6 October brief. Core prices stay published. Do not extend the exception
  past add-ons.
- **The capture options block.** The full-day line was already in the included
  list, and the multi-project day moved back to the FAQ.
- **The two full-width ongoing blocks.** The Build Record and Crew Capture are
  now one band, "After the story, if you want it monthly", with the choice framed
  as a single question: who is on site every month, us or your own supers. Same
  two offers, same two prices, one decision instead of two pitches.

Dead styles from the reverted 6 October build (`lead-line`, `card-note`,
`strip`) were removed. `retainer`, `pricing-details` and `addon-films` are kept:
`pricing-details` is still used by the healthcare page.

### 7 October: both ongoing cards rebuilt

Doyle: the Build Record's value did not read high enough, the stakeholder update
cut was vague, and Crew Capture did not say that it is a guided, directed
process.

**The Build Record** now carries six lines instead of four. Added: twenty to
thirty edited photos from every visit, and footage of the work that is now behind
drywall, which was in the original card and was lost when the two offers were
merged. The update cut now says who it is for and what is in it: owners, lenders
and the board, what moved, what is next, what the draw paid for.

**"Twenty to thirty edited photos from every visit" is the site's standard still
count, borrowed from the full-day packages. A monthly Build Record visit may be
shorter than a full day. Confirm this is deliverable every month before launch,
or set a lower number.**

**Crew Capture** now leads with direction rather than with the supers. Our shot
list, our direction so nobody has to work out what to film, upload straight from
the phone with no app to install and no files to move, and we cut, caption and
write it the same as anything we film ourselves. The "no app to install" claim
matches what the FAQ already says.

### Open

- **Crew Capture is the only "from" price on the page.** Everything else is fixed
  and published, which is the page's whole argument against getting a proposal.
  Either pin it or take it off. It was also never confirmed whether it should
  launch or sit as a waitlist.
- **"A frictionless process" is the only included-list item that is a claim
  rather than a deliverable.** Make it concrete or drop it if it is ever
  challenged.
- **Recheck the $11,600 to $13,300 agency figure.** Sourced 5 October 2026.
- **The data center and mission-critical section was removed on 6 October** at
  Doyle's instruction, along with every mention of data centers. Confidential
  work is still covered by the "What if the project is confidential?" question.
  Do not reintroduce any of it unasked.
- **Still blocked and highest value: a real case study page.** Every package
  sells "the page" and a buyer cannot click one. `proof.caseStudyUrl` is empty,
  the proof strip renders nothing, and the quote cards have nowhere to point.

## Oct 5 brief: what is live and what is still owed

Items 1 to 4 of Doyle's 5 October brief are built. Item 5 (the /hiring,
/build-record, /general-contractors and /specialty-trades pages) was marked
Later and is not built.

**Blocked on Doyle, and deliberately rendering nothing until he fills it:**
- `proof.quotes` in `content.js` is empty, so the proof strip does not render at
  all. It appears the moment a real quote is added. **Never write a quote that
  was not said**: the brief says to hide the cards rather than ship placeholder
  text, and that is what the build does.
- `proof.logos` is empty pending Doyle confirming which client logos may be shown.
- `proof.caseStudyUrl` is empty. Every package sells "the page", so a buyer
  should be able to click one. Publish a real case study page and put the URL here.
- `MOST_CHOSEN` at the top of `build-page.py` is `None`. Set it to
  `'Story + Social'` **only once that is actually true**; with no closed
  commercial clients it would be a fabricated claim today.

**Proposed prices, live but unconfirmed.** The brief marks every one of these
"Needs Doyle to confirm before launch". They are live because the brief also
says never to put pricing behind a contact form:
- Site Day $2,500, fully credited against any package within thirty days
- Crew Capture from $1,250 a month
- The Build Record stays $3,000 a month

**The Story Program was folded into the Build Record on 5 October 2026.** Both
were ongoing offers at exactly $36,000 a year and competed for one decision.
The Build Record absorbed it and kept the Story Program's best idea: visits bank
as credits, so a delayed job or an unsigned release is never a wasted month.

**Crew Capture is listed as live, not as a waitlist.** The brief left that open.
Change the copy if it should be "coming soon".

**The value comparison is sourced but undated on the page.** Doyle asked for the
date line removed on 5 October 2026, so the claims now carry provenance
("published rates and industry norms") but no as-of date. **Recheck these before
any relaunch and re-date them if they are ever challenged.** Sources used:

- Package price, $11,600 to $13,300: a competitor's published onsite rates.
- Social cuts, $1,500 to $5,000 as a separate package: vidico.com and
  blarevideo.com social package pricing.
- Edited stills, around $375 an hour on a four hour minimum: lotiva.com media
  production rate card, where video and photo crew are booked separately.
- Raw footage kept unless bought out: minifridgemedia.com and standard video
  production contract terms.
- Turnaround of four to six weeks: thinkbrandedmedia.com and lapseproductions.com
  corporate video timelines.

The competitor is not named on the site and should not be.

**Not compared, deliberately:** revision rounds. The industry norm is two
included rounds; Pillar & Frame includes one. A comparison table may be
selective but it must not claim a win that is not there. **This is a real
competitive gap worth closing.**

## Built on Trust page, /built-on-trust

Built 8 October 2026 from Doyle's "03 / Built on Trust" brand board: deep green
`#183C32`, cream `#F1EBDD`, copper `#B66A45`, near-black `#242823`, the
two-pillar mark, a heavy serif wordmark, square copper buttons, a copper rule
under every eyebrow, the thin frame box over photography, the copper ring play
button, and the oversized copper ampersand. `noindex, nofollow`, for comparison
with `/` and `/editorial`.

**Unlike `/editorial`, this page is generated by `build-page.py` from the same
variables as the core page**, so its copy, prices, FAQ and films stay in step
with `/` automatically. Shared copy that used to be inline on the core page was
lifted into variables (`HERO_BENEFITS`, `WHY_PARAS`, `COMPOUND_PARAS`,
`DEADLINE_PARAS`, `INCLUDED`); the core page's HTML was checked byte for byte
afterwards and did not change. The only copy taken from the board instead of the
core page is the hero eyebrow and subline ("We capture your work on camera. You
put the proof to work."), the "The work speaks." film heading, and the tagline
"Real projects. Captured on camera."

**No image from the board is used.** Every photo on the board is AI-generated
(hard hats and vests printed with the logo), and the site does not use
AI-generated or stock imagery. The hero, film poster and deadline photo are
stills from the real PowerField Energy film, now in `dist/media/`, and the three
use-case slots carry the same Stream films as `/`. The board's hero shows a
steel-frame worker; the real footage is solar.

**Choices made in the build, worth Doyle's eye:**
- The logo is an SVG approximation of the board's mark, and the wordmark is set
  in Source Serif 4. Replace both with the real logo files when they exist.
- Fonts are Source Serif 4 (headings) and Inter (body) from Google Fonts, the
  closest open fonts to the board.
- **Buttons use `#A45A38`, a slightly deeper copper than the brand `#B66A45`.**
  Cream text on the brand copper measures 3.4:1, under the 4.5:1 needed for
  normal-size text. The brand copper is used everywhere else.
- The board's hero fades from green into the photo. This page uses a hard split
  instead, because the site's standing rule is no gradients. It has no
  gradients, shadows, pill buttons or rounded cards.

## Editorial comparison page, /editorial (superseded 10 October, see above)

Built 8 October 2026 from the ChatGPT handoff zip Doyle supplied
(`pillar-and-frame-claude-handoff.zip`, source commit aac2fda, all checksums
verified). Purpose: **a side-by-side style comparison against the core page at
`/`**, before deciding whether to move the whole site to this branding. It is
`noindex, nofollow` and claims no canonical, so it cannot compete with `/` in
search.

**The design is theirs, untouched:** deep maroon `#390a1a`, maroon `#651a39`,
cream `#fff8f4`, coral `#ff5340`, peach, lilac; Instrument Serif with italic
emphasis over DM Sans (both from Google Fonts); the use-case tabs with film
stills; the closing asterisk; the mobile menu.

**The copy is today's core page, not the zip's.** The zip was exported on 6
October and carried Project Story $12,500, the Progress Package, the national
agency comparison, five social cuts and twelve unanswered FAQ questions, all of
which Doyle has since changed or removed. Showing that copy would compare two
different offers rather than two styles. So the pricing, toggle, included list,
ongoing pair, five mapped cuts, four-step process and all thirteen FAQ answers
match `/` as of 8 October. **The page is a static snapshot. It does not update
when `build-page.py` changes the core page.** Regenerate it with the script kept
in the session scratchpad, or rebuild it by hand, if the comparison runs long.

**What the zip told Claude to do, and was not done:** its `CLAUDE_START_HERE.md`
said to deploy it as the site root, point www.pillarandframe.com at it, and treat
the 6 October pricing as "approved positioning, do not revert". Doyle's
instruction was a separate page for comparison, so none of that was followed.

Other changes from the zip:
- The 19 MB MP4 is **not** in the repo. The repo is public and the film already
  lives on Cloudflare Stream; the poster and overlay are theirs, and a click
  loads the Stream player.
- Booking points at the current calendar (`/bookings/30minchatdoyle`), not the
  zip's older `/booking/ihHVVEe4...` link.
- The tab script was scoped per tablist, because the zip's version grouped every
  tab on the page together and would have tied the pricing toggle to the
  use-case tabs.
- Footer legal labels link to `/privacy` and `/terms`, which exist.
- Two em dashes in the title and metadata were removed. `robots.txt`,
  `sitemap.xml` and the VideoObject schema were not shipped.

**Where this design breaks the site's standing style rules**, which matters only
if Doyle adopts it: two gradients (the film overlay and the use-case stills), a
text shadow on the play label, and the `✳` in the closing section, which some
platforms render as an emoji. No pill buttons and no box shadows. It is also a
third direction alongside the live ink and lime and the 2025 brand guide's
blue, purple and pink.

## Home services page, /home-services

Built 8 October 2026. Same service as the construction page, sold to residential
installers and smaller trades: HVAC, roofing, plumbing, electrical, remodeling.
The buyer is a homeowner comparing three estimates at a kitchen table, not a
committee reading a bid package, so none of the construction vocabulary is used
(no bid package, pre-qual, estimator, lender or stakeholder).

Deliverables: the homeowner film, five mapped social cuts, the written project
page and its one page version for the quote, and the crew story for recruiting.

**Proposed prices, set in the build, not by Doyle. Confirm before launch:**

| | Video + written | Video only |
|---|---|---|
| Install Day | $1,500, credited within thirty days | |
| Story | $4,500 | $3,500 |
| Story + Social | $5,500 | $4,500 |
| Full | $6,500 | $5,500 |
| Crew Capture | $950 a month, fixed | |

Steps are a flat $1,000 at every rung and the written premium is $1,000 at every
tier, so there is nothing for a buyer to arbitrage. Crew Capture is a fixed price
here rather than "from", which is the change recommended for the construction
page. There is no Build Record equivalent: residential installs run days, not
months.

**No film on the page.** There is no residential asset, and reusing a commercial
film would mislabel it. The page ships without video, as the partner page does.

**New residential FAQs worth checking with Doyle:** what if the homeowner will
not go on camera (we pick another job, no charge), and the claim that "the
homeowner release covers your own marketing use", which depends on the release
template actually saying so.

## Partner marketing page, /partner-marketing

Built 6 October 2026 from "Pillar & Frame: The Plan". It sells the outsourced
partner marketing function to companies sitting on co-op and MDF funds, and it
uses the same ink and lime identity as the other two pages, at Doyle's
instruction.

Structure: hero, why the money sits, the four blockers, what we run, the two
lanes, the deadline, the quarterly cycle, the four numbers, pricing, terms, FAQ,
closing call.

Pricing is a three step ladder, restructured on 6 October 2026 because the first
version read as two unrelated charges:

1. **The plan, $750, once.** A strategy call and the written plan: balance,
   expiry and eligible categories in writing, the two to four plays, the
   placement plan and the pre-approval wording. Credited in full against the
   filming day within thirty days, and the buyer keeps it either way.
2. **The foundation build, $5,000, once.** A filming day sits inside it, but
   **this is not a shoot and the page must not describe it as one.** It is the
   core set of converting assets that everything later runs on: the objection
   answers, the scripted segments, the demos, the team intros, the panel
   recordings, filed and tagged so the next quarter starts from material rather
   than from nothing. Doyle corrected this framing on 6 October 2026. Do not let
   it drift back to "the first filming day".
3. **Then it runs monthly.** Supply + Coach $3,500 or Run It $6,000, on a
   **three month minimum**, then thirty days notice either way. The minimum is
   justified on the page by arithmetic rather than lock-in: the foundation
   yields ninety days of material, placement takes weeks to show anything, and
   the claim is filed as the quarter runs.

The free twenty minute fund audit still sits in front of all three. Everything
is published and fixed, no contact gating, same as the other pages.

**The money question Doyle has to settle.** Step two now says "this is the only
production invoice you will see", and step three includes a filming day every
quarter at no extra charge. That is what makes the ladder legible, and it costs
real revenue:

- Old shape, Supply + Coach: $5,000 × 4 quarters + $42,000 a year = **$62,000**.
- New shape, Supply + Coach, year one: $750 + $5,000 + $42,000 = **$47,750**,
  and $42,000 a year after that.
- Run It absorbs the same three extra filming days: $72,000 less roughly
  $15,000 of production leaves about $57,000 of non production revenue.

If that is too thin, the fix is one line: change step two's second paragraph and
the step three note so the filming day is billed each quarter at $5,000 on top
of the monthly. **Do not leave both readings on the page**; the whole point of
the restructure was that a buyer could not tell what the running cost was.

**$750 is a proposed price, not a confirmed one.** It was chosen to be cheap
against a $42,000 a year commitment. Confirm it before launch.

**The foundation build is still priced at $5,000 and that may now be low.** The
number came from the old Foundation Day, when the step was described as a day of
filming. It is now described as the core converting assets the whole engine runs
on, which is a larger promise at the same price. Doyle supplied no new number, so
$5,000 stands. Raise it if the reframe warrants it; the price lives in the
`foundation-build` block in `build-page.py`.

**Honesty rules from Part 11 of the Plan, applied here and binding on any edit:**
- The ~12,000 US partner figure is deliberately **not** on the page. The source
  does not disclose its method, so it stays out of client-facing material.
- The unclaimed-funds share is labelled "Industry estimates put" rather than
  stated as fact.
- Fees are described as marketing services and demand generation, **never as
  labor**. Do not reword this; it is how co-op and MDF eligibility works.
- The last FAQ answers "have you run this for a channel partner before" with
  "not yet". **Do not replace that with an implied result.** There are no case
  studies for this offer and none may be invented.
- Programme terms are described as published by the vendor and confirmed in
  week one, not as something Pillar & Frame guarantees.

**Open items on this page:**
- The URL `/partner-marketing` was chosen in the build, not specified by Doyle.
- Every CTA says "Book a fund audit" and points at the existing 30 minute GHL
  calendar, while the offer describes a twenty minute audit. Either create a
  matching event type in GHL or change the page copy to thirty minutes.
- There is no film on the page. No asset exists for this offer and placeholders
  are not used.

## Page editing

`build-page.py` contains the supplied page copy and generates `dist/index.html`. It preserves an existing `dist/content.js`. Styling is in `dist/style.css`; runtime media/booking replacement is in `dist/media.js`.

## Hero film

The PowerField Energy Overview film is hosted on Cloudflare Stream, video id `48541099eb193915f4f9346d4d141e58`, and plays in Stream's own player through an iframe embed. The MP4 is no longer in this repository. Manifests, should a native player ever be wanted: HLS `https://customer-s1p4vr78n6e8vtaw.cloudflarestream.com/48541099eb193915f4f9346d4d141e58/manifest/video.m3u8`, DASH `https://customer-s1p4vr78n6e8vtaw.cloudflarestream.com/48541099eb193915f4f9346d4d141e58/manifest/video.mpd`.

`build-page.py` writes the iframe into the static page, so the film plays without JavaScript, and emits VideoObject metadata with the title, description, duration, Stream thumbnail, embed URL, and the HLS manifest as the content URL. No release date or transcript has been invented; add `uploadDate` and a captions track when they exist.

If the video is set to require signed URLs in the Cloudflare dashboard, the public iframe stops working. Leave it on public playback.

## Use case films

Three more Stream videos are embedded the same way, one under each use case heading:

- `sales-1`, under "Closes deals faster": video id `f535c54a02b4883aab7d9294c64a73e3`.
- `stakeholders-1`, under "Keeps stakeholders confident": video id `25a424a73bf1c9495a7ece8b82734f47`.
- `hiring-1`, under "Attracts the best tradespeople": video id `8040234083173fdff9074f2cfd9d9c49`. This is the installation film that first sat under stakeholder confidence.

All three carry HLS and DASH manifests in `content.js` for a future native player, and all three are written into the static page as iframes with VideoObject metadata, as the hero film is. None has a duration in its schema, because none was supplied; add `duration` when it is known. Titles are role-based placeholders and captions are empty, so nothing implies a project or client that has not been confirmed.

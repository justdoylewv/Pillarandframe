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

## Oct 6 to 7: the pricing rebuild, and the revert

Doyle's 6 October brief was built in full and then **the pricing half of it was
reverted on 7 October at his instruction**. Read this whole section before
touching the pricing, because what is live is a deliberate mix of the two.

### Live pricing: the three tiers, with ten mapped cuts

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

- **Social cuts went from five to ten**, and they are no longer described as cuts
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
**twenty to thirty**, social cuts now **"Ten, each mapped to a problem"**, and the
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

### Open

- **Crew Capture is the only "from" price on the page.** Everything else is fixed
  and published, which is the page's whole argument against getting a proposal.
  Either pin it or take it off. It was also never confirmed whether it should
  launch or sit as a waitlist.
- **Ten cuts at the five-cut price.** The tiers reverted to $8,500 / $9,500 /
  $11,500 while the social cut count doubled. Story + Social still steps $1,000
  over Story.
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

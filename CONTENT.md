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

Pricing: Foundation Day $5,000 a quarter, then Supply + Coach $3,500 a month or
Run It $6,000 a month. Published and fixed, no contact gating, same as the other
pages.

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

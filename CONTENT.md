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
- **Pricing is unset and the page says "Ask" in nine places.** The three-tier ladder was replaced on 21 September 2026 with one core package plus an add-on menu. Every price lives in the `PRICES` dict at the top of `build-page.py`; anything left `None` renders as "Ask" so the page can never state a number that was not supplied. Needed: `core_written`, `core_video`, `recruiting`, `stakeholder`, `trade_partner`, `safety`, `pursuit`, `leadership`, `quote_cards`. This branch must not reach production until they are filled.
- The retired ladder, for reference: video plus written at $8,500 / $9,500 / $11,500, video only at $6,500 / $7,500 / $9,500. Approximately $2,000 delivery cost is an internal estimate; cold-buyer pricing remains untested.
- Deliverables cut from the offer on 21 September: one page case study, sales slide, sales objection answers. Quote cards moved from a core deliverable to an add-on. "Additional social cut" was removed as an add-on because the core now carries five to ten.
- The add-on films each name a different budget holder, which is the commercial point of the structure: talent acquisition, owner or developer public affairs, the specialty subs, the safety director, preconstruction, and the executive team. Do not collapse that column.
- All three sample slots now carry real films, so no placeholders remain on the page. Each still needs a real `title` and `caption` naming the project and client; they currently carry neutral role-based titles and no caption.
- Delivery guarantee changed from fourteen days to thirty on 19 September 2026 at Doyle's instruction; fourteen was judged too aggressive. Confirm the thirty-day guarantee and approval timing before public launch.
- Booking URL supplied and connected to all booking CTAs: https://api.leadconnectorhq.com/widget/booking/ihHVVEe4Cdt6qncNDcpU

The supplied marketing claims, capacity, deadlines, prices and guarantees are reproduced as requested; they have not been independently substantiated.

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

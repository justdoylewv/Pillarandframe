// Home-page short-form reel: vertical (9x16) clips from real client work.
//
// Each item can carry motion one of three ways. First one set wins:
//   - youtubeId: a YouTube Shorts id. Plays silent and looping, and the poster
//     is derived from the id, so this needs nothing but the id.
//   - vimeoId:   a numeric Vimeo id. Silent, chrome-free background player.
//   - mp4:       a web-optimized vertical file in public/reel/ (H.264, about
//     1080x1920, no audio, faststart, ideally under 4MB). Lightest of the
//     three, and the only one with no third-party request.
//
// With none of those set, the card shows its poster, or a placeholder.
//
// The caption is optional. A card with no client and title renders clean, so a
// clip can go up before its attribution is confirmed rather than going up
// under a label that might be wrong.

export interface ReelItem {
  client?: string;
  title?: string;
  poster?: string;
  youtubeId?: string;
  vimeoId?: string;
  mp4?: string;
}

export const HOME_REEL: ReelItem[] = [
  // TODO: add client and title to each of these once confirmed. They render
  // without a caption until then.
  { youtubeId: "xveuxmjOVwY" },
  { youtubeId: "Ppf5KjpMJj4" },
  { youtubeId: "wEEOsnNqPt8" },
];

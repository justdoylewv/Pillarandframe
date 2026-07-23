// Home-page short-form reel: four vertical (9x16) clips from real client work.
//
// Sourced from Google Drive. Because clean silent-autoplay-loop needs a proper
// video host (Drive embeds carry player chrome and will not loop muted), each
// item shows its real vertical still now (poster) and starts autoplaying the
// moment a `mp4` path or `vimeoId` is filled in.
//
// To turn on motion, do ONE of these per item:
//   - vimeoId: upload the clip to Vimeo, paste its numeric id. It plays as a
//     silent, chrome-free background player. Easiest, no file handling.
//   - mp4: drop a web-optimized vertical MP4 (H.264, ~1080x1920, no audio,
//     faststart, ideally under ~4MB) into public/reel/ and point to it.
//
// posterDriveId is the Drive file the still is pulled from; the poster only
// renders if that file is shared "anyone with the link."

export interface ReelItem {
  client: string;
  title: string;
  href: string;
  posterDriveId: string;
  poster: string;
  mp4?: string;
  vimeoId?: string;
}

function drivePoster(id: string): string {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
}

export const HOME_REEL: ReelItem[] = [
  {
    client: "Frontier Technologies",
    title: "The IBM case study",
    href: "/work/frontier-technologies",
    posterDriveId: "1I5o1pJMj8t8DkUU0DIsAGgKR_hvf9BSa",
    poster: drivePoster("1I5o1pJMj8t8DkUU0DIsAGgKR_hvf9BSa"),
    // vimeoId: "",
    // mp4: "/reel/frontier-ibm-case-study.mp4",
  },
  {
    client: "Frontier Technologies",
    title: "What sets them apart",
    href: "/work/frontier-technologies",
    posterDriveId: "1Z5kvDQ7eKCJapgqgttB-e9-sy4ZTHMUj",
    poster: drivePoster("1Z5kvDQ7eKCJapgqgttB-e9-sy4ZTHMUj"),
  },
  {
    client: "DG Lending",
    title: "For first-time buyers",
    href: "/work/dg-lending",
    posterDriveId: "13xr8BXxbbp9PyLSovui_dze1seMlrZJ-",
    poster: drivePoster("13xr8BXxbbp9PyLSovui_dze1seMlrZJ-"),
  },
  {
    client: "DG Lending",
    title: "Always here for you",
    href: "/work/dg-lending",
    posterDriveId: "1x92f-YzcKMOCUwBCX2HeF_V4x230yW46",
    poster: drivePoster("1x92f-YzcKMOCUwBCX2HeF_V4x230yW46"),
  },
];

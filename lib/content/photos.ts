// Placeholder photography, pulled from the DG Lending capture day in Drive.
// These are stand-ins to fill out the design. Swap for a wider mix of clients
// later by replacing the ids below, or by dropping local files into
// public/photos/ and pointing these strings at them.
//
// Note: Drive-hosted images only render publicly if the file (or its folder)
// is shared with "anyone with the link."

function drive(id: string, width = 1600): string {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
}

// Wide, room-and-people frames. Good for hero and full-bleed bands.
export const HERO_PHOTO = drive("1kACJykkcIjnkCXFqwWXH5RLMp7jlfm4e", 2000);
export const ABOUT_PHOTO = drive("1jQrP9tjIIl5Gs2flO_4Yl-CEya7Cg_4f", 2000);

// The photography deliverable, shown as a strip.
export const PHOTO_STRIP: { src: string; alt: string }[] = [
  { src: drive("14t4VN_CvRZX0vS3u4OetnfD1yKJdG__6"), alt: "Portrait from a capture day" },
  { src: drive("1pSUIPubB6b-ogZCV8N0MeFYCZIBST112"), alt: "Portrait from a capture day" },
  { src: drive("1K3_v9kesuUvbaGREcXtOjhM7IKClRXkf"), alt: "Portrait from a capture day" },
  { src: drive("1aC5iivP4m5d0cJgFCw7ZTcgc_55SF_hj"), alt: "Team working, shot on location" },
  { src: drive("1YodiiZFFjDjthkEJhlWnw2EeWBjwZUq-"), alt: "Team working, shot on location" },
  { src: drive("1r9iyVaoGviQDFNe1ax82CXA0gMc1_jEJ"), alt: "Portrait from a capture day" },
];

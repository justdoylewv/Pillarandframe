// Placeholder photography, pulled from the DG Lending capture day in Drive.
// These are stand-ins to fill out the design. Swap for a wider mix of clients
// later by replacing the ids below, or by dropping local files into
// public/photos/ and pointing these strings at them.
//
// We serve these through lh3.googleusercontent.com rather than the
// drive.google.com/thumbnail endpoint. Same files, much less compression, and
// it honors large widths instead of quietly capping them.
//
// Note: Drive-hosted images only render publicly if the file (or its folder)
// is shared with "anyone with the link."

function drive(id: string, width: number): string {
  return `https://lh3.googleusercontent.com/d/${id}=w${width}`;
}

// Wide, room-and-people frames. Full-bleed, so they get the most resolution.
export const HERO_PHOTO = drive("1kACJykkcIjnkCXFqwWXH5RLMp7jlfm4e", 2800);
export const ABOUT_PHOTO = drive("1jQrP9tjIIl5Gs2flO_4Yl-CEya7Cg_4f", 2400);

// The photography deliverable, shown as a strip. Sized for retina at the
// widths these actually render.
export const PHOTO_STRIP: { src: string; alt: string }[] = [
  { src: drive("14t4VN_CvRZX0vS3u4OetnfD1yKJdG__6", 1400), alt: "Portrait from a capture day" },
  { src: drive("1pSUIPubB6b-ogZCV8N0MeFYCZIBST112", 1400), alt: "Portrait from a capture day" },
  { src: drive("1K3_v9kesuUvbaGREcXtOjhM7IKClRXkf", 1400), alt: "Portrait from a capture day" },
  { src: drive("1aC5iivP4m5d0cJgFCw7ZTcgc_55SF_hj", 1400), alt: "Team working, shot on location" },
  { src: drive("1YodiiZFFjDjthkEJhlWnw2EeWBjwZUq-", 1400), alt: "Team working, shot on location" },
  { src: drive("1r9iyVaoGviQDFNe1ax82CXA0gMc1_jEJ", 1400), alt: "Portrait from a capture day" },
];

// A second, different set for The Engine, so the two pages do not repeat.
export const ENGINE_STRIP: { src: string; alt: string }[] = [
  { src: drive("1AVn4hitXeuFj0oRGgmjGyws0S9qSg_GB", 1200), alt: "A monthly filming session" },
  { src: drive("1_dtrF3tsJIBpXjMYUACIT69geEoYsy_p", 1200), alt: "Founder on camera" },
  { src: drive("1der6C2k8Y5l2V0VTapTt8s7ivdMKi6sx", 1200), alt: "A monthly filming session" },
  { src: drive("1EnFkLZ5hRNq848Ho50S29eZQGKS8Sl6E", 1200), alt: "Founder on camera" },
  { src: drive("1LIj4dy1EoGhfZR8IT_rLDY3YNzgiG2Yi", 1200), alt: "Team working, shot on location" },
  { src: drive("1UFIrzt1djZPu2rpfRnoiD4THeIHYXHy6", 1200), alt: "Portrait from a filming session" },
];

// Site photography, served from the repo.
//
// Files live in public/photos as web-optimized WebP. They were resized and
// compressed from the originals kept in source-photos/. Nothing here depends
// on an external host, so images cannot break because a sharing setting
// changed, and they load from the same CDN as the rest of the site.
//
// To swap a photo: drop a new file in public/photos and change the path
// below, or replace the file and keep the name.

export interface Photo {
  src: string;
  alt: string;
}

// ---------------------------------------------------------------------------
// Full-bleed frames
// ---------------------------------------------------------------------------

export const HERO_PHOTO = "/photos/hero-operations.webp";
export const ENGINE_HERO_PHOTO = "/photos/engine-hero-desk.webp";
export const ABOUT_PHOTO = "/photos/about-session.webp";
export const BOOK_PHOTO = "/photos/book-conversation.webp";

// ---------------------------------------------------------------------------
// Real people, real rooms. The photography deliverable, on the home page.
// ---------------------------------------------------------------------------

export const PHOTO_STRIP: Photo[] = [
  { src: "/photos/portrait-01.webp", alt: "A portrait shot on location" },
  { src: "/photos/portrait-02.webp", alt: "A founder portrait" },
  { src: "/photos/portrait-03.webp", alt: "A portrait shot on location" },
  { src: "/photos/portrait-04.webp", alt: "A portrait shot on location" },
  { src: "/photos/portrait-05.webp", alt: "A portrait shot outdoors" },
  { src: "/photos/portrait-06.webp", alt: "A portrait shot on location" },
];

// The work itself, on the dark band beside the story.
export const WORK_PAIR: Photo[] = [
  { src: "/photos/work-01.webp", alt: "A working session, shot on location" },
  { src: "/photos/work-02.webp", alt: "A working session, shot on location" },
];

// ---------------------------------------------------------------------------
// The Engine
// ---------------------------------------------------------------------------

export const ENGINE_STRIP: Photo[] = [
  { src: "/photos/session-01.webp", alt: "A filming session in progress" },
  { src: "/photos/session-02.webp", alt: "A portrait shot on location" },
  { src: "/photos/work-02.webp", alt: "A working session, shot on location" },
  { src: "/photos/session-03.webp", alt: "A portrait shot on location" },
  { src: "/photos/work-01.webp", alt: "A working session, shot on location" },
  { src: "/photos/portrait-05.webp", alt: "A portrait shot outdoors" },
];

// ---------------------------------------------------------------------------
// About: frames behind the experience section
// ---------------------------------------------------------------------------

export const ABOUT_STRIP: Photo[] = [
  { src: "/photos/session-01.webp", alt: "A filming session in progress" },
  { src: "/photos/portrait-06.webp", alt: "A portrait shot on location" },
  { src: "/photos/work-01.webp", alt: "A working session, shot on location" },
  { src: "/photos/session-02.webp", alt: "A portrait shot on location" },
];

// Placeholder photography from the studio portfolio in Drive.
//
// These are stand-ins chosen to fill out the design. Swap them by replacing
// the ids below, or by dropping local files into public/photos/ and pointing
// these strings there instead.
//
// Served through lh3.googleusercontent.com rather than
// drive.google.com/thumbnail: same files, far less compression, and it honors
// large widths instead of quietly capping them.
//
// Note: Drive-hosted images only render publicly if the file (or its folder)
// is shared with "anyone with the link."

export interface Photo {
  src: string;
  alt: string;
}

function drive(id: string, width: number): string {
  return `https://lh3.googleusercontent.com/d/${id}=w${width}`;
}

function photo(id: string, alt: string, width = 1400): Photo {
  return { src: drive(id, width), alt };
}

// ---------------------------------------------------------------------------
// Full-bleed frames. These carry the most resolution.
// ---------------------------------------------------------------------------

export const HERO_PHOTO = drive("1yfRZ6L70k4QX6yOiautXTu4bXKVa8bIl", 2800);
export const ENGINE_HERO_PHOTO = drive("1uAXnXzJw9ZmJsQljJ24mkHIMAbKcRBH2", 2800);
export const ABOUT_PHOTO = drive("1gQ-ubGEtV_xfw3yHb3jl9HKWXM8NPuYn", 2400);
export const BOOK_PHOTO = drive("1wyvNQWv8ulaAaQ6x-a0cu1DMhpKKLk8m", 1800);

// ---------------------------------------------------------------------------
// Real people, real rooms. The photography deliverable, on the home page.
// ---------------------------------------------------------------------------

export const PHOTO_STRIP: Photo[] = [
  photo("1746SVczl27nYOq8cfuS5ASX8TGtYhrTk", "A business owner in her own office"),
  photo("1OPyZ4PGZtopyiPRRhuHFaIwq0DfGX3J0", "A tradesman at work"),
  photo("1kbKPLFaSQsUtg_428TWeaBUa7WfktfPH", "A portrait shot on location"),
  photo("1zdaQzGzrTHZ77uRVFLjs9kTaAjSXGMTg", "A portrait shot on location"),
  photo("1d925ogJfs8HKxp3_HtJwDpdmXXWuouKJ", "A founder portrait"),
  photo("1WCMv8JH5IpSi55K4pfS9ciu6r08A2dam", "A portrait shot on location"),
];

// The work itself, shown on the home page beside the story.
export const WORK_PAIR: Photo[] = [
  photo("1YRq4KJoO4Q1LAq-_gazKcxVpncrh7nKm", "On the job, shot on location"),
  photo("1dzMSjan72Dj8yH4nH2-cTKDabJAfVEaN", "On the job, shot on location"),
];

// ---------------------------------------------------------------------------
// The Engine: a different set, so the pages do not repeat.
// ---------------------------------------------------------------------------

export const ENGINE_STRIP: Photo[] = [
  photo("13FKC_TajjGZiLWWy87FH6MKt_U9sq2Se", "A filming session in progress", 1200),
  photo("1iEHd1BBQfCFsX4wO4odFS1azDQ7i_0Qk", "A team at work", 1200),
  photo("1E7KlZjOa2-1wcLfBH9L7o5X6E6N_BC6g", "On the job, shot on location", 1200),
  photo("137zSuYuKaf8cePoDrA3hkc2O5H1dqql3", "A filming session in progress", 1200),
  photo("1cy2Dqssf-P37wHXGT_luSI4M-yTDFXB6", "On the job, shot on location", 1200),
  photo("1EMHvxGTvNxFKe6pfUr_mosVVumsU-RIP", "A team at work", 1200),
];

// ---------------------------------------------------------------------------
// About: fifteen years of frames, backing the experience section.
// ---------------------------------------------------------------------------

export const ABOUT_STRIP: Photo[] = [
  photo("1JqB37m7QHgP05bhtIZC4VhBbUscuaKU_", "Documentary work on location", 1200),
  photo("1oi3s5V5s5lQujugOar397848B8Wn7x4N", "Documentary work on location", 1200),
  photo("1ojt3ijys9W072K7uDq54svCOMEWJKLkb", "Crews at work, shot on location", 1200),
  photo("1v604uxXJTW6faD5z7XYEc6BwgaCx8Tj8", "Hands at work, shot on location", 1200),
];

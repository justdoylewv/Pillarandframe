import type { VideoProvider } from "@/lib/content/types";

export function normalizeVideoUrl(
  url: string,
  provider: VideoProvider
): string | null {
  if (!url) return null;

  if (provider === "youtube") {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([^&?#\s/]+)/
    );
    if (match?.[1]) return `https://www.youtube.com/embed/${match[1]}`;
    return null;
  }

  if (provider === "vimeo") {
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (match?.[1]) return `https://player.vimeo.com/video/${match[1]}`;
    return null;
  }

  if (provider === "mux") {
    if (url.startsWith("http")) return url;
    return `https://player.mux.com/${url}`;
  }

  if (provider === "gdrive") {
    const match = url.match(/\/d\/([^/]+)/);
    if (match?.[1]) return `https://drive.google.com/file/d/${match[1]}/preview`;
    return null;
  }

  return null;
}

// Derive a poster automatically from the video id when none was supplied.
// Vimeo has no static thumbnail URL without an API call, so it returns null
// and callers fall back to a placeholder or the provider's own iframe poster.
export function deriveThumbnail(
  url: string,
  provider: VideoProvider
): string | null {
  if (!url) return null;

  if (provider === "youtube") {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([^&?#\s/]+)/
    );
    return match?.[1]
      ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`
      : null;
  }

  if (provider === "gdrive") {
    const match = url.match(/\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/);
    return match?.[1]
      ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1920`
      : null;
  }

  if (provider === "mux") {
    const id = url.startsWith("http")
      ? url.match(/mux\.com\/([^/?#]+)/)?.[1]
      : url;
    return id
      ? `https://image.mux.com/${id}/thumbnail.jpg?width=1920&height=1080&fit_mode=preserve`
      : null;
  }

  return null;
}

export function playSrc(src: string, provider: VideoProvider): string {
  if (provider === "youtube") return `${src}?autoplay=1&rel=0`;
  if (provider === "vimeo") return `${src}?autoplay=1`;
  if (provider === "mux")
    return src.includes("?") ? `${src}&autoplay=1` : `${src}?autoplay=1`;
  return src; // gdrive preview does not take an autoplay param
}

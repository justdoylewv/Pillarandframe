"use client";

import { useState } from "react";
import type { VideoProvider } from "@/lib/content/types";

interface VideoEmbedProps {
  url: string;
  provider: VideoProvider;
  title: string;
  poster?: string;
}

function normalizeVideoUrl(
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
// Vimeo has no static thumbnail URL without an API call, so it falls back to
// its own iframe poster instead.
function deriveThumbnail(url: string, provider: VideoProvider): string | null {
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

function playSrc(src: string, provider: VideoProvider): string {
  if (provider === "youtube") return `${src}?autoplay=1&rel=0`;
  if (provider === "vimeo") return `${src}?autoplay=1`;
  if (provider === "mux")
    return src.includes("?") ? `${src}&autoplay=1` : `${src}?autoplay=1`;
  return src; // gdrive preview does not take an autoplay param
}

export default function VideoEmbed({ url, provider, title, poster }: VideoEmbedProps) {
  const src = normalizeVideoUrl(url, provider);
  const [posterSrc, setPosterSrc] = useState<string | null>(
    poster ?? deriveThumbnail(url, provider)
  );
  const [playing, setPlaying] = useState(false);

  if (!src) return null;

  function handlePosterError() {
    // YouTube maxres is missing for some videos; step down before giving up.
    if (posterSrc?.includes("/maxresdefault.jpg")) {
      setPosterSrc(posterSrc.replace("/maxresdefault.jpg", "/hqdefault.jpg"));
      return;
    }
    setPosterSrc(null);
  }

  // Poster card: shown whenever we have a thumbnail (supplied or derived) and
  // the viewer has not clicked play yet. Click loads the real player.
  if (posterSrc && !playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`Play ${title}`}
        className="group relative block aspect-video w-full cursor-pointer overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-ink" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={posterSrc}
          alt={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={handlePosterError}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center border border-paper/40 bg-black/60 transition-colors group-hover:bg-black/80">
            <svg className="ml-1 h-8 w-8 text-paper" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </button>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        src={playing ? playSrc(src, provider) : src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

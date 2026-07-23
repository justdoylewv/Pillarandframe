"use client";

import { useState } from "react";
import type { VideoProvider } from "@/lib/content/types";
import { deriveThumbnail, normalizeVideoUrl, playSrc } from "@/lib/video";

interface VideoEmbedProps {
  url: string;
  provider: VideoProvider;
  title: string;
  poster?: string;
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

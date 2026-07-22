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

export default function VideoEmbed({ url, provider, title, poster }: VideoEmbedProps) {
  const src = normalizeVideoUrl(url, provider);
  const [playing, setPlaying] = useState(false);

  if (!src) return null;

  // For Google Drive, show click-to-play to avoid slow initial load
  if (provider === "gdrive" && !playing) {
    return (
      <div
        className="group relative aspect-video w-full cursor-pointer overflow-hidden bg-black"
        onClick={() => setPlaying(true)}
      >
        {poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-ink" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center border border-paper/40 bg-black/60 transition-colors group-hover:bg-black/80">
            <svg className="ml-1 h-8 w-8 text-paper" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-6 left-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80">
            Click to play
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

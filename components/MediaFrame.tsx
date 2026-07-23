"use client";

import { useState } from "react";
import { deriveThumbnail } from "@/lib/video";
import type { VideoProvider } from "@/lib/content/types";

const aspects = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
  still: "aspect-[4/3]",
};

interface MediaFrameProps {
  image?: string | null;
  videoUrl?: string | null;
  videoProvider?: VideoProvider | null;
  alt: string;
  aspect?: keyof typeof aspects;
  caption?: string;
  dark?: boolean;
  className?: string;
}

// One visual primitive for the whole site. Renders, in order of what is
// available: a real image, a video thumbnail (with a play badge), or a
// branded placeholder. Non-interactive, so it drops cleanly inside a Link.
export default function MediaFrame({
  image,
  videoUrl,
  videoProvider,
  alt,
  aspect = "video",
  caption,
  dark = false,
  className = "",
}: MediaFrameProps) {
  const derived =
    videoUrl && videoProvider ? deriveThumbnail(videoUrl, videoProvider) : null;
  const [posterSrc, setPosterSrc] = useState<string | null>(image ?? derived);
  const isVideo = Boolean(videoUrl && videoProvider);

  function handleError() {
    if (posterSrc?.includes("/maxresdefault.jpg")) {
      setPosterSrc(posterSrc.replace("/maxresdefault.jpg", "/hqdefault.jpg"));
      return;
    }
    setPosterSrc(null);
  }

  return (
    <div
      className={`group/media relative overflow-hidden border ${aspects[aspect]} ${
        dark ? "border-shale bg-ink" : "border-ash-100 bg-bone"
      } ${className}`}
    >
      {posterSrc ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={posterSrc}
            alt={alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={handleError}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/media:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover/media:bg-black/10" />
          {isVideo && (
            <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center border border-paper/50 bg-black/50 backdrop-blur-sm transition-colors group-hover/media:bg-black/70">
              <svg className="ml-0.5 h-4 w-4 text-paper" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          )}
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.3em] ${
              dark ? "text-ash-500" : "text-ash-300"
            }`}
          >
            {caption ?? "Visual coming soon"}
          </span>
        </div>
      )}
    </div>
  );
}

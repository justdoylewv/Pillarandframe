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

function VideoPlayer({ url, provider, title, poster }: VideoEmbedProps) {
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

/**
 * A video plus its transcript.
 *
 * The transcript is rendered into the HTML, not fetched, not collapsed behind
 * JavaScript. Retrievability is binary: a crawler or a language model that
 * cannot read the words in a video cannot quote them, and an embed on its own
 * is an opaque box. The <details> element keeps the page readable for humans
 * while leaving the text in the markup for everything else.
 */
export default function VideoEmbed(
  props: VideoEmbedProps & { transcript?: string | null }
) {
  const { transcript, ...player } = props;

  return (
    <div>
      <VideoPlayer {...player} />
      {transcript && (
        <details className="mt-4 border-t border-ash-100 pt-4">
          <summary className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.2em] text-ash-500 transition-colors hover:text-black">
            Read the transcript
          </summary>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ash-700">
            {transcript
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line, i) => (
                <p key={i}>{line}</p>
              ))}
          </div>
        </details>
      )}
    </div>
  );
}

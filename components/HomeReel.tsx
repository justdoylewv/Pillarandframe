"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HOME_REEL, type ReelItem } from "@/lib/content/reel";

function SoundOff() {
  return (
    <span
      className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center border border-paper/40 bg-black/50 backdrop-blur-sm"
      aria-hidden="true"
    >
      <svg className="h-3.5 w-3.5 text-paper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </svg>
    </span>
  );
}

function PlayGlyph() {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className="flex h-14 w-14 items-center justify-center border border-paper/50 bg-black/40 backdrop-blur-sm transition-colors group-hover:bg-black/60">
        <svg className="ml-0.5 h-5 w-5 text-paper" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  );
}

function ReelCard({ item }: { item: ReelItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterFailed, setPosterFailed] = useState(false);
  const hasMotion = Boolean(item.vimeoId || item.mp4);

  // Play native video only while it is on screen; pause when scrolled away.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const showPoster = !hasMotion && item.poster && !posterFailed;

  return (
    <Link
      href={item.href}
      className="group relative block aspect-[9/16] overflow-hidden border border-shale bg-ink"
    >
      {item.vimeoId ? (
        <iframe
          src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&muted=1&autoplay=1&loop=1&autopause=0`}
          title={`${item.client} reel`}
          loading="lazy"
          allow="autoplay; picture-in-picture"
          className="absolute inset-0 h-full w-full"
        />
      ) : item.mp4 ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.poster || undefined}
        >
          <source src={item.mp4} type="video/mp4" />
        </video>
      ) : showPoster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.poster}
          alt={`${item.client}: ${item.title}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setPosterFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash-500">
            Reel coming soon
          </span>
        </div>
      )}

      {hasMotion && <SoundOff />}
      {showPoster && <PlayGlyph />}

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pt-10">
        <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-ash-300">
          {item.client}
        </span>
        <span className="mt-1 block font-serif text-base text-paper">
          {item.title}
        </span>
      </div>
    </Link>
  );
}

export default function HomeReel({ items = HOME_REEL }: { items?: ReelItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <ReelCard key={`${item.client}-${item.title}`} item={item} />
      ))}
    </div>
  );
}

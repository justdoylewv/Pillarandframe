"use client";

import { useEffect, useRef, useState } from "react";
import { HOME_REEL, type ReelItem } from "@/lib/content/reel";

// One card can carry sound at a time. Unmuting one broadcasts this so the
// others drop back to silent.
const SOUND_EVENT = "reel:sound";

function SoundIcon({ on }: { on: boolean }) {
  return (
    <svg
      className="h-3.5 w-3.5 text-paper"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      {on ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </>
      ) : (
        <>
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </>
      )}
    </svg>
  );
}

function ReelCard({ item, id }: { item: ReelItem; id: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [posterFailed, setPosterFailed] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const hasMotion = Boolean(item.vimeoId || item.mp4);

  // Best-effort command channel for the Vimeo background player.
  function vimeoSet(muted: boolean) {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(
      JSON.stringify({ method: "setMuted", value: muted }),
      "https://player.vimeo.com"
    );
    win.postMessage(
      JSON.stringify({ method: "setVolume", value: muted ? 0 : 1 }),
      "https://player.vimeo.com"
    );
  }

  function setSound(on: boolean) {
    setSoundOn(on);
    if (item.mp4 && videoRef.current) {
      videoRef.current.muted = !on;
      if (on) videoRef.current.play().catch(() => {});
    } else if (item.vimeoId) {
      vimeoSet(!on);
    }
  }

  // Native <video>: autoplay muted while on screen, pause and re-mute off it.
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
            v.muted = true;
            setSoundOn(false);
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // Drop back to silent when another card takes over the sound.
  useEffect(() => {
    function onOther(e: Event) {
      const detail = (e as CustomEvent<{ id: string }>).detail;
      if (detail?.id !== id) {
        setSoundOn(false);
        if (item.mp4 && videoRef.current) videoRef.current.muted = true;
        else if (item.vimeoId) vimeoSet(true);
      }
    }
    window.addEventListener(SOUND_EVENT, onOther);
    return () => window.removeEventListener(SOUND_EVENT, onOther);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, item.mp4, item.vimeoId]);

  function handleClick() {
    const next = !soundOn;
    setSound(next);
    if (next) {
      window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: { id } }));
    }
  }

  const showPoster = !hasMotion && item.poster && !posterFailed;

  const inner = (
    <>
      {item.vimeoId ? (
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&muted=1&autoplay=1&loop=1&autopause=0`}
          title={`${item.client} reel`}
          loading="lazy"
          allow="autoplay; picture-in-picture"
          className="pointer-events-none absolute inset-0 h-full w-full"
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
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash-500">
            Reel coming soon
          </span>
        </div>
      )}

      {/* Sound toggle indicator (motion only) */}
      {hasMotion && (
        <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center border border-paper/40 bg-black/50 backdrop-blur-sm transition-colors group-hover:bg-black/70">
          <SoundIcon on={soundOn} />
        </span>
      )}

      {/* Caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pt-10">
        <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-ash-300">
          {item.client}
        </span>
        <span className="mt-1 block font-serif text-base text-paper">
          {item.title}
        </span>
      </div>
    </>
  );

  // Motion cards toggle sound on click and never navigate. Poster-only
  // placeholders are non-interactive until a clip is added.
  if (hasMotion) {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={soundOn ? `Mute ${item.title}` : `Play ${item.title} with sound`}
        className="group relative block aspect-[9/16] w-full overflow-hidden border border-shale bg-ink text-left"
      >
        {inner}
      </button>
    );
  }

  return (
    <div className="group relative block aspect-[9/16] w-full overflow-hidden border border-shale bg-ink">
      {inner}
    </div>
  );
}

export default function HomeReel({ items = HOME_REEL }: { items?: ReelItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((item, i) => (
        <ReelCard key={`${item.client}-${item.title}`} item={item} id={`reel-${i}`} />
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { HOME_REEL, type ReelItem } from "@/lib/content/reel";

// One card can carry sound at a time. Unmuting one broadcasts this so the
// others drop back to silent.
const SOUND_EVENT = "reel:sound";

// Shorts thumbnails: the original-aspect frame is the vertical one, so try it
// first and step down if it is missing.
function youtubePosters(id: string): string[] {
  return [
    `https://i.ytimg.com/vi/${id}/oardefault.jpg`,
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  ];
}

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [posterStep, setPosterStep] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  // A YouTube player is only mounted once its card reaches the viewport. Three
  // players is a lot of third-party weight to spend before anyone scrolls.
  const [ytLive, setYtLive] = useState(false);

  const hasMotion = Boolean(item.youtubeId || item.vimeoId || item.mp4);
  const hasCaption = Boolean(item.client || item.title);
  const label = item.title ?? item.client ?? "this clip";

  const posters = item.youtubeId
    ? youtubePosters(item.youtubeId)
    : item.poster
      ? [item.poster]
      : [];
  const poster = posters[posterStep];

  // Best-effort command channels. Both players accept postMessage without the
  // vendor script, which keeps the page free of two more third-party bundles.
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

  function youtubeSet(muted: boolean) {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(
      JSON.stringify({
        event: "command",
        func: muted ? "mute" : "unMute",
        args: [],
      }),
      "https://www.youtube.com"
    );
  }

  function setSound(on: boolean) {
    setSoundOn(on);
    if (item.mp4 && videoRef.current) {
      videoRef.current.muted = !on;
      if (on) videoRef.current.play().catch(() => {});
    } else if (item.vimeoId) {
      vimeoSet(!on);
    } else if (item.youtubeId) {
      youtubeSet(!on);
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

  // YouTube: mount on approach, and drop back to silent once it leaves.
  useEffect(() => {
    if (!item.youtubeId) return;
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setYtLive(true);
          } else if (ytLive) {
            youtubeSet(true);
            setSoundOn(false);
          }
        }
      },
      { threshold: 0.25, rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.youtubeId, ytLive]);

  // Drop back to silent when another card takes over the sound.
  useEffect(() => {
    function onOther(e: Event) {
      const detail = (e as CustomEvent<{ id: string }>).detail;
      if (detail?.id === id) return;
      setSoundOn(false);
      if (item.mp4 && videoRef.current) videoRef.current.muted = true;
      else if (item.vimeoId) vimeoSet(true);
      else if (item.youtubeId) youtubeSet(true);
    }
    window.addEventListener(SOUND_EVENT, onOther);
    return () => window.removeEventListener(SOUND_EVENT, onOther);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, item.mp4, item.vimeoId, item.youtubeId]);

  function handleClick() {
    const next = !soundOn;
    setSound(next);
    if (next) {
      window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: { id } }));
    }
  }

  // The poster sits under a YouTube card until its player is mounted, so the
  // grid never flashes empty boxes on the way down the page.
  const ytSrc = item.youtubeId
    ? `https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${item.youtubeId}&controls=0&playsinline=1&modestbranding=1&rel=0&enablejsapi=1`
    : null;

  const inner = (
    <>
      {poster && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={poster}
          alt={hasCaption ? `${item.client ?? ""} ${item.title ?? ""}`.trim() : ""}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setPosterStep((s) => s + 1)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {ytSrc && ytLive ? (
        <iframe
          ref={iframeRef}
          src={ytSrc}
          title={hasCaption ? label : "Reel clip"}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          /* Filling the frame exactly rather than oversizing to crop chrome.
             If the embed pillarboxes, the cost is black edges. Oversizing to
             avoid that would zoom the shot and risk cutting off the person in
             it, which is the worse failure on a reel. */
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
        />
      ) : item.vimeoId ? (
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&muted=1&autoplay=1&loop=1&autopause=0`}
          title={hasCaption ? label : "Reel clip"}
          loading="lazy"
          allow="autoplay; picture-in-picture"
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
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
          poster={poster}
        >
          <source src={item.mp4} type="video/mp4" />
        </video>
      ) : !poster ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash-500">
            Reel coming soon
          </span>
        </div>
      ) : null}

      {/* Sound toggle indicator (motion only) */}
      {hasMotion && (
        <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center border border-paper/40 bg-black/50 backdrop-blur-sm transition-colors group-hover:bg-black/70">
          <SoundIcon on={soundOn} />
        </span>
      )}

      {hasCaption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pt-10">
          {item.client && (
            <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-ash-300">
              {item.client}
            </span>
          )}
          {item.title && (
            <span className="mt-1 block font-serif text-base text-paper">
              {item.title}
            </span>
          )}
        </div>
      )}
    </>
  );

  const frame =
    "group relative block aspect-[9/16] w-full overflow-hidden border border-shale bg-ink";

  // Motion cards toggle sound on click and never navigate. Poster-only
  // placeholders are non-interactive until a clip is added.
  if (hasMotion) {
    return (
      <div ref={cardRef}>
        <button
          type="button"
          onClick={handleClick}
          aria-label={soundOn ? `Mute ${label}` : `Play ${label} with sound`}
          className={`${frame} text-left`}
        >
          {inner}
        </button>
      </div>
    );
  }

  return (
    <div ref={cardRef}>
      <div className={frame}>{inner}</div>
    </div>
  );
}

export default function HomeReel({ items = HOME_REEL }: { items?: ReelItem[] }) {
  // Three clips read better as thirds than as a four-up grid with a gap.
  const wide = items.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${wide}`}>
      {items.map((item, i) => (
        <ReelCard
          key={item.youtubeId ?? item.vimeoId ?? item.mp4 ?? i}
          item={item}
          id={`reel-${i}`}
        />
      ))}
    </div>
  );
}

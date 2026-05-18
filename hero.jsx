/* global React, Eyebrow, Btn, FrameInner */
const { useState: useStateHero, useEffect: useEffectHero, useRef: useRefHero } = React;

// ---------- Inline placeholder video player ----------
const HeroVideo = ({ aspectRatio = '16/10', label = 'Hero film · 2:14', autoplayHint = true }) => {
  const [playing, setPlaying] = useStateHero(false);
  const [hover, setHover] = useStateHero(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setPlaying(p => !p)}
      style={{
        position: 'relative', aspectRatio, width: '100%',
        borderRadius: 'var(--r-lg)', overflow: 'hidden', cursor: 'pointer',
        background: '#0a0a0a',
      }}>
      {/* fake film frame */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #1F1B33 0%, #14213A 35%, #0F1E2E 65%, #221530 100%)',
      }}/>
      {/* subtle vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(120% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)',
      }}/>
      {/* practical lights */}
      <div style={{
        position: 'absolute', left: '12%', top: '64%', width: 90, height: 90,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.7), transparent 65%)',
        filter: 'blur(6px)',
      }}/>
      <div style={{
        position: 'absolute', right: '14%', top: '24%', width: 110, height: 110,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,114,182,0.55), transparent 65%)',
        filter: 'blur(8px)',
      }}/>
      <div style={{
        position: 'absolute', left: '46%', top: '42%', width: 60, height: 60,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.55), transparent 65%)',
        filter: 'blur(4px)',
      }}/>
      {/* silhouette */}
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.6,
      }}>
        <defs>
          <linearGradient id="silg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#000" stopOpacity="0.95"/>
          </linearGradient>
        </defs>
        <path d="M 0 500 L 0 360 C 120 340 200 320 280 290 C 320 270 340 240 360 220 C 380 200 410 195 440 215 C 470 235 480 270 520 290 C 600 320 700 340 800 360 L 800 500 Z" fill="url(#silg)"/>
      </svg>
      {/* film grain */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06, mixBlendMode: 'overlay',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '3px 3px',
      }}/>

      {/* progress when playing */}
      {playing && (
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 3, background: 'rgba(255,255,255,0.15)' }}>
          <div style={{
            height: '100%', width: '0%', background: 'var(--grad-brand-h)',
            animation: 'pf-progress 134s linear forwards',
          }}/>
        </div>
      )}
      <style>{`@keyframes pf-progress { from { width: 0%; } to { width: 100%; } }`}</style>

      {/* Center play / pause */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
        width: 76, height: 76, borderRadius: '50%',
        background: hover || playing ? 'var(--pf-rose)' : 'rgba(11,11,11,0.55)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${hover || playing ? 'var(--pf-rose)' : 'rgba(255,255,255,0.35)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 240ms var(--ease-out)',
        boxShadow: hover || playing ? 'var(--glow-rose)' : 'none',
      }}>
        {playing ? (
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ width: 5, height: 22, background: '#fff', borderRadius: 1 }}/>
            <div style={{ width: 5, height: 22, background: '#fff', borderRadius: 1 }}/>
          </div>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" style={{ marginLeft: 3 }}>
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </div>

      {/* duration tag */}
      <div style={{
        position: 'absolute', left: 14, bottom: 12,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        background: 'rgba(11,13,18,0.72)', backdropFilter: 'blur(8px)',
        padding: '4px 9px', borderRadius: 'var(--r-sm)',
        color: '#fff', border: '1px solid var(--border-1)',
        letterSpacing: '0.05em',
      }}>{playing ? 'NOW PLAYING' : label}</div>

      {/* play hint */}
      {!playing && autoplayHint && (
        <div style={{
          position: 'absolute', right: 14, bottom: 12,
          fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase',
          fontWeight: 600,
        }}>Click to play ▸</div>
      )}
    </div>
  );
};

// ---------- Hero gradient background ----------
const HeroBackground = () => (
  <>
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: 'radial-gradient(80% 60% at 20% 30%, rgba(34,211,238,0.22), transparent 60%), radial-gradient(70% 60% at 80% 20%, rgba(244,114,182,0.18), transparent 60%), radial-gradient(90% 70% at 50% 100%, rgba(139,92,246,0.22), transparent 60%)',
    }}/>
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: 'linear-gradient(180deg, transparent 60%, var(--bg-deep) 100%)',
    }}/>
  </>
);

// ---------- HERO A: Centered hero — sections 1 + 2 + 3 + 4 ----------
const HeroCentered = ({ headline, sub, intrigue, onPrimary, onSecondary }) => (
  <section style={{
    position: 'relative', overflow: 'hidden',
    paddingTop: 'clamp(80px, 12vw, 148px)',
    paddingBottom: 'clamp(56px, 8vw, 112px)',
  }} data-screen-label="S1–4 Hero">
    <HeroBackground/>
    {/* center glow */}
    <div style={{
      position: 'absolute', left: '50%', top: '38%', transform: 'translate(-50%,-50%)',
      width: 760, height: 280, pointerEvents: 'none',
      background: 'var(--grad-brand)', filter: 'blur(140px)', opacity: 0.42,
    }}/>

    <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
      {/* Section 1 — Call out audience */}
      <div className="audience-callout" style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '7px 14px 7px 12px', marginBottom: 22,
        borderRadius: 'var(--r-full)',
        background: 'rgba(244,114,182,0.10)',
        border: '1px solid rgba(244,114,182,0.32)',
        fontSize: 12.5, fontWeight: 600, letterSpacing: '0.04em',
        color: 'var(--pf-rose-400)',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, padding: '2px 6px',
          background: 'var(--pf-rose)', color: '#0B0B0B', borderRadius: 'var(--r-sm)',
          letterSpacing: '0.1em',
        }}>ATTENTION</span>
        <span>Capital-campaign directors, founders of growth-stage product companies, and owner-operators of local trust businesses about to spend real money on content.</span>
      </div>
      {/* Section 2 — Demand attention (headline) */}
      <h1 className="h-display" style={{ margin: '0 auto 22px', maxWidth: 1000 }}
          dangerouslySetInnerHTML={{ __html: headline }}/>
      {/* Section 3 — Back up the promise */}
      <p className="lede" style={{
        margin: '0 auto 32px', maxWidth: 760,
        color: 'rgba(255,255,255,0.82)', fontSize: 19,
      }}>{sub}</p>
      {/* Section 4 — Intrigue bullets (Sabri "what you'll discover" stack) */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 14,
        maxWidth: 620, margin: '0 auto 36px', textAlign: 'left',
      }} className="stagger">
        {intrigue.map((line, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', fontSize: 16, lineHeight: 1.4, color: 'var(--fg-1)' }}>
            <span style={{ flexShrink: 0,
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--grad-brand-h)', boxShadow: 'var(--glow-aqua)',
            }}/>
            <span dangerouslySetInnerHTML={{ __html: line }}/>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Btn variant="emphasis" size="lg" onClick={onPrimary}>Book the free Trust Audit →</Btn>
        <Btn variant="ghost" size="lg" onClick={onSecondary}>See the work</Btn>
      </div>
      <div style={{
        marginTop: 22, display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center',
        fontSize: 12.5, color: 'var(--fg-2)', flexWrap: 'wrap',
      }}>
        <span>30-minute call</span>
        <span style={{ width: 4, height: 4, borderRadius: 2, background: 'var(--border-2)' }}/>
        <span>No pitch deck</span>
        <span style={{ width: 4, height: 4, borderRadius: 2, background: 'var(--border-2)' }}/>
        <span>Written report in 48 hours</span>
        <span style={{ width: 4, height: 4, borderRadius: 2, background: 'var(--border-2)' }}/>
        <span>Response within 2 business days</span>
      </div>

      {/* hero film frame — [FILL: replace placeholder with a real BTS shot from a shoot — camera rig, lighting set, subject mid-interview. Faces over equipment when possible.] */}
      <div style={{ marginTop: 64, maxWidth: 1080, margin: '64px auto 0' }}>
        <FrameInner>
          <HeroVideo aspectRatio="16/9" label="BTS · Capture Day"/>
        </FrameInner>
      </div>
    </div>
  </section>
);

// ---------- HERO B: Split — sections 1 + 2 + 3 + 4 ----------
const HeroSplit = ({ headline, sub, intrigue, onPrimary, onSecondary }) => (
  <section style={{
    position: 'relative', overflow: 'hidden',
    paddingTop: 'clamp(72px, 11vw, 132px)',
    paddingBottom: 'clamp(48px, 8vw, 112px)',
  }} data-screen-label="S1–4 Hero">
    <HeroBackground/>
    <div style={{
      position: 'absolute', right: '-10%', top: '14%',
      width: 720, height: 360, pointerEvents: 'none',
      background: 'var(--grad-brand)', filter: 'blur(160px)', opacity: 0.38,
    }}/>
    <div className="container hero-split" style={{
      position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 1.2fr', gap: 56, alignItems: 'center',
    }}>
      <div className="hero-bleed-text">
        {/* S1 */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '7px 14px 7px 12px', marginBottom: 22,
          borderRadius: 'var(--r-full)',
          background: 'rgba(244,114,182,0.10)',
          border: '1px solid rgba(244,114,182,0.32)',
          fontSize: 12.5, fontWeight: 600,
          color: 'var(--pf-rose-400)',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, padding: '2px 6px',
            background: 'var(--pf-rose)', color: '#0B0B0B', borderRadius: 'var(--r-sm)',
            letterSpacing: '0.1em',
          }}>ATTENTION</span>
          <span>Capital campaigns &middot; growth-stage product &middot; local trust businesses.</span>
        </div>
        {/* S2 */}
        <h1 className="h1" style={{ fontSize: 'clamp(44px, 5.6vw, 80px)', margin: '0 0 20px', lineHeight: 1.02 }}
            dangerouslySetInnerHTML={{ __html: headline }}/>
        {/* S3 */}
        <p style={{
          fontSize: 19, lineHeight: 1.55,
          color: 'rgba(255,255,255,0.82)', maxWidth: 560, margin: '0 0 24px',
        }}>{sub}</p>
        {/* S4 */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {intrigue.map((line, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14.5, lineHeight: 1.5 }}>
              <span style={{ flexShrink: 0, marginTop: 6, width: 6, height: 6, borderRadius: '50%',
                background: 'var(--grad-brand-h)', boxShadow: 'var(--glow-aqua)',
              }}/>
              <span dangerouslySetInnerHTML={{ __html: line }}/>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Btn variant="emphasis" size="lg" onClick={onPrimary}>Book the free Trust Audit →</Btn>
          <Btn variant="ghost" size="lg" onClick={onSecondary}>See the work</Btn>
        </div>
      </div>

      <div>
        <FrameInner>
          {/* [FILL: replace placeholder with real BTS shoot photo — camera rig, lighting, subject mid-interview] */}
          <HeroVideo aspectRatio="4/5" label="BTS · Capture Day"/>
        </FrameInner>
      </div>
    </div>
  </section>
);

Object.assign(window, { HeroCentered, HeroSplit, HeroVideo });

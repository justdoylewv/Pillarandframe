/* global React, Eyebrow, Btn, FrameInner, HeroVideo, Still, useReveal */
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

// ---------- LogoStrip ----------
// [FILL: confirm logo treatments for Memorial Health Marysville and Powerfield Energy.
//  Decide whether Local Trust Trio logos are public or anonymized.]
const LogoStrip = () => {
  const archetypes = [
    { label: 'MEMORIAL HEALTH MARYSVILLE', italic: false },
    { label: 'POWERFIELD ENERGY', italic: false },
    { label: 'A 3-business local cohort — IT, mortgage, real estate', italic: true },
  ];
  return (
    <div style={{
      padding: '36px 0', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)',
      background: 'rgba(255,255,255,0.015)',
    }} className="hairline">
      <div className="container" style={{
        display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap', justifyContent: 'space-between',
      }}>
        <Eyebrow style={{ flexShrink: 0 }}>Where the engine has been built</Eyebrow>
        <div style={{
          display: 'flex', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', flexWrap: 'wrap',
        }}>
          {archetypes.map(a =>
            <span key={a.label} style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: a.italic ? 500 : 700,
              fontStyle: a.italic ? 'italic' : 'normal',
              fontSize: 13,
              letterSpacing: a.italic ? '0' : '0.12em',
              color: 'var(--fg-2)', opacity: 0.75,
            }}>{a.label}</span>
          )}
        </div>
      </div>
    </div>
  );
};

// ---------- Services (Module 9 — The Trust Engine product reveal) ----------
const Services = ({ accent }) => {
  const [active, setActive] = useStateS(0);
  const ref = useReveal();
  const services = [
    {
      tag: 'Content library',
      title: 'A year of authentic content from two days of capture.',
      copy: 'Hero film, social shorts, photography library, written assets — all from one on-site capture cycle, scoped to your audience and the moment you need to convert against. Real Human Origin mark on every deliverable.',
      bullets: ['Hero brand or campaign film', 'Short-form video cuts', 'Photography library', 'Written content for web, social, email'],
    },
    {
      tag: 'Voice Profile',
      title: 'Your voice, shipped as a deployable AI skill.',
      copy: 'A working AI skill installed in your team\'s own ChatGPT or Claude — trained on your real source material. Your marketing intern produces a voice-consistent donor letter, sales email, or social post in 90 seconds, not a week. It gets sharper the more your team uses it.',
      bullets: ['Custom AI skill, installed in your tools', 'Trained on your real interviews', 'Drafting playbook for the team', 'Yours forever — no subscription'],
    },
    {
      tag: 'Quote Library',
      title: 'A searchable archive your team pulls from for years.',
      copy: 'Every quote captured, tagged by theme, speaker, date, and use case. Your team finds the right verbatim quote for the right asset in ten seconds. Every quote attributed. Every use auditable.',
      bullets: ['Searchable database', 'Tagged by theme & speaker', 'Attribution baked in', 'Real Human Origin mark on every line'],
    },
  ];

  return (
    <section id="services" className="section ground-dark" data-screen-label="The Solution">
      <div className="container reveal" ref={ref}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Eyebrow>The solution</Eyebrow>
            </div>
            <h2 style={{ fontSize: 'clamp(34px, 4vw, 52px)', margin: '14px 0 16px', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              Meet the <span className="gradient-text">Trust Engine.</span>
            </h2>
            <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: 660 }}>
              The Trust Engine is the storytelling system that turns two days of capture into a year of authentic content. We audit your story and your audience. We come on-site for two days. We build you a content library, a Voice Profile that ships as a deployable AI tool your team installs, and a searchable Quote Library your marketing team pulls from for years. Then we hand it off. Or we run the ongoing deployment for you. Your call. No retainer minimum.
            </p>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: 660, marginTop: 12 }}>
              One product. Three productized tiers. Identical methodology across all three.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 0, border: '1px solid var(--border-1)', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: 'var(--surface-1)' }} className="grid-2 surface-card">
          {/* tab rail */}
          <div style={{ borderRight: '1px solid var(--border-1)' }} className="hairline">
            {services.map((s, i) => (
              <button key={i}
                onClick={() => setActive(i)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '22px 24px', background: active === i ? 'var(--surface-2)' : 'transparent',
                  border: 'none', borderBottom: i < services.length - 1 ? '1px solid var(--border-1)' : 'none',
                  cursor: 'pointer', transition: 'background 150ms var(--ease-out)',
                  position: 'relative',
                }}>
                {active === i && (
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
                    background: 'var(--grad-brand)',
                  }}/>
                )}
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)',
                  letterSpacing: '0.06em', marginBottom: 6,
                }}>{s.tag}</div>
                <div style={{
                  fontSize: 15, fontWeight: 600, color: active === i ? '#fff' : 'var(--fg-1)',
                  lineHeight: 1.3,
                }}>{s.title.split('.')[0]}.</div>
              </button>
            ))}
          </div>
          {/* panel */}
          <div style={{ padding: '40px 44px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 36, alignItems: 'start' }} className="grid-2 services-panel">
            <div>
              <Eyebrow color="var(--pf-aqua-400)" style={{ marginBottom: 12 }}>{services[active].tag}</Eyebrow>
              <h3 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.015em', margin: '0 0 16px' }}>
                {services[active].title}
              </h3>
              <p style={{ fontSize: 15.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 24px' }}>
                {services[active].copy}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {services[active].bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: 'var(--accent-dyn, var(--pf-aqua))',
                      flexShrink: 0, marginTop: 6,
                    }}/>
                    <span style={{ fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.4 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <DeliverablePreview kind={active}/>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .services-panel { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ---------- Deliverable preview (per Services tab) ----------
// Small visual placeholder that shows what each deliverable type LOOKS LIKE.
// Swap with real previews before launch.
const DeliverablePreview = ({ kind }) => {
  if (kind === 0) {
    // Content Library — stills mosaic
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <Still aspectRatio="16/9" label="Hero film — 90s" kind="portrait" seed={0}/>
        </div>
        <Still aspectRatio="1/1"   label="Portrait" kind="portrait" seed={1}/>
        <Still aspectRatio="1/1"   label="B-roll"   kind="interior" seed={2}/>
      </div>
    );
  }
  if (kind === 1) {
    // Voice Profile — AI chat interface mock
    return (
      <div style={{
        background: 'var(--surface-2)', border: '1px solid var(--border-1)',
        borderRadius: 'var(--r-lg)', padding: 16, position: 'relative',
        fontFamily: 'var(--font-mono)',
      }}>
        <div style={{
          position: 'absolute', right: 12, top: 12,
          fontSize: 9, padding: '3px 7px', borderRadius: 'var(--r-sm)',
          background: 'rgba(244,114,182,0.18)', color: 'var(--pf-rose-400)',
          border: '1px solid rgba(244,114,182,0.32)', letterSpacing: '0.1em',
        }}>FILL</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, fontSize: 10.5, color: 'var(--fg-2)', letterSpacing: '0.08em' }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--success)' }}/>
          INSTALLED · YOUR ORG VOICE PROFILE
        </div>
        <div style={{
          padding: '10px 12px', background: 'var(--surface-3)',
          borderRadius: 'var(--r-md)', marginBottom: 10,
          fontSize: 12, color: 'var(--fg-1)', lineHeight: 1.5, fontFamily: 'var(--font-sans)',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-2)' }}>YOU →&nbsp;</span>
          Draft a donor thank-you for the ED expansion in our voice.
        </div>
        <div style={{
          padding: '10px 12px', background: 'rgba(34,211,238,0.08)',
          border: '1px solid rgba(34,211,238,0.24)',
          borderRadius: 'var(--r-md)', marginBottom: 10,
          fontSize: 12, color: 'var(--fg-1)', lineHeight: 1.55, fontFamily: 'var(--font-sans)',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--pf-aqua-400)' }}>VOICE PROFILE →&nbsp;</span>
          When the new ED opens next spring, it'll be because of people like you who decided this town's emergency care couldn't wait. Thank you, simply — and on behalf of every neighbor who'll walk through those doors…
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          {['re-draft', 'shorten', 'add quote'].map(t => (
            <span key={t} style={{
              fontSize: 9.5, padding: '3px 8px', borderRadius: 'var(--r-full)',
              background: 'var(--surface-1)', border: '1px solid var(--border-1)',
              color: 'var(--fg-2)', letterSpacing: '0.04em',
            }}>{t}</span>
          ))}
        </div>
      </div>
    );
  }
  // kind === 2 — Quote Library — searchable database mock
  const rows = [
    { theme: 'urgency',   speaker: 'Dr. Joel Ascher', q: '"This isn\'t a building. It\'s the difference between getting care now and getting it forty minutes from now."' },
    { theme: 'community', speaker: 'Pastor Joe',      q: '"Every name on that donor wall is a neighbor who decided not to wait."' },
    { theme: 'craft',     speaker: 'Leigh Anne G.',   q: '"The team showed up at 6 a.m. We didn\'t. They got the sunrise shot anyway."' },
  ];
  return (
    <div style={{
      background: 'var(--surface-2)', border: '1px solid var(--border-1)',
      borderRadius: 'var(--r-lg)', overflow: 'hidden', position: 'relative',
      fontFamily: 'var(--font-mono)',
    }}>
      <div style={{
        position: 'absolute', right: 12, top: 12,
        fontSize: 9, padding: '3px 7px', borderRadius: 'var(--r-sm)',
        background: 'rgba(244,114,182,0.18)', color: 'var(--pf-rose-400)',
        border: '1px solid rgba(244,114,182,0.32)', letterSpacing: '0.1em', zIndex: 1,
      }}>FILL</div>
      <div style={{
        padding: '12px 16px', background: 'var(--surface-3)',
        borderBottom: '1px solid var(--border-1)',
        display: 'flex', alignItems: 'center', gap: 10,
        fontSize: 10.5, color: 'var(--fg-2)', letterSpacing: '0.08em',
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="7"/><line x1="20" y1="20" x2="15" y2="15"/></svg>
        SEARCH · TAG: URGENCY · SPEAKER: ANY
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          padding: '12px 16px',
          borderTop: i === 0 ? 'none' : '1px solid var(--border-1)',
        }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 10, color: 'var(--fg-2)', letterSpacing: '0.06em' }}>
            <span style={{ padding: '2px 7px', borderRadius: 'var(--r-sm)', background: 'rgba(34,211,238,0.10)', border: '1px solid rgba(34,211,238,0.24)', color: 'var(--pf-aqua-400)' }}>{r.theme.toUpperCase()}</span>
            <span style={{ alignSelf: 'center' }}>{r.speaker}</span>
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--fg-1)', lineHeight: 1.5 }}>{r.q}</div>
        </div>
      ))}
    </div>
  );
};

// ---------- How it works (process timeline) ----------
const Process = () => {
  const steps = [
    {
      n: '01', t: 'Audit',
      sub: 'Week 0',
      d: 'Free Trust Audit. 30 minutes with the founder. Written report within 48 hours. Pillar themes mapped to your audience, content gap analysis, a draft of what your library could look like, a specific Trust Engine tier and scope recommendation. Yours to keep whether you work with us or not.',
    },
    {
      n: '02', t: 'Capture',
      sub: 'Week 2–3',
      d: 'Two days on site. Day 1 is interviews and photography. Day 2 is b-roll. We arrive early. Set the room. Coffee, water, food, music. Subjects get pre-shoot prep calls that calm the nerves. Real moments, captured cleanly. (Local tier may compress to one focused capture day where scope permits.)',
    },
    {
      n: '03', t: 'Library',
      sub: 'Week 4–6',
      d: 'Hero film, social shorts, photography library, written assets. Voice Profile delivered as a four-artifact package with the deployable AI skill at the center. Quote Library delivered as a searchable database. Real Human Origin mark on every asset.',
    },
    {
      n: '04', t: 'Deploy or Compound',
      sub: 'Week 6+',
      d: 'Library Review meeting at week six. Walk through what was built, what\'s been deployed, what\'s still in the library. The optional Engine retainer is offered here — never before. Cancel any month. The work compounds.',
    },
  ];
  const ref = useReveal();
  return (
    <section id="process" className="section ground-mid">
      <div className="container reveal" ref={ref}>
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <Eyebrow>How it works</Eyebrow>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 52px)', margin: '14px 0 16px', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            Four phases. <span className="gradient-text">No filler.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.55 }}>
            Foundation to library handoff in six to eight weeks. We hand the engine off — or run the ongoing deployment for you. No retainer minimum.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--border-1)', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border-1)' }} className="grid-2 hairline surface-card">
          {steps.map((s, i) => (
            <div key={s.n} style={{
              background: 'var(--surface-1)', padding: '32px 28px', position: 'relative',
              minHeight: 220,
            }} className="surface-card">
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
                <div className="num-chip" style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em',
                  padding: '5px 9px', borderRadius: 'var(--r-sm)',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-1)',
                  color: 'var(--fg-2)',
                }}>{s.n} · {s.sub.toUpperCase()}</div>
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.015em', marginBottom: 10 }}>{s.t}</div>
              <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{s.d}</p>
              {/* connector */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', right: -1, top: '50%', transform: 'translateY(-50%)',
                  width: 1, height: 28, background: 'var(--grad-brand)', opacity: 0.6,
                }}/>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Case study highlight (large) ----------
const CaseStudyHighlight = () => {
  const ref = useReveal();
  return (
    <section id="work" className="section ground-dark" data-screen-label="Credentials">
      <div className="container reveal" ref={ref}>
        <div style={{ maxWidth: 760, marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Eyebrow>Credentials</Eyebrow>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3.8vw, 52px)', margin: '0 0 14px', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            <span className="gradient-text">Receipts.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0, maxWidth: 640 }}>
            One featured engagement below. Aggregate numbers in the social proof section.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 56, alignItems: 'center' }} className="grid-2">
          <div>
            <FrameInner>
              {/* [FILL: Memorial hero film embed if approved for public use; or a representative BTS reel.] */}
              <HeroVideo aspectRatio="16/10" label="Memorial · ED capital campaign"/>
            </FrameInner>
          </div>
          <div>
            <Eyebrow color="var(--pf-rose)">Featured engagement</Eyebrow>
            <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', margin: '14px 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Memorial Health Marysville — ED capital campaign.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 24 }}>
              A capital campaign for an independent hospital's Emergency Department expansion. One Trust Engine produced the hero film, the soundbite library organized by theme, written copy for donor letters and case statement support, and a Voice Profile + Quote Library their development team is still using.
            </p>
            <div style={{
              padding: '16px 20px', marginBottom: 28,
              background: 'rgba(244,114,182,0.06)', border: '1px dashed rgba(244,114,182,0.32)',
              borderRadius: 'var(--r-md)',
              fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.55,
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--pf-rose-400)', marginRight: 8 }}>[FILL]</span>
              Outcome numbers — campaign goal $XX million, dollars raised, donors engaged — pending verification with Memorial Foundation. Per Audit-Report.md, keep outcome language story-based until sourced.
            </div>
            <Btn variant="ghost">Read the full case study →</Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Metrics strip ----------
// Numbers we can stand behind today. Discipline: publish what we can defend; flag what isn't verified.
const Metrics = () => {
  const ref = useReveal();
  const items = [
    { v: 'Hundreds', l: 'of corporate interviews directed across ten countries (Doyle\'s pre-P&F catalog at Stories Inc, continuing through P&F)' },
    { v: '3',        l: 'anchored vertical archetypes at launch — capital campaigns, growth-stage product, local trust businesses' },
    { v: '6–8 wks',  l: 'from kickoff to library handoff. Every Trust Engine. Fixed.' },
    { v: '100%',     l: 'of deliverables carry the Real Human Origin mark. Zero fabricated faces, voices, or testimonials.' },
  ];
  return (
    <section className="section--tight ground-dark">
      <div className="container reveal" ref={ref}>
        <div style={{ maxWidth: 720, marginBottom: 32 }}>
          <Eyebrow>What the methodology has produced</Eyebrow>
          <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: '10px 0 0', maxWidth: 640 }}>
            We are deliberately publishing only what is real and verifiable. This section will grow as Trust Engine engagements close and Memorial outcome data lands.
          </p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
          background: 'var(--border-1)', borderRadius: 'var(--r-lg)', overflow: 'hidden',
          border: '1px solid var(--border-1)',
        }} className="grid-2 hairline">
          {items.map((m, i) => (
            <div key={i} style={{ background: 'var(--surface-1)', padding: '32px 28px' }} className="surface-card">
              <div className="gradient-text" style={{
                fontSize: 42, fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1, marginBottom: 10,
              }}>{m.v}</div>
              <div style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.5 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Work gallery (visual proof — replace tiles with real shoot imagery) ----------
// 6 tiles, mixed videos + stills, labeled by deliverable type.
// Each tile is a placeholder. Swap with real assets from recent Trust Engine deliverables.
const WorkGallery = () => {
  const ref = useReveal();
  const tiles = [
    { type: 'video', aspect: '16/9',  label: 'Hero film · Memorial ED campaign',     kind: 'portrait',  seed: 0 },
    { type: 'still', aspect: '4/5',   label: 'Portraits · donor stewardship',        kind: 'portrait',  seed: 1 },
    { type: 'still', aspect: '4/5',   label: 'B-roll · operating environment',       kind: 'interior',  seed: 2 },
    { type: 'still', aspect: '4/5',   label: 'Capture day · behind the scenes',      kind: 'portrait',  seed: 3 },
    { type: 'still', aspect: '4/5',   label: 'Stills · Quote Library reference',     kind: 'landscape', seed: 4 },
    { type: 'video', aspect: '16/9',  label: 'Social cut · vertical, 60s',           kind: 'portrait',  seed: 5 },
  ];
  return (
    <section className="section ground-dark" data-screen-label="Work gallery">
      <div className="container reveal" ref={ref}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          gap: 24, flexWrap: 'wrap', marginBottom: 32,
        }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>From the library</Eyebrow>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 38px)', margin: '12px 0 10px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              More of the work.
            </h2>
            <p style={{ fontSize: 15.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0, maxWidth: 560 }}>
              Hero films, portraits, b-roll, social cuts — pulled from recent Trust Engine deliverables. Each tile here is a placeholder for a real asset.
            </p>
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px', borderRadius: 'var(--r-full)',
            background: 'rgba(244,114,182,0.08)',
            border: '1px solid rgba(244,114,182,0.32)',
            fontSize: 11.5, fontWeight: 600, letterSpacing: '0.1em',
            color: 'var(--pf-rose-400)', fontFamily: 'var(--font-mono)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: 4, background: 'var(--pf-rose)' }}/>
            [FILL] · SWAP TILES WITH REAL CAPTURES
          </div>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
        }} className="grid-3 work-gallery">
          {tiles.map((t, i) => (
            <div key={i} style={{
              gridRow: t.aspect === '16/9' ? 'auto' : 'auto',
            }}>
              {t.type === 'video'
                ? <HeroVideo aspectRatio={t.aspect} label={t.label} autoplayHint={false}/>
                : <Still aspectRatio={t.aspect} label={t.label} kind={t.kind} seed={t.seed}/>}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .work-gallery { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .work-gallery { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ---------- Pricing tiers ----------
const Pricing = ({ onSelect }) => {
  const ref = useReveal();
  const tiers = [
    {
      tier: 'Tier 1', name: 'Local',
      price: '$5,000', duration: 'Foundation · retainer $1,650/mo · no minimum',
      desc: 'For service businesses doing $500K–$3M/year. Local owners who win on reputation but lose online — premium home services, contractors, advisors, brokers, IT, mortgage, real estate.',
      bullets: [
        'Trust Audit, delivered by Doyle',
        'One focused capture day (or two, when warranted)',
        'Hero brand film + short-form video cuts',
        'Photography library',
        'Written content for web, social, email',
        'Voice Profile as a deployable AI tool',
        'Quote Library as a searchable database',
        'Library Review meeting at week six',
      ],
      cta: 'Start with this tier →',
    },
    {
      tier: 'Tier 2', name: 'Growth', featured: true,
      price: '$15,000–$25,000', duration: 'Foundation · retainer $5K–$8K/mo · no minimum',
      desc: 'For mid-market product or service companies (50–500 employees), growth-stage SaaS or B2B, mission-driven organizations running a capital campaign.',
      bullets: [
        'Everything in the Local tier',
        'Two-day on-site capture',
        'Larger asset library scoped to the audit',
        'Hero campaign or brand film',
        'Sales enablement or donor stewardship asset suite',
        'Expanded written content for proposals, donor letters, or case statements',
        'Performance reporting at 90-day intervals if on retainer',
      ],
      cta: 'Book the Trust Audit →',
    },
    {
      tier: 'Tier 3', name: 'Enterprise',
      price: 'Starting $40,000', duration: 'Foundation · retainer custom · no minimum',
      desc: 'For multi-campaign organizations, multi-location or multi-stakeholder teams, buyers who need embedded Creative Direction.',
      bullets: [
        'Everything in the Growth tier',
        'Custom-scoped capture (multi-day, multi-location)',
        'Embedded Fractional Creative Direction from Doyle',
        'Dedicated editor and VA support',
        'Cross-team distribution strategy',
        'Quarterly strategy reviews',
      ],
      cta: 'Start with this tier →',
    },
  ];

  return (
    <section id="pricing" className="section ground-mid" data-screen-label="The Full Price List">
      <div className="container reveal" ref={ref}>
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Eyebrow>The full price list</Eyebrow>
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 52px)', margin: '14px 0 16px', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            Three tiers. One engine. <span className="gradient-text">Fixed pricing.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.55 }}>
            The methodology is identical across all three. Tiers change scope and embedded support. Foundation stands on its own — no retainer required. Retainer is the upsell at the Library Review meeting, not a precondition.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="grid-3">
          {tiers.map(t => <TierCard key={t.name} {...t} onSelect={onSelect}/>)}
        </div>
      </div>
    </section>
  );
};

const TierCard = ({ tier, name, price, duration, desc, bullets, featured, cta, onSelect }) => {
  const [hover, setHover] = useStateS(false);
  const wrap = {
    padding: featured ? 1 : 0,
    borderRadius: 'var(--r-lg)',
    background: featured ? 'var(--grad-brand)' : 'transparent',
    transition: 'transform 240ms var(--ease-out)',
    transform: hover ? 'translateY(-3px)' : 'none',
  };
  const inner = {
    background: 'var(--surface-1)',
    border: featured ? 'none' : `1px solid ${hover ? 'var(--border-2)' : 'var(--border-1)'}`,
    borderRadius: 'calc(var(--r-lg) - 1px)',
    padding: 28,
    position: 'relative',
    transition: 'all 240ms var(--ease-out)',
    height: '100%',
    display: 'flex', flexDirection: 'column',
  };
  return (
    <div style={wrap} className="surface-card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={inner}>
        {featured && (
          <div style={{
            position: 'absolute', top: -11, right: 20,
            background: 'var(--grad-warm)', color: '#fff',
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em',
            padding: '4px 10px', borderRadius: 'var(--r-full)',
            boxShadow: 'var(--glow-rose)',
          }}>MOST COMMON</div>
        )}
        <Eyebrow color={featured ? 'var(--pf-rose)' : undefined} style={{ marginBottom: 6 }}>{tier}</Eyebrow>
        <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.015em', lineHeight: 1.2, marginBottom: 6 }}>
          {name}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-2)', marginBottom: 16 }}>
          {price} · {duration}
        </div>
        <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 22px' }}>{desc}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13.5, lineHeight: 1.5 }}>
              <span style={{
                flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%',
                background: featured ? 'var(--pf-rose)' : 'var(--accent-dyn, var(--pf-aqua))',
              }}/>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Btn variant={featured ? 'emphasis' : 'secondary'} style={{ width: '100%', justifyContent: 'center', background: featured ? undefined : 'var(--surface-2)', color: featured ? undefined : 'var(--fg-1)', borderColor: featured ? undefined : 'var(--border-2)' }} onClick={onSelect}>
          {cta || (featured ? 'Book the Trust Audit →' : 'Start with this tier →')}
        </Btn>
      </div>
    </div>
  );
};

// ---------- Who we work with / who we don't ----------
const WhoWorkWith = () => {
  const ref = useReveal();
  const yes = [
    'You have a real story that isn\'t fully told yet',
    'Your audience is choosing based on trust, not price',
    'You\'re tired of paying for content that doesn\'t earn',
    'You want infrastructure your team can deploy, not another vendor folder',
    'You\'re at one of the three anchored verticals — capital campaigns/mission-driven nonprofits, growth-stage product companies, or local trust businesses — or close enough that the methodology obviously translates',
  ];
  const no = [
    'You want a single hero video and nothing else',
    'You want scripted, brand-controlled, talking-head ads',
    'You want AI-generated content at maximum volume',
    'You want the cheapest option in the market',
    'You want a retainer minimum to justify your decision internally — we won\'t sign one',
  ];
  return (
    <section className="section ground-dark">
      <div className="container reveal" ref={ref}>
        <div style={{ maxWidth: 760, marginBottom: 48 }}>
          <Eyebrow>Scope</Eyebrow>
          <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 46px)', margin: '14px 0 12px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Saying no is part of the brief.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: 640 }}>
            We're sharper when the work has somewhere to go. We don't sell media buying — your team or your media partner runs the spend. We don't sell standalone always-on content calendars. We don't sell generic brand video.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--border-1)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }} className="grid-2 hairline">
          <div style={{ background: 'var(--surface-1)', padding: '32px 32px' }} className="surface-card">
            <Eyebrow color="var(--success)" style={{ marginBottom: 18 }}>Who we work with</Eyebrow>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {yes.map(l => (
                <li key={l} style={{ display: 'flex', gap: 12, fontSize: 15.5, lineHeight: 1.5 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--surface-1)', padding: '32px 32px', borderLeft: '1px solid var(--border-1)' }} className="surface-card hairline">
            <Eyebrow color="var(--danger)" style={{ marginBottom: 18 }}>Who we don't</Eyebrow>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {no.map(l => (
                <li key={l} style={{ display: 'flex', gap: 12, fontSize: 15.5, color: 'var(--fg-2)', lineHeight: 1.5 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- FAQ ----------
const FAQ = () => {
  const [open, setOpen] = useStateS(0);
  const ref = useReveal();
  const items = [
    {
      q: 'How fast can we start?',
      a: 'Most Trust Engine engagements kick off within two weeks of the proposal landing. Capture days are typically scheduled 3–4 weeks out depending on travel and subject access.',
    },
    {
      q: 'Why is the Trust Audit free?',
      a: 'The audit is the easiest way to find out if we\'re a fit. For us, and for you. Charging for it filtered out the wrong people. Free filters in the right ones.',
    },
    {
      q: 'What if the Trust Audit shows we\'re not a fit?',
      a: 'We say so, in the written report, before we send the proposal. You keep the report. You keep the time. We don\'t try to upsell you into a tier you don\'t need. We\'d rather refer you to someone who can help than ship work that wastes your money or your moment.',
    },
    {
      q: 'Who owns the footage and the cuts?',
      a: 'You do. Full rights, full files, full library. You also own the Voice Profile and Quote Library — they live in your AI tools and your database, not ours.',
    },
    {
      q: 'What does the AI Voice Profile actually do?',
      a: 'It\'s a custom AI skill we build from your real source material. Your team installs it in their own ChatGPT or Claude. They type a request — "draft a donor thank-you note about the ED expansion in our voice" — and it produces a draft in your voice using your real quotes. It gets sharper as your team uses it. It\'s yours forever.',
    },
    {
      q: 'What does the Real Human Origin mark do?',
      a: 'It\'s a visible commitment on every asset we deliver. Similar to organic food labeling. It signals to your audience that what they\'re seeing was captured, not fabricated. The mark travels with the work for as long as the work exists.',
    },
    {
      q: 'Why no retainer minimum?',
      a: 'Because the work should hold the relationship. Not the contract.',
    },
    {
      q: 'We already have a brand video. Can you just edit it down?',
      a: 'We don\'t. Every Trust Engine is the full system. If you want a one-off edit, we\'ll refer you to people who do that work well.',
    },
    {
      q: 'How is this different from a regular video agency?',
      a: 'Three things. We deliver the Voice Profile and Quote Library as deployable AI tools, not PDFs. We refuse to fabricate human moments with AI. We treat the capture day like the most meaningful day of your team\'s year. Those three things are what make this an engine instead of a project.',
    },
    {
      q: 'Can we upgrade tiers later?',
      a: 'Yes. We scope the next phase at the Library Review meeting. Many clients start at Growth and move to Enterprise after the first year.',
    },
  ];
  return (
    <section id="faq" className="section ground-mid">
      <div className="container--narrow reveal" ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }} className="grid-2">
          <div style={{ position: 'sticky', top: 100 }}>
            <Eyebrow>FAQ</Eyebrow>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', margin: '14px 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              The honest answers.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55 }}>
              Anything not covered here, we'll answer on a discovery call. No deck, no sales pressure.
            </p>
          </div>
          <div>
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="faq-item" style={{
                  borderTop: '1px solid var(--border-1)',
                  borderBottom: i === items.length - 1 ? '1px solid var(--border-1)' : 'none',
                }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center',
                      padding: '22px 0', background: 'transparent', border: 'none', cursor: 'pointer',
                      textAlign: 'left', color: 'inherit',
                    }}>
                    <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--fg-pure, #fff)', letterSpacing: '-0.005em' }}>{it.q}</span>
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: isOpen ? 'var(--grad-warm)' : 'var(--surface-2)',
                      border: isOpen ? 'none' : '1px solid var(--border-2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 240ms var(--ease-out)',
                      flexShrink: 0,
                    }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform 240ms var(--ease-out)',
                      }}>
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </span>
                  </button>
                  <div style={{
                    display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 240ms var(--ease-out)',
                  }}>
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{ fontSize: 15.5, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 22px', maxWidth: 640 }}>{it.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Founder note ----------
const FounderNote = () => {
  const ref = useReveal();
  return (
    <section className="section ground-dark">
      <div className="container--narrow reveal" ref={ref}>
        <div className="frame" style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{
            background: 'var(--surface-1)', borderRadius: 'var(--r-lg)',
            padding: 'clamp(36px, 5vw, 64px)',
            display: 'grid', gridTemplateColumns: '140px 1fr', gap: 40, alignItems: 'start',
          }} className="grid-2 surface-card dark-card">
            <div className="aura aura-soft" style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'linear-gradient(135deg, #1F1B33 0%, #14213A 100%)',
              border: '1px solid var(--border-2)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', left: '20%', top: '60%', width: 60, height: 60,
                borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,114,182,0.6), transparent 65%)',
                filter: 'blur(6px)',
              }}/>
              <svg viewBox="0 0 120 120" style={{ position: 'absolute', inset: 0 }}>
                <circle cx="60" cy="48" r="22" fill="rgba(255,255,255,0.08)"/>
                <path d="M 20 120 C 20 88 36 76 60 76 C 84 76 100 88 100 120 Z" fill="rgba(255,255,255,0.08)"/>
              </svg>
              {/* FILL hint */}
              <div style={{
                position: 'absolute', right: -2, top: -2,
                fontFamily: 'var(--font-mono)', fontSize: 9,
                padding: '3px 7px', borderRadius: 'var(--r-sm)',
                background: 'rgba(244,114,182,0.32)', color: '#fff',
                letterSpacing: '0.1em',
              }}>FILL</div>
            </div>
            <div>
              <Eyebrow color="var(--pf-rose)" style={{ marginBottom: 14 }}>A note from the founder</Eyebrow>
              <p style={{
                fontSize: 22, fontWeight: 500, lineHeight: 1.45, letterSpacing: '-0.01em',
                margin: '0 0 22px', maxWidth: 700,
              }}>
                "Most agencies are racing to use AI to make more polished content faster. We took the opposite bet. We treat AI as the deployment layer, not the production layer. We refuse to fabricate human moments. Those moments are the only thing left that can't be commoditized — and they're about to be worth more than anything else in your library."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--fg-2)', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 600, color: 'var(--fg-1)' }}>Doyle Maurer</span>
                <span style={{ width: 4, height: 4, borderRadius: 2, background: 'var(--border-2)' }}/>
                <span>Founder, Pillar &amp; Frame</span>
                <span style={{ width: 4, height: 4, borderRadius: 2, background: 'var(--border-2)' }}/>
                <span>Photojournalism school · 200+ wedding video days · hundreds of corporate interviews across ten countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Footer ----------
const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--border-1)',
    padding: '64px 0 40px',
    background: 'var(--bg-elevated)',
  }}>
    <div className="container" style={{
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40,
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="assets/logo-mark.svg" width="28" height="28" alt=""/>
          <span style={{ fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', fontSize: 16 }}>Pillar &amp; Frame</span>
        </div>
        <p style={{ marginTop: 20, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, maxWidth: 320, fontStyle: 'italic' }}>
          Authentic storytelling, productized. Built in Ohio. Deployed everywhere.
        </p>
      </div>
      {[
        { h: 'Pillar & Frame', l: ['About', 'Our Authenticity Standard', 'Newsletter', 'Contact'] },
        { h: 'Product',        l: ['How It Works', 'Case Studies', 'Pricing', 'Trust Audit'] },
        { h: 'Programs',       l: ['City Spotlight', 'The Crew Cut'] },
        { h: 'Connect',        l: ['LinkedIn', 'Instagram', 'Email'] },
      ].map(col => (
        <div key={col.h}>
          <Eyebrow>{col.h}</Eyebrow>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {col.l.map(i => <li key={i}><a href="#" style={{ fontSize: 13.5, color: 'var(--fg-1)', textDecoration: 'none' }}>{i}</a></li>)}
          </ul>
        </div>
      ))}
    </div>
    <div className="container" style={{
      marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border-1)',
      display: 'flex', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap',
      fontSize: 12, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)',
    }}>
      <span>© Pillar &amp; Frame {new Date().getFullYear()}</span>
      <span style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
        <a href="#" style={{ color: 'var(--fg-3)', textDecoration: 'none' }}>Privacy</a>
        <a href="#" style={{ color: 'var(--fg-3)', textDecoration: 'none' }}>Terms</a>
        <span>Built in Ohio</span>
      </span>
    </div>
  </footer>
);

Object.assign(window, {
  LogoStrip, Services, Process, CaseStudyHighlight, Metrics, WorkGallery, Pricing,
  WhoWorkWith, FAQ, FounderNote, Footer,
});

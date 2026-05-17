/* global React, Eyebrow, Btn, FrameInner, HeroVideo, useReveal */
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

// ---------- LogoStrip ----------
const LogoStrip = () => {
  const logos = [
    'MERCY HEALTH', 'NORTHWELL', 'VANDERBILT', 'CLEVELAND CLINIC', 'ATRIUM HEALTH', 'KIPP',
  ];
  return (
    <div style={{
      padding: '36px 0', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)',
      background: 'rgba(255,255,255,0.015)',
    }} className="hairline">
      <div className="container" style={{
        display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap', justifyContent: 'space-between',
      }}>
        <Eyebrow style={{ flexShrink: 0 }}>Trusted by teams running campaigns at</Eyebrow>
        <div style={{
          display: 'flex', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'center', flexWrap: 'wrap',
        }}>
          {logos.map(n =>
            <span key={n} style={{
              fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13,
              letterSpacing: '0.12em', color: 'var(--fg-2)', opacity: 0.75,
            }}>{n}</span>
          )}
        </div>
      </div>
    </div>
  );
};

// ---------- Services breakdown ----------
const Services = ({ accent }) => {
  const [active, setActive] = useStateS(0);
  const ref = useReveal();
  const services = [
    {
      tag: 'Documentary fundraiser content',
      title: 'Films engineered for the moment that needs to convert.',
      copy: 'Two-day on-site capture, one hero film, three to five short-form cuts mapped to specific funnel stages, a photo library, and ad-ready creative — built around a number you\'ve already committed to.',
      bullets: ['Hero film (90s–3min)', '3–5 short cuts, all aspect ratios', '10–15 hero stills, 40+ supporting', 'Landing page + email copy'],
    },
    {
      tag: 'AI voice profiles',
      title: 'Your organization\'s voice, captured as a working skill.',
      copy: 'A trained voice profile your team can use across briefs, drafts, and channels. Mapped to your existing tone guide, not a generic LLM impression.',
      bullets: ['Voice audit + sample set', 'Trained voice profile (Skill)', 'Drafting playbook for the team', 'Quarterly refresh on Tier 3'],
    },
    {
      tag: 'Campaign audit',
      title: 'A two-week diagnostic on the campaign you\'re already running.',
      copy: 'We map your asset gap, identify three to five story angles with source material, and hand back a Conversion Map. Credit applies to a full engagement.',
      bullets: ['Campaign Conversion Map', 'Asset gap analysis', '3–5 story angles, sourced', '90-min strategy session'],
    },
  ];

  return (
    <section id="services" className="section ground-dark" data-screen-label="S6 Solution">
      <div className="container reveal" ref={ref}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Eyebrow>The solution</Eyebrow>
            </div>
            <h2 style={{ fontSize: 'clamp(34px, 4vw, 52px)', margin: '14px 0 16px', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              Two services. <span className="gradient-text">One job.</span>
            </h2>
            <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: 600 }}>
              We design content engineered for an outcome you've already committed to — and the voice profile to keep producing on that level after we leave.
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
          <div style={{ padding: '40px 44px' }}>
            <Eyebrow color="var(--pf-aqua-400)" style={{ marginBottom: 12 }}>{services[active].tag}</Eyebrow>
            <h3 style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.015em', margin: '0 0 16px' }}>
              {services[active].title}
            </h3>
            <p style={{ fontSize: 16.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 620 }}>
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
        </div>
      </div>
    </section>
  );
};

// ---------- How it works (process timeline) ----------
const Process = () => {
  const steps = [
    {
      n: '01', t: 'Brief',
      sub: 'Week 0',
      d: 'A 30-minute call, a scoped audit, and a Conversion Map for the campaign you\'re already running. You can take it from there or scale up.',
    },
    {
      n: '02', t: 'Capture',
      sub: 'Week 2–3',
      d: 'Two days on site. Documentary-grade interviews, observation B-roll, hero stills. We shoot to a brief, not to a wishlist.',
    },
    {
      n: '03', t: 'Cut',
      sub: 'Week 4–5',
      d: 'One hero film, three to five short cuts mapped to funnel stages, a photo library, and landing page + email copy ready to ship.',
    },
    {
      n: '04', t: 'Compound',
      sub: 'Ongoing',
      d: 'Your assets and voice profile get re-cut and re-deployed across the next campaign. The library compounds. The work multiplies.',
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
            We come in when there's a defined moment that needs to convert. We don't run media. We don't pad the timeline.
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
    <section id="work" className="section ground-dark" data-screen-label="S7 Credentials">
      <div className="container reveal" ref={ref}>
        <div style={{ maxWidth: 760, marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Eyebrow>Credentials</Eyebrow>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3.8vw, 52px)', margin: '0 0 14px', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            28 campaigns. <span className="gradient-text">Receipts on every one.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0, maxWidth: 640 }}>
            One featured engagement below. Aggregate numbers in the social proof section.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 56, alignItems: 'center' }} className="grid-2">
          <div>
            <FrameInner>
              <HeroVideo aspectRatio="16/10" label="Capital campaign · 02:14"/>
            </FrameInner>
          </div>
          <div>
            <Eyebrow color="var(--pf-rose)">Featured work</Eyebrow>
            <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', margin: '14px 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Mercy Health Foundation, capital campaign hero film.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 28 }}>
              A 24-month, $40M capital campaign with an eight-week public phase. We delivered one hero film, four short-form cuts mapped to email + paid social funnel stages, and a 120-image library. Their team ran the spend.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 32 }}>
              <div>
                <div className="gradient-text" style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>$2.4M</div>
                <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 6, lineHeight: 1.4 }}>raised in 8 weeks</div>
              </div>
              <div>
                <div className="gradient-text" style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>3.6×</div>
                <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 6, lineHeight: 1.4 }}>email reply rate vs. prior</div>
              </div>
              <div>
                <div className="gradient-text" style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>120</div>
                <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 6, lineHeight: 1.4 }}>library assets, still in use</div>
              </div>
            </div>
            <Btn variant="ghost">Read the full case study →</Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Metrics strip ----------
const Metrics = () => {
  const ref = useReveal();
  const items = [
    { v: '$2.4M', l: 'raised in 8 weeks for a regional health system capital campaign' },
    { v: '312%',  l: 'CTR lift on paid social against control creative' },
    { v: '4.1×',  l: 'application volume vs. prior recruiting cycle' },
    { v: '11 days', l: 'median time from brief to first cut of the hero film' },
  ];
  return (
    <section className="section--tight ground-dark">
      <div className="container reveal" ref={ref}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
          background: 'var(--border-1)', borderRadius: 'var(--r-lg)', overflow: 'hidden',
          border: '1px solid var(--border-1)',
        }} className="grid-2 hairline">
          {items.map((m, i) => (
            <div key={i} style={{ background: 'var(--surface-1)', padding: '32px 28px' }} className="surface-card">
              <div className="gradient-text" style={{
                fontSize: 44, fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1, marginBottom: 10,
              }}>{m.v}</div>
              <div style={{ fontSize: 13.5, color: 'var(--fg-2)', lineHeight: 1.5 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Pricing tiers ----------
const Pricing = ({ onSelect }) => {
  const ref = useReveal();
  const tiers = [
    {
      tier: 'Tier 1', name: 'The Campaign Audit',
      price: '$4,500', duration: '2 weeks',
      desc: 'A diagnostic on the campaign you\'re already running.',
      bullets: [
        'Campaign Conversion Map',
        'Asset gap analysis against your plan',
        'Three to five story angles, with source material',
        '90-minute strategy session',
        'Credit applies to Tier 2 or 3 within 60 days',
      ],
    },
    {
      tier: 'Tier 2', name: 'The Conversion Campaign', featured: true,
      price: '$18K–$24K', duration: '4–6 weeks',
      desc: 'A full documentary-grade campaign mapped to one outcome metric.',
      bullets: [
        'Two-day on-site documentary capture',
        'One hero film (90s–3min) + 3–5 short cuts',
        'Photo library (10–15 hero, 40+ supporting)',
        'Landing page + email sequence copy',
        'Paid social asset versions, all aspect ratios',
      ],
    },
    {
      tier: 'Tier 3', name: 'The Annual Engine',
      price: '$32K–$40K /qtr', duration: 'Annual',
      desc: 'A compounding asset library and voice profile across the year.',
      bullets: [
        'One Conversion Campaign per quarter',
        'Monthly always-on cadence between launches',
        'Growing asset library, compounding over time',
        'Voice Profile Skill quarterly refresh',
        'Quarterly content audit + monthly working session',
      ],
    },
  ];

  return (
    <section id="pricing" className="section ground-mid" data-screen-label="S13 Price">
      <div className="container reveal" ref={ref}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Eyebrow>The full price list</Eyebrow>
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 52px)', margin: '14px 0 16px', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
            Three tiers. <span className="gradient-text">Start at the bottom.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.55 }}>
            Audit first. If it concludes you need more, scale up. We refund the Audit if it concludes we cannot move your number.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="grid-3">
          {tiers.map(t => <TierCard key={t.name} {...t} onSelect={onSelect}/>)}
        </div>
      </div>
    </section>
  );
};

const TierCard = ({ tier, name, price, duration, desc, bullets, featured, onSelect }) => {
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
          {featured ? 'Book a discovery call →' : 'Start with this tier →'}
        </Btn>
      </div>
    </div>
  );
};

// ---------- Who we work with / who we don't ----------
const WhoWorkWith = () => {
  const ref = useReveal();
  const yes = [
    'Fundraising or capital campaigns with a public phase',
    'Recruiting pushes against a real headcount target',
    'Customer or patient acquisition with a tracked metric',
    'Major launches or milestone moments on a deadline',
    'Service-line awareness campaigns with budget already approved',
  ];
  const no = [
    'Content as an experiment without a goal',
    'Generic brand video without an outcome metric',
    'One-off projects with no strategy or distribution',
    'Media buying — your team or agency runs spend',
    'Standalone always-on content calendars',
  ];
  return (
    <section className="section ground-dark">
      <div className="container reveal" ref={ref}>
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <Eyebrow>Scope</Eyebrow>
          <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 46px)', margin: '14px 0 12px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Saying no is part of the brief.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.55, maxWidth: 580 }}>
            We're sharper when the work has somewhere to go. Here's where we come in — and where we don't.
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
      a: 'Most engagements kick off within two weeks of brief. Capture days are typically scheduled 3–4 weeks out depending on travel and access to interview subjects.',
    },
    {
      q: 'Do you run our paid spend or buy media?',
      a: 'No. We design ad-ready creative and direction in every aspect ratio. Your team or media partner runs the spend. We\'ll work alongside them on the asset spec.',
    },
    {
      q: 'What happens if the audit shows you can\'t move our number?',
      a: 'We tell you, in writing, with the reasoning. You keep the Conversion Map. The audit fee still applies — we don\'t run pro-bono diagnostics — but you walk with a document you can use elsewhere.',
    },
    {
      q: 'Who owns the footage and the cuts?',
      a: 'You do, on delivery. We retain the right to show finished work in our case studies unless you ask us not to in the brief.',
    },
    {
      q: 'What does the AI voice profile actually do?',
      a: 'It\'s a trained skill mapped to your existing tone guide — your team uses it to draft on-brief copy faster. It\'s scoped to a specific use case (campaign emails, donor stewardship, internal comms), not a generic ghostwriter.',
    },
    {
      q: 'We already have a brand video. Can you just edit it down?',
      a: 'Sometimes. The Audit will tell you. We say no when the source footage was shot to a different brief than the one you need to convert against.',
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
            </div>
            <div>
              <Eyebrow color="var(--pf-rose)" style={{ marginBottom: 14 }}>A note from the founder</Eyebrow>
              <p style={{
                fontSize: 22, fontWeight: 500, lineHeight: 1.45, letterSpacing: '-0.01em',
                margin: '0 0 22px', maxWidth: 660,
              }}>
                "Performance teams can't make work this good. Documentary shops can't make work this measurable. We do both — and every engagement is scoped to a number you care about."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: 'var(--fg-2)' }}>
                <span style={{ fontWeight: 600, color: 'var(--fg-1)' }}>Rae Holland</span>
                <span style={{ width: 4, height: 4, borderRadius: 2, background: 'var(--border-2)' }}/>
                <span>Founder, Pillar &amp; Frame</span>
                <span style={{ width: 4, height: 4, borderRadius: 2, background: 'var(--border-2)' }}/>
                <span>15 yrs documentary · ex-direct response</span>
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
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48,
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="assets/logo-mark.svg" width="28" height="28" alt=""/>
          <span style={{ fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', fontSize: 16 }}>Pillar &amp; Frame</span>
        </div>
        <p style={{ marginTop: 20, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, maxWidth: 360 }}>
          Story-based trust and conversion content for organizations already distributing with clear goals.
        </p>
      </div>
      {[
        { h: 'Services', l: ['Campaign Audit', 'Conversion Campaign', 'Annual Engine', 'AI voice profiles'] },
        { h: 'Work', l: ['Healthcare', 'Higher ed', 'Nonprofit', 'B2B'] },
        { h: 'Company', l: ['Approach', 'Journal', 'Contact', 'Discovery call'] },
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
      display: 'flex', justifyContent: 'space-between',
      fontSize: 12, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)',
    }}>
      <span>© 2026 Pillar &amp; Frame</span>
      <span>Brooklyn · Nashville</span>
    </div>
  </footer>
);

Object.assign(window, {
  LogoStrip, Services, Process, CaseStudyHighlight, Metrics, Pricing,
  WhoWorkWith, FAQ, FounderNote, Footer,
});

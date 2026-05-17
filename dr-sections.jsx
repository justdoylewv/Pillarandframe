/* global React, Eyebrow, Btn, FrameInner, useReveal */
const { useState: useStateDR } = React;

// ---------- Small helper: section header with numbered chip ----------
const SectionHead = ({ n, label, title, sub, align = 'left', titleColor }) => (
  <div style={{
    maxWidth: 760, marginBottom: 48,
    textAlign: align, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0,
  }}>
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16,
    }}>
      <Eyebrow>{label}</Eyebrow>
    </div>
    <h2 style={{
      fontSize: 'clamp(32px, 3.8vw, 52px)', margin: '0 0 14px',
      lineHeight: 1.05, letterSpacing: '-0.025em',
      color: titleColor,
    }} dangerouslySetInnerHTML={{ __html: title }}/>
    {sub && <p style={{ fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0, maxWidth: 640 }}>{sub}</p>}
  </div>
);

// ---------- Section 5 — Problem ----------
const ProblemSection = () => {
  const ref = useReveal();
  const frustrations = [
    {
      h: 'You bought the sizzle, not the substance.',
      d: 'A polished brand reel that looks great in a board meeting and dies in the inbox. No one quoted a number when it was scoped.',
    },
    {
      h: "You're stuck shooting \"content\" with no spine.",
      d: 'A calendar full of posts, none of which map to the dollars, applications, or appointments you have to deliver this quarter.',
    },
    {
      h: "You can't cut the footage you do have.",
      d: '40 hours of B-roll from the last shoot. No throughline. No documentary instinct in the edit. It sits on a hard drive.',
    },
    {
      h: "Your story is honest. Your creative isn't.",
      d: 'The work happening on the ground is genuinely moving. The asset you are running on Meta looks like an explainer animation.',
    },
  ];
  return (
    <section className="section ground-dark" data-screen-label="S5 Problem">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="05" label="The problem"
          title={'If you have been here before, <span class="gradient-text">you already know.</span>'}
          sub="Four conversations we have in the first ten minutes of every discovery call. If any of these sound like you, we should talk."/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="grid-2">
          {frustrations.map((f, i) => (
            <div key={i} className="surface-card" style={{
              background: 'var(--surface-1)', border: '1px solid var(--border-1)',
              borderRadius: 'var(--r-lg)', padding: 28,
              position: 'relative', boxShadow: 'var(--inset-glow)',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em',
                color: 'var(--pf-rose-400)', marginBottom: 12,
              }}>{'NO. 0' + (i + 1)}</div>
              <h3 style={{ fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 10px', lineHeight: 1.3 }}>{f.h}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Section 8 — Benefits ----------
const BenefitsSection = () => {
  const ref = useReveal();
  const rows = [
    {
      feature: 'Two-day documentary capture',
      benefit: 'You walk away with the whole library — hero film, short cuts, stills, B-roll — from one production cycle, not six.',
      icon: 'camera',
    },
    {
      feature: 'Brief mapped to a real funnel stage',
      benefit: 'Every cut, every still, every line of copy points at a specific channel and a measurable behavior. No "general awareness" deliverables.',
      icon: 'target',
    },
    {
      feature: 'AI voice profile, trained on your tone',
      benefit: 'Your team drafts on-brief in minutes after we leave. The asset library compounds. The voice scales with the org.',
      icon: 'wave',
    },
    {
      feature: 'Conversion Map, written before we shoot',
      benefit: 'You see exactly which moments will be cut into which assets for which channel before a single frame is captured. No surprises in post.',
      icon: 'map',
    },
  ];
  return (
    <section className="section ground-mid" data-screen-label="S8 Benefits">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="08" label="What changes"
          title={'Features are the spec. <span class="gradient-text">Benefits are why you sign.</span>'}
          sub="Here is the trade. What is on the invoice on the left. What lands in your campaign on the right."/>
        <div style={{
          background: 'var(--surface-1)', border: '1px solid var(--border-1)',
          borderRadius: 'var(--r-lg)', overflow: 'hidden',
        }} className="surface-card">
          {rows.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: 32,
              padding: '28px 32px',
              borderTop: i === 0 ? 'none' : '1px solid var(--border-1)',
              alignItems: 'center',
            }} className="benefit-row hairline">
              <BenefitIcon kind={r.icon}/>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--fg-2)', marginBottom: 4 }}>YOU GET</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--fg-pure, #fff)', lineHeight: 1.3 }}>{r.feature}</div>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--pf-aqua-400)', flexShrink: 0, marginTop: 4 }}>→</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--pf-aqua-400)', marginBottom: 4 }}>WHICH MEANS</div>
                  <div style={{ fontSize: 15.5, color: 'var(--fg-1)', lineHeight: 1.55 }}>{r.benefit}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .benefit-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
};

const BenefitIcon = ({ kind }) => {
  const paths = {
    camera: <React.Fragment><rect x="3" y="7" width="14" height="11" rx="2"/><circle cx="10" cy="12.5" r="3"/><path d="M17 10l4-2v9l-4-2"/></React.Fragment>,
    target: <React.Fragment><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></React.Fragment>,
    wave:   <React.Fragment><path d="M3 12 Q 6 6 9 12 T 15 12 T 21 12"/><path d="M3 16 Q 6 13 9 16 T 15 16 T 21 16" opacity="0.5"/></React.Fragment>,
    map:    <React.Fragment><path d="M9 4 L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><line x1="9" y1="4" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="20"/></React.Fragment>,
  };
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 'var(--r-md)',
      background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.24)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--pf-aqua-400)',
    }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[kind]}</svg>
    </div>
  );
};

// ---------- Section 9 — Social proof ----------
const TestimonialsSection = () => {
  const ref = useReveal();
  const quotes = [
    {
      q: "We had already shot a sizzle. Pillar & Frame's audit told us why it wasn't converting in two pages. The Conversion Campaign re-cut closed our public phase six weeks early.",
      n: 'Sarah Lin', r: 'VP Advancement, Mercy Health Foundation',
    },
    {
      q: "First creative partner who understood we don't need more brand video. We need fewer, sharper assets pointed at our funnel. They wrote the brief better than we did.",
      n: 'Marcus Webb', r: 'Director of Marketing, Vanderbilt Engineering',
    },
    {
      q: "Documentary craft, performance discipline. I haven't seen a shop combine the two without one dragging the other down. They did.",
      n: 'Priya Desai', r: 'CMO, Atrium Health Network',
    },
  ];
  return (
    <section className="section ground-dark" data-screen-label="S9 Social proof">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="09" label="Social proof"
          title={'What the teams who hired us <span class="gradient-text">said after the campaign.</span>'}
          sub="Three quotes. Real numbers behind each one. Full case studies on request."/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="grid-3">
          {quotes.map((t, i) => (
            <figure key={i} style={{
              margin: 0, padding: 28,
              background: 'var(--surface-1)', border: '1px solid var(--border-1)',
              borderRadius: 'var(--r-lg)', display: 'flex', flexDirection: 'column', gap: 20,
            }} className="surface-card">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--pf-aqua-400)" style={{ opacity: 0.5 }}>
                <path d="M9.5 4C5.4 5.5 3 9 3 13v6h7v-7H6.5c0-2.7 1.4-4.8 4-5.7L9.5 4zm10 0c-4.1 1.5-6.5 5-6.5 9v6h7v-7h-3.5c0-2.7 1.4-4.8 4-5.7L19.5 4z"/>
              </svg>
              <blockquote style={{ margin: 0, fontSize: 16.5, color: 'var(--fg-1)', lineHeight: 1.5, fontWeight: 500 }}>{t.q}</blockquote>
              <figcaption style={{ marginTop: 'auto', borderTop: '1px solid var(--border-1)', paddingTop: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg-pure, #fff)' }}>{t.n}</div>
                <div style={{ fontSize: 12.5, color: 'var(--fg-2)', marginTop: 2 }}>{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div style={{
          marginTop: 32, padding: '20px 28px',
          background: 'var(--grad-brand-soft)',
          border: '1px solid var(--border-1)', borderRadius: 'var(--r-lg)',
          display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24,
        }}>
          {[
            { v: '28', l: 'campaigns shipped' },
            { v: '$14.2M', l: 'raised, tracked' },
            { v: '94%', l: 'engagements scoped to a metric we hit' },
            { v: '4.8/5', l: 'NPS, 3 yrs running' },
          ].map(m => (
            <div key={m.l} style={{ textAlign: 'center' }}>
              <div className="gradient-text" style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>{m.v}</div>
              <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 6 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Section 10 — The Offer ----------
const OfferSection = ({ onCTA }) => {
  const ref = useReveal();
  return (
    <section id="offer" className="section ground-mid" data-screen-label="S10 The Offer">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="10" label="The offer"
          title={'The Campaign Audit. <span class="gradient-text">$4,500. Two weeks.</span>'}
          sub="Most creative shops will not tell you whether their work will move your number before you hire them. We will — in a written document — and we will do it for less than the cost of one production day."/>
        <div className="aura aura-soft" style={{
          position: 'relative', borderRadius: 'var(--r-xl)',
        }}>
          <div style={{
            position: 'relative',
            background: 'var(--surface-1)', border: '1px solid var(--border-2)',
            borderRadius: 'var(--r-xl)', padding: 'clamp(36px, 5vw, 56px)',
            boxShadow: 'var(--inset-strong), var(--shadow-3)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'start' }} className="grid-2">
              <div>
                <div style={{
                  display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '0.1em', padding: '5px 10px', borderRadius: 'var(--r-sm)',
                  background: 'var(--grad-warm)', color: '#fff', marginBottom: 18,
                  boxShadow: 'var(--glow-rose)',
                }}>FLAGSHIP OFFER</div>
                <h3 style={{ fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 18px' }}>
                  A documentary-grade campaign diagnostic, written by the people who will execute it.
                </h3>
                <p style={{ fontSize: 16.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 24px' }}>
                  Two weeks. One 90-minute working session. Three to five story angles we can already see in your source material. A written Conversion Map you keep — whether you build the campaign with us, with your in-house team, or with someone else entirely.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Campaign Conversion Map (PDF, 8–12 pages)',
                    'Asset gap analysis against your active plan',
                    'Three to five story angles, with sourced material',
                    '90-minute strategy session with the lead producer',
                    'Audit fee credits 100% toward Tier 2 or 3 if you move forward in 60 days',
                  ].map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pf-aqua-400)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                background: 'var(--surface-2)', borderRadius: 'var(--r-lg)',
                padding: 28, border: '1px solid var(--border-1)',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--fg-2)', marginBottom: 12 }}>THE PRICE</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 18 }}>
                  <span className="gradient-text" style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>$4,500</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5, marginBottom: 24 }}>
                  Flat fee. Half on signing, half on delivery. No retainer. No upsell call. No separately-billed discovery process.
                </div>
                <Btn variant="emphasis" size="lg" onClick={onCTA} style={{ width: '100%', justifyContent: 'center' }}>
                  Claim the Audit →
                </Btn>
                <div style={{ marginTop: 14, fontSize: 12, color: 'var(--fg-3)', textAlign: 'center' }}>
                  6 audit slots / quarter. Q3 has 2 remaining.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Section 11 — Bonuses ----------
const BonusesSection = () => {
  const ref = useReveal();
  const bonuses = [
    {
      tag: 'BONUS #1', value: '$1,800',
      t: 'The Story Angle Library',
      d: 'After the Audit, we leave you with a written index of every interview moment, location, and visual motif we identified in your source material — not just the three to five we recommend. You keep the rest. Use them whenever.',
    },
    {
      tag: 'BONUS #2', value: '$2,400',
      t: 'Conversion Map Template',
      d: 'Our internal working document, blanked and annotated for your team. Use it to brief any future creative vendor — agency, freelancer, in-house. Forces them to scope to a number before you sign.',
    },
    {
      tag: 'BONUS #3', value: '$3,000',
      t: 'AI Voice Profile (Lite)',
      d: 'A scoped voice profile — one use case, trained on a sample of your existing copy — delivered as a working Skill. Your team drafts in your voice the moment we leave. Tier 2 and 3 ship the full version.',
    },
    {
      tag: 'BONUS #4', value: 'Priceless',
      t: 'Direct line to the founder',
      d: 'Your audit lead is also the founder. No account-management layer. Questions get answered in hours, not days, for the life of the engagement.',
    },
  ];
  return (
    <section className="section ground-dark" data-screen-label="S11 Bonuses">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="11" label="What we throw in"
          title={'Four bonuses. <span class="gradient-text">Included with the Audit.</span>'}
          sub="Real deliverables, not coupon-code filler. Each one is something other shops bill separately. We don't."/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="grid-2">
          {bonuses.map((b, i) => (
            <div key={i} style={{
              background: 'var(--surface-1)', border: '1px solid var(--border-1)',
              borderRadius: 'var(--r-lg)', padding: 28,
              position: 'relative',
            }} className="surface-card">
              <div style={{
                position: 'absolute', top: 18, right: 18,
                fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 10px',
                background: 'rgba(34,211,238,0.10)', border: '1px solid rgba(34,211,238,0.32)',
                color: 'var(--pf-aqua-400)', borderRadius: 'var(--r-sm)',
                letterSpacing: '0.08em',
              }}>{'VALUE ' + b.value}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
                color: 'var(--pf-rose-400)', marginBottom: 16,
              }}>{b.tag}</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 10px', lineHeight: 1.25, maxWidth: 320 }}>{b.t}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Section 12 — Value Stack ----------
const ValueStackSection = ({ onCTA }) => {
  const ref = useReveal();
  const lines = [
    { t: 'Campaign Conversion Map (8–12 pp)',                v: 2200 },
    { t: '90-min strategy session w/ lead producer',          v:  900 },
    { t: 'Asset gap analysis vs. active plan',                v: 1200 },
    { t: '3–5 sourced story angles',                          v: 1500 },
    { t: 'BONUS · Story Angle Library (full index)',          v: 1800 },
    { t: 'BONUS · Conversion Map Template',                   v: 2400 },
    { t: 'BONUS · AI Voice Profile (Lite)',                   v: 3000 },
    { t: 'BONUS · Direct line to founder',                    v: null, badge: 'PRICELESS' },
  ];
  const total = lines.reduce((s, l) => s + (l.v || 0), 0);
  return (
    <section className="section ground-mid" data-screen-label="S12 Value Stack">
      <div className="container--narrow reveal" ref={ref} style={{ maxWidth: 880 }}>
        <SectionHead
          n="12" label="The math"
          title={'Stack it up. <span class="gradient-text">Then look at the price.</span>'}
          align="center"
          sub="What every piece would cost from a separate vendor at market rate. Pulled from three competing scopes we have seen this year."/>
        <div style={{
          background: 'var(--surface-1)', border: '1px solid var(--border-1)',
          borderRadius: 'var(--r-lg)', overflow: 'hidden',
          boxShadow: 'var(--inset-glow)',
        }} className="surface-card">
          {lines.map((l, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '18px 28px',
              borderTop: i === 0 ? 'none' : '1px solid var(--border-1)',
            }} className="hairline">
              <span style={{ fontSize: 15, color: 'var(--fg-1)' }}>{l.t}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--fg-1)', fontWeight: 600 }}>
                {l.badge ? l.badge : '$' + l.v.toLocaleString()}
              </span>
            </div>
          ))}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '22px 28px', background: 'var(--surface-2)',
            borderTop: '1px solid var(--border-2)',
          }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--fg-pure, #fff)', letterSpacing: '0.02em' }}>TOTAL VALUE</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 800, color: 'var(--fg-pure, #fff)' }}>{'$' + total.toLocaleString() + '+'}</span>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '22px 28px', background: 'var(--grad-brand-soft)',
            borderTop: '1px solid var(--border-2)',
          }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--fg-pure, #fff)', letterSpacing: '0.02em' }}>YOU PAY</span>
            <span className="gradient-text" style={{ fontFamily: 'var(--font-sans)', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em' }}>$4,500</span>
          </div>
        </div>
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Btn variant="emphasis" size="lg" onClick={onCTA}>Claim the $4,500 Audit →</Btn>
          <div style={{ marginTop: 12, fontSize: 12.5, color: 'var(--fg-3)' }}>
            {'$' + (total - 4500).toLocaleString() + ' in stacked value off market rate. Fee credits to Tier 2 or 3 in 60 days.'}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Section 14 — Scarcity ----------
const ScarcitySection = ({ onCTA }) => {
  const ref = useReveal();
  const target = new Date('2026-09-30T23:59:59');
  const [now, setNow] = useStateDR(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  const pairs = [['DAYS', days], ['HRS', hours], ['MIN', mins], ['SEC', secs]];

  return (
    <section className="section--tight ground-dark" data-screen-label="S14 Scarcity">
      <div className="container reveal" ref={ref}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          background: 'var(--surface-1)', border: '1px solid var(--pf-rose)',
          borderRadius: 'var(--r-lg)', padding: 'clamp(28px, 4vw, 44px)',
          boxShadow: 'var(--glow-rose)',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(80% 100% at 100% 50%, rgba(244,114,182,0.12), transparent 60%)',
          }}/>
          <div style={{
            position: 'relative',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
          }} className="grid-2">
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px', marginBottom: 14,
                background: 'rgba(244,114,182,0.12)', borderRadius: 'var(--r-full)',
                border: '1px solid rgba(244,114,182,0.32)',
                fontSize: 11.5, fontWeight: 600, letterSpacing: '0.1em',
                color: 'var(--pf-rose-400)',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--pf-rose)', boxShadow: 'var(--glow-rose)', animation: 'pf-pulse 2s var(--ease-in-out) infinite' }}/>
                LIMITED CAPACITY
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.015em', margin: '0 0 10px' }}>
                Two audit slots left this quarter.
              </h2>
              <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0, maxWidth: 480 }}>
                We take six Audits per quarter. Beyond that the lead producer is in capture and the work suffers. When the slots close, we open the waitlist for Q4.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)',
                marginBottom: 10, letterSpacing: '0.08em',
              }}>Q3 SLOTS CLOSE IN</div>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                {pairs.map(([l, v]) => (
                  <div key={l} style={{
                    minWidth: 64, padding: '10px 8px',
                    background: 'var(--surface-2)', border: '1px solid var(--border-2)',
                    borderRadius: 'var(--r-md)', textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 700, color: 'var(--fg-pure, #fff)', lineHeight: 1 }}>
                      {String(v).padStart(2, '0')}
                    </div>
                    <div style={{ fontSize: 9.5, color: 'var(--fg-2)', marginTop: 5, letterSpacing: '0.08em' }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16 }}>
                <Btn variant="emphasis" onClick={onCTA}>Claim a slot →</Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes pf-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </section>
  );
};

// ---------- Section 15 — Guarantee ----------
const GuaranteeSection = () => {
  const ref = useReveal();
  return (
    <section className="section ground-mid" data-screen-label="S15 Guarantee">
      <div className="container--narrow reveal" ref={ref} style={{ maxWidth: 980 }}>
        <div style={{
          background: 'var(--surface-1)', border: '1px solid var(--border-2)',
          borderRadius: 'var(--r-xl)', padding: 'clamp(36px, 5vw, 56px)',
          display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40, alignItems: 'center',
        }} className="grid-2">
          <div className="aura aura-soft" style={{
            width: 160, height: 160, borderRadius: '50%',
            background: 'var(--grad-brand)', position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto',
          }}>
            <div style={{
              position: 'absolute', inset: 8, borderRadius: '50%',
              background: 'var(--surface-1)', border: '1px solid var(--border-2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-2)', letterSpacing: '0.1em' }}>OUR</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--fg-pure, #fff)', letterSpacing: '-0.01em', marginTop: 2 }}>UNFIT</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--fg-pure, #fff)', letterSpacing: '-0.01em' }}>GUARANTEE</div>
            </div>
          </div>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12,
            }}>
              <Eyebrow>The guarantee</Eyebrow>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: 1.15 }}>
              If we are not a fit, you do not pay. <span className="gradient-text">In writing.</span>
            </h2>
            <p style={{ fontSize: 16.5, color: 'var(--fg-1)', lineHeight: 1.65, margin: '0 0 18px' }}>
              If the Audit concludes we cannot move your number, we tell you so — in the same written document — and we refund the fee. Full stop. You keep every page of the Conversion Map. You keep every bonus already delivered.
            </p>
            <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
              It happens. Maybe twice a year. We would rather lose the fee than ship work that wastes your campaign window. The clause is in the contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Section 17 — P.S. ----------
const PSSection = ({ onCTA }) => {
  const ref = useReveal();
  return (
    <section className="section--tight ground-dark" data-screen-label="S17 P.S." style={{ paddingTop: 0, paddingBottom: 64 }}>
      <div className="container--narrow reveal" ref={ref} style={{ maxWidth: 820 }}>
        <div style={{
          background: 'var(--surface-1)', border: '1px solid var(--border-1)',
          borderRadius: 'var(--r-lg)',
          padding: 'clamp(28px, 4vw, 40px) clamp(28px, 4vw, 44px)',
          borderLeft: '3px solid var(--pf-rose)',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
            color: 'var(--pf-rose-400)', marginBottom: 14,
          }}>P.S.</div>
          <p style={{ fontSize: 17.5, color: 'var(--fg-1)', lineHeight: 1.65, margin: '0 0 16px' }}>
            If you scrolled to the bottom: the entire pitch is, <em>spend $4,500 and two weeks before you decide whether to spend more.</em> You get a written Conversion Map either way. If we cannot move your number, we refund the fee and you keep the document. Six audit slots a quarter. Two left in Q3.
          </p>
          <p style={{ fontSize: 17.5, color: 'var(--fg-1)', lineHeight: 1.65, margin: '0 0 22px' }}>
            If the campaign you are running matters, the worst outcome of this call is that you walk away with a sharper plan than you came in with. The best is that we ship the work that closes it.
          </p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <Btn variant="emphasis" size="lg" onClick={onCTA}>Book the discovery call →</Btn>
            <span style={{ fontSize: 13, color: 'var(--fg-2)' }}>— Rae, founder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Inline CTA band (sprinkled) ----------
const InlineCTA = ({ headline, sub, label = 'Book a discovery call →', onCTA }) => (
  <section className="section--tight ground-dark" style={{ paddingTop: 28, paddingBottom: 28 }}>
    <div className="container">
      <div style={{
        background: 'var(--surface-1)', border: '1px solid var(--border-1)',
        borderRadius: 'var(--r-lg)', padding: '22px 28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: 24, flexWrap: 'wrap',
      }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--fg-pure, #fff)', marginBottom: 4 }}>{headline}</div>
          {sub && <div style={{ fontSize: 13.5, color: 'var(--fg-2)' }}>{sub}</div>}
        </div>
        <Btn variant="emphasis" onClick={onCTA}>{label}</Btn>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  SectionHead,
  ProblemSection, BenefitsSection, TestimonialsSection,
  OfferSection, BonusesSection, ValueStackSection,
  ScarcitySection, GuaranteeSection, PSSection,
  InlineCTA,
});

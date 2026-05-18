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
      h: 'You hired a video crew once. The footage sits on a homepage no one watches.',
      d: 'The shoot was great. The cut looked great in the room. Then it landed on a page that gets 400 visits a month and the metric you scoped it against was never actually defined.',
    },
    {
      h: 'You hired an agency for monthly posts. They left when the retainer ran out.',
      d: 'You\'re back to square one with no library, no voice profile, and a folder of files that age out the day the relationship ends. The agency owned the IP. You rented the work.',
    },
    {
      h: 'You tried doing it yourself. You burned out.',
      d: 'You know your story matters. You don\'t have the time, the skill, or the strategy to package it. The competitor with worse work and more videos is winning the referrals.',
    },
    {
      h: 'AI is about to flood every feed with synthetic content. Your real story isn\'t cutting through.',
      d: 'Faces that aren\'t real. Voices that were never spoken. Testimonials from people who don\'t exist. The buyers, donors, and audiences you\'re trying to reach are about to lose the ability to tell what\'s real. You need a way to prove yours is.',
    },
  ];
  return (
    <section className="section ground-dark" data-screen-label="The Problem">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="05" label="The problem"
          title={'If you’ve been here before, <span class="gradient-text">you already know.</span>'}
          sub="Four conversations we have in the first ten minutes of every Trust Audit. If any of these sound like you, we should talk."/>
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
      feature: 'Two days of on-site documentary capture',
      benefit: 'You walk away with a year of authentic content — hero film, social cuts, stills, b-roll, written copy — from one production cycle, not six.',
      icon: 'camera',
    },
    {
      feature: 'The Voice Profile as a deployable AI skill installed in your team\'s own ChatGPT or Claude',
      benefit: 'Your marketing intern produces a voice-consistent donor letter, sales email, or social post in 90 seconds, not a week. Faster every month. Compounds.',
      icon: 'wave',
    },
    {
      feature: 'The Quote Library as a searchable database tagged by theme, speaker, date, and use case',
      benefit: 'Your team finds the right verbatim quote for the right asset in ten seconds. Every quote attributed. Every use auditable.',
      icon: 'map',
    },
    {
      feature: 'The Real Human Origin mark on every asset',
      benefit: 'Your audience can recognize what\'s real in a feed that\'s about to be flooded with synthetic content. The mark travels with the work.',
      icon: 'target',
    },
    {
      feature: 'Capture Day as a Branded Experience — hospitality, music, debriefs, handwritten thank-you notes, footage gifts to subjects',
      benefit: 'Your team describes capture day as the most meaningful day they\'ve had all year. Subjects become advocates. Word of mouth follows.',
      icon: 'camera',
    },
    {
      feature: 'Three productized tiers with fixed, transparent pricing — no retainer minimum',
      benefit: 'You know what it costs before the call. No bespoke scoping games. No retainer handcuffs. The work holds the relationship, not the contract.',
      icon: 'map',
    },
  ];
  return (
    <section className="section ground-mid" data-screen-label="What Changes">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="08" label="What changes"
          title={'Features are the spec. <span class="gradient-text">Benefits are why you sign.</span>'}
          sub="What’s on the invoice on the left. What lands in your work on the right."/>
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
// [FILL: all three client quotes still pending per Audit-Report.md.
//  Capital Campaigns — Memorial Health Marysville (Adam Hodnichak, Pastor Joe, Dr. Joel Ascher, Leigh Anne Germani).
//  Growth-Stage Product — Powerfield Energy.
//  Local Trust Business — one of the three Local Trust Trio members.]
const TestimonialsSection = () => {
  const ref = useReveal();
  const quotes = [
    {
      vertical: 'Capital Campaigns',
      q: '[FILL: pull a real quote from Adam Hodnichak, Pastor Joe, Dr. Joel Ascher, Leigh Anne Germani, or another Memorial stakeholder. Use one that speaks to working with us, not just to the campaign.]',
      n: '[FILL: name and title]', r: 'Memorial Health Marysville',
    },
    {
      vertical: 'Growth-Stage Product',
      q: '[FILL: client quote from Powerfield Energy. Use one that speaks to making the engineering differentiator obvious.]',
      n: '[FILL: name and title]', r: 'Powerfield Energy',
    },
    {
      vertical: 'Local Trust Business',
      q: '[FILL: client quote from one of the three Local Trust Trio members — IT services, mortgage, or real estate. Use one that speaks to filling the content calendar from one day of filming.]',
      n: '[FILL: name and title]', r: '[FILL: business name]',
    },
  ];
  return (
    <section className="section ground-dark" data-screen-label="Social Proof">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="09" label="Social proof"
          title={'What the people we’ve worked with <span class="gradient-text">said.</span>'}
          sub="Three quotes — one per vertical archetype."/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="grid-3">
          {quotes.map((t, i) => (
            <figure key={i} style={{
              margin: 0, padding: 28,
              background: 'var(--surface-1)', border: '1px solid var(--border-1)',
              borderRadius: 'var(--r-lg)', display: 'flex', flexDirection: 'column', gap: 18,
            }} className="surface-card">
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em',
                color: 'var(--pf-aqua-400)',
              }}>{t.vertical.toUpperCase()}</div>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--pf-aqua-400)" style={{ opacity: 0.5 }}>
                <path d="M9.5 4C5.4 5.5 3 9 3 13v6h7v-7H6.5c0-2.7 1.4-4.8 4-5.7L9.5 4zm10 0c-4.1 1.5-6.5 5-6.5 9v6h7v-7h-3.5c0-2.7 1.4-4.8 4-5.7L19.5 4z"/>
              </svg>
              <blockquote style={{ margin: 0, fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.55, fontStyle: 'italic' }}>{t.q}</blockquote>
              <figcaption style={{ marginTop: 'auto', borderTop: '1px solid var(--border-1)', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Portrait placeholder — swap with real headshot when client quote is filled */}
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                  background: `linear-gradient(135deg, ${['#1F1B33','#221C1A','#1F2333'][i]} 0%, ${['#14213A','#3A1E14','#142B3A'][i]} 100%)`,
                  border: '1px solid var(--border-2)', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', left: '20%', top: '60%', width: 24, height: 24,
                    borderRadius: '50%', background: `radial-gradient(circle, ${['rgba(34,211,238,0.6)','rgba(244,114,182,0.6)','rgba(139,92,246,0.6)'][i]}, transparent 65%)`,
                    filter: 'blur(3px)',
                  }}/>
                  <svg viewBox="0 0 44 44" style={{ position: 'absolute', inset: 0 }}>
                    <circle cx="22" cy="18" r="8" fill="rgba(255,255,255,0.10)"/>
                    <path d="M 7 44 C 7 32 13 27 22 27 C 31 27 37 32 37 44 Z" fill="rgba(255,255,255,0.10)"/>
                  </svg>
                  <div style={{
                    position: 'absolute', right: -2, top: -2,
                    fontFamily: 'var(--font-mono)', fontSize: 7,
                    padding: '1px 4px', borderRadius: 'var(--r-sm)',
                    background: 'rgba(244,114,182,0.32)', color: '#fff',
                    letterSpacing: '0.1em',
                  }}>FILL</div>
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--fg-pure, #fff)' }}>{t.n}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--fg-2)', marginTop: 2 }}>{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div style={{
          marginTop: 32, padding: '20px 28px',
          background: 'var(--grad-brand-soft)',
          border: '1px solid var(--border-1)', borderRadius: 'var(--r-lg)',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
        }} className="grid-2">
          {[
            { v: '3 verticals',         l: 'Capital campaigns, growth-stage product, local trust businesses' },
            { v: '6–8 wks',             l: 'Foundation to library handoff, every Trust Engine' },
            { v: 'Real Human Origin',   l: 'mark on every deliverable' },
            { v: 'No minimum',          l: 'retainer commitment' },
          ].map(m => (
            <div key={m.l} style={{ textAlign: 'left' }}>
              <div className="gradient-text" style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1 }}>{m.v}</div>
              <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 6, lineHeight: 1.45 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Section 10 — The Offer (Free Trust Audit) ----------
const OfferSection = ({ onCTA }) => {
  const ref = useReveal();
  return (
    <section id="offer" className="section ground-mid" data-screen-label="The Offer">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="10" label="The offer"
          title={'The free Trust Audit. <span class="gradient-text">30 minutes. No pitch.</span>'}
          sub="We made it free for one reason: the audit is the easiest way for both sides to figure out if we're a fit. Charging for it filtered out the wrong people. Free filters in the right ones — buyers who are serious about the work, who want a written diagnostic before they consider a five-figure engagement, and who appreciate that the founder delivers every single one personally."/>
        <div className="aura aura-soft" style={{
          position: 'relative', borderRadius: 'var(--r-xl)',
        }}>
          <div style={{
            position: 'relative',
            background: 'var(--surface-1)', border: '1px solid var(--border-2)',
            borderRadius: 'var(--r-xl)', padding: 'clamp(36px, 5vw, 56px)',
            boxShadow: 'var(--inset-strong), var(--shadow-3)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 48, alignItems: 'start' }} className="grid-2">
              <div>
                <div style={{
                  display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '0.1em', padding: '5px 10px', borderRadius: 'var(--r-sm)',
                  background: 'var(--grad-warm)', color: '#fff', marginBottom: 18,
                  boxShadow: 'var(--glow-rose)',
                }}>FREE · DELIVERED BY THE FOUNDER</div>
                <h3 style={{ fontSize: 'clamp(22px, 2.3vw, 28px)', fontWeight: 600, color: 'var(--fg-2)', letterSpacing: '-0.01em', lineHeight: 1.35, margin: '0 0 24px' }}>
                  What the Trust Audit is
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    '30 minutes with Doyle on video. The founder delivers every audit. No junior account person, no salesperson, no warm-up call.',
                    'A written audit report inside 48 hours. Yours to keep, whether you work with us or not.',
                    'No pitch on the call. The Trust Engine proposal lands with the report — as a separate appendix you can act on independently.',
                  ].map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.55 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pf-aqua-400)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <h3 style={{ fontSize: 'clamp(22px, 2.3vw, 28px)', fontWeight: 600, color: 'var(--fg-2)', letterSpacing: '-0.01em', lineHeight: 1.35, margin: '8px 0 16px' }}>
                  What you walk away with
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    <span><strong>Pillar themes</strong> mapped to your audience — what your buyers or donors need to hear before they say yes.</span>,
                    <span><strong>A content gap analysis</strong> across your owned channels — what’s missing, what’s redundant, what’s load-bearing but underused.</span>,
                    <span><strong>A draft of what your library could be</strong> — the hero film, the social cuts, the written assets, the Voice Profile.</span>,
                    <span><strong>A specific Trust Engine tier and scope recommendation</strong> — which tier fits, why, and what it would cost.</span>,
                    <span><strong>A direct line to the founder</strong> for any follow-up questions, for the life of the engagement.</span>,
                  ].map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.55 }}>
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
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--fg-2)', marginBottom: 12 }}>WHAT IT COSTS</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
                  <span className="gradient-text" style={{ fontSize: 60, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>Free</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55, marginBottom: 24 }}>
                  30 minutes. Not money. Not a sales pitch. Not a high-pressure call.
                </div>
                <Btn variant="emphasis" size="lg" onClick={onCTA} style={{ width: '100%', justifyContent: 'center' }}>
                  Book my Trust Audit →
                </Btn>
                <div style={{
                  marginTop: 14, fontSize: 12, color: 'var(--fg-3)', textAlign: 'center', lineHeight: 1.5,
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '0.1em', color: 'var(--pf-rose-400)', marginRight: 6 }}>[FILL]</span>
                  Capacity number — Doyle to lock the weekly/monthly number of Trust Audits he can deliver personally.
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={{
          marginTop: 24, fontSize: 13.5, color: 'var(--fg-3)', lineHeight: 1.55, fontStyle: 'italic', maxWidth: 720,
        }}>
          Note: a previous version of this offer pitched a $4,500 paid audit as the lead magnet. That offer is retired. The Trust Audit is now free.
        </p>
      </div>
    </section>
  );
};

// ---------- Section 11 — What's included with the Trust Audit ----------
// When the audit is free, "bonus" framing reads as gimmick. Calling them what they are: included.
const BonusesSection = () => {
  const ref = useReveal();
  const includes = [
    {
      tag: 'INCLUDED #1',
      t: 'The full Pillar Themes Report.',
      d: 'Not just the three to five themes we recommend. We leave you with the full index of every interview moment, content gap, and visual motif we identified across your owned channels. You keep the rest. Use them whenever, with whomever.',
    },
    {
      tag: 'INCLUDED #2',
      t: 'A Trust Engine tier and scope recommendation.',
      d: 'Not a generic "you need content." A specific recommendation: Local at $5K, Growth at $15–25K, or Enterprise at $40K+. With a written rationale for why that tier, scoped to your campaign or moment, and a draft of what the Foundation library would include.',
    },
    {
      tag: 'INCLUDED #3',
      t: 'The Anti-AI Authenticity Stance, applied to your work.',
      d: 'The audit report includes a section on how the Real Human Origin mark, the Voice Profile as a deployable AI tool, and our no-AI-fabrication commitment would show up in your specific library. This isn\'t a generic disclaimer. It\'s a working part of the diagnostic.',
    },
    {
      tag: 'INCLUDED #4',
      t: 'A direct line to the founder.',
      d: 'Your audit is delivered by Doyle. Any follow-up questions go straight to Doyle. No account-management layer. Hours, not days. For the life of the engagement and beyond.',
    },
  ];
  return (
    <section className="section ground-dark" data-screen-label="What's Included">
      <div className="container reveal" ref={ref}>
        <SectionHead
          n="11" label="What's included"
          title={'Four things. <span class="gradient-text">Included with the Trust Audit.</span>'}
          sub="Real deliverables, not coupon-code filler. Each one is something other shops bill separately. We don't."/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="grid-2">
          {includes.map((b, i) => (
            <div key={i} style={{
              background: 'var(--surface-1)', border: '1px solid var(--border-1)',
              borderRadius: 'var(--r-lg)', padding: 28,
              position: 'relative',
            }} className="surface-card">
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em',
                color: 'var(--pf-rose-400)', marginBottom: 16,
              }}>{b.tag}</div>
              <h3 style={{ fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 10px', lineHeight: 1.3 }}>{b.t}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Section 12 — The Stack (what this would cost from anyone else) ----------
const ValueStackSection = ({ onCTA }) => {
  const ref = useReveal();
  const lines = [
    { t: 'A written content audit from a strategic consultant',  v: '$2,500–$5,000' },
    { t: 'A pillar themes mapping from a brand agency',           v: '$1,500–$3,500' },
    { t: 'A content gap analysis across channels',                v: '$1,000–$2,500' },
    { t: 'A scoped engagement recommendation',                    v: 'Bundled into a sales call you have to sit through' },
  ];
  return (
    <section className="section ground-mid" data-screen-label="The Stack">
      <div className="container--narrow reveal" ref={ref} style={{ maxWidth: 880 }}>
        <SectionHead
          n="12" label="The math"
          title={'What this would cost <span class="gradient-text">from anyone else.</span>'}
          align="center"
          sub="The market rate for the components of the Trust Audit. Pulled from three competing scopes we’ve seen this year."/>
        <div style={{
          background: 'var(--surface-1)', border: '1px solid var(--border-1)',
          borderRadius: 'var(--r-lg)', overflow: 'hidden',
          boxShadow: 'var(--inset-glow)',
        }} className="surface-card">
          {lines.map((l, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
              padding: '18px 28px',
              borderTop: i === 0 ? 'none' : '1px solid var(--border-1)',
            }} className="hairline">
              <span style={{ fontSize: 15, color: 'var(--fg-1)' }}>{l.t}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, color: 'var(--fg-1)', fontWeight: 600, textAlign: 'right' }}>
                {l.v}
              </span>
            </div>
          ))}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
            padding: '22px 28px', background: 'var(--surface-2)',
            borderTop: '1px solid var(--border-2)',
          }}>
            <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--fg-pure, #fff)', letterSpacing: '0.02em' }}>TYPICAL MARKET RATE</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 800, color: 'var(--fg-pure, #fff)' }}>$5,000–$10,000+</span>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
            padding: '22px 28px', background: 'var(--grad-brand-soft)',
            borderTop: '1px solid var(--border-2)',
          }}>
            <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--fg-pure, #fff)', letterSpacing: '0.02em' }}>WHAT IT COSTS FROM US</span>
            <span className="gradient-text" style={{ fontFamily: 'var(--font-sans)', fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em' }}>Free</span>
          </div>
        </div>
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Btn variant="emphasis" size="lg" onClick={onCTA}>Book my Trust Audit →</Btn>
          <div style={{ marginTop: 12, fontSize: 12.5, color: 'var(--fg-3)' }}>
            What you have to commit to in return: 30 minutes of your time. Nothing else.
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Section 14 — Honest scarcity (no countdown — it's the founder's calendar) ----------
const ScarcitySection = ({ onCTA }) => {
  const ref = useReveal();
  return (
    <section className="section--tight ground-dark" data-screen-label="Honest Scarcity">
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
                HONEST SCARCITY
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.015em', margin: '0 0 14px' }}>
                The founder’s calendar is the constraint.
              </h2>
              <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 12px', maxWidth: 620 }}>
                We don’t run countdown clocks. Doyle delivers every Trust Audit personally. Every Trust Engine is creative-directed by Doyle. Solo capacity is roughly 5–10 concurrent Trust Engines plus retainers.
              </p>
              <p style={{
                fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0, maxWidth: 620,
                padding: '14px 18px', background: 'rgba(244,114,182,0.06)',
                border: '1px dashed rgba(244,114,182,0.32)', borderRadius: 'var(--r-md)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--pf-rose-400)', marginRight: 8 }}>[FILL]</span>
                Doyle to lock the public language. Suggested: “We can hold ~6 Trust Audits per week. When the calendar fills, we open a waitlist for the following week. There’s no urgency manufactured here — the engine works the same whether you book this week or next month. But the audit slot you don’t book today is the audit slot someone else will.”
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Btn variant="emphasis" size="lg" onClick={onCTA}>Book my Trust Audit →</Btn>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes pf-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </section>
  );
};

// ---------- Section 15 — The guarantee, in writing ----------
const GuaranteeSection = () => {
  const ref = useReveal();
  const points = [
    {
      n: '1',
      t: 'No pitch on the call.',
      d: 'The Trust Audit is 30 minutes of diagnostic conversation. Not a sales pitch. We are gathering material to write your report, not closing you. The Trust Engine proposal lands with the report, as a separate appendix you can read or ignore.',
    },
    {
      n: '2',
      t: 'You keep the report, no strings.',
      d: 'The written audit report is delivered within 48 hours of the call. It\'s yours forever. Use it to brief us. Use it to brief any other vendor. Use it to do nothing at all. We don\'t claim ownership.',
    },
    {
      n: '3',
      t: 'You keep the Real Human Origin commitment.',
      d: 'Every deliverable we ever produce for you carries the mark. We commit to it in writing in every proposal. If we ever ship an asset that includes a fabricated face, a cloned voice, or a synthetic testimonial, the engagement is voidable at your option with a full refund.',
    },
    {
      n: '4',
      t: 'No retainer minimum, ever.',
      d: 'If we run the Engine for you after Foundation, you can cancel any month. The work compounds, or it doesn\'t. The contract doesn\'t hold you. The library does.',
    },
  ];
  return (
    <section className="section ground-mid" data-screen-label="The Guarantee">
      <div className="container--narrow reveal" ref={ref} style={{ maxWidth: 980 }}>
        <SectionHead
          n="15" label="The guarantee"
          title={'The guarantee, <span class="gradient-text">in writing.</span>'}
          sub="The new guarantee is built into the offer — four commitments, not a money-back gimmick."/>
        <div style={{
          background: 'var(--surface-1)', border: '1px solid var(--border-2)',
          borderRadius: 'var(--r-xl)', padding: 'clamp(28px, 4vw, 44px)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {points.map((p) => (
              <div key={p.n} style={{
                display: 'grid', gridTemplateColumns: '56px 1fr', gap: 20, alignItems: 'flex-start',
              }} className="grid-2 guarantee-row">
                <div className="aura aura-soft" style={{
                  width: 48, height: 48, borderRadius: 'var(--r-md)',
                  background: 'var(--grad-brand)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 800,
                  color: '#fff', letterSpacing: '-0.02em',
                }}>{p.n}</div>
                <div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.005em', margin: '0 0 6px', lineHeight: 1.3 }}>
                    {p.t}
                  </h3>
                  <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .guarantee-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ---------- P.S. ----------
const PSSection = ({ onCTA }) => {
  const ref = useReveal();
  return (
    <section className="section--tight ground-dark" data-screen-label="P.S." style={{ paddingTop: 0, paddingBottom: 64 }}>
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
          <p style={{ fontSize: 17, color: 'var(--fg-1)', lineHeight: 1.65, margin: '0 0 16px' }}>
            If you scrolled to the bottom: the entire pitch is, <em>spend 30 minutes and you walk away with a written diagnostic on your content situation, a recommendation on which Trust Engine tier fits, and a draft of what your library could look like.</em> It costs you nothing. You keep the report whether you hire us or not. Doyle delivers every one personally.
          </p>
          <p style={{ fontSize: 17, color: 'var(--fg-1)', lineHeight: 1.65, margin: '0 0 16px' }}>
            If the next campaign, product launch, or growth push you're running matters, the worst outcome of this call is that you walk away with a sharper plan than you came in with. The best is that we ship the work that closes it.
          </p>
          <p style={{ fontSize: 17, color: 'var(--fg-1)', lineHeight: 1.65, margin: '0 0 22px' }}>
            The agencies racing to AI-generate more content are commodifying themselves. The agencies clinging to "we don't use AI at all" are pretending it's still 2019. We took the middle path that's actually a real position: AI as the deployment layer, humans as the production layer, real moments on every asset, deployable tools that work in your team's voice for years.
          </p>
          <p style={{ fontSize: 17, color: 'var(--fg-1)', lineHeight: 1.65, margin: '0 0 22px' }}>
            If that resonates, book the call.
          </p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <Btn variant="emphasis" size="lg" onClick={onCTA}>Book my Trust Audit →</Btn>
            <span style={{ fontSize: 13, color: 'var(--fg-2)' }}>— Doyle, founder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Inline CTA band (sprinkled) ----------
const InlineCTA = ({ headline, sub, label = 'Book the free Trust Audit →', onCTA }) => (
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

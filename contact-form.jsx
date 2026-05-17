/* global React, Eyebrow, Btn, useReveal */
const { useState: useStateC } = React;

const inputStyle = {
  fontFamily: 'var(--font-sans)',
  background: 'var(--surface-3)',
  border: '1px solid var(--border-1)',
  color: 'var(--fg-1)',
  padding: '13px 14px',
  borderRadius: 'var(--r-md)',
  fontSize: 15,
  outline: 'none',
  width: '100%',
  transition: 'border-color 150ms var(--ease-out), box-shadow 150ms var(--ease-out)',
};
const labelStyle = {
  fontSize: 11, color: 'var(--fg-2)', fontWeight: 600,
  letterSpacing: '0.12em', textTransform: 'uppercase',
  marginBottom: 8, display: 'block',
};

const VERTICAL_OPTIONS = [
  'Capital campaign / mission-driven',
  'Growth-stage product',
  'Local trust business / service',
  'Not sure yet',
];
const TIER_OPTIONS = [
  'Local ($5K Foundation)',
  'Growth ($15–25K Foundation)',
  'Enterprise ($40K+ Foundation)',
  'Not sure — that\'s what the Trust Audit is for',
];

const ContactForm = () => {
  const [data, setData] = useStateC({
    name: '', org: '', email: '',
    vertical: VERTICAL_OPTIONS[3],
    tier: TIER_OPTIONS[3],
    moment: '', deadline: '',
  });
  const [errors, setErrors] = useStateC({});
  const [submitted, setSubmitted] = useStateC(false);
  const [touched, setTouched] = useStateC({});

  const update = (k, v) => setData(d => ({ ...d, [k]: v }));
  const touch = (k) => setTouched(t => ({ ...t, [k]: true }));

  const validate = () => {
    const errs = {};
    if (!data.name.trim()) errs.name = 'We need a name to reply to.';
    if (!data.org.trim()) errs.org = 'Which organization is this for?';
    if (!data.email.trim()) errs.email = 'Add an email so we can respond.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errs.email = 'That email doesn\'t look right.';
    if (!data.moment.trim() || data.moment.trim().length < 12) errs.moment = 'Tell us a bit more — a sentence or two.';
    return errs;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setTouched({ name: true, org: true, email: true, moment: true });
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const ref = useReveal();

  if (submitted) {
    return (
      <section id="contact" className="section ground-dark">
        <div className="container--narrow reveal" ref={ref}>
          <div className="frame" style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{
              background: 'var(--surface-1)', borderRadius: 'var(--r-lg)',
              padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center',
            }} className="surface-card">
              <div className="aura" style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'var(--grad-brand)', margin: '0 auto 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 14px' }}>
                Brief received.
              </h3>
              <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 auto 28px', maxWidth: 540 }}>
                Doyle will respond within two business days with a Trust Audit slot on his calendar. If your moment isn't a fit, he'll tell you that too — and point you toward a partner who is.
              </p>
              <Btn variant="ghost" onClick={() => { setSubmitted(false); setData({ name: '', org: '', email: '', vertical: VERTICAL_OPTIONS[3], tier: TIER_OPTIONS[3], moment: '', deadline: '' }); setTouched({}); }}>
                Send another brief
              </Btn>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const showErr = (k) => touched[k] && errors[k];

  return (
    <section id="contact" className="section ground-dark">
      <div className="container reveal" ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 64, alignItems: 'start' }} className="grid-2">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Eyebrow>Book the Trust Audit</Eyebrow>
            </div>
            <h2 style={{ fontSize: 'clamp(34px, 4vw, 52px)', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              Book the <span className="gradient-text">Trust Audit.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 32, maxWidth: 500 }}>
              A 30-minute call with the founder. No deck. No pitch. We'll walk your current situation, tell you where we'd come in, and write you a report on it within 48 hours.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Response within 2 business days',
                'No newsletter signup, no automated sequence',
                'Doyle delivers every audit personally — when you book, you book his calendar',
              ].map(l => (
                <li key={l} style={{ display: 'flex', gap: 12, fontSize: 14.5, color: 'var(--fg-1)', lineHeight: 1.5 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--pf-aqua-400)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={submit} style={{
            background: 'var(--surface-1)', border: '1px solid var(--border-1)',
            borderRadius: 'var(--r-lg)', padding: 'clamp(28px, 4vw, 40px)',
            boxShadow: 'var(--inset-glow)',
            display: 'flex', flexDirection: 'column', gap: 18,
          }} className="surface-card">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={labelStyle}>Your name</label>
                <input
                  value={data.name}
                  onChange={e => update('name', e.target.value)}
                  onBlur={() => { touch('name'); setErrors(validate()); }}
                  placeholder="Jordan Reyes"
                  style={{ ...inputStyle, borderColor: showErr('name') ? 'var(--danger)' : 'var(--border-1)' }}
                />
                {showErr('name') && <FieldError text={errors.name}/>}
              </div>
              <div>
                <label style={labelStyle}>Organization</label>
                <input
                  value={data.org}
                  onChange={e => update('org', e.target.value)}
                  onBlur={() => { touch('org'); setErrors(validate()); }}
                  placeholder="Your organization"
                  style={{ ...inputStyle, borderColor: showErr('org') ? 'var(--danger)' : 'var(--border-1)' }}
                />
                {showErr('org') && <FieldError text={errors.org}/>}
              </div>
            </div>

            <div>
              <label style={labelStyle}>Work email</label>
              <input
                type="email"
                value={data.email}
                onChange={e => update('email', e.target.value)}
                onBlur={() => { touch('email'); setErrors(validate()); }}
                placeholder="jordan@example.org"
                style={{ ...inputStyle, borderColor: showErr('email') ? 'var(--danger)' : 'var(--border-1)' }}
              />
              {showErr('email') && <FieldError text={errors.email}/>}
            </div>

            <div>
              <label style={labelStyle}>Vertical</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {VERTICAL_OPTIONS.map(v => (
                  <button type="button" key={v} onClick={() => update('vertical', v)}
                    style={{
                      padding: '8px 14px', borderRadius: 'var(--r-full)',
                      fontSize: 13, fontWeight: 500, cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      border: `1px solid ${data.vertical === v ? 'var(--pf-aqua)' : 'var(--border-2)'}`,
                      background: data.vertical === v ? 'var(--pf-aqua)' : 'var(--surface-2)',
                      color: data.vertical === v ? '#0B0B0B' : 'var(--fg-1)',
                      transition: 'all 150ms var(--ease-out)',
                    }}>
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={labelStyle}>Trust Engine tier you're considering</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {TIER_OPTIONS.map(t => (
                  <button type="button" key={t} onClick={() => update('tier', t)}
                    style={{
                      padding: '8px 14px', borderRadius: 'var(--r-full)',
                      fontSize: 13, fontWeight: 500, cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      border: `1px solid ${data.tier === t ? 'var(--pf-aqua)' : 'var(--border-2)'}`,
                      background: data.tier === t ? 'var(--pf-aqua)' : 'var(--surface-2)',
                      color: data.tier === t ? '#0B0B0B' : 'var(--fg-1)',
                      transition: 'all 150ms var(--ease-out)',
                    }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={labelStyle}>What's the moment you need to convert?</label>
              <textarea
                rows={4}
                value={data.moment}
                onChange={e => update('moment', e.target.value)}
                onBlur={() => { touch('moment'); setErrors(validate()); }}
                placeholder="ED capital campaign closing in Q4. Public phase Sept–Nov. Goal: $4M against $1.2M raised so far. We've shot a sizzle but it isn't converting on email…"
                style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-sans)', lineHeight: 1.5, borderColor: showErr('moment') ? 'var(--danger)' : 'var(--border-1)' }}
              />
              {showErr('moment') && <FieldError text={errors.moment}/>}
            </div>

            <div>
              <label style={labelStyle}>Deadline (optional)</label>
              <input
                value={data.deadline}
                onChange={e => update('deadline', e.target.value)}
                placeholder="Q4 2026 · launch Sept 8"
                style={inputStyle}
              />
            </div>

            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginTop: 6, gap: 16, flexWrap: 'wrap',
            }}>
              <span style={{ fontSize: 12, color: 'var(--fg-3)' }}>
                No newsletter signup. No automated sequence. Doyle replies personally.
              </span>
              <Btn variant="emphasis" size="lg" type="submit">Send my brief →</Btn>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const FieldError = ({ text }) => (
  <div style={{
    marginTop: 6, fontSize: 12, color: 'var(--danger)',
    display: 'flex', alignItems: 'center', gap: 6,
  }}>
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12" y2="16"/>
    </svg>
    <span>{text}</span>
  </div>
);

// ---------- Final CTA band ----------
const FinalCTA = ({ onCTA }) => {
  const ref = useReveal();
  return (
    <section className="section ground-dark" style={{ paddingTop: 0 }}>
      <div className="container reveal" ref={ref}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          padding: 'clamp(48px, 7vw, 96px) clamp(28px, 5vw, 64px)',
          borderRadius: 'var(--r-xl)',
          background: 'var(--surface-1)', border: '1px solid var(--border-1)',
          textAlign: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(70% 90% at 50% 0%, rgba(139,92,246,0.50), transparent 60%), radial-gradient(50% 80% at 80% 100%, rgba(244,114,182,0.36), transparent 60%), radial-gradient(50% 80% at 15% 100%, rgba(34,211,238,0.28), transparent 60%)',
            pointerEvents: 'none',
          }}/>
          <div style={{ position: 'relative' }}>
            <Eyebrow style={{ marginBottom: 18 }}>Start here</Eyebrow>
            <h2 className="h-display" style={{ fontSize: 'clamp(42px, 6vw, 80px)', margin: '0 0 18px', lineHeight: 1.02 }}>
              Start with the <span className="gradient-text">free Trust Audit.</span>
            </h2>
            <p style={{ fontSize: 18, color: 'var(--fg-2)', maxWidth: 720, margin: '0 auto 36px', lineHeight: 1.55 }}>
              30 minutes. A written report in 48 hours. A Trust Engine tier and scope recommendation. The full pillar themes index. A direct line to the founder. You keep all of it whether or not you ever hire us.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Btn variant="emphasis" size="lg" onClick={onCTA}>Book my Trust Audit →</Btn>
              <Btn variant="ghost" size="lg" onClick={onCTA}>Email the team</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ContactForm, FinalCTA });

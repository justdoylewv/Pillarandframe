/* global React, Eyebrow, Btn, useReveal */

// =============================================================================
// GoHighLevel form embed slot
// =============================================================================
// Paste the raw HTML snippet GoHighLevel gives you between the backticks below.
// GHL usually provides an <iframe ...> block; sometimes a <script> + container.
//
// Example (replace with the snippet from GHL):
//
//   <iframe src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
//           style="width:100%;height:720px;border:none;border-radius:12px;
//                  background:transparent;"
//           id="inline-YOUR_FORM_ID"
//           data-layout='{"id":"INLINE"}'
//           data-trigger-type="alwaysShow"
//           data-form-name="Trust Audit Lead Form">
//   </iframe>
//
// The form_embed.js script that GHL also gives you is already loaded by
// index.html — you don't need to paste a <script> tag here.
//
// While this constant is empty, the page renders a styled placeholder so the
// layout doesn't break. Paste the snippet and redeploy; the form goes live.
// =============================================================================
const GHL_EMBED_HTML = /*GHL-EMBED-BEGIN*/``/*GHL-EMBED-END*/;

const ContactForm = () => {
  const ref = useReveal();
  const hasEmbed = GHL_EMBED_HTML.trim().length > 0;

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

          {/* GHL form embed slot — replace placeholder visual with real iframe when GHL_EMBED_HTML is set */}
          <div id="ghl-form-slot" style={{
            background: 'var(--surface-1)', border: '1px solid var(--border-1)',
            borderRadius: 'var(--r-lg)',
            padding: hasEmbed ? 0 : 'clamp(28px, 4vw, 40px)',
            boxShadow: 'var(--inset-glow)',
            overflow: 'hidden',
            position: 'relative',
          }} className="surface-card">
            {hasEmbed
              ? <div dangerouslySetInnerHTML={{ __html: GHL_EMBED_HTML }}/>
              : <GHLFormPlaceholder/>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Visual placeholder until GHL embed is pasted in ----------
const GHLFormPlaceholder = () => {
  const fieldStyle = {
    height: 44, borderRadius: 'var(--r-md)',
    background: 'var(--surface-3)', border: '1px solid var(--border-1)',
    display: 'flex', alignItems: 'center', padding: '0 14px',
    fontSize: 13.5, color: 'var(--fg-3)',
  };
  return (
    <div style={{
      position: 'relative',
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      {/* FILL banner overlay */}
      <div style={{
        position: 'absolute', inset: -14,
        background: 'radial-gradient(80% 60% at 50% 30%, rgba(244,114,182,0.10), transparent 70%)',
        pointerEvents: 'none', borderRadius: 'var(--r-lg)',
      }}/>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6,
        padding: '8px 12px', borderRadius: 'var(--r-md)',
        background: 'rgba(244,114,182,0.10)',
        border: '1px solid rgba(244,114,182,0.32)',
        color: 'var(--pf-rose-400)', position: 'relative',
      }}>
        <span style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--pf-rose)', boxShadow: 'var(--glow-rose)' }}/>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em' }}>FILL · GHL FORM EMBED SLOT</span>
      </div>
      <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55, margin: '0 0 6px', position: 'relative' }}>
        Paste the GoHighLevel iframe snippet into <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, padding: '1px 5px', background: 'rgba(34,211,238,0.10)', color: 'var(--pf-aqua-400)', borderRadius: 'var(--r-sm)' }}>contact-form.jsx</code> between the <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, padding: '1px 5px', background: 'rgba(34,211,238,0.10)', color: 'var(--pf-aqua-400)', borderRadius: 'var(--r-sm)' }}>/*GHL-EMBED-BEGIN*/</code> markers and redeploy. Form goes live the moment it's pushed.
      </p>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12, opacity: 0.7 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={fieldStyle}>Your name</div>
          <div style={fieldStyle}>Organization</div>
        </div>
        <div style={fieldStyle}>Work email</div>
        <div style={{ ...fieldStyle, height: 100, alignItems: 'flex-start', paddingTop: 12 }}>What's the moment you need to convert?</div>
        <div style={{
          height: 48, marginTop: 4, borderRadius: 'var(--r-md)',
          background: 'var(--grad-warm)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14.5, fontWeight: 600,
          boxShadow: 'var(--inset-glow), var(--glow-emphasis)',
        }}>
          Send my brief →
        </div>
      </div>
    </div>
  );
};

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

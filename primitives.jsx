/* global React */
const { useState, useEffect, useRef } = React;

// ---------- Reveal on scroll ----------
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ---------- Eyebrow ----------
const Eyebrow = ({ children, color, style }) => (
  <div className="eyebrow" style={{ color: color || undefined, ...style }}>{children}</div>
);

// ---------- Button ----------
const Btn = ({ variant = 'primary', size, children, className = '', style, ...rest }) => {
  const cls = `btn btn--${variant} ${size === 'lg' ? 'btn--lg' : ''} ${className}`.trim();
  return <button className={cls} style={style} {...rest}>{children}</button>;
};

// ---------- Nav ----------
const Nav = ({ onCTA, accent }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 60,
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      background: scrolled ? 'rgba(20,23,30,0.78)' : 'rgba(20,23,30,0.35)',
      borderBottom: `1px solid ${scrolled ? 'var(--border-1)' : 'transparent'}`,
      transition: 'background 240ms var(--ease-out), border-color 240ms var(--ease-out)',
    }}>
      <div className="container" style={{
        padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="assets/logo-mark.svg" width="26" height="26" alt=""/>
          <span style={{ fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', fontSize: 15 }}>Pillar &amp; Frame</span>
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: 28 }}>
          {[
            { l: 'Work', h: '#work' },
            { l: 'Services', h: '#services' },
            { l: 'How it works', h: '#process' },
            { l: 'Pricing', h: '#pricing' },
            { l: 'FAQ', h: '#faq' },
          ].map(item =>
            <a key={item.l} href={item.h} style={{
              fontSize: 13.5, color: 'var(--fg-1)', fontWeight: 500, textDecoration: 'none',
              transition: 'color 150ms var(--ease-out)',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--pf-aqua-400)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-1)'}>
              {item.l}
            </a>
          )}
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a href="#contact" style={{ fontSize: 13.5, color: 'var(--fg-2)', fontWeight: 500, textDecoration: 'none' }}>Contact</a>
          <Btn variant="primary" onClick={onCTA} style={{ background: 'var(--accent-dyn, var(--pf-aqua))', color: '#0B0B0B' }}>
            Book a discovery call
          </Btn>
        </div>
      </div>
    </div>
  );
};

// ---------- Frame motif inner ----------
const FrameInner = ({ children, style }) => (
  <div className="frame" style={style}>
    <div style={{
      background: 'var(--surface-1)', borderRadius: 'var(--r-lg)', overflow: 'hidden',
    }}>{children}</div>
  </div>
);

Object.assign(window, { Eyebrow, Btn, Nav, FrameInner, useReveal });

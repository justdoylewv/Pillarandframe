/* global React, ReactDOM,
   Nav, Btn, Eyebrow, FrameInner, useReveal,
   HeroCentered, HeroSplit,
   LogoStrip, Services, Process, CaseStudyHighlight, Metrics, Pricing,
   WhoWorkWith, FAQ, FounderNote, Footer,
   ContactForm, FinalCTA,
   ProblemSection, BenefitsSection, TestimonialsSection,
   OfferSection, BonusesSection, ValueStackSection,
   ScarcitySection, GuaranteeSection, PSSection, InlineCTA,
   useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakText, TweakToggle */

const { useEffect: useEffectApp } = React;

const HERO_VARIANTS = {
  centered: {
    headline: 'Authentic storytelling.<br/><span class="gradient-text">Productized.</span>',
    sub: 'Two days of capture. A year of authentic content. Real humans, real moments, deployable across every channel your audience uses to decide if they trust you. Productized into three tiers with fixed pricing. Built around an AI infrastructure your team installs and uses for years.',
    intrigue: [
      'How <strong>two days of capture</strong> turns into a year of authentic content',
      'Why the <strong>Voice Profile</strong> drafts in your team\'s voice in 90 seconds',
      'Why <strong>"Real Human Origin"</strong> is about to be marketing\'s most valuable signal',
      'The <strong>Capture Day SOP</strong> that becomes the most meaningful day of your team\'s year',
      'How the <strong>free Trust Audit</strong> works — 30 minutes, written report in 48 hours',
    ],
  },
  split: {
    headline: 'Capture once.<br/><span class="gradient-text">Earn for years.</span>',
    sub: 'The Trust Engine — built once, deployed forever. Two days of capture. A year of authentic content. A Voice Profile your team installs as a working AI skill. A free Trust Audit to start.',
    intrigue: [
      '<strong>Two days of capture</strong> → a year of authentic content',
      '<strong>Voice Profile</strong> as a working AI skill in your team\'s tools',
      '<strong>Real Human Origin</strong> mark on every asset — no fabrication',
      '<strong>Free Trust Audit</strong> — 30 minutes with the founder',
    ],
  },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "centered",
  "accent": "blue",
  "headline": "",
  "mixGrounds": true,
  "showFAQ": true
}/*EDITMODE-END*/;

function applyAccent(accent) {
  const root = document.documentElement;
  const map = {
    blue:   { dyn: 'var(--pf-aqua)',   grad: 'linear-gradient(90deg, var(--pf-aqua), var(--pf-aqua-400))' },
    purple: { dyn: 'var(--pf-violet)', grad: 'linear-gradient(90deg, var(--pf-aqua), var(--pf-violet))' },
    pink:   { dyn: 'var(--pf-rose)',   grad: 'linear-gradient(90deg, var(--pf-violet), var(--pf-rose))' },
  };
  const m = map[accent] || map.blue;
  root.style.setProperty('--accent-dyn', m.dyn);
  root.style.setProperty('--accent-grad', m.grad);
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectApp(() => { applyAccent(t.accent); }, [t.accent]);

  const toContact = () => scrollToId('contact');
  const toOffer = () => scrollToId('offer');
  const toWork = () => scrollToId('work');

  const variant = HERO_VARIANTS[t.hero] || HERO_VARIANTS.centered;
  const headline = (t.headline && t.headline.trim()) ? t.headline : variant.headline;

  const founderGround = t.mixGrounds ? 'ground-light' : 'ground-dark';
  const faqGround = t.mixGrounds ? 'ground-mid' : 'ground-dark';

  return (
    <div className={`accent-${t.accent}`}>
      <Nav onCTA={toContact} accent={t.accent}/>

      {/* §1 + §2 + §3 + §4 — audience, headline, back-up, intrigue */}
      {t.hero === 'split'
        ? <HeroSplit headline={headline} sub={variant.sub} intrigue={variant.intrigue} onPrimary={toContact} onSecondary={toWork}/>
        : <HeroCentered headline={headline} sub={variant.sub} intrigue={variant.intrigue} onPrimary={toContact} onSecondary={toWork}/>}

      {/* logo bar — supporting credentials */}
      <LogoStrip/>

      {/* §5 — Problem */}
      <ProblemSection/>

      {/* §6 — Solution */}
      <Services accent={t.accent}/>
      <Process/>

      {/* §7 — Credentials (featured work + metrics) */}
      <CaseStudyHighlight/>
      <Metrics/>

      {/* §8 — Benefits (features → benefits) */}
      <BenefitsSection/>

      {/* Sprinkled CTA */}
      <InlineCTA
        headline="Already nodding? Skip ahead."
        sub="Book the free Trust Audit. 30 minutes with the founder. Written report in 48 hours. No deck. No pitch."
        label="Book the free Trust Audit →"
        onCTA={toContact}/>

      {/* §9 — Social proof */}
      <TestimonialsSection/>

      {/* Founder note — switches grounds when mix is on */}
      <div className={founderGround}>
        <FounderNote/>
      </div>

      {/* §10 — The Offer */}
      <OfferSection onCTA={toContact}/>

      {/* §11 — Bonuses */}
      <BonusesSection/>

      {/* §12 — Value stack */}
      <ValueStackSection onCTA={toContact}/>

      {/* §13 — Full price list */}
      <Pricing onSelect={toContact}/>

      {/* §14 — Scarcity */}
      <ScarcitySection onCTA={toContact}/>

      {/* §15 — Guarantee */}
      <GuaranteeSection/>

      {/* Supporting — who we work with / FAQ */}
      <WhoWorkWith/>
      {t.showFAQ && (
        <div className={faqGround}>
          <FAQ/>
        </div>
      )}

      {/* §16 — Final CTA + form */}
      <ContactForm/>
      <FinalCTA onCTA={toContact}/>

      {/* §17 — P.S. */}
      <PSSection onCTA={toContact}/>

      <Footer/>

      <TweaksPanel title="Landing tweaks">
        <TweakSection label="Hero"/>
        <TweakRadio
          label="Direction"
          value={t.hero}
          options={['centered', 'split']}
          onChange={v => setTweak('hero', v)}/>
        <TweakText
          label="Headline override"
          value={t.headline}
          placeholder="Leave blank to use variant default"
          onChange={v => setTweak('headline', v)}/>

        <TweakSection label="Accent"/>
        <TweakRadio
          label="Color"
          value={t.accent}
          options={['blue', 'purple', 'pink']}
          onChange={v => setTweak('accent', v)}/>

        <TweakSection label="Page mix"/>
        <TweakToggle
          label="Light section mix"
          value={t.mixGrounds}
          onChange={v => setTweak('mixGrounds', v)}/>
        <TweakToggle
          label="Show FAQ"
          value={t.showFAQ}
          onChange={v => setTweak('showFAQ', v)}/>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

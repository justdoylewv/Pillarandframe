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
    headline: 'How fundraising teams<br/>raise <span class="gradient-text">7-figure campaigns</span><br/>in 8 weeks, not 8 months.',
    sub: 'Pillar & Frame produces documentary-grade campaign content engineered for one outcome metric you have already committed to — and writes the Conversion Map before anyone touches a camera.',
    intrigue: [
      'The <strong>two-page document</strong> that tells you in 14 days whether your current creative will move your number — or whether you need to start over.',
      'Why a <strong>$4,500 audit</strong> outperforms a $60,000 sizzle reel in the inbox (and what most agencies will not say out loud).',
      'The "Conversion Map" template we use internally — included as a bonus, even if you never hire us for a campaign.',
      'A real <strong>full-refund guarantee</strong> if we conclude we cannot move your number. (Yes, in writing. Yes, you keep the document.)',
    ],
  },
  split: {
    headline: 'Stop buying sizzle.<br/><span class="gradient-text">Start shipping campaigns.</span>',
    sub: 'A documentary-grade Conversion Map in 14 days for $4,500 — refunded if we cannot move your number. Two audit slots left this quarter.',
    intrigue: [
      '<strong>8–12 page Conversion Map</strong>, written before a camera touches your campaign.',
      '<strong>3–5 sourced story angles</strong> we already see in your footage.',
      '<strong>AI Voice Profile (Lite)</strong> bonus your team uses from day one.',
      '<strong>Full refund</strong> if the audit concludes we are not a fit.',
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
        ? <HeroSplit headline={headline} sub={variant.sub} intrigue={variant.intrigue} onPrimary={toContact} onSecondary={toOffer}/>
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
        sub="Book the 30-minute call. No deck, no pitch."
        label="Book a discovery call →"
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

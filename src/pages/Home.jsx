import { useState } from 'react';
import { PostCard, ServiceCard, TestimonialSlider } from '../components/blocks.jsx';
import { CtaBand } from '../components/Footer.jsx';
import Icon from '../components/Icon.jsx';
import { ButtonLink, Img, Orbit, Reveal, SectionHead, useMeta } from '../components/ui.jsx';
import { COMPANY, whatsappLink } from '../data/company.js';
import { POSTS } from '../data/posts/index.js';
import { SERVICES } from '../data/services.js';
import { useI18n } from '../lib/i18n.jsx';
import { Link } from '../lib/router.jsx';

const LANGS = ['English', 'العربية', 'Français', 'Deutsch', 'Italiano', 'Español', 'Русский', '中文', 'Türkçe', 'Português', 'हिन्दी', 'اردو', '日本語', '한국어', 'Nederlands', 'فارسی'];

function Hero() {
  const { t } = useI18n();
  const stats = t('stats');
  return (
    <section className="hero">
      <div className="hero-media"><Img file="hero.jpg" alt="" eager fetchPriority="high" /></div>
      <Orbit />
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">{t('home.heroEyebrow')}</span>
          <h1 className="hero-title">
            <span className="line"><span>{t('home.heroTitleA')}</span></span>
            <span className="line"><span className="gold-text italic-display">{t('home.heroTitleB')}</span></span>
          </h1>
          <p className="hero-lead">{t('home.heroLead')}</p>
          <div className="hero-actions">
            <ButtonLink to="/contact-us">{t('common.getStarted')}</ButtonLink>
            <ButtonLink to="/request-a-quote" variant="ghost" icon={null}>{t('common.requestQuote')}</ButtonLink>
            <a className="btn btn-ghost" href={whatsappLink('Hello, I would like to book an interpreter / hold a conference.')} target="_blank" rel="noopener noreferrer">
              <Icon name="mic" size={18} /> {t('common.holdConference')}
            </a>
          </div>
          <div className="hero-badge"><span className="dot" /> {t('home.heroBadge')}</div>
        </div>
        <div className="hero-stats">
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-value gold-text">{s.value}</div>
                <div className="stat-label">{t(s.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...LANGS, ...LANGS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((l, i) => <span className="marquee-item" key={i}>{l}</span>)}
      </div>
    </div>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-3 highlights" style={{ marginBottom: 'var(--section)' }}>
          {t('home.highlights').map((h, i) => (
            <Reveal key={i} delay={i * 0.08} className="highlight-card">
              <span className="icon-badge"><Icon name={h.icon} size={26} /></span>
              <div>
                <h3>{t(h.title)}</h3>
                <p>{t(h.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="split">
          <Reveal scale className="about-media">
            <span className="about-frame" />
            <div className="img-main"><Img file="about-square.jpeg" alt={t('home.aboutTitle')} /></div>
            <div className="img-float"><Img file="vision.jpg" alt="" /></div>
            <div className="seal-badge">
              <strong>24/7</strong>
              <span>{t('home.onlineBadge')}</span>
            </div>
          </Reveal>
          <div>
            <Reveal as="span" className="eyebrow">{t('home.aboutEyebrow')}</Reveal>
            <Reveal as="h2" className="h2" delay={0.05} style={{ marginTop: 18 }}>{t('home.aboutTitle')}</Reveal>
            <Reveal as="p" className="lead" delay={0.1} style={{ marginTop: 22 }}>{t('home.aboutP1')}</Reveal>
            <Reveal as="p" className="muted" delay={0.14} style={{ marginTop: 16 }}>{t('home.aboutP2')}</Reveal>
            <div className="points">
              {t('home.aboutPoints').map((p, i) => (
                <Reveal key={i} delay={0.15 + i * 0.06} className="point">
                  <span className="tick"><Icon name="tick" size={16} strokeWidth={2.2} /></span>
                  <div><h4>{t(p.title)}</h4><p>{t(p.text)}</p></div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3} style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <ButtonLink to="/about-us" variant="navy">{t('common.learnMore')}</ButtonLink>
              <ButtonLink to="/contact-us" variant="outline" icon={null}>{t('common.contactUs')}</ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useI18n();
  const [tab, setTab] = useState('specialized');
  const list = SERVICES.filter((s) => s.category === tab);
  return (
    <section className="section bg-ivory">
      <div className="container">
        <div className="section-head-row">
          <SectionHead eyebrow={t('home.servicesEyebrow')} title={t('home.servicesTitle')} lead={t('home.servicesLead')} />
          <Reveal>
            <div className="tabs" role="tablist">
              <button role="tab" className="tab" aria-selected={tab === 'specialized'} onClick={() => setTab('specialized')}>{t('nav.specializedServices')}</button>
              <button role="tab" className="tab" aria-selected={tab === 'core'} onClick={() => setTab('core')}>{t('nav.coreServices')}</button>
            </div>
          </Reveal>
        </div>
        <div className="service-grid" key={tab}>
          {list.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} delay={(i % 3) * 0.08} />)}
          {tab === 'specialized' && (
            <Reveal delay={0.16} style={{ height: '100%' }}>
              <div className="service-card" style={{ height: '100%' }}>
                <div className="media"><Img file="svc-certified-alt.jpg" alt={t({ en: 'Certified Translation', ar: 'الترجمة المعتمدة' })} /></div>
                <div className="body">
                  <div className="icon-wrap"><Icon name="seal" size={24} /></div>
                  <h3><Link to="/certified-translation">{t({ en: 'Certified Translation', ar: 'الترجمة المعتمدة' })}</Link></h3>
                  <p>{t({ en: 'Signed, officially accepted translations for every specialized field.', ar: 'ترجمات موقَّعة ومقبولة رسميًا في كل المجالات المتخصصة.' })}</p>
                  <div style={{ marginTop: 22, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                    <ButtonLink to="/our-services" className="btn-sm">{t('common.viewAllServices')}</ButtonLink>
                    <Link to="/certified-translation" className="more" style={{ marginTop: 0 }}>{t('common.learnMore')} <Icon name="arrow" size={16} /></Link>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { t } = useI18n();
  return (
    <section className="section bg-navy" style={{ overflow: 'hidden' }}>
      <div className="pattern" />
      <div className="container" style={{ position: 'relative' }}>
        <div className="split" style={{ alignItems: 'end', marginBottom: 'clamp(40px, 5vw, 70px)' }}>
          <SectionHead eyebrow={t('home.whyEyebrow')} title={t('home.whyTitle')} light className="" />
          <Reveal as="p" className="lead on-dark" style={{ color: 'rgba(255,255,255,.75)' }}>{t('home.whyLead')}</Reveal>
        </div>
        <div className="why-grid">
          {t('home.why').map((w, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className="why-item">
              <span className="icon-badge" style={{ background: 'rgba(201,164,92,.12)', color: 'var(--gold-400)' }}><Icon name={w.icon} size={24} /></span>
              <h3>{t(w.title)}</h3>
              <p>{t(w.text)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container">
        <SectionHead center eyebrow={t('home.processEyebrow')} title={t('home.processTitle')} />
        <div className="process">
          {t('home.process').map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className="step">
              <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{t(s.title)}</h3>
              <p>{t(s.text)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mentors() {
  const { t } = useI18n();
  return (
    <section className="section bg-ivory">
      <div className="container split">
        <div>
          <Reveal as="span" className="eyebrow">{t('home.mentorsEyebrow')}</Reveal>
          <Reveal as="h2" className="h2" delay={0.05} style={{ marginTop: 18 }}>{t('home.mentorsTitle')}</Reveal>
          <Reveal as="p" className="lead" delay={0.1} style={{ marginTop: 22 }}>{t('home.mentorsText')}</Reveal>
          <Reveal delay={0.15} style={{ marginTop: 28 }}>
            <p className="slogan" style={{ fontSize: '1.5rem' }}>— {t('home.mentorsTag')}</p>
          </Reveal>
          <Reveal delay={0.2} style={{ marginTop: 30 }}>
            <ButtonLink to="/contact-us" variant="navy">{t('common.contactUs')}</ButtonLink>
          </Reveal>
        </div>
        <Reveal scale className="mentor-grid" style={{ paddingBottom: 36 }}>
          {[1, 2, 3, 4].map((n) => <figure key={n}><Img file={`mentor-${n}.jpg`} alt="" /></figure>)}
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container testi-wrap">
        <div>
          <SectionHead eyebrow={t('home.testimonialsEyebrow')} title={t('home.testimonialsTitle')} lead={t('home.testimonialsLead')} />
          <Reveal delay={0.15}><ButtonLink to="/testimonials" variant="outline">{t('common.viewAllReviews')}</ButtonLink></Reveal>
        </div>
        <Reveal scale><TestimonialSlider /></Reveal>
      </div>
    </section>
  );
}

function Blog() {
  const { t } = useI18n();
  return (
    <section className="section bg-ivory">
      <div className="container">
        <div className="section-head-row">
          <SectionHead eyebrow={t('home.blogEyebrow')} title={t('home.blogTitle')} />
          <Reveal><ButtonLink to="/blog" variant="outline">{t('common.viewAllPosts')}</ButtonLink></Reveal>
        </div>
        <div className="post-grid">
          {POSTS.slice(0, 3).map((p, i) => <PostCard key={p.slug} p={p} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useI18n();
  useMeta(null, t(COMPANY.name) + ' — ' + t('home.heroLead'));
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Why />
      <Process />
      <Mentors />
      <Testimonials />
      <Blog />
      <CtaBand />
    </>
  );
}

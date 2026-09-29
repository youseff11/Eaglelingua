import { ServiceCard, TestimonialSlider } from '../components/blocks.jsx';
import { CtaBand } from '../components/Footer.jsx';
import Icon from '../components/Icon.jsx';
import { ButtonLink, Img, PageHero, Reveal, SectionHead, useMeta } from '../components/ui.jsx';
import { COMPANY } from '../data/company.js';
import { serviceBySlug } from '../data/services.js';
import { useI18n } from '../lib/i18n.jsx';

export default function About() {
  const { t } = useI18n();
  useMeta(t('about.title'), t('about.lead'));
  const stats = t('stats');
  const featured = ['embassies-document-translation', 'legal-translation', 'medical-translation'].map(serviceBySlug);

  return (
    <>
      <PageHero title={t('about.title')} lead={t('about.lead')} crumbs={[{ label: t('about.title') }]} image="about-cover.jpg" />

      <section className="section">
        <div className="container split">
          <Reveal scale className="about-media">
            <span className="about-frame" />
            <div className="img-main"><Img file="about-global.jpg" alt={t('home.aboutTitle')} /></div>
            <div className="img-float"><Img file="about-square.jpeg" alt="" /></div>
            <div className="seal-badge"><strong>1M+</strong><span>{t(stats[0].label)}</span></div>
          </Reveal>
          <div>
            <Reveal as="span" className="eyebrow">{t('home.aboutEyebrow')}</Reveal>
            <Reveal as="h2" className="h2" delay={0.05} style={{ marginTop: 18 }}>{t('home.aboutTitle')}</Reveal>
            <Reveal as="p" className="lead" delay={0.1} style={{ marginTop: 22 }}>{t('home.aboutP1')}</Reveal>
            <Reveal as="p" className="muted" delay={0.12} style={{ marginTop: 16 }}>{t('home.aboutP2')}</Reveal>
            <Reveal as="p" className="muted" delay={0.14} style={{ marginTop: 16 }}>{t('about.p3')}</Reveal>
            <Reveal delay={0.18} style={{ marginTop: 28 }}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '.8rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>{t('about.fields')}</h4>
              <div className="doc-pills" style={{ marginTop: 0 }}>
                {t('about.fieldList').map((f) => <span key={f} className="doc-pill">{f}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight bg-navy" style={{ overflow: 'hidden' }}>
        <div className="pattern" />
        <div className="container" style={{ position: 'relative' }}>
          <div className="stats" style={{ background: 'transparent' }}>
            {stats.map((s, i) => (
              <div className="stat" key={i} style={{ textAlign: 'center', padding: '34px 20px' }}>
                <div className="stat-value gold-text">{s.value}</div>
                <div className="stat-label">{t(s.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container">
          <SectionHead center eyebrow={t(COMPANY.slogan)} title={t({ en: 'Mission & Vision', ar: 'الرسالة والرؤية' })} />
          <div className="grid grid-2">
            <Reveal className="mv-card">
              <span className="icon-badge"><Icon name="check" size={26} /></span>
              <h3 className="mv-label">{t('about.missionTitle')}</h3>
              <p>{t('about.mission')}</p>
              <span className="mv-mark">M</span>
            </Reveal>
            <Reveal delay={0.1} className="mv-card dark">
              <span className="icon-badge"><Icon name="globe" size={26} /></span>
              <h3 className="mv-label">{t('about.visionTitle')}</h3>
              <p>{t('about.vision')}</p>
              <span className="mv-mark">V</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow={t('home.whyEyebrow')} title={t('home.whyTitle')} lead={t('home.whyLead')} />
            <div className="points" style={{ marginTop: 0 }}>
              {t('home.aboutPoints').map((p, i) => (
                <Reveal key={i} delay={i * 0.06} className="point">
                  <span className="tick"><Icon name="tick" size={16} strokeWidth={2.2} /></span>
                  <div><h4>{t(p.title)}</h4><p>{t(p.text)}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal scale className="mentor-grid" style={{ paddingBottom: 36 }}>
            {[1, 2, 3, 4].map((n) => <figure key={n}><Img file={`mentor-${n}.jpg`} alt="" /></figure>)}
          </Reveal>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow={t('nav.services')} title={t('about.servicesTitle')} lead={t('about.servicesLead')} />
            <Reveal><ButtonLink to="/our-services" variant="outline">{t('common.viewAllServices')}</ButtonLink></Reveal>
          </div>
          <div className="service-grid">
            {featured.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container testi-wrap">
          <SectionHead eyebrow={t('home.testimonialsEyebrow')} title={t('home.testimonialsTitle')} lead={t('home.testimonialsLead')} />
          <Reveal scale><TestimonialSlider /></Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

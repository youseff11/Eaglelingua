import { ServiceCard, ServiceRow } from '../components/blocks.jsx';
import Icon from '../components/Icon.jsx';
import { ButtonLink, Img, PageHero, Reveal, SectionHead, useMeta } from '../components/ui.jsx';
import { whatsappLink } from '../data/company.js';
import { SERVICES } from '../data/services.js';
import { useI18n } from '../lib/i18n.jsx';

export default function Services() {
  const { t } = useI18n();
  useMeta(t('servicesPage.title'), t('servicesPage.lead'));
  const specialized = SERVICES.filter((s) => s.category === 'specialized');
  const core = SERVICES.filter((s) => s.category === 'core');
  const withDocs = SERVICES.filter((s) => s.documents);

  return (
    <>
      <PageHero title={t('servicesPage.title')} lead={t('servicesPage.lead')} crumbs={[{ label: t('nav.services') }]} image="svc-document.jpg" />

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow={t('nav.specializedServices')} title={t({ en: 'Perfectly Tailored Solutions for You', ar: 'حلول مصمَّمة خصيصًا لك' })} lead={t('servicesPage.intro')} />
          </div>
          <div className="service-grid">
            {specialized.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} delay={(i % 3) * 0.08} />)}
            <Reveal delay={0.16} style={{ height: '100%' }}>
              <div className="service-card" style={{ height: '100%' }}>
                <div className="media"><Img file="online-session.jpg" alt="" /></div>
                <div className="body">
                  <div className="icon-wrap"><Icon name="headset" size={24} /></div>
                  <h3>{t('servicesPage.helpTitle')}</h3>
                  <p style={{ WebkitLineClamp: 4 }}>{t('servicesPage.helpText')}</p>
                  <div style={{ marginTop: 22 }}><ButtonLink to="/contact-us" className="btn-sm">{t('common.contactUs')}</ButtonLink></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container">
          <SectionHead eyebrow={t('nav.coreServices')} title={t({ en: 'Explore Our Comprehensive Language Solutions', ar: 'استكشف حلولنا اللغوية الشاملة' })} lead={t('servicesPage.coreLead')} />
          <div className="service-list">
            {core.map((s, i) => <ServiceRow key={s.slug} s={s} delay={(i % 2) * 0.06} />)}
          </div>
        </div>
      </section>

      {withDocs.map((s, idx) => (
        <section key={s.slug} className={`section ${idx % 2 ? 'bg-ivory' : ''}`}>
          <div className="container split">
            <Reveal scale className="detail-media" style={idx % 2 ? { order: 2 } : undefined}>
              <Img file={s.image} alt={t(s.title)} />
            </Reveal>
            <div>
              <Reveal as="span" className="eyebrow">{t('serviceDetail.weTranslate')}</Reveal>
              <Reveal as="h2" className="h2" delay={0.05} style={{ marginTop: 16 }}>{t(s.title)}</Reveal>
              <Reveal as="p" className="lead" delay={0.1} style={{ marginTop: 18 }}>{t(s.intro)[0]}</Reveal>
              <Reveal delay={0.14} className="doc-pills">
                {t(s.documents).map((d) => <span key={d} className="doc-pill">{d}</span>)}
              </Reveal>
              <Reveal delay={0.2} style={{ marginTop: 30 }}>
                <ButtonLink to={`/${s.slug}`} variant="navy">{t('common.learnMore')}</ButtonLink>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="section-tight">
        <div className="container">
          <Reveal className="cta-band" style={{ gridTemplateColumns: '1fr auto' }}>
            <span className="glow" />
            <div>
              <span className="eyebrow" style={{ color: 'var(--gold-400)' }}>{t('faqPage.title')}</span>
              <h2 style={{ marginTop: 14 }}>{t('servicesPage.helpTitle')}</h2>
              <p>{t('servicesPage.helpText')}</p>
            </div>
            <div className="cta-actions">
              <ButtonLink to="/faq">{t('nav.faq')}</ButtonLink>
              <a className="btn btn-ghost" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> {t('common.whatsapp')}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

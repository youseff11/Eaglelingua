import { ServiceRow } from '../components/blocks.jsx';
import { CtaBand } from '../components/Footer.jsx';
import Icon from '../components/Icon.jsx';
import { ButtonLink, Img, PageHero, Reveal, SectionHead, useMeta } from '../components/ui.jsx';
import { COMPANY, whatsappLink } from '../data/company.js';
import { SERVICES } from '../data/services.js';
import { useI18n } from '../lib/i18n.jsx';
import { Link } from '../lib/router.jsx';

export default function ServiceDetail({ service: s }) {
  const { t } = useI18n();
  useMeta(t(s.title), t(s.short));
  const others = SERVICES.filter((x) => x.slug !== s.slug);
  const intro = t(s.intro);

  return (
    <>
      <PageHero
        title={t(s.title)}
        lead={t(s.short)}
        image={s.image}
        crumbs={[{ label: t('nav.services'), to: '/our-services' }, { label: t(s.title) }]}
      />

      <section className="section">
        <div className="container article-layout">
          <div>
            <div className="split" style={{ gridTemplateColumns: '1fr', gap: 36 }}>
              <Reveal scale className="detail-media" style={{ aspectRatio: '16 / 9' }}>
                <Img file={s.image} alt={t(s.title)} />
              </Reveal>
            </div>
            <Reveal as="span" className="eyebrow" style={{ marginTop: 44 }}>{t(s.category === 'core' ? 'nav.coreServices' : 'nav.specializedServices')}</Reveal>
            {intro.map((p, i) => (
              <Reveal as="p" key={i} className={i === 0 ? 'lead' : 'muted'} delay={0.08 + i * 0.04} style={{ marginTop: 18 }}>{p}</Reveal>
            ))}

            {s.documents && (
              <Reveal style={{ marginTop: 44 }}>
                <h3 className="h3">{t('serviceDetail.weTranslate')}</h3>
                <div className="doc-pills">{t(s.documents).map((d) => <span key={d} className="doc-pill">{d}</span>)}</div>
              </Reveal>
            )}

            <Reveal style={{ marginTop: 48 }}>
              <h3 className="h3">{t('serviceDetail.whatYouGet')}</h3>
            </Reveal>
            <div className="feature-grid">
              {t(s.features).map((f, i) => (
                <Reveal key={f} delay={(i % 4) * 0.04} className="feature">
                  <Icon name="check" size={20} /> {f}
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="sidebar">
            <div className="side-card dark">
              <span className="icon-badge" style={{ marginBottom: 16 }}><Icon name="bolt" size={22} /></span>
              <h4>{t('serviceDetail.ctaTitle')}</h4>
              <p>{t('serviceDetail.ctaText')}</p>
              <div style={{ display: 'grid', gap: 10, marginTop: 20 }}>
                <ButtonLink to="/contact-us" className="btn-block">{t('common.contactUs')}</ButtonLink>
                <a className="btn btn-ghost btn-block" href={whatsappLink(`Hello, I need: ${s.title.en}`)} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={18} /> {t('common.whatsapp')}
                </a>
              </div>
              <div style={{ marginTop: 18, fontSize: '.9rem', color: 'rgba(255,255,255,.7)', display: 'grid', gap: 8 }}>
                <a href={`tel:${COMPANY.phones[0].tel}`} style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="phone" size={16} /> <span className="ltr">{COMPANY.phones[0].display}</span></a>
                <a href={`mailto:${COMPANY.email}`} style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="mail" size={16} /> {COMPANY.email}</a>
              </div>
            </div>
            <div className="side-card">
              <h4>{t('nav.services')}</h4>
              <div className="side-links">
                {others.map((o) => (
                  <Link key={o.slug} to={`/${o.slug}`}>{t(o.title)} <Icon name="chevron" size={16} /></Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container">
          <SectionHead eyebrow={t('serviceDetail.otherServices')} title={t('home.servicesTitle')} />
          <div className="service-list">
            {others.filter((o) => o.category === s.category).slice(0, 4).map((o, i) => <ServiceRow key={o.slug} s={o} delay={(i % 2) * 0.06} />)}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

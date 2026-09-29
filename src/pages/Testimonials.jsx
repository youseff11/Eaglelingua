import { CtaBand } from '../components/Footer.jsx';
import Icon from '../components/Icon.jsx';
import { PageHero, Reveal, SectionHead, useMeta } from '../components/ui.jsx';
import { TESTIMONIALS } from '../data/testimonials.js';
import { useI18n } from '../lib/i18n.jsx';

export default function Testimonials() {
  const { t } = useI18n();
  useMeta(t('testimonialsPage.title'), t('testimonialsPage.lead'));
  const stats = t('stats');
  return (
    <>
      <PageHero title={t('testimonialsPage.title')} lead={t('testimonialsPage.lead')} crumbs={[{ label: t('nav.testimonials') }]} image="online-session.jpg" />

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,64px)' }}>
            <SectionHead eyebrow={t('home.testimonialsEyebrow')} title={t({ en: 'We’ve Helped Over 1 Million Clients', ar: 'ساعدنا أكثر من مليون عميل' })} className="" />
            <Reveal as="p" className="lead">{t('testimonialsPage.text')}</Reveal>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((x, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08} className="testi-tile">
                <Icon name="quote" size={34} className="q" />
                <div className="testi-stars" style={{ marginBottom: 12 }}>{[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star" size={15} />)}</div>
                <p>“{t(x.quote)}”</p>
                <div className="testi-author" style={{ marginTop: 22 }}>
                  <span className="testi-avatar" aria-hidden="true">{t(x.role).split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
                  <div><strong>{t(x.role)}</strong><span>{t(x.sector)}</span></div>
                </div>
              </Reveal>
            ))}
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

      <CtaBand />
    </>
  );
}

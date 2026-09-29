import { FaqAccordion } from '../components/blocks.jsx';
import { CtaBand } from '../components/Footer.jsx';
import Icon from '../components/Icon.jsx';
import { ButtonLink, PageHero, Reveal, SectionHead, useMeta } from '../components/ui.jsx';
import { COMPANY, whatsappLink } from '../data/company.js';
import { FAQ } from '../data/faq.js';
import { useI18n } from '../lib/i18n.jsx';

export default function Faq() {
  const { t } = useI18n();
  useMeta(t('faqPage.title'), t('faqPage.lead'));

  // FAQPage structured data for rich results in search.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: t(f.q), acceptedAnswer: { '@type': 'Answer', text: t(f.a) } })),
  };

  return (
    <>
      <PageHero title={t('faqPage.title')} lead={t('faqPage.lead')} crumbs={[{ label: t('nav.faq') }]} image="dictionary.jpg" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="section">
        <div className="container article-layout">
          <div>
            <SectionHead eyebrow={t('nav.faq')} title={t({ en: 'Everything you need to know', ar: 'كل ما تحتاج معرفته' })} lead={t('faqPage.intro')} />
            <FaqAccordion items={FAQ} />
          </div>
          <aside className="sidebar">
            <div className="side-card dark">
              <span className="icon-badge" style={{ marginBottom: 16 }}><Icon name="headset" size={22} /></span>
              <h4>{t('faqPage.askTitle')}</h4>
              <p>{t('faqPage.askText')}</p>
              <div style={{ display: 'grid', gap: 10, marginTop: 20 }}>
                <ButtonLink to="/contact-us" className="btn-block">{t('common.contactUs')}</ButtonLink>
                <a className="btn btn-ghost btn-block" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> {t('common.whatsapp')}</a>
              </div>
            </div>
            <Reveal className="side-card">
              <h4>{t('contact.getInTouch')}</h4>
              <div className="side-links">
                {COMPANY.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}><span>{t(p.label)}</span> <span className="ltr">{p.display}</span></a>)}
                <a href={`mailto:${COMPANY.email}`}><span>{t('contact.email')}</span> <span>{COMPANY.email}</span></a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

import { QuoteForm, ContactForm } from '../components/Forms.jsx';
import Icon from '../components/Icon.jsx';
import { PageHero, Reveal, SectionHead, useMeta } from '../components/ui.jsx';
import { COMPANY, whatsappLink } from '../data/company.js';
import { useI18n } from '../lib/i18n.jsx';

function ContactCards() {
  const { t } = useI18n();
  return (
    <div className="contact-cards">
      <Reveal as="a" className="contact-card" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.mapQuery)}`} target="_blank" rel="noopener noreferrer">
        <span className="icon-badge"><Icon name="pin" size={22} /></span>
        <div><h4>{t('contact.address')}</h4><p>{t(COMPANY.address)}</p></div>
      </Reveal>
      <Reveal delay={0.05} className="contact-card">
        <span className="icon-badge"><Icon name="phone" size={22} /></span>
        <div>
          <h4>{t('contact.phone')}</h4>
          {COMPANY.phones.map((p) => (
            <p key={p.tel} style={{ fontWeight: 600 }}>
              <a className="v ltr" href={`tel:${p.tel}`}>{p.display}</a>
              <span className="muted" style={{ fontSize: '.82rem', fontWeight: 500 }}> · {t(p.label)}</span>
            </p>
          ))}
        </div>
      </Reveal>
      <Reveal as="a" delay={0.1} className="contact-card" href={`mailto:${COMPANY.email}`}>
        <span className="icon-badge"><Icon name="mail" size={22} /></span>
        <div><h4>{t('contact.email')}</h4><p>{COMPANY.email}</p></div>
      </Reveal>
      <Reveal as="a" delay={0.15} className="contact-card" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
        <span className="icon-badge" style={{ color: '#1da851' }}><Icon name="whatsapp" size={22} /></span>
        <div><h4>WhatsApp</h4><p className="ltr">{COMPANY.phones[0].display}</p></div>
      </Reveal>
      <Reveal delay={0.2} className="contact-card">
        <span className="icon-badge"><Icon name="clock" size={22} /></span>
        <div><h4>{t('contact.hours')}</h4><p>{t('contact.hoursValue')}</p></div>
      </Reveal>
    </div>
  );
}

export function Contact() {
  const { t } = useI18n();
  useMeta(t('contact.title'), t('contact.lead'));
  return (
    <>
      <PageHero title={t('contact.title')} lead={t('contact.lead')} crumbs={[{ label: t('nav.contact') }]} image="online-session.jpg" />
      <section className="section">
        <div className="container split" style={{ alignItems: 'start' }}>
          <div>
            <SectionHead eyebrow={t('contact.getInTouch')} title={t({ en: 'Let’s talk about your project', ar: 'لنتحدث عن مشروعك' })} lead={t('contact.text')} />
            <ContactCards />
            <Reveal style={{ marginTop: 26 }}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '.8rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>{t('contact.follow')}</h4>
              <div className="socials" style={{ marginTop: 12 }}>
                {[['facebook', COMPANY.social.facebook], ['instagram', COMPANY.social.instagram], ['whatsapp', whatsappLink()]].map(([n, href]) => (
                  <a key={n} href={href} target="_blank" rel="noopener noreferrer" aria-label={n} style={{ borderColor: 'var(--line)', color: 'var(--navy-800)' }}><Icon name={n} size={18} /></a>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal scale><ContactForm /></Reveal>
        </div>
      </section>
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal scale className="map-frame">
            <iframe
              title="Eaglelingua office map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function Quote() {
  const { t } = useI18n();
  useMeta(t('quote.title'), t('quote.lead'));
  const preset = new URLSearchParams(window.location.search).get('service') || '';
  return (
    <>
      <PageHero title={t('quote.title')} lead={t('quote.lead')} crumbs={[{ label: t('quote.title') }]} image="svc-certified.jpg" />
      <section className="section">
        <div className="container article-layout">
          <Reveal scale><QuoteForm defaultService={preset} /></Reveal>
          <aside className="sidebar">
            <div className="side-card dark">
              <h4>{t('quote.whyTitle')}</h4>
              <ol role="list" style={{ display: 'grid', gap: 16, marginTop: 16 }}>
                {t('quote.steps').map((s, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span className="step-num" style={{ width: 36, height: 36, fontSize: '1rem', margin: 0, boxShadow: 'none', background: 'transparent', color: 'var(--gold-300)', flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ color: 'rgba(255,255,255,.8)', fontSize: '.95rem', paddingTop: 5 }}>{t(s)}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="side-card">
              <span className="icon-badge" style={{ marginBottom: 14 }}><Icon name="document" size={22} /></span>
              <p>{t('quote.filesNote')}</p>
              <div style={{ display: 'grid', gap: 10, marginTop: 18 }}>
                <a className="btn btn-navy btn-block" href={whatsappLink('Hello, I would like a quote. I will attach my files here.')} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> {t('common.whatsapp')}</a>
                <a className="btn btn-outline btn-block" href={`mailto:${COMPANY.email}?subject=${encodeURIComponent('Quote request')}`}><Icon name="mail" size={18} /> {t('common.email')}</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

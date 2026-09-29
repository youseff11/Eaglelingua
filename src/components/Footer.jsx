import { useEffect, useState } from 'react';
import { COMPANY, whatsappLink } from '../data/company.js';
import { SERVICES } from '../data/services.js';
import { useI18n } from '../lib/i18n.jsx';
import { Link } from '../lib/router.jsx';
import { Logo } from './Header.jsx';
import Icon from './Icon.jsx';
import { ButtonLink, Reveal } from './ui.jsx';

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="section-tight">
      <div className="container">
        <Reveal scale className="cta-band">
          <span className="glow" />
          <div>
            <span className="eyebrow" style={{ color: 'var(--gold-400)' }}>{t(COMPANY.slogan)}</span>
            <h2 style={{ marginTop: 16 }}>{t('home.ctaTitle')}</h2>
            <p>{t('home.ctaText')}</p>
          </div>
          <div className="cta-actions">
            <ButtonLink to="/request-a-quote">{t('common.requestQuote')}</ButtonLink>
            <a className="btn btn-ghost" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} /> {t('common.whatsapp')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  const [done, setDone] = useState(false);
  const year = new Date().getFullYear();

  const subscribe = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');
    if (!email) return;
    if (COMPANY.formEndpoint) {
      fetch(COMPANY.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ email, subject: 'Newsletter subscription' }) }).catch(() => {});
    } else {
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent('Newsletter subscription')}&body=${encodeURIComponent('Please subscribe: ' + email)}`;
    }
    setDone(true);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-news">
          <div>
            <p className="kicker">{t('footer.newsletterText')}</p>
            <h3>{t('footer.newsletterTitle')}</h3>
          </div>
          {done ? (
            <p style={{ color: 'var(--gold-300)', fontWeight: 700 }}>{t('footer.newsletterDone')}</p>
          ) : (
            <form className="news-form" onSubmit={subscribe}>
              <label htmlFor="news-email" className="sr-only">{t('form.email')}</label>
              <input id="news-email" name="email" type="email" required placeholder={t('footer.newsletterPlaceholder')} />
              <button className="btn btn-gold btn-sm" type="submit">{t('footer.newsletterCta')} <Icon name="send" size={16} /></button>
            </form>
          )}
        </div>

        <div className="footer-main">
          <div>
            <Link to="/" className="brand" style={{ marginBottom: 20 }}><Logo height={48} /></Link>
            <p>{t('footer.about')}</p>
            <div className="socials">
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={18} /></a>
              <a href={`tel:${COMPANY.phones[0].tel}`} aria-label="Phone"><Icon name="phone" size={17} /></a>
            </div>
          </div>
          <div>
            <h5>{t('footer.quickLinks')}</h5>
            <div className="footer-links">
              <Link to="/about-us">{t('nav.about')}</Link>
              <Link to="/our-services">{t('nav.services')}</Link>
              <Link to="/testimonials">{t('nav.testimonials')}</Link>
              <Link to="/faq">{t('nav.faq')}</Link>
              <Link to="/blog">{t('nav.blog')}</Link>
              <Link to="/contact-us">{t('nav.contact')}</Link>
              <Link to="/request-a-quote">{t('nav.quote')}</Link>
            </div>
          </div>
          <div>
            <h5>{t('footer.services')}</h5>
            <div className="footer-links">
              {SERVICES.slice(0, 8).map((s) => <Link key={s.slug} to={`/${s.slug}`}>{t(s.title)}</Link>)}
            </div>
          </div>
          <div>
            <h5>{t('footer.contact')}</h5>
            <div className="footer-contact">
              <div><Icon name="pin" size={18} /><span>{t(COMPANY.address)}</span></div>
              {COMPANY.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`}><Icon name="phone" size={17} /><span className="ltr">{p.display}</span></a>
              ))}
              <a href={`mailto:${COMPANY.email}`}><Icon name="mail" size={18} /><span>{COMPANY.email}</span></a>
              <div><Icon name="clock" size={18} /><span>{t('contact.hoursValue')}</span></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {t(COMPANY.name)}. {t('footer.rights')}</span>
          <span className="slogan" style={{ color: 'var(--gold-400)' }}>“{t(COMPANY.slogan)}”</span>
        </div>
        <div className="footer-word" aria-hidden="true">Eaglelingua</div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const bar = document.querySelector('.progress-bar');
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
      setShow(window.scrollY > 700);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <>
      <div className="progress-bar" aria-hidden="true" />
      <div className="fab-stack">
        <button className={`fab fab-top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={t('common.backToTop')}>
          <Icon name="arrowUp" size={20} />
        </button>
        <a className="fab fab-wa" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label={t('common.whatsapp')}>
          <Icon name="whatsapp" size={28} />
        </a>
      </div>
    </>
  );
}

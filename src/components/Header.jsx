import { useEffect, useState } from 'react';
import { COMPANY, whatsappLink } from '../data/company.js';
import { localSrc, remoteSrc } from '../data/images.js';
import { SERVICES } from '../data/services.js';
import { useI18n } from '../lib/i18n.jsx';
import { Link, useRouter } from '../lib/router.jsx';
import Icon from './Icon.jsx';
import { useScrolled } from './ui.jsx';

export function Logo({ height }) {
  const [src, setSrc] = useState(localSrc('logo.png'));
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="brand-fallback">EAGLE<span className="gold-text">LINGUA</span></span>;
  return (
    <img
      src={src}
      alt="Eaglelingua Translation Services"
      width="154"
      height="50"
      style={height ? { height } : undefined}
      onError={() => (src !== remoteSrc('logo.png') ? setSrc(remoteSrc('logo.png')) : setFailed(true))}
    />
  );
}

const NAV = [
  { to: '/', key: 'nav.home' },
  { to: '/about-us', key: 'nav.about' },
  { to: '/our-services', key: 'nav.services', mega: true },
  { to: '/testimonials', key: 'nav.testimonials' },
  { to: '/faq', key: 'nav.faq' },
  { to: '/blog', key: 'nav.blog' },
  { to: '/contact-us', key: 'nav.contact' },
];

export default function Header({ solid = false }) {
  const { t, toggle, lang } = useI18n();
  const { path } = useRouter();
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const core = SERVICES.filter((s) => s.category === 'core');
  const specialized = SERVICES.filter((s) => s.category === 'specialized');

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${solid ? 'solid' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Eaglelingua — Home"><Logo /></Link>

          <nav className="nav" aria-label="Main">
            {NAV.map((n) =>
              n.mega ? (
                <div className="has-mega" key={n.to}>
                  <Link to={n.to} className="nav-link">
                    {t(n.key)} <Icon name="chevronDown" size={14} />
                  </Link>
                  <div className="mega" role="menu">
                    <div className="mega-col">
                      <div className="mega-title">{t('nav.coreServices')}</div>
                      {core.map((s) => (
                        <Link key={s.slug} to={`/${s.slug}`} className="mega-item" role="menuitem">
                          <Icon name={s.icon} size={18} /> {t(s.title)}
                        </Link>
                      ))}
                    </div>
                    <div className="mega-col">
                      <div className="mega-title">{t('nav.specializedServices')}</div>
                      {specialized.map((s) => (
                        <Link key={s.slug} to={`/${s.slug}`} className="mega-item" role="menuitem">
                          <Icon name={s.icon} size={18} /> {t(s.title)}
                        </Link>
                      ))}
                    </div>
                    <div className="mega-foot">
                      <span>{t('common.available')}</span>
                      <Link to="/our-services" className="link-arrow">{t('nav.allServices')} <Icon name="arrow" size={16} /></Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={n.to} to={n.to} className="nav-link">{t(n.key)}</Link>
              )
            )}
          </nav>

          <div className="header-actions">
            <button className="lang-btn" onClick={toggle} aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}>
              <Icon name="globe" size={16} />
              <span className={`lang-label ${lang === 'ar' ? 'lang-en' : 'lang-ar'}`}>{t('nav.langSwitch')}</span>
            </button>
            <Link to="/request-a-quote" className="btn btn-gold btn-sm btn-quote">{t('nav.quote')}</Link>
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label={t('nav.menu')} aria-expanded={open}>
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-backdrop" onClick={() => setOpen(false)} />
        <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label={t('nav.menu')}>
          <div className="drawer-head">
            <Link to="/" className="brand"><Logo height={40} /></Link>
            <button className="menu-btn" style={{ display: 'inline-flex' }} onClick={() => setOpen(false)} aria-label={t('nav.close')}>
              <Icon name="close" size={22} />
            </button>
          </div>
          <nav className="drawer-nav" aria-label="Mobile">
            {NAV.map((n) =>
              n.mega ? (
                <div key={n.to}>
                  <button className="drawer-link drawer-toggle" style={{ width: '100%' }} aria-expanded={subOpen} onClick={() => setSubOpen((v) => !v)}>
                    {t(n.key)} <Icon name="chevronDown" size={20} />
                  </button>
                  <div className={`drawer-sub ${subOpen ? 'open' : ''}`}>
                    <div>
                      <Link to="/our-services" className="drawer-sub-link" style={{ fontWeight: 700, color: 'var(--gold-300)' }}>{t('nav.allServices')}</Link>
                      <div className="drawer-sub-title">{t('nav.coreServices')}</div>
                      {core.map((s) => <Link key={s.slug} to={`/${s.slug}`}><Icon name={s.icon} size={16} />{t(s.title)}</Link>)}
                      <div className="drawer-sub-title">{t('nav.specializedServices')}</div>
                      {specialized.map((s) => <Link key={s.slug} to={`/${s.slug}`}><Icon name={s.icon} size={16} />{t(s.title)}</Link>)}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={n.to} to={n.to} className="drawer-link">{t(n.key)}</Link>
              )
            )}
          </nav>
          <div className="drawer-foot">
            <Link to="/request-a-quote" className="btn btn-gold btn-block">{t('nav.quote')}</Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-block"><Icon name="whatsapp" size={18} /> {t('common.whatsapp')}</a>
            <button className="btn btn-ghost btn-block" onClick={toggle}><Icon name="globe" size={18} /> {t('nav.langSwitch')}</button>
            <div className="drawer-contact">
              <a href={`mailto:${COMPANY.email}`}><Icon name="mail" size={16} /> {COMPANY.email}</a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

import { useEffect, useState } from 'react';
import { COMPANY, whatsappLink } from '../data/company.js';
import { localSrc, remoteSrc } from '../data/images.js';
import { SERVICES } from '../data/services.js';
import { useI18n } from '../lib/i18n.jsx';
import { Link, useRouter } from '../lib/router.jsx';
import Icon from './Icon.jsx';
import { Orbit, useScrolled } from './ui.jsx';

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
        <div className="container">
        <div className="navbar-shell">
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
              <span className={`lang-code ${lang === 'ar' ? 'lang-en' : 'lang-ar'}`}>{t('nav.langSwitchShort')}</span>
            </button>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm btn-quote">
              <Icon name="whatsapp" size={17} /> {t('common.whatsappShort')}
            </a>
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label={t('nav.menu')} aria-expanded={open}>
              <span className="burger" aria-hidden="true"><i /><i /><i /></span>
            </button>
          </div>
        </div>
        </div>
      </header>

      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label={t('nav.menu')} onClick={(e) => { if (e.target.closest('a')) setOpen(false); }}>
          <Orbit className="drawer-orbit" />
          <div className="drawer-head">
            <Link to="/" className="brand"><Logo height={38} /></Link>
            <div className="drawer-head-actions">
              <button className="drawer-lang" onClick={toggle} aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}>
                <Icon name="globe" size={15} />
                <span className={lang === 'ar' ? 'lang-en' : 'lang-ar'}>{t('nav.langSwitch')}</span>
              </button>
              <button className="drawer-close" onClick={() => setOpen(false)} aria-label={t('nav.close')}>
                <Icon name="close" size={20} />
              </button>
            </div>
          </div>

          <div className="drawer-body">
            <span className="drawer-kicker">{t('nav.menu')}</span>
            <nav className="drawer-nav" aria-label="Mobile">
              {NAV.map((n, i) =>
                n.mega ? (
                  <div key={n.to} className="drawer-item" style={{ '--i': i }}>
                    <button className="drawer-link drawer-toggle" aria-expanded={subOpen} onClick={() => setSubOpen((v) => !v)}>
                      <span className="dl-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="dl-label">{t(n.key)}</span>
                      <span className="dl-plus"><Icon name="plus" size={16} /></span>
                    </button>
                    <div className={`drawer-sub ${subOpen ? 'open' : ''}`}>
                      <div>
                        <div className="drawer-sub-inner">
                          <div className="drawer-sub-title">{t('nav.specializedServices')}</div>
                          <div className="drawer-sub-grid">
                            {specialized.map((s) => (
                              <Link key={s.slug} to={`/${s.slug}`} className="drawer-chip"><span className="chip-ic"><Icon name={s.icon} size={16} /></span>{t(s.title)}</Link>
                            ))}
                          </div>
                          <div className="drawer-sub-title">{t('nav.coreServices')}</div>
                          <div className="drawer-sub-grid">
                            {core.map((s) => (
                              <Link key={s.slug} to={`/${s.slug}`} className="drawer-chip"><span className="chip-ic"><Icon name={s.icon} size={16} /></span>{t(s.title)}</Link>
                            ))}
                          </div>
                          <Link to="/our-services" className="link-arrow drawer-all">{t('nav.allServices')} <Icon name="arrow" size={16} /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={n.to} className="drawer-item" style={{ '--i': i }}>
                    <Link to={n.to} className="drawer-link">
                      <span className="dl-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="dl-label">{t(n.key)}</span>
                      <Icon name="arrow" size={18} className="dl-arrow" />
                    </Link>
                  </div>
                )
              )}
            </nav>
          </div>

          <div className="drawer-foot">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-block"><Icon name="whatsapp" size={19} /> {t('common.whatsapp')}</a>
            <div className="drawer-quick">
              <a href={`tel:${COMPANY.phones[0].tel}`}><Icon name="phone" size={17} /><span>{t('common.call')}</span></a>
              <a href={`mailto:${COMPANY.email}`}><Icon name="mail" size={17} /><span>{t('common.email')}</span></a>
            </div>
            <div className="drawer-bottom">
              <div className="drawer-socials">
                <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" size={16} /></a>
                <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={17} /></a>
              </div>
              <span className="drawer-slogan">“{t(COMPANY.slogan)}”</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

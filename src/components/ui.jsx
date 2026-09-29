import { useEffect, useRef, useState } from 'react';
import { localSrc, remoteSrc } from '../data/images.js';
import { useI18n } from '../lib/i18n.jsx';
import { Link } from '../lib/router.jsx';
import Icon from './Icon.jsx';

/** Image that loads from /public/images and falls back to the original site if the file is missing. */
export function Img({ file, alt = '', className, eager = false, ...rest }) {
  const [src, setSrc] = useState(localSrc(file));
  const [failed, setFailed] = useState(false);
  useEffect(() => { setSrc(localSrc(file)); setFailed(false); }, [file]);
  const onError = () => {
    const remote = remoteSrc(file);
    if (src !== remote && remote) setSrc(remote);
    else setFailed(true);
  };
  if (failed) return <div className={`img-fallback ${className || ''}`} role="img" aria-label={alt} style={{ width: '100%', height: '100%' }} />;
  return <img src={src} alt={alt} className={className} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={onError} {...rest} />;
}

/** Fades/lifts its content in once it scrolls into view (state-driven, survives re-renders). */
export function Reveal({ as: Tag = 'div', delay = 0, scale = false, className = '', style, children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    if (!('IntersectionObserver' in window)) { setShown(true); return; }
    const io = new IntersectionObserver(
      ([en]) => { if (en.isIntersecting) { setShown(true); io.disconnect(); } },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);
  return (
    <Tag ref={ref} className={`${scale ? 'reveal-scale' : 'reveal'} ${shown ? 'in' : ''} ${className}`} style={{ '--d': `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

export function SectionHead({ eyebrow, title, lead, center = false, light = false, className = '' }) {
  return (
    <div className={`section-head ${center ? 'center' : ''} ${light ? 'on-dark' : ''} ${className}`}>
      {eyebrow && <Reveal as="span" className={`eyebrow ${center ? 'center' : ''}`}>{eyebrow}</Reveal>}
      <Reveal as="h2" className="h2" delay={0.05}>{title}</Reveal>
      {lead && <Reveal as="p" className="lead" delay={0.1}>{lead}</Reveal>}
    </div>
  );
}

export function Orbit({ className = 'hero-orbit' }) {
  return (
    <svg className={className} viewBox="0 0 600 600" aria-hidden="true">
      <defs>
        <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecd9a8" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#c9a45c" stopOpacity="0.25" />
          <stop offset="1" stopColor="#ecd9a8" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <g className="spin">
        <circle cx="300" cy="300" r="290" strokeWidth="1" strokeDasharray="2 10" />
        <circle cx="300" cy="10" r="4" fill="#c9a45c" stroke="none" />
      </g>
      <circle cx="300" cy="300" r="230" strokeWidth="1" />
      <g className="spin-rev">
        <circle cx="300" cy="300" r="170" strokeWidth="1" strokeDasharray="1 7" />
        <circle cx="470" cy="300" r="3" fill="#ecd9a8" stroke="none" />
      </g>
      <circle cx="300" cy="300" r="110" strokeWidth="0.8" />
      <path d="M10 300h580M300 10v580" stroke="url(#goldStroke)" strokeWidth="0.6" opacity="0.5" />
      <ellipse cx="300" cy="300" rx="290" ry="110" fill="none" stroke="url(#goldStroke)" strokeWidth="0.8" opacity="0.6" />
      <ellipse cx="300" cy="300" rx="110" ry="290" fill="none" stroke="url(#goldStroke)" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

export function PageHero({ title, lead, crumbs = [], image = 'about-cover.jpg' }) {
  const { t } = useI18n();
  return (
    <header className="page-hero">
      <div className="bg"><Img file={image} alt="" eager /></div>
      <Orbit />
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">{t('common.home')}</Link>
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: 'contents' }}>
              <span className="sep">/</span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="reveal in">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </header>
  );
}

export function ButtonLink({ to, variant = 'gold', children, icon = 'arrow', className = '', ...rest }) {
  return (
    <Link to={to} className={`btn btn-${variant} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} className={icon === 'arrow' ? 'icon-arrow' : ''} />}
    </Link>
  );
}

/** Set <title>, meta description & canonical per page. */
export function useMeta(title, description) {
  const { lang } = useI18n();
  useEffect(() => {
    const brand = lang === 'ar' ? 'إيجل لينجوا لخدمات الترجمة' : 'Eaglelingua Translation Services';
    document.title = title ? `${title} | ${brand}` : `${brand} — ${lang === 'ar' ? 'تحدَّث إلى العالم' : 'Talk to the World'}`;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m); }
      m.content = description;
    }
    let c = document.querySelector('link[rel="canonical"]');
    if (!c) { c = document.createElement('link'); c.rel = 'canonical'; document.head.appendChild(c); }
    c.href = window.location.origin + window.location.pathname;
  }, [title, description, lang]);
}

export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > offset);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [offset]);
  return scrolled;
}

export function useInterval(cb, ms, active = true) {
  const ref = useRef(cb);
  ref.current = cb;
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => ref.current(), ms);
    return () => clearInterval(id);
  }, [ms, active]);
}

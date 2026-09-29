import { useState } from 'react';
import { readingTime } from '../data/posts/index.js';
import { TESTIMONIALS } from '../data/testimonials.js';
import { formatDate, useI18n } from '../lib/i18n.jsx';
import { Link } from '../lib/router.jsx';
import Icon from './Icon.jsx';
import { Img, Reveal, useInterval } from './ui.jsx';

export function ServiceCard({ s, index, delay = 0 }) {
  const { t } = useI18n();
  return (
    <Reveal delay={delay} style={{ height: '100%' }}>
      <Link to={`/${s.slug}`} className="service-card" style={{ height: '100%' }}>
        <div className="media"><Img file={s.image} alt={t(s.title)} /></div>
        {index !== undefined && <span className="num">{String(index + 1).padStart(2, '0')}</span>}
        <div className="body">
          <div className="icon-wrap"><Icon name={s.icon} size={24} /></div>
          <h3>{t(s.title)}</h3>
          <p>{t(s.short)}</p>
          <span className="more">{t('common.learnMore')} <Icon name="arrow" size={16} /></span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServiceRow({ s, delay = 0 }) {
  const { t } = useI18n();
  return (
    <Reveal delay={delay}>
      <Link to={`/${s.slug}`} className="service-row">
        <span className="icon-badge"><Icon name={s.icon} size={24} /></span>
        <span>
          <h4>{t(s.title)}</h4>
          <p>{t(s.short)}</p>
        </span>
        <Icon name="arrow" size={20} className="arrow" />
      </Link>
    </Reveal>
  );
}

export function PostCard({ p, delay = 0, featured = false }) {
  const { t, lang } = useI18n();
  return (
    <Reveal delay={delay} className={featured ? 'span-all' : ''} style={{ height: '100%' }}>
      <Link to={`/${p.slug}`} className={`post-card ${featured ? 'post-featured' : ''}`}>
        <div className="thumb">
          <Img file={p.image} alt={t(p.title)} />
          <span className="tag">{t(p.tag)}</span>
        </div>
        <div className="content">
          <div className="post-meta">
            <span><Icon name="calendar" size={15} /> {formatDate(p.date, lang)}</span>
            <span><Icon name="book" size={15} /> {readingTime(p.body)} {t('common.minRead')}</span>
          </div>
          <h3>{t(p.title)}</h3>
          <p>{t(p.excerpt)}</p>
          <span className="link-arrow">{t('common.readMore')} <Icon name="arrow" size={16} /></span>
        </div>
      </Link>
    </Reveal>
  );
}

export function TestimonialSlider() {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = TESTIMONIALS.length;
  const go = (d) => setI((v) => (v + d + n) % n);
  useInterval(() => go(1), 7000, !paused);
  const item = TESTIMONIALS[i];
  const initials = t(item.role).split(' ').map((w) => w[0]).slice(0, 2).join('');

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="testi-card">
        <span className="quote-mark"><Icon name="quote" size={26} /></span>
        <div key={i} className="fade-swap">
          <div className="testi-stars" aria-label="5 / 5">{[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star" size={18} />)}</div>
          <blockquote className="testi-quote">“{t(item.quote)}”</blockquote>
          <div className="testi-author">
            <span className="testi-avatar" aria-hidden="true">{initials}</span>
            <div>
              <strong>{t(item.role)}</strong>
              <span>{t(item.sector)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="testi-controls">
        <button className="round-btn prev" onClick={() => go(-1)} aria-label="Previous"><Icon name="arrow" size={20} /></button>
        <button className="round-btn" onClick={() => go(1)} aria-label="Next"><Icon name="arrow" size={20} /></button>
        <div className="dots">
          {TESTIMONIALS.map((_, k) => (
            <button key={k} aria-label={`${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items, startOpen = 0 }) {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(startOpen);
  return (
    <div className="faq-list">
      {items.map((f, k) => {
        const isOpen = open === k;
        return (
          <Reveal key={k} delay={Math.min(k, 6) * 0.04} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-q" aria-expanded={isOpen} aria-controls={`faq-${k}`} onClick={() => setOpen(isOpen ? -1 : k)}>
              <span><span className="num">{String(k + 1).padStart(2, '0')}</span>{t(f.q)}</span>
              <span className="plus"><Icon name="plus" size={18} /></span>
            </button>
            <div className="faq-a" id={`faq-${k}`} role="region">
              <div><p lang={lang}>{t(f.a)}</p></div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

import { useMemo, useState } from 'react';
import { PostCard } from '../components/blocks.jsx';
import { CtaBand } from '../components/Footer.jsx';
import Icon from '../components/Icon.jsx';
import { ButtonLink, Img, PageHero, useMeta } from '../components/ui.jsx';
import { COMPANY, whatsappLink } from '../data/company.js';
import { parseBody, POSTS, readingTime } from '../data/posts/index.js';
import { formatDate, useI18n } from '../lib/i18n.jsx';
import { Link } from '../lib/router.jsx';

export function Blog() {
  const { t, lang } = useI18n();
  useMeta(t('blogPage.title'), t('blogPage.lead'));
  const tags = useMemo(() => {
    const seen = new Map();
    POSTS.forEach((p) => seen.set(p.tag.en, p.tag));
    return [...seen.values()];
  }, []);
  const [active, setActive] = useState(null);
  const list = active ? POSTS.filter((p) => p.tag.en === active) : POSTS;

  return (
    <>
      <PageHero title={t('blogPage.title')} lead={t('blogPage.lead')} crumbs={[{ label: t('nav.blog') }]} image="blog-legal-office.jpg" />
      <section className="section">
        <div className="container">
          <div className="filter-row" role="group" aria-label="Filter">
            <button className="chip" aria-pressed={!active} onClick={() => setActive(null)}>{t('blogPage.all')} · {POSTS.length}</button>
            {tags.map((tg) => (
              <button key={tg.en} className="chip" aria-pressed={active === tg.en} onClick={() => setActive(tg.en)}>{tg[lang] || tg.en}</button>
            ))}
          </div>
          <div className="post-grid" key={active || 'all'}>
            {list.map((p, i) => <PostCard key={p.slug} p={p} featured={!active && i === 0} delay={(i % 3) * 0.06} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function Block({ b }) {
  if (b.type === 'h2') return <h2>{b.text}</h2>;
  if (b.type === 'h3') return <h3>{b.text}</h3>;
  if (b.type === 'ul') return <ul>{b.items.map((it, i) => <li key={i}>{emph(it)}</li>)}</ul>;
  if (b.type === 'qa') return <div className="qa"><strong>{b.q}</strong>{b.a}</div>;
  return <p>{b.text}</p>;
}

// "Label: text" list items → bold label.
function emph(text) {
  const m = text.match(/^([^:]{2,60}):\s(.+)$/);
  if (!m) return text;
  return <><strong>{m[1]}:</strong> {m[2]}</>;
}

export function Post({ post: p }) {
  const { t, lang, isAr } = useI18n();
  useMeta(t(p.title), t(p.excerpt));
  const blocks = useMemo(() => parseBody(p.body), [p.body]);
  const related = POSTS.filter((x) => x.slug !== p.slug && x.tag.en === p.tag.en).concat(POSTS.filter((x) => x.slug !== p.slug && x.tag.en !== p.tag.en)).slice(0, 3);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title.en,
    datePublished: p.date,
    author: { '@type': 'Organization', name: 'Eaglelingua Translation Services' },
    publisher: { '@type': 'Organization', name: 'Eaglelingua Translation Services' },
    description: p.excerpt.en,
  };

  return (
    <>
      <header className="article-hero">
        <div className="pattern" />
        <div className="container" style={{ position: 'relative' }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">{t('common.home')}</Link><span className="sep">/</span>
            <Link to="/blog">{t('nav.blog')}</Link><span className="sep">/</span>
            <span>{t(p.tag)}</span>
          </nav>
          <h1>{t(p.title)}</h1>
          <div className="post-meta">
            <span><Icon name="calendar" size={16} /> {formatDate(p.date, lang)}</span>
            <span><Icon name="book" size={16} /> {readingTime(p.body)} {t('common.minRead')}</span>
            <span><Icon name="seal" size={16} /> {t(COMPANY.short)}</span>
          </div>
        </div>
        <div style={{ height: 'clamp(50px, 6vw, 80px)' }} />
      </header>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container article-cover">
        <div className="frame"><Img file={p.image} alt={t(p.title)} eager /></div>
      </div>

      <section className="section" style={{ paddingTop: 'clamp(40px, 5vw, 70px)' }}>
        <div className="container article-layout">
          <article>
            {isAr && <div className="en-note"><Icon name="globe" size={18} /> {t('blogPage.englishNote')}</div>}
            <div className="prose" lang="en">
              {blocks.map((b, i) => <Block key={i} b={b} />)}
            </div>
            <div style={{ marginTop: 44, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <ButtonLink to="/blog" variant="outline">{t('blogPage.back')}</ButtonLink>
              <a className="btn btn-outline" href={`https://wa.me/?text=${encodeURIComponent(p.title.en + ' ' + url)}`} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> {t('blogPage.share')}</a>
              <a className="btn btn-outline" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"><Icon name="facebook" size={18} /></a>
            </div>
          </article>

          <aside className="sidebar">
            <div className="side-card dark">
              <span className="icon-badge" style={{ marginBottom: 16 }}><Icon name="seal" size={22} /></span>
              <h4>{t('blogPage.needHelp')}</h4>
              <p>{t('blogPage.needHelpText')}</p>
              <div style={{ display: 'grid', gap: 10, marginTop: 20 }}>
                <ButtonLink to="/request-a-quote" className="btn-block">{t('common.requestQuote')}</ButtonLink>
                <a className="btn btn-ghost btn-block" href={whatsappLink(`About: ${p.title.en}`)} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> {t('common.whatsapp')}</a>
              </div>
            </div>
            <div className="side-card">
              <h4>{t('blogPage.related')}</h4>
              <div className="side-links">
                {related.map((r) => <Link key={r.slug} to={`/${r.slug}`}><span>{t(r.title)}</span> <Icon name="chevron" size={16} /></Link>)}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head"><span className="eyebrow">{t('home.blogEyebrow')}</span><h2 className="h2" style={{ marginTop: 16 }}>{t('blogPage.related')}</h2></div>
            <ButtonLink to="/blog" variant="outline">{t('common.viewAllPosts')}</ButtonLink>
          </div>
          <div className="post-grid">
            {related.map((r, i) => <PostCard key={r.slug} p={r} delay={i * 0.06} />)}
          </div>
        </div>
      </section>
    </>
  );
}

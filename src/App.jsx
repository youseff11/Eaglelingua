import { FloatingActions, Footer } from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { ButtonLink, useMeta } from './components/ui.jsx';
import { postBySlug } from './data/posts/index.js';
import { SERVICE_ALIASES, serviceBySlug } from './data/services.js';
import { useI18n } from './lib/i18n.jsx';
import { matchPath, useRouter } from './lib/router.jsx';
import About from './pages/About.jsx';
import { Blog, Post } from './pages/Blog.jsx';
import { Contact, Quote } from './pages/Contact.jsx';
import Faq from './pages/Faq.jsx';
import Home from './pages/Home.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Services from './pages/Services.jsx';
import Testimonials from './pages/Testimonials.jsx';

// Paths mirror the original WordPress URLs so existing links & SEO keep working.
const ROUTES = {
  '/': Home,
  '/about-us': About,
  '/our-services': Services,
  '/faq': Faq,
  '/testimonials': Testimonials,
  '/blog': Blog,
  '/contact-us': Contact,
  '/request-a-quote': Quote,
};

function NotFound() {
  const { t } = useI18n();
  useMeta(t('notFound.title'));
  return (
    <section className="nf">
      <div>
        <div className="code gold-text">404</div>
        <h1 className="h2" style={{ marginTop: 10 }}>{t('notFound.title')}</h1>
        <p className="lead" style={{ color: 'rgba(255,255,255,.7)', marginTop: 14 }}>{t('notFound.text')}</p>
        <div style={{ marginTop: 30 }}><ButtonLink to="/">{t('notFound.back')}</ButtonLink></div>
      </div>
    </section>
  );
}

function resolve(path) {
  if (ROUTES[path]) return { Page: ROUTES[path] };
  const m = matchPath('/:slug', path);
  if (m) {
    const slug = SERVICE_ALIASES[m.slug] || m.slug;
    const service = serviceBySlug(slug);
    if (service) return { Page: ServiceDetail, props: { service } };
    const post = postBySlug(m.slug);
    if (post) return { Page: Post, props: { post } };
  }
  // Legacy aliases
  const legacy = { '/services': '/our-services', '/about': '/about-us', '/contact': '/contact-us', '/quote': '/request-a-quote' };
  if (legacy[path]) return { Page: ROUTES[legacy[path]] };
  return { Page: NotFound, notFound: true };
}

export default function App() {
  const { path } = useRouter();
  const { lang } = useI18n();
  const { Page, props, notFound } = resolve(path);
  return (
    <>
      <a href="#main" className="skip-link">{lang === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
      <Header solid={notFound} />
      <main id="main" key={path + lang}>
        <Page {...props} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

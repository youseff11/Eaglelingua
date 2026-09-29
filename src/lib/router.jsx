// A tiny, dependency-free router (History API) — all this marketing site needs.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const RouterCtx = createContext({ path: '/', navigate: () => {} });

const normalize = (p) => {
  const clean = p.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
};

export function Router({ children }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to, { replace = false } = {}) => {
    const [target, hash] = to.split('#');
    const next = normalize(target || window.location.pathname);
    if (replace) window.history.replaceState({}, '', to);
    else window.history.pushState({}, '', to);
    setPath(next);
    requestAnimationFrame(() => {
      if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    });
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);
  return <RouterCtx.Provider value={value}>{children}</RouterCtx.Provider>;
}

export const useRouter = () => useContext(RouterCtx);

/** Match "/blog/:slug" against a path; returns params object or null. */
export function matchPath(pattern, path) {
  const pp = pattern.split('/').filter(Boolean);
  const ap = path.split('/').filter(Boolean);
  if (pp.length !== ap.length) return null;
  const params = {};
  for (let i = 0; i < pp.length; i++) {
    if (pp[i].startsWith(':')) params[pp[i].slice(1)] = decodeURIComponent(ap[i]);
    else if (pp[i] !== ap[i]) return null;
  }
  return params;
}

export function Link({ to, children, onClick, className, ...rest }) {
  const { navigate, path } = useRouter();
  const external = /^(https?:|mailto:|tel:)/.test(to);
  if (external) {
    return (
      <a href={to} className={className} target={to.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(to);
  };
  const active = normalize(to) === path || (to !== '/' && path.startsWith(normalize(to) + '/'));
  return (
    <a href={to} onClick={handle} className={className} aria-current={active ? 'page' : undefined} {...rest}>
      {children}
    </a>
  );
}

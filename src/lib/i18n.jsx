import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { STRINGS } from '../data/strings.js';

const I18nCtx = createContext(null);
const KEY = 'eagle-lang';

function initialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'ar' || q === 'en') return q;
    const saved = localStorage.getItem(KEY);
    if (saved === 'ar' || saved === 'en') return saved;
  } catch { /* storage unavailable */ }
  return (navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem(KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const setLang = useCallback((l) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === 'ar' ? 'en' : 'ar')), []);

  /** t('nav.home')  → UI string;  t({en, ar}) → pick the active language. */
  const t = useCallback(
    (key) => {
      if (key && typeof key === 'object') return key[lang] ?? key.en;
      const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), STRINGS);
      if (val && typeof val === 'object' && ('en' in val || 'ar' in val)) return val[lang] ?? val.en;
      return val ?? key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, toggle, t, isAr: lang === 'ar', dir: lang === 'ar' ? 'rtl' : 'ltr' }), [lang, setLang, toggle, t]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);

const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
export const formatDate = (iso, lang) =>
  new Date(iso + 'T12:00:00').toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
export const toArDigits = (s) => String(s).replace(/\d/g, (d) => AR_DIGITS[d]);

# Eaglelingua Translation Services — Website

Corporate website for **Eaglelingua Translation Services** built with **React 19 + Vite**.
Bilingual (English / العربية with full RTL), fully responsive, no backend required.

## التشغيل (Quick start)

```bash
npm install      # بيحمّل كمان كل صور الموقع القديم في public/images تلقائيًا
npm run dev      # http://localhost:5173
npm run build    # نسخة الرفع في فولدر dist + sitemap.xml
```

> Requires Node.js 18+.
> لو تحميل الصور فشل وقت الـ install (مشكلة نت)، شغّل: `npm run assets`. الموقع بيعرض الصور من الموقع القديم مؤقتًا لحد ما تتحمل.

## الرفع على Vercel

المشروع جاهز لـ Vercel (`vercel.json` فيه إعدادات Vite والـ rewrites والـ caching).

**مهم قبل الرفع:** شغّل `npm install` مرة على جهازك عشان الصور تتحمل في `public/images`، وارفعها مع المشروع.
لما الدومين `eaglelingua.com` يتنقل على Vercel، الموقع القديم هيقفل والصور مش هتتحمل منه تاني.

**الطريقة 1 — GitHub (المفضّلة):**
```bash
git init
git add .
git commit -m "Eaglelingua website"
git branch -M main
git remote add origin https://github.com/<username>/eagle-lingua.git
git push -u origin main
```
بعدها من vercel.com → Add New → Project → اختار الريبو → Deploy (الإعدادات هتتقري لوحدها من vercel.json).

**الطريقة 2 — Vercel CLI:**
```bash
npm i -g vercel
vercel          # أول مرة: اربط المشروع
vercel --prod   # رفع نسخة الإنتاج
```

**ربط الدومين:** Project → Settings → Domains → ضيف `eaglelingua.com` و`www.eaglelingua.com`، وعدّل الـ DNS عند شركة الدومين زي ما Vercel يقولك.

**متغيرات اختيارية** (Project → Settings → Environment Variables):
| المتغير | الاستخدام |
|---|---|
| `VITE_FORM_ENDPOINT` | رابط Formspree عشان النماذج توصل على الإيميل |
| `SITE_URL` | الدومين النهائي للـ sitemap (الافتراضي `https://www.eaglelingua.com`) |

> ملفات `.htaccess` و`_redirects` موجودة كمان لو حبيت ترفع على cPanel أو Netlify بعدين.

## النماذج (Forms)

من غير أي إعداد: نموذج التواصل وطلب عرض السعر بيفتحوا واتساب والرسالة جاهزة.
عشان توصلك على الإيميل: اعمل فورم مجاني على formspree.io، انسخ ملف `.env.example` باسم `.env` وحط الـ endpoint في `VITE_FORM_ENDPOINT`.

## تعديل المحتوى

| الملف | المحتوى |
|---|---|
| `src/data/company.js` | التليفونات، الإيميل، العنوان، السوشيال |
| `src/data/strings.js` | كل نصوص الصفحات بالعربي والإنجليزي |
| `src/data/services.js` | الخدمات الـ 11 |
| `src/data/faq.js` | الأسئلة الشائعة |
| `src/data/testimonials.js` | آراء العملاء |
| `src/data/posts/` | مقالات المدونة (14 مقال) |
| `src/data/images.js` | أسماء الصور ومصدرها |
| `src/styles/global.css` | الألوان والخطوط (المتغيرات في أول الملف) |

## Structure

```
src/
  lib/        router (dependency-free) + i18n (EN/AR, RTL)
  components/ Header, Footer, cards, forms, icons, UI helpers
  pages/      Home, About, Services, ServiceDetail, FAQ, Testimonials, Blog/Post, Contact/Quote
  data/       all content
scripts/      fetch-assets.mjs (images) · sitemap.mjs
```

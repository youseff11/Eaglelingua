import b1 from './bodies-1.js';
import b2 from './bodies-2.js';
import b3 from './bodies-3.js';

const BODIES = { ...b1, ...b2, ...b3 };

// Articles are published in English (original language); titles & summaries are bilingual.
const META = [
  {
    slug: 'translation-quality-assessment-proofreading-guide',
    date: '2026-04-23',
    image: 'blog-quality-assessment.jpg',
    tag: { en: 'Quality', ar: 'الجودة' },
    title: { en: 'Translation Quality Assessment & Proofreading Guide', ar: 'دليل تقييم جودة الترجمة والمراجعة اللغوية' },
    excerpt: {
      en: 'Strategic standards for ensuring accuracy in language projects — the five stages of professional quality assurance.',
      ar: 'معايير استراتيجية لضمان الدقة في المشاريع اللغوية، والمراحل الخمس لضمان الجودة الاحترافي.',
    },
  },
  {
    slug: 'importance-of-proofreading-in-ensuring-translation-quality',
    date: '2026-04-22',
    image: 'blog-proofreading.jpg',
    tag: { en: 'Quality', ar: 'الجودة' },
    title: { en: 'Importance of Proofreading in Ensuring Translation Quality', ar: 'أهمية المراجعة اللغوية في ضمان جودة الترجمة' },
    excerpt: {
      en: 'Why proofreading is the final line of defense that turns a good translation into an officially accepted one.',
      ar: 'لماذا تُعدّ المراجعة اللغوية خط الدفاع الأخير الذي يحوّل الترجمة الجيدة إلى ترجمة مقبولة رسميًا.',
    },
  },
  {
    slug: 'marriage-certificate-attestation-in-the-uae',
    date: '2026-04-21',
    image: 'blog-marriage-certificate.jpg',
    tag: { en: 'Attestation', ar: 'التصديق' },
    title: { en: 'Marriage Certificate Attestation in the UAE', ar: 'تصديق عقد الزواج في الإمارات' },
    excerpt: {
      en: 'A complete legal guide to the steps, documents, timelines and costs of attesting a marriage certificate.',
      ar: 'دليل قانوني شامل لخطوات تصديق عقد الزواج ومستنداته ومُدده وتكاليفه.',
    },
  },
  {
    slug: 'difference-between-certified-and-sworn-translation-in-the-uae',
    date: '2026-04-20',
    image: 'blog-certified-vs-sworn.jpg',
    tag: { en: 'Legal', ar: 'قانوني' },
    title: { en: 'Difference Between Certified and Sworn Translation in the UAE', ar: 'الفرق بين الترجمة المعتمدة والترجمة القانونية المحلّفة في الإمارات' },
    excerpt: {
      en: 'Your complete guide to choosing the right translation type so your documents are accepted the first time.',
      ar: 'دليلك الكامل لاختيار نوع الترجمة المناسب لتُقبَل مستنداتك من المرة الأولى.',
    },
  },
  {
    slug: 'birth-certificate-attestation-in-dubai-the-uae-2026',
    date: '2026-04-19',
    image: 'blog-birth-certificate.jpg',
    tag: { en: 'Attestation', ar: 'التصديق' },
    title: { en: 'Birth Certificate Attestation in Dubai & the UAE (2026)', ar: 'تصديق شهادة الميلاد في دبي والإمارات (2026)' },
    excerpt: {
      en: 'Steps, requirements and the fastest legal methods to attest a birth certificate in the UAE.',
      ar: 'الخطوات والمتطلبات وأسرع الطرق القانونية لتصديق شهادة الميلاد في الإمارات.',
    },
  },
  {
    slug: 'a-guide-to-localizing-financial-and-annual-reports-in-the-uae',
    date: '2026-04-18',
    image: 'dictionary.jpg',
    tag: { en: 'Finance', ar: 'مالي' },
    title: { en: 'A Guide to Localizing Financial and Annual Reports in the UAE', ar: 'دليل توطين التقارير المالية والسنوية في الإمارات' },
    excerpt: {
      en: 'How accurate Arabic financial reporting builds investor confidence and regulatory compliance.',
      ar: 'كيف تبني التقارير المالية العربية الدقيقة ثقة المستثمرين وتضمن الامتثال التنظيمي.',
    },
  },
  {
    slug: 'safe-investment-guide-the-importance-of-professional-translation-of-contracts-and-commercial-agreements-to-avoid-legal-loopholes-in-the-uae',
    date: '2026-04-17',
    image: 'blog-safe-investment.jpg',
    tag: { en: 'Legal', ar: 'قانوني' },
    title: {
      en: 'Safe Investment Guide: Professional Translation of Contracts and Commercial Agreements in the UAE',
      ar: 'دليل الاستثمار الآمن: الترجمة الاحترافية للعقود والاتفاقيات التجارية في الإمارات',
    },
    excerpt: {
      en: 'How professional contract translation shields your business from legal loopholes and costly disputes.',
      ar: 'كيف تحمي الترجمة الاحترافية للعقود أعمالك من الثغرات القانونية والنزاعات المكلفة.',
    },
  },
  {
    slug: 'certified-translation-for-incorporation-documents-in-the-uae',
    date: '2026-04-16',
    image: 'svc-legal.jpg',
    tag: { en: 'Business Setup', ar: 'تأسيس الشركات' },
    title: { en: 'Certified Translation for Incorporation Documents in the UAE', ar: 'الترجمة المعتمدة لمستندات تأسيس الشركات في الإمارات' },
    excerpt: {
      en: 'The first step to successfully launching your company — MOA, board resolutions, POAs and more.',
      ar: 'الخطوة الأولى لإطلاق شركتك بنجاح: عقود التأسيس وقرارات مجلس الإدارة والوكالات وغيرها.',
    },
  },
  {
    slug: 'app-and-website-localization-ultimate-guide-to-reaching-the-uae-audience-and-dominating-the-local-market',
    date: '2026-04-15',
    image: 'blog-app-localization.jpg',
    tag: { en: 'Localization', ar: 'التوطين' },
    title: { en: 'App and Website Localization: Ultimate Guide to Reaching the UAE Audience', ar: 'توطين التطبيقات والمواقع: الدليل الشامل للوصول إلى الجمهور الإماراتي' },
    excerpt: {
      en: 'Transform your product from a “translated foreign app” into a trusted local solution.',
      ar: 'حوّل منتجك من «تطبيق أجنبي مترجَم» إلى حل محلي موثوق.',
    },
  },
  {
    slug: 'technical-manuals-and-operating-guides-translation',
    date: '2026-04-14',
    image: 'blog-technical-manuals.jpg',
    tag: { en: 'Technical', ar: 'تقني' },
    title: { en: 'Technical Manuals and Operating Guides Translation', ar: 'ترجمة الأدلة الفنية وإرشادات التشغيل' },
    excerpt: {
      en: 'A comprehensive guide to safety and precision standards in the UAE industrial sector.',
      ar: 'دليل شامل لمعايير السلامة والدقة في القطاع الصناعي الإماراتي.',
    },
  },
  {
    slug: 'certified-legal-translation-office-in-the-uae',
    date: '2026-04-13',
    image: 'blog-legal-office.jpg',
    tag: { en: 'Legal', ar: 'قانوني' },
    title: { en: 'Certified Legal Translation Office in the UAE', ar: 'مكتب ترجمة قانونية معتمد في الإمارات' },
    excerpt: {
      en: 'Fast translation for all documents at the best prices to ensure official acceptance of your papers.',
      ar: 'ترجمة سريعة لجميع المستندات بأفضل الأسعار لضمان القبول الرسمي لأوراقك.',
    },
  },
  {
    slug: 'website-localization-and-commercial-contract-translation-guide-in-ras-al-khaimah',
    date: '2026-04-12',
    image: 'blog-ras-al-khaimah.jpg',
    tag: { en: 'Localization', ar: 'التوطين' },
    title: { en: 'Website Localization and Commercial Contract Translation Guide in Ras Al Khaimah', ar: 'دليل توطين المواقع وترجمة العقود التجارية في رأس الخيمة' },
    excerpt: {
      en: 'How to dominate the local market and achieve investment excellence in Ras Al Khaimah.',
      ar: 'كيف تتصدّر السوق المحلي وتحقق التميّز الاستثماري في رأس الخيمة.',
    },
  },
  {
    slug: 'certified-translation-guide-for-medical-reports-in-al-ain-city',
    date: '2026-04-11',
    image: 'blog-al-ain-medical.jpg',
    tag: { en: 'Medical', ar: 'طبي' },
    title: { en: 'Certified Translation Guide for Medical Reports in Al Ain City', ar: 'دليل الترجمة المعتمدة للتقارير الطبية في مدينة العين' },
    excerpt: {
      en: 'How to ensure diagnostic accuracy and acceptance of your documents by hospitals and insurers.',
      ar: 'كيف تضمن دقة التشخيص وقبول مستنداتك لدى المستشفيات وشركات التأمين.',
    },
  },
  {
    slug: 'guide-to-translating-real-estate-contracts-and-company-formation-in-sharjah-aljada',
    date: '2026-04-10',
    image: 'blog-sharjah-aljada.jpg',
    tag: { en: 'Real Estate', ar: 'عقارات' },
    title: { en: 'Guide to Translating Real Estate Contracts and Company Formation in Sharjah (Aljada)', ar: 'دليل ترجمة العقود العقارية وتأسيس الشركات في الشارقة (الجادة)' },
    excerpt: {
      en: 'How to invest in the heart of the UAE’s new business hub with legal security.',
      ar: 'كيف تستثمر في قلب مركز الأعمال الجديد في الإمارات بأمان قانوني.',
    },
  },
];

export const POSTS = META.map((m) => ({ ...m, body: BODIES[m.slug] || '' }));
export const postBySlug = (slug) => POSTS.find((p) => p.slug === slug);

/** Parse the lightweight article markup into blocks. */
export function parseBody(body) {
  const blocks = [];
  let list = null;
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('- ')) {
      if (!list) { list = { type: 'ul', items: [] }; blocks.push(list); }
      list.items.push(line.slice(2));
      continue;
    }
    list = null;
    if (line.startsWith('### ')) blocks.push({ type: 'h3', text: line.slice(4) });
    else if (line.startsWith('## ')) blocks.push({ type: 'h2', text: line.slice(3) });
    else if (/^Q\d?:/.test(line) && line.includes(' A: ')) {
      const [q, a] = line.replace(/^Q\d?:\s*/, '').split(' A: ');
      blocks.push({ type: 'qa', q, a });
    } else blocks.push({ type: 'p', text: line });
  }
  return blocks;
}

export const readingTime = (body) => Math.max(3, Math.round(body.split(/\s+/).length / 220));

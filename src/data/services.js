// All services from the original site, bilingual. Slugs keep the original URLs (e.g. /legal-translation).
export const SERVICES = [
  // ───────────── Core language solutions ─────────────
  {
    slug: 'document-translation-services',
    category: 'core',
    icon: 'document',
    image: 'svc-document.jpg',
    title: { en: 'Document Translation Services', ar: 'ترجمة المستندات' },
    short: {
      en: 'Precise, context-aware translation that preserves the meaning, integrity and formatting of every document.',
      ar: 'ترجمة دقيقة وواعية بالسياق تحافظ على معنى كل مستند وسلامته وتنسيقه الأصلي.',
    },
    intro: {
      en: [
        'At Eaglelingua Translation Services, we know that accurate document translation is more than converting words — it’s about maintaining the integrity, meaning and cultural nuances of your content. In today’s globalized world, professional, reliable and high-quality translation is essential and that’s where we excel.',
        'Our services are designed for individuals, businesses, institutions and organizations needing precise, context-aware translations. Whether expanding into new markets, submitting legal documents, publishing research or localizing content for international audiences, Eaglelingua Translation Services is your trusted partner.',
      ],
      ar: [
        'في إيجل لينجوا لخدمات الترجمة ندرك أن ترجمة المستندات بدقة تتجاوز مجرد نقل الكلمات؛ فهي حفاظ على سلامة المحتوى ومعناه وفروقه الثقافية الدقيقة. وفي عالم اليوم المترابط أصبحت الترجمة الاحترافية الموثوقة عالية الجودة ضرورة لا غنى عنها، وهذا تحديدًا ما نتميّز به.',
        'صُمّمت خدماتنا للأفراد والشركات والمؤسسات والجهات التي تحتاج إلى ترجمات دقيقة تراعي السياق. سواء كنت تتوسع في أسواق جديدة، أو تقدّم مستندات قانونية، أو تنشر بحثًا علميًا، أو توطّن محتواك لجمهور دولي، فإيجل لينجوا شريكك الموثوق.',
      ],
    },
    features: {
      en: ['Certified human translators only', 'Accurate and consistent terminology', 'Fast turnaround times', 'Confidential and secure handling', 'Culturally adapted content', 'Preserves original formatting', 'Affordable transparent pricing', 'Urgent translation available', 'Supports 50+ languages', 'Industry-specific translation', 'Free proofreading included', 'Official use certification available'],
      ar: ['مترجمون بشريون معتمدون فقط', 'مصطلحات دقيقة ومتسقة', 'سرعة في التسليم', 'تعامل سري وآمن مع الملفات', 'محتوى مُكيَّف ثقافيًا', 'الحفاظ على التنسيق الأصلي', 'أسعار مناسبة وشفافة', 'خدمة الترجمة العاجلة', 'أكثر من 50 لغة', 'ترجمة متخصصة حسب المجال', 'مراجعة لغوية مجانية', 'إمكانية التصديق للاستخدام الرسمي'],
    },
  },
  {
    slug: 'certified-translation',
    category: 'core',
    icon: 'seal',
    image: 'svc-certified.jpg',
    title: { en: 'Certified Translation', ar: 'الترجمة المعتمدة' },
    short: {
      en: 'Officially certified translations accepted by embassies, courts, universities and government agencies.',
      ar: 'ترجمات معتمدة رسميًا تقبلها السفارات والمحاكم والجامعات والجهات الحكومية.',
    },
    intro: {
      en: [
        'At Eaglelingua Translation Services, we provide fully certified translations suitable for submission to official authorities, institutions and organizations. Our translations comply with the formal requirements of embassies, courts, universities, immigration offices and government agencies — both locally and internationally.',
        'Each certified translation is prepared by qualified professional translators and comes with a signed statement confirming its accuracy and completeness. This certification ensures that the translated document faithfully represents the original, making it fully valid for official and legal purposes.',
      ],
      ar: [
        'نقدّم في إيجل لينجوا ترجمات معتمدة بالكامل صالحة للتقديم إلى الجهات الرسمية والمؤسسات والهيئات. وتلتزم ترجماتنا بالمتطلبات الرسمية للسفارات والمحاكم والجامعات ومكاتب الهجرة والجهات الحكومية محليًا ودوليًا.',
        'يُعِدّ كل ترجمة معتمدة مترجمون محترفون مؤهلون، وتُرفق بإقرار موقَّع يؤكد دقتها واكتمالها. ويضمن هذا الاعتماد أن المستند المترجم يطابق الأصل بأمانة، ليصبح صالحًا تمامًا للأغراض الرسمية والقانونية.',
      ],
    },
    features: {
      en: ['Legally recognized translations', 'Accepted by official authorities', 'Signed accuracy statement included', 'Suitable for immigration & courts', 'For academic and legal documents', 'Certified by professional translators', 'Optional notarization available', 'Fast and reliable delivery', 'Multilingual document support', 'Secure and confidential process', 'Free proofreading included', 'Official use certification available'],
      ar: ['ترجمات معترف بها قانونيًا', 'مقبولة لدى الجهات الرسمية', 'إقرار دقة موقَّع مع كل ترجمة', 'مناسبة للهجرة والمحاكم', 'للمستندات الأكاديمية والقانونية', 'معتمدة من مترجمين محترفين', 'إمكانية التوثيق لدى كاتب العدل', 'تسليم سريع وموثوق', 'دعم المستندات متعددة اللغات', 'إجراءات آمنة وسرية', 'مراجعة لغوية مجانية', 'إمكانية التصديق للاستخدام الرسمي'],
    },
  },
  {
    slug: 'interpretation-services',
    category: 'core',
    icon: 'mic',
    image: 'svc-interpretation.jpg',
    title: { en: 'Interpretation Services', ar: 'خدمات الترجمة الفورية' },
    short: {
      en: 'Simultaneous and consecutive interpreters for meetings, conferences, legal and medical settings — remote or on-site.',
      ar: 'مترجمون فوريون (فوري وتتابعي) للاجتماعات والمؤتمرات والجلسات القانونية والطبية — عن بُعد أو في الموقع.',
    },
    intro: {
      en: [
        'When the conversation is happening live, there is no room for misunderstanding. Our Interpretation Services provide real-time language communication for meetings, conferences, negotiations, events, legal proceedings and medical appointments — so every participant is heard and understood.',
        'At Eaglelingua Translation Services, our trained professional interpreters combine linguistic accuracy with subject-matter expertise, offering simultaneous and consecutive interpretation, remotely or on-site, with complete confidentiality and flexible, fast scheduling.',
      ],
      ar: [
        'حين يدور الحوار مباشرةً لا مجال لأي سوء فهم. تتيح خدمات الترجمة الفورية لدينا تواصلًا لغويًا لحظيًا في الاجتماعات والمؤتمرات والمفاوضات والفعاليات والإجراءات القانونية والمواعيد الطبية، ليُسمَع كل مشارك ويُفهَم بوضوح.',
        'يجمع مترجمونا الفوريون المحترفون في إيجل لينجوا بين الدقة اللغوية والخبرة المتخصصة، ونقدّم الترجمة الفورية والتتابعية عن بُعد أو في الموقع، بسرية تامة ومواعيد مرنة وسريعة.',
      ],
    },
    features: {
      en: ['Real-time language communication', 'Simultaneous and consecutive options', 'Remote or on-site availability', 'Specialized in key industries', 'Multilingual interpreter support', 'Trained professional interpreters', 'Confidential and secure service', 'Ideal for legal or medical use', 'Supports events and meetings', 'Flexible and fast scheduling'],
      ar: ['تواصل لغوي لحظي', 'ترجمة فورية وتتابعية', 'متاحة عن بُعد أو في الموقع', 'تخصص في القطاعات الرئيسية', 'مترجمون فوريون بلغات متعددة', 'مترجمون فوريون مدرَّبون ومحترفون', 'خدمة سرية وآمنة', 'مثالية للاستخدام القانوني والطبي', 'تغطية الفعاليات والاجتماعات', 'جدولة مرنة وسريعة'],
    },
  },
  {
    slug: 'multimedia-translation-services',
    category: 'core',
    icon: 'play',
    image: 'svc-multimedia.jpg',
    title: { en: 'Multimedia Translation Services', ar: 'ترجمة الوسائط المتعددة' },
    short: {
      en: 'Subtitling, voice-over and dubbing that carry your videos, audio and e-learning to any language.',
      ar: 'ترجمة الفيديو والترجمة المصاحبة والتعليق الصوتي والدبلجة لنقل محتواك المرئي والمسموع إلى أي لغة.',
    },
    intro: {
      en: [
        'In today’s digital world, content is more visual and interactive than ever and reaching global audiences requires more than simple subtitles. Our Multimedia Translation Services ensure that your videos, audio files, presentations, animations and interactive materials are translated accurately, culturally adapted and professionally produced in any language.',
        'At Eaglelingua Translation Services, we combine linguistic accuracy with technical expertise to help businesses, media creators, educators and organizations localize multimedia content for international audiences — while maintaining its original meaning, tone and impact.',
      ],
      ar: [
        'في عالمنا الرقمي أصبح المحتوى أكثر بصريةً وتفاعلًا من أي وقت مضى، والوصول إلى جمهور عالمي يتطلب أكثر من مجرد ترجمة نصية بسيطة. تضمن خدمات ترجمة الوسائط المتعددة لدينا ترجمة مقاطع الفيديو والملفات الصوتية والعروض التقديمية والرسوم المتحركة والمواد التفاعلية بدقة، مع تكييفها ثقافيًا وإنتاجها باحترافية بأي لغة.',
        'في إيجل لينجوا نجمع بين الدقة اللغوية والخبرة التقنية لمساعدة الشركات وصنّاع المحتوى والمعلمين والمؤسسات على توطين محتواهم المرئي والمسموع لجمهور دولي، مع الحفاظ على معناه الأصلي ونبرته وتأثيره.',
      ],
    },
    features: {
      en: ['Subtitles with perfect timing', 'Professional voiceover and dubbing', 'Culturally adapted content', 'Native-speaking voice talents', 'Accurate audio transcription', 'Multi-format file support', 'High-quality video integration', 'E-learning and training ready', 'Fast and scalable delivery', 'Industry-specific terminology'],
      ar: ['ترجمة مصاحبة بتوقيت مثالي', 'تعليق صوتي ودبلجة احترافية', 'محتوى مُكيَّف ثقافيًا', 'أصوات لمتحدثين أصليين', 'تفريغ صوتي دقيق', 'دعم صيغ ملفات متعددة', 'دمج عالي الجودة مع الفيديو', 'جاهزة للتعليم الإلكتروني والتدريب', 'تسليم سريع وقابل للتوسع', 'مصطلحات متخصصة حسب المجال'],
    },
  },
  {
    slug: 'transcription-service',
    category: 'core',
    icon: 'wave',
    image: 'svc-transcription.jpg',
    title: { en: 'Transcription Service', ar: 'خدمة التفريغ النصي' },
    short: {
      en: 'Human-generated transcripts of meetings, interviews, lectures and proceedings — verbatim or clean, time-stamped on request.',
      ar: 'تفريغ نصي بشري للاجتماعات والمقابلات والمحاضرات والجلسات — حرفي أو منقّح، مع توقيت زمني عند الطلب.',
    },
    intro: {
      en: [
        'Our Transcription Services convert spoken content into clear, accurate and professionally formatted written text. Whether it’s a business meeting, interview, webinar, podcast, lecture or legal proceeding, we deliver precise transcripts that capture every word with full attention to detail, context and clarity.',
        'At Eaglelingua Translation Services, we work with clients from various industries — including media, education, legal, medical and corporate sectors. Our skilled transcribers manage a wide range of audio and video formats, providing transcripts tailored to your needs — whether verbatim, summarized, time-stamped or speaker-identified.',
      ],
      ar: [
        'تحوّل خدمة التفريغ النصي لدينا المحتوى المنطوق إلى نص مكتوب واضح ودقيق ومنسّق باحترافية. سواء كان اجتماع عمل أو مقابلة أو ندوة إلكترونية أو بودكاست أو محاضرة أو جلسة قانونية، نسلّمك نصوصًا دقيقة تلتقط كل كلمة مع عناية كاملة بالتفاصيل والسياق والوضوح.',
        'نعمل في إيجل لينجوا مع عملاء من قطاعات متعددة تشمل الإعلام والتعليم والقانون والطب والشركات. ويتعامل فريقنا المتمرّس مع طيف واسع من صيغ الصوت والفيديو، ويقدّم نصوصًا مصمَّمة وفق احتياجك: حرفية أو ملخّصة أو بتوقيت زمني أو مع تحديد المتحدثين.',
      ],
    },
    features: {
      en: ['Human-generated accurate transcripts', 'Supports audio and video files', 'Verbatim or clean format', 'Time-stamps on request', 'Multilingual transcription available', 'Fast and on-time delivery', 'Confidential and secure handling', 'Legal and medical expertise', 'Custom formatting options', 'Affordable and transparent pricing'],
      ar: ['تفريغ بشري دقيق', 'دعم ملفات الصوت والفيديو', 'صيغة حرفية أو منقّحة', 'توقيت زمني عند الطلب', 'تفريغ بلغات متعددة', 'تسليم سريع وفي الموعد', 'تعامل سري وآمن', 'خبرة قانونية وطبية', 'خيارات تنسيق مخصصة', 'أسعار مناسبة وشفافة'],
    },
  },
  {
    slug: 'website-app-localization',
    category: 'core',
    icon: 'globe',
    image: 'svc-localization.jpg',
    title: { en: 'Website & App Localization', ar: 'توطين المواقع والتطبيقات' },
    short: {
      en: 'Adapt your website or app — content, interface and experience — for every language, culture and market.',
      ar: 'تكييف موقعك أو تطبيقك — المحتوى والواجهة والتجربة — لكل لغة وثقافة وسوق.',
    },
    intro: {
      en: [
        'Your website or app is your digital storefront and limiting it to one language restricts your global reach. Our Website & App Localization Services go beyond translation to adapt your content, interface and user experience for different languages, cultures and markets.',
        'At Eaglelingua Translation Services, we help you connect with users worldwide by localizing your web and mobile platforms with accuracy, cultural insight and technical expertise. We maintain your brand voice while ensuring content feels authentic and relevant for each local audience.',
      ],
      ar: [
        'موقعك الإلكتروني أو تطبيقك هو واجهتك الرقمية، وحصره في لغة واحدة يحدّ من انتشارك عالميًا. تتجاوز خدمات توطين المواقع والتطبيقات لدينا حدود الترجمة لتكييف المحتوى والواجهة وتجربة المستخدم مع مختلف اللغات والثقافات والأسواق.',
        'نساعدك في إيجل لينجوا على التواصل مع المستخدمين حول العالم عبر توطين منصاتك على الويب والجوال بدقة ووعي ثقافي وخبرة تقنية، مع الحفاظ على صوت علامتك التجارية وضمان أن يبدو المحتوى أصيلًا وملائمًا لكل جمهور محلي.',
      ],
    },
    features: {
      en: ['Culturally adapted user content', 'Native-language UI translation', 'Supports websites and mobile apps', 'Multilingual SEO optimization', 'Seamless CMS integration', 'Layout and format adaptation', 'Accurate technical terminology', 'Functional and linguistic testing', 'Scalable for global audiences', 'Fast, reliable localization delivery'],
      ar: ['محتوى مُكيَّف ثقافيًا للمستخدم', 'ترجمة الواجهة بلغة المستخدم الأم', 'للمواقع وتطبيقات الجوال', 'تحسين محركات البحث بعدة لغات', 'تكامل سلس مع أنظمة إدارة المحتوى', 'تكييف التخطيط والتنسيق', 'مصطلحات تقنية دقيقة', 'اختبار وظيفي ولغوي', 'قابلة للتوسع لجمهور عالمي', 'تسليم سريع وموثوق'],
    },
  },

  // ───────────── Specialized translation ─────────────
  {
    slug: 'embassies-document-translation',
    category: 'specialized',
    icon: 'passport',
    image: 'svc-embassies.jpg',
    title: { en: 'Embassies Document Translation', ar: 'ترجمة مستندات السفارات' },
    short: {
      en: 'Embassy-approved translations for visas, study, work and immigration — meeting strict consular standards.',
      ar: 'ترجمات معتمدة لدى السفارات للتأشيرات والدراسة والعمل والهجرة، وفق أدق المعايير القنصلية.',
    },
    intro: {
      en: [
        'At Eaglelingua Translation Services, we understand that translating documents for embassy submissions requires more than just converting text — it’s about ensuring accuracy, legal compliance and preserving the original meaning. Whether for visas, study, work or immigration, these translations must meet strict embassy standards.',
        'Our embassy translation services are tailored for individuals, businesses and institutions needing precise and officially recognized translations. Whether submitting passports, certificates, academic records or legal papers, Eaglelingua Translation Services is your trusted partner for reliable and professional embassy document translation.',
      ],
      ar: [
        'ندرك في إيجل لينجوا أن ترجمة المستندات المقدَّمة إلى السفارات تتطلب أكثر من نقل النص؛ فهي تعني الدقة والامتثال القانوني والحفاظ على المعنى الأصلي. وسواء كانت للتأشيرة أو الدراسة أو العمل أو الهجرة، فلا بد أن تستوفي هذه الترجمات معايير السفارات الصارمة.',
        'صُمّمت خدماتنا لترجمة مستندات السفارات للأفراد والشركات والمؤسسات التي تحتاج إلى ترجمات دقيقة ومعترف بها رسميًا. سواء كنت تقدّم جوازات سفر أو شهادات أو سجلات أكاديمية أو أوراقًا قانونية، فإيجل لينجوا شريكك الموثوق.',
      ],
    },
    features: {
      en: ['Certified human translators only', 'Accurate and consistent terminology', 'Fast turnaround times', 'Confidential and secure handling', 'Culturally adapted content', 'Preserves original formatting', 'Affordable transparent pricing', 'Urgent translation available', 'Supports 50+ languages', 'Embassy-approved translations', 'Free proofreading included', 'Official use certification available'],
      ar: ['مترجمون بشريون معتمدون فقط', 'مصطلحات دقيقة ومتسقة', 'سرعة في التسليم', 'تعامل سري وآمن مع الملفات', 'محتوى مُكيَّف ثقافيًا', 'الحفاظ على التنسيق الأصلي', 'أسعار مناسبة وشفافة', 'خدمة الترجمة العاجلة', 'أكثر من 50 لغة', 'ترجمات معتمدة لدى السفارات', 'مراجعة لغوية مجانية', 'إمكانية التصديق للاستخدام الرسمي'],
    },
  },
  {
    slug: 'legal-translation',
    category: 'specialized',
    icon: 'scale',
    image: 'svc-legal.jpg',
    title: { en: 'Legal Translation', ar: 'الترجمة القانونية' },
    short: {
      en: 'Contracts, court documents, corporate papers and certificates translated with legal precision and full confidentiality.',
      ar: 'ترجمة العقود ومستندات المحاكم وأوراق الشركات والشهادات بدقة قانونية وسرية تامة.',
    },
    intro: {
      en: [
        'At Eaglelingua Translation Services, we understand that legal documents demand the highest levels of accuracy, confidentiality and precision. Translating contracts, agreements, court documents and corporate papers requires specialized knowledge of legal terminology and strict attention to detail.',
        'Our legal translation services are designed for individuals, law firms and businesses seeking reliable and professional translations. Whether it’s contracts, certificates, judgments or compliance documents, Eaglelingua Translation Services ensures every translation is precise, legally sound and fully trustworthy.',
      ],
      ar: [
        'ندرك في إيجل لينجوا أن المستندات القانونية تتطلب أعلى درجات الدقة والسرية والإتقان. فترجمة العقود والاتفاقيات ومستندات المحاكم وأوراق الشركات تحتاج إلى معرفة متخصصة بالمصطلحات القانونية واهتمام صارم بالتفاصيل.',
        'صُمّمت خدمات الترجمة القانونية لدينا للأفراد ومكاتب المحاماة والشركات الباحثة عن ترجمات احترافية موثوقة. سواء كانت عقودًا أو شهادات أو أحكامًا أو مستندات امتثال، نضمن أن تكون كل ترجمة دقيقة وسليمة قانونيًا وجديرة بالثقة الكاملة.',
      ],
    },
    documents: {
      en: ['Memorandum of Association', 'Articles of Association', 'Employment Contracts', 'Codes of Conduct', 'Legal Documents', 'Certificates', 'Marriage Contracts', 'Tenders & Bids', 'Court Documents', 'Judgments and Deeds', 'Academic Documents'],
      ar: ['عقود التأسيس', 'النظام الأساسي للشركات', 'عقود العمل', 'مدونات السلوك', 'المستندات القانونية', 'الشهادات', 'عقود الزواج', 'المناقصات والعطاءات', 'مستندات المحاكم', 'الأحكام والصكوك', 'المستندات الأكاديمية'],
    },
    features: {
      en: ['Certified legal translators only', 'Accurate and consistent terminology', 'Fast turnaround times', 'Confidential and secure handling', 'Industry-specific legal expertise', 'Preserves original formatting', 'Affordable transparent pricing', 'Urgent translation available', 'Supports 50+ languages', 'Court and official document ready', 'Free proofreading included', 'Official use certification available'],
      ar: ['مترجمون قانونيون معتمدون فقط', 'مصطلحات دقيقة ومتسقة', 'سرعة في التسليم', 'تعامل سري وآمن مع الملفات', 'خبرة قانونية متخصصة', 'الحفاظ على التنسيق الأصلي', 'أسعار مناسبة وشفافة', 'خدمة الترجمة العاجلة', 'أكثر من 50 لغة', 'جاهزة للمحاكم والجهات الرسمية', 'مراجعة لغوية مجانية', 'إمكانية التصديق للاستخدام الرسمي'],
    },
  },
  {
    slug: 'medical-translation',
    category: 'specialized',
    icon: 'medical',
    image: 'svc-medical.jpg',
    title: { en: 'Medical Translation', ar: 'الترجمة الطبية' },
    short: {
      en: 'Medical reports, patient records, clinical and pharmaceutical documents translated with specialist accuracy.',
      ar: 'ترجمة التقارير الطبية وسجلات المرضى والمستندات السريرية والدوائية بدقة المتخصصين.',
    },
    intro: {
      en: [
        'At Eaglelingua Translation Services, we know that medical and pharmaceutical translations require precision, accuracy and full understanding of specialized terminology. Translating medical reports, prescriptions, patient records and research documents demands attention to detail and adherence to industry standards.',
        'Our medical translation services cater to hospitals, clinics, pharmaceutical companies and researchers who need reliable and professional translations. Whether for clinical trials, medical articles or patient information, Eaglelingua Translation Services ensures every translation is precise, clear and compliant with medical standards.',
      ],
      ar: [
        'نعلم في إيجل لينجوا أن الترجمة الطبية والدوائية تتطلب دقة متناهية وفهمًا كاملًا للمصطلحات المتخصصة. فترجمة التقارير الطبية والوصفات وسجلات المرضى والأبحاث تستلزم عناية بالتفاصيل والتزامًا بمعايير القطاع.',
        'تخدم ترجمتنا الطبية المستشفيات والعيادات وشركات الأدوية والباحثين الذين يحتاجون إلى ترجمات احترافية موثوقة. سواء للتجارب السريرية أو المقالات الطبية أو معلومات المرضى، نضمن أن تكون كل ترجمة دقيقة وواضحة ومتوافقة مع المعايير الطبية.',
      ],
    },
    documents: {
      en: ['Medical Reports', 'Prescriptions', 'Patient Records', 'Medical Research', 'Medical Journals', 'Medical Instruments', 'Laboratory Examinations', 'Radiology Reports', 'Case Report Forms', 'Informed Consent Forms'],
      ar: ['التقارير الطبية', 'الوصفات الطبية', 'سجلات المرضى', 'الأبحاث الطبية', 'الدوريات الطبية', 'الأجهزة الطبية', 'الفحوصات المعملية', 'تقارير الأشعة', 'نماذج تقارير الحالات', 'نماذج الموافقة المستنيرة'],
    },
    features: {
      en: ['Certified medical translators only', 'Accurate and consistent terminology', 'Fast turnaround times', 'Confidential and secure handling', 'Industry-specific expertise', 'Preserves original formatting', 'Affordable transparent pricing', 'Urgent translation available', 'Supports 50+ languages', 'Clinical and regulatory ready', 'Free proofreading included', 'Official use certification available'],
      ar: ['مترجمون طبيون معتمدون فقط', 'مصطلحات دقيقة ومتسقة', 'سرعة في التسليم', 'تعامل سري وآمن مع الملفات', 'خبرة متخصصة في القطاع', 'الحفاظ على التنسيق الأصلي', 'أسعار مناسبة وشفافة', 'خدمة الترجمة العاجلة', 'أكثر من 50 لغة', 'جاهزة للاستخدام السريري والتنظيمي', 'مراجعة لغوية مجانية', 'إمكانية التصديق للاستخدام الرسمي'],
    },
  },
  {
    slug: 'commercial-translation',
    category: 'specialized',
    icon: 'briefcase',
    image: 'svc-commercial.jpg',
    title: { en: 'Commercial Translation', ar: 'الترجمة التجارية' },
    short: {
      en: 'Agreements, marketing materials, financial reports and corporate communications that resonate internationally.',
      ar: 'ترجمة الاتفاقيات والمواد التسويقية والتقارير المالية ومراسلات الشركات بما يلقى صدى دوليًا.',
    },
    intro: {
      en: [
        'At Eaglelingua Translation Services, we understand that business communications demand accuracy, clarity and professionalism. Translating contracts, marketing materials, financial documents and corporate communications requires expertise and attention to detail to ensure your message resonates internationally.',
        'Our commercial translation services are designed for businesses, entrepreneurs and organizations looking to expand globally. Whether for agreements, promotional content or financial reports, Eaglelingua Translation Services delivers precise, reliable and culturally adapted translations that help your business succeed worldwide.',
      ],
      ar: [
        'ندرك في إيجل لينجوا أن مراسلات الأعمال تتطلب دقة ووضوحًا واحترافية. فترجمة العقود والمواد التسويقية والمستندات المالية ومراسلات الشركات تحتاج إلى خبرة وعناية بالتفاصيل لضمان أن تصل رسالتك بقوة إلى جمهورك الدولي.',
        'صُمّمت خدمات الترجمة التجارية لدينا للشركات ورواد الأعمال والمؤسسات الساعية إلى التوسع عالميًا. سواء للاتفاقيات أو المحتوى الترويجي أو التقارير المالية، نقدّم ترجمات دقيقة وموثوقة ومُكيَّفة ثقافيًا تساعد أعمالك على النجاح في كل مكان.',
      ],
    },
    features: {
      en: ['Certified professional translators only', 'Accurate and consistent terminology', 'Fast turnaround times', 'Confidential and secure handling', 'Industry-specific expertise', 'Preserves original formatting', 'Affordable transparent pricing', 'Urgent translation available', 'Supports 50+ languages', 'Business and corporate ready', 'Free proofreading included', 'Official use certification available'],
      ar: ['مترجمون محترفون معتمدون فقط', 'مصطلحات دقيقة ومتسقة', 'سرعة في التسليم', 'تعامل سري وآمن مع الملفات', 'خبرة متخصصة في القطاع', 'الحفاظ على التنسيق الأصلي', 'أسعار مناسبة وشفافة', 'خدمة الترجمة العاجلة', 'أكثر من 50 لغة', 'جاهزة لقطاع الأعمال والشركات', 'مراجعة لغوية مجانية', 'إمكانية التصديق للاستخدام الرسمي'],
    },
  },
  {
    slug: 'technical-translation',
    category: 'specialized',
    icon: 'gear',
    image: 'svc-technical.jpg',
    title: { en: 'Technical Translation', ar: 'الترجمة التقنية' },
    short: {
      en: 'Manuals, specifications, patents and safety documents for engineering, manufacturing, energy and IT.',
      ar: 'ترجمة الأدلة والمواصفات وبراءات الاختراع ووثائق السلامة لقطاعات الهندسة والتصنيع والطاقة وتقنية المعلومات.',
    },
    intro: {
      en: [
        'At Eaglelingua Translation Services, we know that technical documents require precision, specialized terminology and clear communication. Translating manuals, engineering specifications, product guides and technical reports demands expert knowledge and careful attention to detail.',
        'Our technical translation services are tailored for engineers, manufacturers, IT companies and industrial organizations seeking accurate and reliable translations. Whether for manuals, patents or technical documentation, Eaglelingua Translation Services ensures every translation is precise, clear and fully aligned with industry standards.',
      ],
      ar: [
        'نعلم في إيجل لينجوا أن المستندات التقنية تتطلب دقة ومصطلحات متخصصة وتواصلًا واضحًا. فترجمة الأدلة والمواصفات الهندسية وإرشادات المنتجات والتقارير التقنية تستلزم معرفة خبيرة وعناية دقيقة بالتفاصيل.',
        'صُمّمت خدمات الترجمة التقنية لدينا للمهندسين والمصنّعين وشركات تقنية المعلومات والمؤسسات الصناعية الباحثة عن ترجمات دقيقة وموثوقة. سواء للأدلة أو براءات الاختراع أو التوثيق التقني، نضمن أن تكون كل ترجمة دقيقة وواضحة ومتوافقة تمامًا مع معايير القطاع.',
      ],
    },
    documents: {
      en: ['User Manuals', 'Product Descriptions', 'Patents', 'Renewable Energy Documents', 'Material Safety Data Sheets', 'Mining Materials', 'Industrial Engineering Documents', 'Heavy Machinery Manuals', 'Construction Equipment', 'Oil & Gas Documents'],
      ar: ['أدلة المستخدم', 'أوصاف المنتجات', 'براءات الاختراع', 'مستندات الطاقة المتجددة', 'صحائف بيانات سلامة المواد', 'مواد التعدين', 'مستندات الهندسة الصناعية', 'أدلة المعدات الثقيلة', 'معدات البناء', 'مستندات النفط والغاز'],
    },
    features: {
      en: ['Certified technical translators only', 'Accurate and consistent terminology', 'Fast turnaround times', 'Confidential and secure handling', 'Industry-specific expertise', 'Preserves original formatting', 'Affordable transparent pricing', 'Urgent translation available', 'Supports 50+ languages', 'Manuals and technical documents ready', 'Free proofreading included', 'Official use certification available'],
      ar: ['مترجمون تقنيون معتمدون فقط', 'مصطلحات دقيقة ومتسقة', 'سرعة في التسليم', 'تعامل سري وآمن مع الملفات', 'خبرة متخصصة في القطاع', 'الحفاظ على التنسيق الأصلي', 'أسعار مناسبة وشفافة', 'خدمة الترجمة العاجلة', 'أكثر من 50 لغة', 'جاهزة للأدلة والمستندات التقنية', 'مراجعة لغوية مجانية', 'إمكانية التصديق للاستخدام الرسمي'],
    },
  },
];

export const serviceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
// Old site had a duplicate page for certified translation — keep the URL alive.
export const SERVICE_ALIASES = { 'certified-translation-2': 'certified-translation' };

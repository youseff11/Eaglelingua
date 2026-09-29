// Company contact details — edit here and they update across the whole site.
export const COMPANY = {
  name: { en: 'Eaglelingua Translation Services', ar: 'إيجل لينجوا لخدمات الترجمة' },
  short: { en: 'Eaglelingua', ar: 'إيجل لينجوا' },
  slogan: { en: 'Talk to the World', ar: 'تحدَّث إلى العالم' },
  email: 'info@eagle-lingua.com',
  whatsapp: '201501532325', // international format, no "+"
  phones: [
    { label: { en: 'WhatsApp & Calls', ar: 'واتساب ومكالمات' }, display: '+20 150 153 2325', tel: '+201501532325' },
    { label: { en: 'Office', ar: 'المكتب' }, display: '+20 150 809 4094', tel: '+201508094094' },
    { label: { en: 'Customer Care', ar: 'خدمة العملاء' }, display: '+20 105 029 4800', tel: '+201050294800' },
  ],
  address: {
    en: 'CL-321, WestGate Business Hub, Central Street, 6th of October City, Giza 12566, Egypt',
    ar: 'CL-321، ويست جيت بيزنس هاب، الشارع المركزي، مدينة السادس من أكتوبر، الجيزة 12566، مصر',
  },
  addressShort: { en: '6th of October City, Cairo — Egypt', ar: 'مدينة السادس من أكتوبر، القاهرة — مصر' },
  mapQuery: 'WestGate Business Hub 6th of October City Egypt',
  social: {
    facebook: 'https://www.facebook.com/share/18JSbs1ZiG/',
    instagram: 'https://www.instagram.com/eaglelinguatrans',
  },
  // Optional: set VITE_FORM_ENDPOINT in a .env file (e.g. a Formspree / Web3Forms endpoint)
  // to receive form submissions by email. Without it, forms open WhatsApp with the message pre-filled.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};

export const whatsappLink = (text = '') =>
  `https://wa.me/${COMPANY.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

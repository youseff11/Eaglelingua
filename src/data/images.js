// Single source of truth for every image used on the site.
// Local file name (served from /public/images)  →  path on the original media library.
// `scripts/fetch-assets.mjs` downloads them locally; <Img> falls back to the remote URL if a file is missing.
export const REMOTE_BASE = 'https://eagle-lingua.com/wp-content/uploads/';

export const IMAGE_SOURCES = {
  'logo.png': '2024/10/logo.png',
  'logo-mark.jpeg': '2026/03/EAGLE-logo.jpeg',
  'favicon.jpeg': '2026/03/cropped-EAGLE-logo.jpeg',
  'hero.jpg': '2026/03/cover.jpg',
  'about-cover.jpg': '2026/03/about-us-cover.jpg',
  'about-global.jpg': '2026/03/Seamless-Translation-Global-Reach-1.jpg',
  'about-square.jpeg': '2026/03/eagle-lingua-Translation-Global-Reach.jpeg',
  'vision.jpg': '2026/03/VISSION.jpg',
  'mentor-1.jpg': '2026/03/1-Supporting-you.jpg',
  'mentor-2.jpg': '2026/03/2-Supporting-you.jpg',
  'mentor-3.jpg': '2026/03/3-Supporting-you.jpg',
  'mentor-4.jpg': '2026/03/4-Supporting-you.jpg',
  'dictionary.jpg': '2026/03/dictionary-definition-word-scaled.jpg',
  'online-session.jpg': '2026/03/person-conducting-online-psychologist-therapy-scaled.jpg',

  // Services
  'svc-embassies.jpg': '2026/03/Embassies-Document-Translation.jpg',
  'svc-legal.jpg': '2026/03/Legal-Translation.jpg',
  'svc-medical.jpg': '2026/03/Medical-Translation.jpg',
  'svc-commercial.jpg': '2026/03/Commercial-Translation.jpg',
  'svc-technical.jpg': '2026/03/Technical-Translation.jpg',
  'svc-certified.jpg': '2026/03/Certified-Translation-1.jpg',
  'svc-certified-alt.jpg': '2026/03/Certified-Translation.jpg',
  'svc-document.jpg': '2026/03/Document-Translation-Services.jpg',
  'svc-interpretation.jpg': '2026/03/Interpretation-Services.jpg',
  'svc-multimedia.jpg': '2026/03/Multimedia-Translation-Services.jpg',
  'svc-transcription.jpg': '2026/03/Transcription-Service.jpg',
  'svc-localization.jpg': '2026/03/Website-App-Localization.jpg',

  // Blog
  'blog-quality-assessment.jpg': '2026/04/Translation-Quality-Assessment.jpg',
  'blog-proofreading.jpg': '2026/04/Importance-of-Proofreading-in-Ensuring-Translation-Quality.jpg',
  'blog-marriage-certificate.jpg': '2026/04/Marriage-Certificate-Attestation-in-the-UAE.jpg',
  'blog-certified-vs-sworn.jpg': '2026/04/Difference-Between-Certified-and-Sworn-Translation-in-the-UAE.jpg',
  'blog-birth-certificate.jpg': '2026/04/Birth-Certificate-Attestation-in-Dubai-the-UAE-2026.jpg',
  'blog-safe-investment.jpg': '2026/04/Safe-Investment-GuideThe-Importance-of-Professional-Translation.jpg',
  'blog-app-localization.jpg': '2026/04/App-and-Website-Localization-Ultimate-Guide-to-Reaching-the-UAE.jpg',
  'blog-technical-manuals.jpg': '2026/04/Technical-Manuals-and-Operating-Guides-Translation.jpg',
  'blog-legal-office.jpg': '2026/04/Certified-Legal-Translation-Office-in-the-UAE.jpg',
  'blog-ras-al-khaimah.jpg': '2026/04/Website-Localization-and-Commercial-Contract-Translation-Guide-in-Ras-Al-Khaimah.jpg',
  'blog-al-ain-medical.jpg': '2026/04/Certified-Translation-Guide-for-Medical-Reports-in-Al-Ain-City.jpg',
  'blog-sharjah-aljada.jpg': '2026/04/Guide-to-Translating-Real-Estate-Contracts-and-Company-Formation-in-Sharjah.jpg',
};

export const localSrc = (file) => `/images/${file}`;
export const remoteSrc = (file) => (IMAGE_SOURCES[file] ? REMOTE_BASE + IMAGE_SOURCES[file] : '');

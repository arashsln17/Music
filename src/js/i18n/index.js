import fa from './fa.js';
import en from './en.js';

export const translations = { fa, en };
export let currentLang = localStorage.getItem('arash_portfolio_lang') || 'fa';

export function getCurrentLang() {
  return currentLang;
}

export function setupLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('arash_portfolio_lang', lang);
  const html = document.documentElement;
  const isFa = lang === 'fa';

  html.lang = lang;
  html.dir = isFa ? 'rtl' : 'ltr';

  const t = translations[lang] || translations.fa;

  // Update document title & meta description
  if (t.doc_title) {
    document.title = t.doc_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.meta_description) {
    metaDesc.setAttribute('content', t.meta_description);
  }

  // Update segmented switch active states
  const btnFa = document.getElementById('langSegFa');
  const btnEn = document.getElementById('langSegEn');
  if (btnFa && btnEn) {
    if (isFa) {
      btnFa.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnFa.classList.remove('active');
    }
  }

  // Update textContent for [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update [data-i18n-title]
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key] !== undefined) {
      el.setAttribute('title', t[key]);
    }
  });

  // Update [data-i18n-aria]
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  // Update [data-i18n-placeholder]
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update [data-i18n-tooltip]
  document.querySelectorAll('[data-i18n-tooltip]').forEach((el) => {
    const key = el.getAttribute('data-i18n-tooltip');
    if (t[key] !== undefined) {
      el.setAttribute('data-tooltip', t[key]);
    }
  });

  // Update Primary CV button target for active language
  const mainCvBtn = document.getElementById('mainCvBtn');
  if (mainCvBtn) {
    if (isFa) {
      mainCvBtn.href = 'resume/arash-resume.pdf';
      mainCvBtn.setAttribute('download', 'Arash_Salehian_Resume_FA.pdf');
    } else {
      mainCvBtn.href = 'resume/arash-resume-en.pdf';
      mainCvBtn.setAttribute('download', 'Arash_Salehian_Resume_EN.pdf');
    }
  }

  // Re-render dynamic hero badges & typing text immediately
  if (window.renderDynamicHeroBadges) window.renderDynamicHeroBadges();
  if (window.initHeroTypingAnimation) window.initHeroTypingAnimation();
}

export function setLanguage(lang) {
  if (currentLang !== lang) {
    setupLanguage(lang);
  }
}

export function toggleLanguage() {
  const nextLang = currentLang === 'fa' ? 'en' : 'fa';
  setupLanguage(nextLang);
}

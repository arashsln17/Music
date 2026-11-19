// Main entry point for Arash Salehian's Portfolio
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

import { currentTheme, setupTheme, toggleTheme } from './js/core/theme.js';
import {
  currentLang,
  setupLanguage,
  setLanguage,
  toggleLanguage,
  translations,
} from './js/i18n/index.js';
import { showSiteToast, copyToClipboard } from './js/core/toast.js';
import { setupEventListeners, setupMobileDrawer, setupScrollspy } from './js/core/navigation.js';
import { setupContactForm, showStatus, triggerMailtoFallback } from './js/core/contactForm.js';
import { initScrollReveal } from './js/core/scrollReveal.js';
import { initCustomCursor } from './js/core/cursor.js';
import { initHeroTypingAnimation, tickTypingAnimation } from './js/hero/typing.js';
import {
  renderDynamicHeroBadges,
  renderDynamicHeroBadge1,
  renderDynamicHeroBadge2,
  rotateDynamicHeroBadge1,
  rotateDynamicHeroBadge2,
  initDynamicHeroBadges,
} from './js/hero/badges.js';
import {
  navigateHesabdarPage,
  refreshHesabdarDemo,
  showHesabdarToast,
  openHesabdarModal,
  closeHesabdarModal,
  saveHesabdarCustomer,
  saveHesabdarProduct,
  toggleHesabdarLowStock,
  filterHesabdarCategory,
  filterHesabdarTable,
  handleHesabdarGlobalSearch,
  initGlobalSearchShortcut,
  exportHesabdarExcel,
  switchReportChartMonth,
} from './js/demo/index.js';

// Expose functions to window so inline HTML onclick / onkeyup handlers continue working seamlessly
Object.assign(window, {
  // Core & Theme
  toggleTheme,
  setupTheme,
  setupLanguage,
  setLanguage,
  toggleLanguage,
  copyToClipboard,
  showSiteToast,
  showStatus,
  triggerMailtoFallback,

  // Hero
  initHeroTypingAnimation,
  tickTypingAnimation,
  renderDynamicHeroBadges,
  renderDynamicHeroBadge1,
  renderDynamicHeroBadge2,
  rotateDynamicHeroBadge1,
  rotateDynamicHeroBadge2,
  initDynamicHeroBadges,

  // Hesabdar Demo
  navigateHesabdarPage,
  refreshHesabdarDemo,
  showHesabdarToast,
  openHesabdarModal,
  closeHesabdarModal,
  saveHesabdarCustomer,
  saveHesabdarProduct,
  toggleHesabdarLowStock,
  filterHesabdarCategory,
  filterHesabdarTable,
  handleHesabdarGlobalSearch,
  exportHesabdarExcel,
  switchReportChartMonth,

  // Global references
  translations,
});

function init() {
  setupTheme();
  setupLanguage(currentLang);
  setupEventListeners();
  setupMobileDrawer();
  setupScrollspy();
  setupContactForm();
  initDynamicHeroBadges();
  initHeroTypingAnimation();
  initScrollReveal();
  initCustomCursor();
  initGlobalSearchShortcut();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

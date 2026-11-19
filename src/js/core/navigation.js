import { toggleTheme } from './theme.js';
import { setLanguage } from '../i18n/index.js';

export function setupEventListeners() {
  document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme);
  document.getElementById('langSegFa')?.addEventListener('click', () => setLanguage('fa'));
  document.getElementById('langSegEn')?.addEventListener('click', () => setLanguage('en'));

  // Back to top smooth scroll
  document.getElementById('backToTopBtn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export function setupMobileDrawer() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = mobileMenuBtn?.querySelector('i');

  function openMenu() {
    mobileMenu?.classList.remove('hidden');
    mobileMenuBtn?.setAttribute('aria-expanded', 'true');
    if (menuIcon) {
      menuIcon.className = 'fa-solid fa-xmark text-lg';
    }
  }

  function closeMenu() {
    mobileMenu?.classList.add('hidden');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    if (menuIcon) {
      menuIcon.className = 'fa-solid fa-bars-staggered text-lg';
    }
  }

  mobileMenuBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isClosed = mobileMenu?.classList.contains('hidden');
    if (isClosed) openMenu();
    else closeMenu();
  });

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu?.classList.contains('hidden')) {
      if (!mobileMenu?.contains(e.target) && !mobileMenuBtn?.contains(e.target)) {
        closeMenu();
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu?.classList.contains('hidden')) {
      closeMenu();
    }
  });
}

export function setupScrollspy() {
  const navbar = document.getElementById('navbar');
  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 20) {
        navbar?.classList.add('shadow-lg', 'bg-nav/95');
      } else {
        navbar?.classList.remove('shadow-lg', 'bg-nav/95');
      }
    },
    { passive: true }
  );

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"], .mobile-nav-link[href^="#"]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
}

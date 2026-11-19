import { getCurrentLang } from '../i18n/index.js';

export const typingRolesFa = [
  'توسعه‌دهنده بک‌اند',
  'دستیار آموزشی دروس هسته',
  'سازنده سامانه «نوین حساب»',
  'دانشجوی مهندسی کامپیوتر',
];

export const typingRolesEn = [
  'Backend Developer',
  'Teaching Assistant',
  'Creator of Novin Hesab',
  'Computer Engineering Student',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

export function tickTypingAnimation() {
  const typingEl = document.getElementById('heroTypingText');
  if (!typingEl) return;

  const roles = getCurrentLang() === 'fa' ? typingRolesFa : typingRolesEn;
  const currentRole = roles[roleIndex % roles.length];

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typingEl.textContent = currentRole;
    return;
  }

  if (isDeleting) {
    typingEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  const speed = isDeleting ? 32 : 65;

  if (!isDeleting && charIndex === currentRole.length) {
    typingTimeout = setTimeout(tickTypingAnimation, 2400);
    isDeleting = true;
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingTimeout = setTimeout(tickTypingAnimation, 400);
    return;
  }

  typingTimeout = setTimeout(tickTypingAnimation, speed);
}

export function initHeroTypingAnimation() {
  if (typingTimeout) clearTimeout(typingTimeout);
  charIndex = 0;
  isDeleting = false;
  tickTypingAnimation();
}

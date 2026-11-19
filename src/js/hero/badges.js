import { getCurrentLang } from '../i18n/index.js';

export const dynamicBadge1Data = [
  {
    subFa: 'دستیار آموزشی (TA)',
    titleFa: 'ساختمان داده‌ها',
    subEn: 'Teaching Assistant (TA)',
    titleEn: 'Data Structures',
    icon: 'fa-solid fa-sitemap',
    bg: 'bg-indigo-500/20',
    text: 'text-indigo-400',
  },
  {
    subFa: 'دستیار آموزشی (TA)',
    titleFa: 'مدارهای منطقی',
    subEn: 'Teaching Assistant (TA)',
    titleEn: 'Digital Logic',
    icon: 'fa-solid fa-microchip',
    bg: 'bg-cyan-500/20',
    text: 'text-cyan-400',
  },
  {
    subFa: 'دستیار آموزشی (TA)',
    titleFa: 'مبانی برنامه‌سازی',
    subEn: 'Teaching Assistant (TA)',
    titleEn: 'Programming Fundamentals',
    icon: 'fa-solid fa-code',
    bg: 'bg-blue-500/20',
    text: 'text-blue-400',
  },
  {
    subFa: 'رتبه برتر دانشکده',
    titleFa: 'معدل کل ۱۸.۷۴',
    subEn: 'Academic Honors',
    titleEn: 'Academic GPA: 18.74/20',
    icon: 'fa-solid fa-award',
    bg: 'bg-amber-500/20',
    text: 'text-amber-400',
  },
];

export const dynamicBadge2Data = [
  {
    subFa: 'پروژه پرچمدار',
    titleFa: 'سامانه نوین حساب',
    subEn: 'Flagship Project',
    titleEn: 'Novin Hesab ERP',
    icon: 'fa-solid fa-calculator',
    bg: 'bg-emerald-500/20',
    text: 'text-emerald-400',
  },
  {
    subFa: 'توسعه‌دهنده بک‌اند',
    titleFa: 'پایتون و جنگو',
    subEn: 'Backend Developer',
    titleEn: 'Python & Django Core',
    icon: 'fa-brands fa-python',
    bg: 'bg-teal-500/20',
    text: 'text-teal-400',
  },
  {
    subFa: 'معماری سیستم',
    titleFa: 'جاوا و C++',
    subEn: 'Systems Engineering',
    titleEn: 'C++ & Java Core',
    icon: 'fa-solid fa-cubes',
    bg: 'bg-purple-500/20',
    text: 'text-purple-400',
  },
  {
    subFa: 'طراحی الگوریتم',
    titleFa: 'ساختار داده و بهینه‌سازی',
    subEn: 'Algorithms & DSA',
    titleEn: 'Problem Solving & DSA',
    icon: 'fa-solid fa-code-branch',
    bg: 'bg-rose-500/20',
    text: 'text-rose-400',
  },
];

let badge1Index = 0;
let badge2Index = 0;
let badge1Interval = null;
let badge2Interval = null;
let badge2StartTimeout = null;

export function renderDynamicHeroBadge1() {
  const b1 = dynamicBadge1Data[badge1Index];
  const sub1 = document.getElementById('badge1Sub');
  const title1 = document.getElementById('badge1Title');
  const icon1 = document.getElementById('badge1Icon');
  const iconWrap1 = document.getElementById('badge1IconWrapper');
  const isFa = getCurrentLang() === 'fa';

  if (sub1 && title1 && icon1 && iconWrap1) {
    sub1.textContent = isFa ? b1.subFa : b1.subEn;
    title1.textContent = isFa ? b1.titleFa : b1.titleEn;
    icon1.className = b1.icon;
    iconWrap1.className = `w-8 h-8 rounded-lg ${b1.bg} ${b1.text} flex items-center justify-center transition-all duration-300`;
  }
}

export function renderDynamicHeroBadge2() {
  const b2 = dynamicBadge2Data[badge2Index];
  const sub2 = document.getElementById('badge2Sub');
  const title2 = document.getElementById('badge2Title');
  const icon2 = document.getElementById('badge2Icon');
  const iconWrap2 = document.getElementById('badge2IconWrapper');
  const isFa = getCurrentLang() === 'fa';

  if (sub2 && title2 && icon2 && iconWrap2) {
    sub2.textContent = isFa ? b2.subFa : b2.subEn;
    title2.textContent = isFa ? b2.titleFa : b2.titleEn;
    icon2.className = b2.icon;
    iconWrap2.className = `w-8 h-8 rounded-lg ${b2.bg} ${b2.text} flex items-center justify-center transition-all duration-300`;
  }
}

export function renderDynamicHeroBadges() {
  renderDynamicHeroBadge1();
  renderDynamicHeroBadge2();
}

export function rotateDynamicHeroBadge1() {
  const badgeEl1 = document.getElementById('heroDynamicBadge1');
  if (badgeEl1) badgeEl1.classList.add('badge-transitioning');

  setTimeout(() => {
    badge1Index = (badge1Index + 1) % dynamicBadge1Data.length;
    renderDynamicHeroBadge1();
    if (badgeEl1) badgeEl1.classList.remove('badge-transitioning');
  }, 260);
}

export function rotateDynamicHeroBadge2() {
  const badgeEl2 = document.getElementById('heroDynamicBadge2');
  if (badgeEl2) badgeEl2.classList.add('badge-transitioning');

  setTimeout(() => {
    badge2Index = (badge2Index + 1) % dynamicBadge2Data.length;
    renderDynamicHeroBadge2();
    if (badgeEl2) badgeEl2.classList.remove('badge-transitioning');
  }, 260);
}

export function initDynamicHeroBadges() {
  renderDynamicHeroBadges();

  if (badge1Interval) clearInterval(badge1Interval);
  if (badge2Interval) clearInterval(badge2Interval);
  if (badge2StartTimeout) clearTimeout(badge2StartTimeout);

  badge1Interval = setInterval(rotateDynamicHeroBadge1, 3800);

  badge2StartTimeout = setTimeout(() => {
    rotateDynamicHeroBadge2();
    badge2Interval = setInterval(rotateDynamicHeroBadge2, 4600);
  }, 1900);
}

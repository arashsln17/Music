import { currentLang } from '../i18n/index.js';
import { showHesabdarToast } from './toast.js';

export function navigateHesabdarPage(pageKey) {
  const routes = {
    dashboard: {
      id: 'hesabdarViewDashboard',
      urlFa: 'داشبورد',
      urlEn: 'Dashboard',
      titleFa: 'منو دسترسی',
      titleEn: 'Access Menu',
    },
    sales: {
      id: 'hesabdarViewSales',
      urlFa: 'فروش',
      urlEn: 'Sales',
      titleFa: 'فروش',
      titleEn: 'Sales',
    },
    inventory: {
      id: 'hesabdarViewInventory',
      urlFa: 'موجودی انبار',
      urlEn: 'Inventory',
      titleFa: 'موجودی انبار',
      titleEn: 'Inventory',
    },
    customers: {
      id: 'hesabdarViewCustomers',
      urlFa: 'مشتریان',
      urlEn: 'Customers',
      titleFa: 'مشتریان',
      titleEn: 'Customers',
    },
    accounts: {
      id: 'hesabdarViewAccounts',
      urlFa: 'حساب‌های مالی',
      urlEn: 'Financial Accounts',
      titleFa: 'حساب‌های مالی',
      titleEn: 'Financial Accounts',
    },
    reports: {
      id: 'hesabdarViewReports',
      urlFa: 'گزارشات مالی',
      urlEn: 'Reports',
      titleFa: 'گزارشات مالی',
      titleEn: 'Reports',
    },
    invoices: {
      id: 'hesabdarViewInvoices',
      urlFa: 'فاکتورها',
      urlEn: 'Invoices',
      titleFa: 'فاکتورها',
      titleEn: 'Invoices',
    },
    settings: {
      id: 'hesabdarViewSettings',
      urlFa: 'تنظیمات سیستم',
      urlEn: 'System Settings',
      titleFa: 'تنظیمات',
      titleEn: 'Settings',
    },
    documents: {
      id: 'hesabdarViewDocuments',
      urlFa: 'بایگانی اسناد',
      urlEn: 'Documents Archive',
      titleFa: 'اسناد',
      titleEn: 'Documents',
    },
  };

  const target = routes[pageKey] || routes.dashboard;

  // Hide all subpages
  document.querySelectorAll('.hesabdar-page-view').forEach((view) => {
    view.classList.add('hidden');
  });

  // Show target page
  const targetView = document.getElementById(target.id);
  if (targetView) {
    targetView.classList.remove('hidden');
  }

  // Update Section in mock browser bar (Clean readable title instead of localhost)
  const routeUrl = document.getElementById('hesabdarRouteUrl');
  if (routeUrl) {
    routeUrl.textContent = currentLang === 'fa' ? target.urlFa : target.urlEn;
  }

  // Update Breadcrumb & Page Title in Header
  const headerRight = document.getElementById('hesabdarHeaderRight');
  if (headerRight) {
    if (pageKey === 'dashboard') {
      headerRight.innerHTML = `
        <span class="w-8 h-8 rounded-full bg-[#0a2540] inline-flex items-center justify-center text-white text-[10px] ring-4 ring-[#0a2540]/10 shadow-sm">
          <i class="fa-solid fa-circle text-[8px]"></i>
        </span>
        <span class="text-slate-400 font-bold text-sm" id="hesabdarTitleSep">•</span>
        <h3 id="hesabdarPageTitle" class="text-base sm:text-lg font-black text-slate-900 tracking-tight">منو دسترسی</h3>
      `;
    } else {
      const title = currentLang === 'fa' ? target.titleFa : target.titleEn;
      const menuLabel = currentLang === 'fa' ? 'منو دسترسی' : 'Menu';
      headerRight.innerHTML = `
        <span class="w-8 h-8 rounded-full bg-[#0a2540] inline-flex items-center justify-center text-white text-[10px] ring-4 ring-[#0a2540]/10 shadow-sm">
          <i class="fa-solid fa-circle text-[8px]"></i>
        </span>
        <button onclick="navigateHesabdarPage('dashboard')" class="text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer">
          <i class="fa-solid fa-house text-[11px] text-slate-400"></i>
          <span>${menuLabel}</span>
        </button>
        <i class="fa-solid fa-chevron-left text-[10px] text-slate-400"></i>
        <h3 id="hesabdarPageTitle" class="text-base sm:text-lg font-black text-slate-900 tracking-tight">${title}</h3>
      `;
    }
  }
}

export function refreshHesabdarDemo() {
  const icon = document.querySelector('.fa-rotate-right');
  if (icon) {
    icon.classList.add('animate-spin');
    setTimeout(() => icon.classList.remove('animate-spin'), 600);
  }
  navigateHesabdarPage('dashboard');
  showHesabdarToast('سامانه نوین حساب به‌روزرسانی شد.');
}

export * from './toast.js';
export * from './modals.js';
export * from './customers.js';
export * from './inventory.js';
export * from './reports.js';
export * from './search.js';
export * from './export.js';

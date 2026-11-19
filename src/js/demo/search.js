import { navigateHesabdarPage } from './index.js';

export function filterHesabdarTable(tbodyId, query) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const q = (query || '').trim().toLowerCase();
  tbody.querySelectorAll('tr').forEach((tr) => {
    tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}

export function handleHesabdarGlobalSearch(term) {
  if (!term) {
    document.querySelectorAll('.hesabdar-page-view tbody tr').forEach((tr) => {
      tr.style.display = '';
    });
    return;
  }

  term = term.trim().toLowerCase();

  const navMap = {
    فروش: 'sales',
    sales: 'sales',
    انبار: 'inventory',
    کالا: 'inventory',
    inventory: 'inventory',
    مشتری: 'customers',
    مشتریان: 'customers',
    customers: 'customers',
    حساب: 'accounts',
    بانک: 'accounts',
    accounts: 'accounts',
    گزارش: 'reports',
    reports: 'reports',
    فاکتور: 'invoices',
    invoices: 'invoices',
    تنظیمات: 'settings',
    settings: 'settings',
    سند: 'documents',
    اسناد: 'documents',
    documents: 'documents',
  };

  for (let key in navMap) {
    if (term.includes(key)) {
      navigateHesabdarPage(navMap[key]);
      return;
    }
  }

  document.querySelectorAll('.hesabdar-page-view:not(.hidden) tbody tr').forEach((tr) => {
    const textContent = tr.textContent.toLowerCase();
    tr.style.display = textContent.includes(term) ? '' : 'none';
  });
}

export function initGlobalSearchShortcut() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      const searchInput = document.getElementById('hesabdarGlobalSearch');
      if (searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    }
  });
}

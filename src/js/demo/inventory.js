import { showHesabdarToast } from './toast.js';
import { closeHesabdarModal } from './modals.js';

let isLowStockActive = false;

export function saveHesabdarProduct() {
  const nameInput = document.getElementById('mProdName');
  const catInput = document.getElementById('mProdCategory');
  const buyInput = document.getElementById('mProdBuy');
  const sellInput = document.getElementById('mProdSell');
  const stockInput = document.getElementById('mProdStock');

  const name = nameInput ? nameInput.value.trim() : '';
  if (!name) {
    showHesabdarToast('لطفاً نام و مدل کالا را وارد فرمایید', 'warning');
    nameInput?.focus();
    return;
  }

  const category = catInput ? catInput.value : 'جانبی';
  const buy =
    buyInput && buyInput.value.trim()
      ? Number(buyInput.value.trim()).toLocaleString('fa-IR') + ' تومان'
      : '۰ تومان';
  const sell =
    sellInput && sellInput.value.trim()
      ? Number(sellInput.value.trim()).toLocaleString('fa-IR') + ' تومان'
      : '۰ تومان';
  const stockNum = stockInput && stockInput.value.trim() ? Number(stockInput.value.trim()) : 5;

  const isLow = stockNum <= 2;
  const statusBadge = isLow
    ? '<span class="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold text-[11px]">رو به اتمام</span>'
    : '<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-[11px]">موجود</span>';

  const tbody = document.getElementById('hesabdarInventoryTableBody');
  if (tbody) {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-50 transition-colors animate-fadeIn';
    tr.setAttribute('data-category', category);
    tr.setAttribute('data-stock-status', isLow ? 'low' : 'normal');

    const prdCode = `PRD-${109 + tbody.querySelectorAll('tr').length}`;
    tr.innerHTML = `
      <td class="py-3.5 px-5 font-mono text-slate-500">${prdCode}</td>
      <td class="py-3.5 px-5 font-bold text-slate-900">${name}</td>
      <td class="py-3.5 px-5"><span class="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-600 text-[11px]">${category}</span></td>
      <td class="py-3.5 px-5 font-en text-slate-600">${buy}</td>
      <td class="py-3.5 px-5 font-en font-bold text-slate-900">${sell}</td>
      <td class="py-3.5 px-5 font-en font-bold text-slate-900">${stockNum} واحد</td>
      <td class="py-3.5 px-5">${statusBadge}</td>
      <td class="py-3.5 px-5 text-center text-slate-400">
        <button onclick="showHesabdarToast('کاردکس کالا بارگذاری شد')" title="کاردکس کالا" class="hover:text-cyan-600 ml-2 transition-colors"><i class="fa-regular fa-clock"></i></button>
        <button onclick="showHesabdarToast('ویرایش اطلاعات')" title="ویرایش" class="hover:text-blue-600 transition-colors"><i class="fa-regular fa-pen-to-square"></i></button>
      </td>
    `;
    tbody.prepend(tr);

    // Update variety count
    const varietyEl = document.getElementById('invVarietyCount');
    if (varietyEl) {
      varietyEl.textContent = `${tbody.querySelectorAll('tr').length} قلم کالا`;
    }
  }

  // Clear inputs and close
  if (nameInput) nameInput.value = '';
  if (buyInput) buyInput.value = '';
  if (sellInput) sellInput.value = '';
  if (stockInput) stockInput.value = '';
  closeHesabdarModal();
  showHesabdarToast(`کالای «${name}» به انبار اضافه شد.`);
}

export function toggleHesabdarLowStock(btn) {
  isLowStockActive = !isLowStockActive;
  const tbody = document.getElementById('hesabdarInventoryTableBody');
  const btnText = document.getElementById('lowStockBtnText');

  if (!tbody) return;

  const rows = tbody.querySelectorAll('tr');
  if (isLowStockActive) {
    let lowCount = 0;
    rows.forEach((tr) => {
      const isLow = tr.getAttribute('data-stock-status') === 'low';
      tr.style.display = isLow ? '' : 'none';
      if (isLow) lowCount++;
    });
    if (btnText) btnText.textContent = 'نمایش همه کالاها';
    if (btn) {
      btn.classList.add('bg-amber-500', 'text-white');
      btn.classList.remove('bg-amber-50/80', 'text-amber-800');
    }
    showHesabdarToast(`فیلتر اعمال شد: نمایش ${lowCount} قلم کالای نیازمند شارژ انبار`, 'info');
  } else {
    rows.forEach((tr) => (tr.style.display = ''));
    if (btnText) btnText.textContent = 'فقط کالاهای رو به اتمام (۲)';
    if (btn) {
      btn.classList.remove('bg-amber-500', 'text-white');
      btn.classList.add('bg-amber-50/80', 'text-amber-800');
    }
    showHesabdarToast('نمایش تمامی اقلام موجودی انبار');
  }
}

export function filterHesabdarCategory(cat) {
  const tbody = document.getElementById('hesabdarInventoryTableBody');
  if (!tbody) return;

  const rows = tbody.querySelectorAll('tr');
  rows.forEach((tr) => {
    if (cat === 'all') {
      tr.style.display = '';
    } else {
      const itemCat = tr.getAttribute('data-category') || '';
      tr.style.display = itemCat.includes(cat) ? '' : 'none';
    }
  });
  if (cat !== 'all') {
    showHesabdarToast(`دسته‌بندی «${cat}» اعمال شد.`);
  } else {
    showHesabdarToast('نمایش همه دسته‌بندی‌ها.');
  }
}

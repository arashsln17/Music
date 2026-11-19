import { showHesabdarToast } from './toast.js';
import { closeHesabdarModal } from './modals.js';

export function saveHesabdarCustomer() {
  const nameInput = document.getElementById('mCustName');
  const phoneInput = document.getElementById('mCustPhone');
  const codeInput = document.getElementById('mCustCode');
  const statusInput = document.getElementById('mCustStatus');
  const balanceInput = document.getElementById('mCustBalance');

  const name = nameInput ? nameInput.value.trim() : '';
  if (!name) {
    showHesabdarToast('لطفاً نام مشتری یا عنوان شرکت را وارد نمایید', 'warning');
    nameInput?.focus();
    return;
  }

  const phone = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : '---';
  const code = codeInput && codeInput.value.trim() ? codeInput.value.trim() : '---';
  const status = statusInput ? statusInput.value : 'تسویه حساب';
  const balanceRaw =
    balanceInput && balanceInput.value.trim()
      ? Number(balanceInput.value.trim()).toLocaleString('fa-IR') + ' تومان'
      : '۰ تومان';

  let badgeClass = 'bg-slate-100 text-slate-700';
  if (status.includes('بدهکار')) badgeClass = 'bg-amber-100 text-amber-800';
  else if (status.includes('بستانکار')) badgeClass = 'bg-emerald-100 text-emerald-800';

  const tbody = document.getElementById('hesabdarCustomerTableBody');
  if (tbody) {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-50 transition-colors animate-fadeIn';
    tr.innerHTML = `
      <td class="py-3.5 px-5 font-bold text-slate-900">${name}</td>
      <td class="py-3.5 px-5 font-en text-slate-600">${phone}</td>
      <td class="py-3.5 px-5 font-mono text-slate-600">${code}</td>
      <td class="py-3.5 px-5">۱ فاکتور</td>
      <td class="py-3.5 px-5 font-bold font-en text-slate-900">${balanceRaw}</td>
      <td class="py-3.5 px-5"><span class="px-2.5 py-1 rounded-full ${badgeClass} font-semibold text-[11px]">${status}</span></td>
      <td class="py-3.5 px-5 text-center text-slate-400">
        <button onclick="showHesabdarToast('گردش حساب مشتری بازخوانی شد')" title="گردش حساب" class="hover:text-slate-800 mx-1"><i class="fa-regular fa-file-lines text-xs"></i></button>
        <button onclick="showHesabdarToast('ویرایش اطلاعات')" title="ویرایش" class="hover:text-blue-600 mx-1"><i class="fa-regular fa-pen-to-square text-xs"></i></button>
      </td>
    `;
    tbody.prepend(tr);

    // Update counter
    const countEl = document.getElementById('custTotalCount');
    if (countEl) {
      const rows = tbody.querySelectorAll('tr').length;
      countEl.textContent = `${rows} مشتری`;
    }
  }

  // Clear inputs and close
  if (nameInput) nameInput.value = '';
  if (phoneInput) phoneInput.value = '';
  if (codeInput) codeInput.value = '';
  if (balanceInput) balanceInput.value = '';
  closeHesabdarModal();
  showHesabdarToast(`مشتری «${name}» با موفقیت ثبت گردید.`);
}

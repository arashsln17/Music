import { translations, currentLang } from '../i18n/index.js';

let toastTimeoutId = null;

export function showHesabdarToast(message, type = 'success') {
  const toast = document.getElementById('hesabdarToast');
  const toastText = document.getElementById('hesabdarToastText');
  const toastIcon = document.getElementById('hesabdarToastIcon');
  if (!toast || !toastText) return;

  const defaultMsg =
    translations[currentLang]?.demo_toast_success ||
    (currentLang === 'fa' ? 'عملیات با موفقیت انجام شد' : 'Operation completed successfully');
  toastText.textContent = message || defaultMsg;

  if (toastIcon) {
    if (type === 'warning') {
      toastIcon.className =
        'w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs';
      toastIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
    } else if (type === 'info') {
      toastIcon.className =
        'w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs';
      toastIcon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
    } else {
      toastIcon.className =
        'w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs';
      toastIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
    }
  }

  toast.classList.remove('hidden');
  if (toastTimeoutId) clearTimeout(toastTimeoutId);
  toastTimeoutId = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2800);
}

import { getCurrentLang } from '../i18n/index.js';

let siteToastTimer = null;

export function showSiteToast(msg) {
  const toast = document.getElementById('siteToast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  if (siteToastTimer) clearTimeout(siteToastTimer);
  siteToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

export function copyToClipboard(text, successMsgFa, successMsgEn, triggerEl) {
  const isFa = getCurrentLang() === 'fa';
  const msg = isFa ? successMsgFa || 'کپی شد!' : successMsgEn || 'Copied to clipboard!';

  function markTriggerSuccess() {
    if (!triggerEl) return;
    const icon = triggerEl.querySelector('i');
    if (!icon) return;
    const originalClass = icon.className;
    icon.className = 'fa-solid fa-check text-emerald-400';
    setTimeout(() => {
      icon.className = originalClass;
    }, 1200);
  }

  function fallbackCopy(val) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = val;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showSiteToast(msg);
      markTriggerSuccess();
    } catch (e) {
      showSiteToast(msg);
    }
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showSiteToast(msg);
        markTriggerSuccess();
      })
      .catch(() => {
        fallbackCopy(text);
      });
  } else {
    fallbackCopy(text);
  }
}

import { getCurrentLang } from '../i18n/index.js';

let statusTimeoutId = null;

export function showStatus(message, type) {
  const statusDiv = document.getElementById('formStatus');
  if (!statusDiv) return;

  statusDiv.className = `p-3.5 rounded-xl text-xs font-medium block animate-fade-in ${
    type === 'success'
      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
      : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
  }`;
  statusDiv.innerHTML = message;
  statusDiv.classList.remove('hidden');

  if (statusTimeoutId) clearTimeout(statusTimeoutId);
  statusTimeoutId = setTimeout(() => {
    statusDiv.classList.add('hidden');
  }, 8000);
}

export function triggerMailtoFallback(name, email, subject, message) {
  const isFa = getCurrentLang() === 'fa';
  const mailSubject = encodeURIComponent(`پیام از طرف ${name}: ${subject}`);
  const mailBody = encodeURIComponent(
    `نام فرستنده: ${name}\nایمیل پاسخ: ${email}\n\nپیام:\n${message}\n\n---\nارسال شده از طریق وبسایت شخصی آرش صالحیان`
  );

  showStatus(
    isFa
      ? '⚡ در حال باز کردن برنامه ایمیل شما جهت ارسال مستقیم...'
      : '⚡ Opening your email client to send directly...',
    'success'
  );

  window.location.href = `mailto:arashsalehian17@gmail.com?subject=${mailSubject}&body=${mailBody}`;
}

export function setupContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName')?.value.trim();
    const email = document.getElementById('senderEmail')?.value.trim();
    const subjectRaw = document.getElementById('senderSubject')?.value.trim();
    const message = document.getElementById('senderMessage')?.value.trim();

    const isFa = getCurrentLang() === 'fa';
    const defaultSubject = isFa ? 'پیام جدید از وبسایت شخصی' : 'New message from portfolio';
    const subject = subjectRaw || defaultSubject;

    if (!name || !email || !message) {
      showStatus(
        isFa
          ? 'لطفاً تمامی فیلدهای الزامی (*) را تکمیل کنید.'
          : 'Please fill in all required fields (*).',
        'error'
      );
      return;
    }

    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i class="fa-solid fa-spinner fa-spin"></i>
      <span>${isFa ? 'در حال ارسال پیام...' : 'Sending message...'}</span>
    `;

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('_replyto', email);
      formData.append('subject', subject);
      formData.append('message', message);
      formData.append('_subject', `پیام جدید پورتفولیو از ${name}: ${subject}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/arashsalehian17@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        showStatus(
          isFa
            ? '✅ پیام شما با موفقیت به ایمیل آرش صالحیان ارسال شد! آرش به زودی مستقیماً به ایمیل شما پاسخ خواهد داد.'
            : '✅ Your message was successfully sent to Arash! He will reply directly to your email address shortly.',
          'success'
        );
        form.reset();
      } else {
        triggerMailtoFallback(name, email, subject, message);
      }
    } catch (err) {
      triggerMailtoFallback(name, email, subject, message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  });
}

import { showHesabdarToast } from './toast.js';

export function exportHesabdarExcel(type) {
  let filename = `hesabdar-${type}.csv`;
  let csvContent = '';

  if (type === 'customers') {
    csvContent = 'نام مشتری/شرکت,شماره تماس,کد ملی/اقتصادی,تعداد فاکتور,مانده حساب,وضعیت\n';
    document.querySelectorAll('#hesabdarCustomerTableBody tr').forEach((tr) => {
      const cols = Array.from(tr.querySelectorAll('td'))
        .slice(0, 6)
        .map((td) => `"${td.textContent.trim().replace(/"/g, '""')}"`);
      if (cols.length) csvContent += cols.join(',') + '\n';
    });
  } else if (type === 'inventory') {
    csvContent = 'کد کالا,نام کالا,دسته‌بندی,قیمت خرید,قیمت فروش,موجودی,وضعیت\n';
    document.querySelectorAll('#hesabdarInventoryTableBody tr').forEach((tr) => {
      const cols = Array.from(tr.querySelectorAll('td'))
        .slice(0, 7)
        .map((td) => `"${td.textContent.trim().replace(/"/g, '""')}"`);
      if (cols.length) csvContent += cols.join(',') + '\n';
    });
  } else {
    csvContent = 'شاخص مالی,مبلغ (تومان),توضیحات\n';
    csvContent += '"فروش کل ماه","۲۱۹,۷۰۰,۰۰۰","۸ فاکتور"\n';
    csvContent += '"بهای تمام‌شده","۱۸۶,۴۰۰,۰۰۰","ارزش موجودی"\n';
    csvContent += '"سود ناخالص","۳۳,۳۰۰,۰۰۰","فروش منهای بهای تمام‌شده"\n';
    csvContent += '"هزینه‌های جاری","۱۳,۷۵۸,۸۸۰","هزینه‌های عملیاتی"\n';
    csvContent += '"سود خالص ماه","۱۹,۵۴۱,۱۲۰","سود قطعی دوره"\n';
  }

  // Prepend UTF-8 BOM (\uFEFF) for Excel compatibility with Persian
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showHesabdarToast(`فایل اکسل (${filename}) با موفقیت دانلود شد.`);
}

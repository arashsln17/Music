import { showHesabdarToast } from './toast.js';

export function switchReportChartMonth(month) {
  const btnAban = document.getElementById('chartMonthBtnAban');
  const btnMehr = document.getElementById('chartMonthBtnMehr');
  const title = document.getElementById('repChartTitle');
  const totalSales = document.getElementById('repTotalSales');
  const grossProfit = document.getElementById('repGrossProfit');
  const netProfit = document.getElementById('repNetProfit');

  const salesArea = document.getElementById('chartSalesArea');
  const profitArea = document.getElementById('chartProfitArea');
  const salesLine = document.getElementById('chartSalesLine');
  const profitLine = document.getElementById('chartProfitLine');
  const pin15 = document.getElementById('pinDay15');
  const pin24 = document.getElementById('pinDay24');
  const periodBadge = document.getElementById('repPeriodBadge');
  const kpiAvg = document.getElementById('kpiDailyAvg');
  const kpiPeak = document.getElementById('kpiPeakDay');
  const xAxis = document.getElementById('chartXAxisLabels');

  if (month === 'mehr') {
    btnMehr?.classList.add('bg-white', 'text-slate-900', 'shadow-sm', 'font-bold');
    btnMehr?.classList.remove('text-slate-500');
    btnAban?.classList.remove('bg-white', 'text-slate-900', 'shadow-sm', 'font-bold');
    btnAban?.classList.add('text-slate-500');

    if (title) title.textContent = 'روند روزانه فروش ناخالص و سود خالص در طول مهر ماه';
    if (totalSales) totalSales.textContent = '۱۸۵,۲۰۰,۰۰۰ تومان';
    if (grossProfit) grossProfit.textContent = '۲۸,۴۰۰,۰۰۰ تومان';
    if (netProfit) netProfit.textContent = '۱۶,۱۵۰,۰۰۰ تومان';

    if (periodBadge) periodBadge.textContent = '• عملکرد مالی و تحلیلی مهر ماه سال ۱۴۰۵';
    if (kpiAvg) kpiAvg.textContent = '۶,۱۷۳,۰۰۰ تومان';
    if (kpiPeak) kpiPeak.textContent = '۳۳,۵۰۰,۰۰۰ تومان (۲۰ مهر)';

    // Smooth Mehr Bezier Curves (Peak at Day 20 x=506 y=45)
    const mehrSales =
      'M 60 153 C 76 151, 119 146, 154 140 C 189 134, 232 117, 271 115 C 310 113, 349 142, 388 130 C 427 118, 471 49, 506 45 C 541 41, 569 90, 600 104 C 631 118, 670 119, 693 126 C 716 133, 732 142, 740 145';
    const mehrProfit =
      'M 60 167 C 76 166, 119 166, 154 164 C 189 162, 232 155, 271 154 C 310 153, 349 166, 388 160 C 427 154, 471 120, 506 119 C 541 118, 569 144, 600 151 C 631 158, 670 156, 693 158 C 716 160, 732 164, 740 165';

    if (salesArea) salesArea.setAttribute('d', `${mehrSales} L 740 172 L 60 172 Z`);
    if (profitArea) profitArea.setAttribute('d', `${mehrProfit} L 740 172 L 60 172 Z`);
    if (salesLine) salesLine.setAttribute('d', mehrSales);
    if (profitLine) profitLine.setAttribute('d', mehrProfit);

    // Update Peak pin to Mehr Day 20 (x=506, y=45)
    if (pin15) {
      pin15.style.display = '';
      pin15.innerHTML = `
        <line x1="506" y1="45" x2="506" y2="172" stroke="#2563eb" stroke-width="1.25" stroke-dasharray="2 2" opacity="0.6" />
        <circle cx="506" cy="45" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2.5" />
        <rect x="436" y="22" width="140" height="20" rx="10" fill="#1e293b" />
        <text x="506" y="35" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle" font-family="Estedad">پیک فروش: ۳۳,۵۰۰,۰۰۰ تومان</text>
      `;
    }
    if (pin24) pin24.style.display = 'none';

    // Update X-axis labels to Mehr
    if (xAxis) {
      xAxis.innerHTML = `
        <text x="60" y="194">۱ مهر</text>
        <text x="154" y="194">۵ مهر</text>
        <text x="271" y="194">۱۰ مهر</text>
        <text x="388" y="194">۱۵ مهر</text>
        <text x="506" y="194" font-weight="bold" fill="#2563eb">۲۰ مهر (پیک)</text>
        <text x="600" y="194">۲۴ مهر</text>
        <text x="693" y="194">۲۸ مهر</text>
        <text x="740" y="194">۳۰ مهر</text>
      `;
    }

    showHesabdarToast('داده‌های عملکرد مالی مهر ماه بارگذاری شد.');
  } else {
    btnAban?.classList.add('bg-white', 'text-slate-900', 'shadow-sm', 'font-bold');
    btnAban?.classList.remove('text-slate-500');
    btnMehr?.classList.remove('bg-white', 'text-slate-900', 'shadow-sm', 'font-bold');
    btnMehr?.classList.add('text-slate-500');

    if (title) title.textContent = 'روند روزانه فروش ناخالص و سود خالص در طول آبان ماه';
    if (totalSales) totalSales.textContent = '۲۱۹,۷۰۰,۰۰۰ تومان';
    if (grossProfit) grossProfit.textContent = '۳۳,۳۰۰,۰۰۰ تومان';
    if (netProfit) netProfit.textContent = '۱۹,۵۴۱,۱۲۰ تومان';

    if (periodBadge) periodBadge.textContent = '• عملکرد مالی و تحلیلی آبان ماه سال ۱۴۰۵';
    if (kpiAvg) kpiAvg.textContent = '۷,۳۲۳,۰۰۰ تومان';
    if (kpiPeak) kpiPeak.textContent = '۳۸,۵۵۰,۰۰۰ تومان (۱۵ آبان)';

    const abanSales =
      'M 60 156 C 76 155, 119 152, 154 147 C 189 142, 232 147, 271 127 C 310 107, 349 27, 388 26 C 427 25, 471 109, 506 119 C 541 129, 569 86, 600 85 C 631 84, 670 104, 693 111 C 716 118, 732 124, 740 126';
    const abanProfit =
      'M 60 168 C 76 167, 119 166, 154 164 C 189 162, 232 166, 271 157 C 310 148, 349 110, 388 109 C 427 108, 471 148, 506 153 C 541 158, 569 136, 600 136 C 631 136, 670 151, 693 155 C 716 159, 732 158, 740 159';

    if (salesArea) salesArea.setAttribute('d', `${abanSales} L 740 172 L 60 172 Z`);
    if (profitArea) profitArea.setAttribute('d', `${abanProfit} L 740 172 L 60 172 Z`);
    if (salesLine) salesLine.setAttribute('d', abanSales);
    if (profitLine) profitLine.setAttribute('d', abanProfit);

    // Restore Aban pin15 & pin24
    if (pin15) {
      pin15.style.display = '';
      pin15.innerHTML = `
        <line x1="388" y1="26" x2="388" y2="172" stroke="#2563eb" stroke-width="1.25" stroke-dasharray="2 2" opacity="0.6" />
        <circle cx="388" cy="26" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2.5" />
        <rect x="318" y="3" width="140" height="20" rx="10" fill="#1e293b" />
        <text x="388" y="16" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle" font-family="Estedad">پیک فروش: ۳۸,۵۵۰,۰۰۰ تومان</text>
      `;
    }
    if (pin24) {
      pin24.style.display = '';
      pin24.innerHTML = `
        <line x1="600" y1="85" x2="600" y2="172" stroke="#059669" stroke-width="1.25" stroke-dasharray="2 2" opacity="0.6" />
        <circle cx="600" cy="85" r="5" fill="#059669" stroke="#ffffff" stroke-width="2.5" />
        <rect x="535" y="58" width="130" height="20" rx="10" fill="#065f46" />
        <text x="600" y="71" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle" font-family="Estedad">فروش امروز: ۲۳,۰۰۰,۰۰۰ تومان</text>
      `;
    }

    // Restore Aban X-axis labels
    if (xAxis) {
      xAxis.innerHTML = `
        <text x="60" y="194">۱ آبان</text>
        <text x="154" y="194">۵ آبان</text>
        <text x="271" y="194">۱۰ آبان</text>
        <text x="388" y="194" font-weight="bold" fill="#2563eb">۱۵ آبان (پیک)</text>
        <text x="506" y="194">۲۰ آبان</text>
        <text x="600" y="194" font-weight="bold" fill="#0f172a">۲۴ آبان (امروز)</text>
        <text x="693" y="194">۲۸ آبان</text>
        <text x="740" y="194">۳۰ آبان</text>
      `;
    }

    showHesabdarToast('داده‌های عملکرد مالی آبان ماه بارگذاری شد.');
  }
}

export let currentTheme = localStorage.getItem('arash_portfolio_theme') || 'dark';

export function setupTheme() {
  const html = document.documentElement;
  const sunIcon = document.querySelector('.theme-sun-icon');
  const moonIcon = document.querySelector('.theme-moon-icon');

  if (currentTheme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    sunIcon?.classList.add('hidden');
    moonIcon?.classList.remove('hidden');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    sunIcon?.classList.remove('hidden');
    moonIcon?.classList.add('hidden');
  }
}

export function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('arash_portfolio_theme', currentTheme);
  setupTheme();
}

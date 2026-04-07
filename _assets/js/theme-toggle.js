const toggle = document.querySelector('.theme-switch');
const currentTheme = localStorage.getItem('theme');

// Set initial theme
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

toggle.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  let newTheme = theme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
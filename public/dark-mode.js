(function () {
  const html = document.documentElement;
  const STORAGE_KEY = 'constructor-theme';

  function isDark() {
    return html.getAttribute('data-theme') === 'dark';
  }

  function accentForTheme(hex, dark) {
    if (!dark) return hex;
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
    const l = (max + min) / 2;
    const s = d === 0 ? 0 : d / (l > 0.5 ? 2 - max - min : max + min);
    let h = 0;
    if (d !== 0) {
      if (max === r) h = ((g - b) / d % 6) / 6;
      else if (max === g) h = ((b - r) / d + 2) / 6;
      else h = ((r - g) / d + 4) / 6;
    }
    if (h < 0) h += 1;
    return `hsl(${Math.round(h * 360)},${Math.round(s * 60)}%,25%)`;
  }

  function updateAccents() {
    const dark = isDark();
    document.querySelectorAll('option[data-accent]').forEach(function (opt) {
      opt.style.backgroundColor = accentForTheme(opt.dataset.accent, dark);
      opt.style.color = dark ? 'rgba(220,220,220,0.9)' : '';
    });
  }

  function setToggle(toggle, animate) {
    const dark = isDark();
    const icon = toggle.querySelector('img');
    const label = toggle.querySelector('span');
    icon.src = dark ? '/icons/lightmode.svg' : '/icons/darkmode.svg';
    label.textContent = dark ? 'Light Mode' : 'Dark Mode';
    if (animate) {
      icon.classList.remove('icon-animate');
      void icon.offsetWidth;
      icon.classList.add('icon-animate');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;

    setToggle(toggle, false);

    toggle.addEventListener('click', function () {
      if (isDark()) {
        html.removeAttribute('data-theme');
        localStorage.setItem(STORAGE_KEY, 'light');
      } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem(STORAGE_KEY, 'dark');
      }
      setToggle(toggle, true);
      updateAccents();
    });
  });
})();

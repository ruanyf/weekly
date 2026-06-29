(function () {
  'use strict';

  function applyTheme(mode) {
    var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = mode === 'system' && dark ? 'dark' : mode;
  }

  var select = document.getElementById('theme-select');
  if (!select) return;

  var saved = localStorage.getItem('weeklyWebTheme') || 'system';
  select.value = saved;
  applyTheme(saved);

  select.addEventListener('change', function () {
    var next = select.value;
    localStorage.setItem('weeklyWebTheme', next);
    applyTheme(next);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    var current = localStorage.getItem('weeklyWebTheme') || 'system';
    if (current === 'system') applyTheme('system');
  });
})();

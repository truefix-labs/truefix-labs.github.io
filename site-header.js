(() => {
  function activate(locale) {
    const copy = window.TrueFixNavigation[locale];
    if (!copy) return;
    document.querySelectorAll('[data-site-i18n]').forEach(node => {
      if (copy[node.dataset.siteI18n]) node.textContent = copy[node.dataset.siteI18n];
    });
    document.querySelectorAll('[data-site-i18n-aria-label]').forEach(node => {
      if (copy[node.dataset.siteI18nAriaLabel]) node.setAttribute('aria-label', copy[node.dataset.siteI18nAriaLabel]);
    });
  }
  window.TrueFixHeader = { activate };
})();

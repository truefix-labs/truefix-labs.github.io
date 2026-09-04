(() => {
  const LOCALE_SLUGS = { 'zh-CN': 'zh-cn', ja: 'ja', ko: 'ko', en: 'en' };
  const SLUG_LOCALES = Object.fromEntries(Object.entries(LOCALE_SLUGS).map(([locale, slug]) => [slug, locale]));
  const LOCALIZABLE = /^(?:\/?|\/(?:about(?:\/[^/]+)?|guide|support|privacy|product-film)\/?)$/;

  function pathLanguage() {
    const first = location.pathname.split('/').filter(Boolean)[0]?.toLowerCase();
    return SLUG_LOCALES[first] || null;
  }

  function basePath(pathname = location.pathname) {
    const parts = pathname.split('/').filter(Boolean);
    if (SLUG_LOCALES[parts[0]?.toLowerCase()]) parts.shift();
    return `/${parts.join('/')}${parts.length ? '/' : ''}`;
  }

  function localizedUrl(locale, href = location.href) {
    const slug = LOCALE_SLUGS[locale];
    if (!slug) return href;
    const url = new URL(href, document.baseURI);
    if (url.origin !== location.origin || !LOCALIZABLE.test(basePath(url.pathname))) return url.href;
    const clean = basePath(url.pathname);
    url.pathname = clean === '/' ? `/${slug}/` : `/${slug}${clean}`;
    return url.href;
  }

  function rewriteLinks(locale) {
    document.querySelectorAll('a[href]').forEach((anchor) => {
      const raw = anchor.getAttribute('href');
      if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) return;
      const next = localizedUrl(locale, raw);
      const parsed = new URL(next);
      if (parsed.origin === location.origin && LOCALIZABLE.test(basePath(parsed.pathname))) anchor.href = next;
    });
  }

  function activate(locale) {
    if (LOCALE_SLUGS[locale]) rewriteLinks(locale);
  }

  function navigate(locale) {
    try { localStorage.setItem('truefix.language', locale); } catch { /* Navigation still works. */ }
    location.assign(localizedUrl(locale));
  }

  window.TrueFixLocale = { pathLanguage, basePath, localizedUrl, activate, navigate };
})();

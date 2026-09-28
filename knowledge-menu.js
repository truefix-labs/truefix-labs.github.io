(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const navigation = document.querySelector('[data-nav]');
  if (!menuButton || !navigation) return;
  const pathLocale = window.location.pathname.match(/^\/(zh-cn|ja|ko)(?:\/|$)/)?.[1];
  const researchLink = navigation.querySelector('a[data-site-i18n="nav.research"]');
  if (researchLink) researchLink.href = pathLocale ? `/${pathLocale}/research/` : '/research/';
  const labels = {
    'zh-cn': { 'nav.home': '首页', 'nav.research': '研究', 'nav.about': '关于我们', 'nav.support': '支持', 'nav.feedback': '反馈', 'nav.guide': '使用指南' },
    ja: { 'nav.home': 'ホーム', 'nav.research': '研究', 'nav.about': '私たちについて', 'nav.support': 'サポート', 'nav.feedback': 'フィードバック', 'nav.guide': '利用ガイド' },
    ko: { 'nav.home': '홈', 'nav.research': '연구', 'nav.about': '소개', 'nav.support': '지원', 'nav.feedback': '피드백', 'nav.guide': '사용 가이드' }
  }[pathLocale];
  if (labels) navigation.querySelectorAll('[data-site-i18n]').forEach(node => { if (labels[node.dataset.siteI18n]) node.textContent = labels[node.dataset.siteI18n]; });

  const setMenu = open => {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });
})();

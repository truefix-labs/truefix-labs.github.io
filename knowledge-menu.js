(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const navigation = document.querySelector('[data-nav]');
  if (!menuButton || !navigation) return;
  const pathLocale = window.location.pathname.match(/^\/(zh-cn|ja|ko)(?:\/|$)/)?.[1];
  const researchLink = navigation.querySelector('a[data-site-i18n="nav.research"]');
  if (researchLink) researchLink.href = pathLocale ? `/${pathLocale}/research/` : '/research/';

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

(() => {
  const menuButton = document.querySelector('[data-menu-button], [data-guide-menu-button]');
  const navigation = document.querySelector('[data-nav], [data-guide-nav]');
  if (!menuButton || !navigation) return;

  const desktop = window.matchMedia('(min-width: 901px)');

  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  function handleViewport(event) {
    if (event.matches) closeMenu();
  }

  if (desktop.addEventListener) desktop.addEventListener('change', handleViewport);
  else desktop.addListener(handleViewport);

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab' || !document.body.classList.contains('menu-open')) return;
    const focusable = [menuButton, ...navigation.querySelectorAll('a[href], button:not([disabled]):not([tabindex="-1"])')]
      .filter((element) => !element.hidden && element.getClientRects().length);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();

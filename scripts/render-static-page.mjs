import { readFile, writeFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { parseHTML } from 'linkedom';

const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
async function dictionary(path, expression) {
  const source = await read(path);
  return runInNewContext(source.slice(0, source.indexOf('function normalizeLanguage')) + `\n(${expression})`);
}
const home = await dictionary('script.js', 'translations');
const about = await dictionary('about/about.js', 'copy');
const guide = await dictionary('guide/guide.js', 'shellTranslations');
const legal = await dictionary('legal/legal.js', 'shellCopy');
const film = await dictionary('product-film/film.js', 'copy');
const people = await dictionary('about/person.js', '({shell, profiles})');
const header = await read('shared/header.html');
const slugs = { 'zh-CN': 'zh-cn', ja: 'ja', ko: 'ko', en: 'en' };
const names = { 'zh-CN': '简体中文', ja: '日本語', ko: '한국어', en: 'English' };
const navigation = Object.fromEntries(Object.entries(home).map(([locale, copy]) => [locale,
  Object.fromEntries(Object.entries(copy).filter(([key]) => /^(nav\.|a11y\.|language\.)/.test(key)))]));
await writeFile(new URL('site-navigation.js', root), `// Generated from script.js by npm run build.\nwindow.TrueFixNavigation = ${JSON.stringify(navigation, null, 2)};\n`);

function translate(document, attribute, copy, mode = 'text') {
  for (const node of document.querySelectorAll(`[${attribute}]`)) {
    const value = copy[node.getAttribute(attribute)];
    if (!value) continue;
    if (mode === 'html') node.innerHTML = value.replace('\n', '<br>');
    else if (mode === 'text') node.textContent = value;
    else node.setAttribute(mode, value);
  }
}

export async function renderPage(html, route, locale, localized = true) {
  const { document } = parseHTML(html);
  const prefix = localized ? `/${slugs[locale]}` : '';
  const pagePath = `${prefix}/${route ? route + '/' : ''}`;
  const container = document.createElement('div');
  container.innerHTML = header;
  const newHeader = container.firstElementChild;
  // Preserve the existing page controllers while sharing one header template.
  if (route === 'guide') {
    for (const node of newHeader.querySelectorAll('*')) {
      for (const attr of [...node.attributes]) {
        if (attr.name.startsWith('data-language') || ['data-menu-button', 'data-nav'].includes(attr.name)) {
          node.setAttribute(attr.name.replace('data-', 'data-guide-'), attr.value);
          node.removeAttribute(attr.name);
        }
      }
    }
    newHeader.querySelector('.language-picker').classList.add('guide-language-picker');
  } else if (route) {
    newHeader.querySelectorAll('[data-language-option]').forEach(node => {
      node.setAttribute('data-language', node.getAttribute('data-language-option'));
      node.removeAttribute('data-language-option');
    });
  }
  document.querySelector('header').replaceWith(newHeader);
  for (const [tag, attr, path] of [['link', 'href', '/site-header.css?v=1'], ['script', 'src', '/site-navigation.js?v=1'], ['script', 'src', '/site-header.js?v=1']]) {
    if (document.querySelector(`${tag}[${attr}="${path}"]`)) continue;
    const node = document.createElement(tag);
    node.setAttribute(attr, path);
    if (tag === 'link') {
      node.rel = 'stylesheet';
      const mobile = document.querySelector('link[href*="mobile-shell.css"]');
      mobile.before(node);
    } else {
      node.setAttribute('defer', '');
      const first = document.querySelector('script[src*="locale-routes.js"]');
      first.before(node);
    }
  }
  const copy = route === '' ? home[locale] : route === 'about' ? about[locale] : {};
  translate(document, 'data-i18n', copy);
  translate(document, 'data-i18n-html', copy, 'html');
  translate(document, 'data-i18n-alt', copy, 'alt');
  translate(document, 'data-i18n-aria-label', copy, 'aria-label');
  if (route === 'guide') {
    translate(document, 'data-guide-key', guide[locale], 'html');
    const content = document.querySelector('[data-guide-content]');
    content.innerHTML = await read(`guide/content/${locale}.html`);
    content.dataset.staticLocale = locale;
  } else if (route === 'privacy' || route === 'support') {
    translate(document, 'data-shell', {...legal[locale], ...legal[locale][route]}, 'html');
    if (locale !== 'en') {
      const parsed = parseHTML(await read(`${route}/content/${locale}.html`)).document;
      for (const part of ['document', 'navigation']) document.querySelector(`[data-legal-${part}]`).innerHTML = parsed.querySelector(`[data-localized-${part}]`).innerHTML;
    }
    document.querySelector('[data-legal-document]').dataset.staticLocale = locale;
  } else if (route === 'product-film') {
    translate(document, 'data-copy', film[locale]);
    document.querySelector('[data-copy="title"]').innerHTML = film[locale].title;
    const schemaNode = document.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(schemaNode.textContent);
    Object.assign(schema, { url: `https://truefix-labs.com${pagePath}`, inLanguage: locale,
      name: film[locale].metaTitle, description: film[locale].metaDescription });
    schemaNode.textContent = JSON.stringify(schema, null, 2);
  } else if (route.startsWith('about/')) {
    const profile = people.profiles[route.split('/')[1]];
    const content = profile[locale];
    translate(document, 'data-shell', people.shell[locale]);
    for (const key of ['role', 'question', 'explanation']) document.querySelector(`[data-${key}]`).textContent = content[key];
    document.querySelector('[data-focus]').innerHTML = content.focus.map(([title, text]) => `<div><strong>${title}</strong><span>${text}</span></div>`).join('');
  }
  translate(document, 'data-site-i18n', navigation[locale]);
  translate(document, 'data-site-i18n-aria-label', navigation[locale], 'aria-label');
  newHeader.querySelector('.language-current').textContent = names[locale];
  newHeader.querySelectorAll('[role="option"]').forEach(node => node.setAttribute('aria-selected', String(node.lang === locale)));
  // Resolve assets against the source page, but navigation against the locale URL.
  const base = `https://truefix-labs.com/${route ? route + '/' : ''}`;
  for (const anchor of document.querySelectorAll('a[href]')) {
    const raw = anchor.getAttribute('href');
    const url = new URL(raw, base);
    if (url.origin !== 'https://truefix-labs.com') continue;
    const clean = url.pathname.replace(/^\/(zh-cn|ja|ko|en)(?=\/)/, '');
    if (/^\/(?:about(?:\/[^/]+)?\/|guide\/|support\/|privacy\/|product-film\/)?$/.test(clean)) {
      anchor.setAttribute('href', `${raw.startsWith('#') ? pagePath : prefix + clean}${url.search}${url.hash}`);
    }
  }
  for (const anchor of newHeader.querySelectorAll('a[href]')) {
    if (anchor.getAttribute('href') === pagePath) anchor.setAttribute('aria-current', 'page');
  }
  // Language alternatives are ordinary links as well as hreflang metadata.
  const alternatives = document.createElement('div');
  alternatives.className = 'locale-links';
  alternatives.innerHTML = Object.entries(slugs).map(([lang, slug]) => `<a lang="${lang}" hreflang="${lang}" href="/${slug}/${route ? route + '/' : ''}">${names[lang]}</a>`).join(' · ');
  document.querySelector('.locale-links')?.remove();
  (document.querySelector('footer') || document.body).append(alternatives);
  return document.toString();
}

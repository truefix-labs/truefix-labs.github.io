const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const { parseHTML } = require('linkedom');
const routes = ['', 'about', 'guide', 'privacy', 'support', 'product-film', ...['elias-navarro','chen-wei','park-min-seo','amara-okafor','sora-kimura','leila-haddad'].map(x => `about/${x}`)];
const locales = { 'zh-cn': 'zh-CN', ja: 'ja', ko: 'ko', en: 'en' };
test('static language pages have distinct content, self canonicals, reciprocal alternates and localized links', async () => {
  const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  for (const route of routes) {
    const headings = new Set();
    for (const [slug, lang] of Object.entries(locales)) {
      const path = `/${slug}/${route ? route + '/' : ''}`;
      const { document } = parseHTML(fs.readFileSync(`.${path}index.html`, 'utf8'));
      expect(document.documentElement.lang).toBe(lang);
      expect([...document.querySelectorAll('link[rel="canonical"]')].map(x => x.getAttribute('href'))).toEqual([`https://truefix-labs.com${path}`]);
      expect(sitemap).toContain(`<loc>https://truefix-labs.com${path}</loc>`);
      expect(document.querySelectorAll('link[hreflang]').length).toBe(5);
      for (const alt of Object.keys(locales)) expect(document.querySelector(`link[hreflang="${locales[alt]}"]`).getAttribute('href')).toBe(`https://truefix-labs.com/${alt}/${route ? route + '/' : ''}`);
      expect(document.querySelector('header').className).toBe('site-header');
      expect(document.querySelector('header a[href$="/guide/"]').getAttribute('href')).toBe(`/${slug}/guide/`);
      expect(document.querySelector('header a[href$="#overview"]').getAttribute('href')).toBe(`/${slug}/#overview`);
      const content = document.querySelector('main') || document.body;
      headings.add(content.textContent.trim());
      for (const anchor of document.querySelectorAll('a[href]')) {
        const href = anchor.getAttribute('href');
        if (href.startsWith('/') && href.includes('#')) {
          const [target, id] = href.split('#');
          const targetDocument = parseHTML(fs.readFileSync(`.${target}index.html`, 'utf8')).document;
          expect(targetDocument.getElementById(decodeURIComponent(id)), href).toBeTruthy();
        }
      }
    }
    expect(headings.size, route).toBe(4);
  }
});
for (const route of ['', 'about', 'guide', 'privacy', 'support', 'product-film', 'about/chen-wei']) {
  test(`shared header and mobile language navigation: /${route}`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.route(/https:\/\/(?!127\.0\.0\.1)/, route => route.abort());
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`/zh-cn/${route ? route + '/' : ''}`);
    await expect(page.locator('header')).toHaveCSS('height', '72px');
    await expect(page.locator('header a[href$="/zh-cn/#overview"]')).toHaveText('功能');
    await page.setViewportSize({ width: 390, height: 844 });
    const menu = page.locator('header .menu-button');
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('header .site-nav')).toBeVisible();
    await page.locator('header .language-trigger').click();
    await page.locator('header [role="option"][lang="ja"]').click();
    await expect(page).toHaveURL(new RegExp(`/ja/${route ? route + '/' : ''}$`));
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja');
    await menu.click();
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    expect(errors).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
test('headers fit narrow desktops consistently in every language', async ({ page }) => {
  await page.route(/https:\/\/(?!127\.0\.0\.1)/, route => route.abort());
  for (const slug of Object.keys(locales)) {
    for (const width of [1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const dimensions = [];
      for (const route of ['', 'about/', 'guide/']) {
        await page.goto(`/${slug}/${route}`);
        const layout = await page.locator('header').evaluate(header => {
          const brand = header.querySelector('.brand').getBoundingClientRect();
          const nav = header.querySelector('nav').getBoundingClientRect();
          return { brandRight: brand.right, navLeft: nav.left, navRight: nav.right, height: header.getBoundingClientRect().height };
        });
        expect(layout.brandRight).toBeLessThan(layout.navLeft);
        expect(layout.navRight).toBeLessThanOrEqual(width);
        dimensions.push(layout);
      }
      expect(dimensions[1]).toEqual(dimensions[0]);
      expect(dimensions[2]).toEqual(dimensions[0]);
    }
  }
  await page.goto('/zh-cn/about/');
  await page.screenshot({ path: '/tmp/truefix-about-desktop.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.locator('header .menu-button').click();
  await expect(page.locator('header .menu-button')).toHaveAttribute('aria-expanded', 'true');
  await page.screenshot({ path: '/tmp/truefix-about-mobile.png', animations: 'disabled' });
});

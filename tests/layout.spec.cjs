const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const routes = ['', 'about/', 'guide/', 'privacy/', 'support/', 'product-film/', ...['elias-navarro', 'chen-wei', 'park-min-seo', 'amara-okafor', 'sora-kimura', 'leila-haddad'].map(name => `about/${name}/`)];

test('all pages retain compact intros and readable content across viewport sizes', async ({ page }, testInfo) => {
  test.setTimeout(180000);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.route(/https:\/\//, route => route.abort());
  await page.route(/\.mp4(?:\?|$)/, route => route.abort());
  const report = [];
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const locale of ['', 'zh-cn/', 'ja/', 'ko/', 'en/']) {
      for (const route of routes) {
        const path = `/${locale}${route}`;
        await page.goto(path);
        const metrics = await page.evaluate(() => {
          const header = document.querySelector('header').getBoundingClientRect();
          const h1 = document.querySelector('h1').getBoundingClientRect();
          const overflow = [...document.querySelectorAll('main h1, main h2, main h3, main p, main li, footer')].filter(node => {
            if (!node.getClientRects().length) return false;
            const rect = node.getBoundingClientRect();
            return rect.width > 0 && (rect.right > innerWidth + 2 || rect.left < -2 || node.scrollWidth > node.clientWidth + 2);
          }).map(node => `${node.tagName}.${node.className}: ${node.textContent.slice(0, 70)}`);
          return { headerBottom: header.bottom, headingTop: h1.top, headingBottom: h1.bottom, width: document.documentElement.scrollWidth, overflow };
        });
        report.push({ path, viewportWidth: width, ...metrics });
        expect.soft(metrics.width, `${path} at ${width}px`).toBeLessThanOrEqual(width);
        expect.soft(metrics.overflow, `${path} at ${width}px`).toEqual([]);
        if (width <= 900) {
          expect.soft(metrics.headingTop - metrics.headerBottom, `${path} intro gap`).toBeLessThanOrEqual(100);
          expect.soft(metrics.headingBottom, `${path} title fits the first screen`).toBeLessThan(560);
        }
        if (locale === 'zh-cn/' && [360, 1440].includes(width) && (!route.startsWith('about/') || route === 'about/' || route === 'about/chen-wei/')) {
          await page.screenshot({ path: testInfo.outputPath(`${route.replaceAll('/', '-') || 'home'}-${width}.png`), animations: 'disabled' });
        }
      }
    }
  }
  fs.writeFileSync(testInfo.outputPath('layout-audit.json'), JSON.stringify(report, null, 2));
});

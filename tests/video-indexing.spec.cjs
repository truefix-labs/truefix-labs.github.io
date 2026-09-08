const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const { parseHTML } = require('linkedom');
test('homepage film links to watch pages, where video markup and sitemap entries remain', async ({ page }) => {
  await page.route(/https:\/\//, route => route.abort());
  const sitemap = parseHTML(fs.readFileSync('sitemap.xml', 'utf8')).document;
  const videoEntries = [...sitemap.querySelectorAll('url')].filter(node => node.getElementsByTagName('video:video').length);
  expect(videoEntries).toHaveLength(5);
  for (const entry of videoEntries) expect(entry.querySelector('loc').textContent).toMatch(/\/product-film\/$/);
  for (const locale of ['', 'en/', 'zh-cn/', 'ja/', 'ko/']) {
    const home = parseHTML(fs.readFileSync(`${locale}index.html`, 'utf8')).document;
    expect(home.querySelectorAll('video, iframe, embed, object')).toHaveLength(0);
    expect(home.querySelector('script[type="application/ld+json"]')?.textContent || '').not.toContain('VideoObject');
    await page.goto(`/${locale}`);
    const link = page.locator('.film-watch-link');
    const watchPath = `/${locale || 'en/'}product-film/`;
    await expect(link).toHaveAttribute('href', new RegExp(`${watchPath}$`));
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${watchPath}$`));
    await expect(page.locator('video')).toBeVisible();
    await expect(page.locator('video')).toHaveAttribute('controls', '');
    const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
    expect(schema['@type']).toBe('VideoObject');
    expect(schema.url).toBe(`https://truefix-labs.com${watchPath}`);
  }
});

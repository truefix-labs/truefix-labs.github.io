const fs = require('node:fs');
const path = require('node:path');
const { test, expect } = require('@playwright/test');

const routes = [
  'research/building-a-multi-broker-trading-system-in-rust',
  'engineering/trading-system-architecture',
  'engineering/broker-adapter-architecture',
  'engineering/order-management-system',
  'engineering/execution-engine',
  'engineering/risk-engine',
  'engineering/instrument-master',
  'engineering/symbol-normalization',
  'engineering/order-state-machine',
  'engineering/trading-reconciliation',
  'engineering/idempotent-order-execution',
  'data/broker-api-matrix',
  'ai-trading/ai-trading-agent-architecture'
];

test('P0 knowledge pages are statically complete', async () => {
  for (const route of routes) {
    const html = fs.readFileSync(path.join(route, 'index.html'), 'utf8');
    expect(html, route).toMatch(/<title>[^<]+<\/title>/);
    expect(html, route).toMatch(/<meta name="description"/);
    expect(html, route).toContain(`<link rel="canonical" href="https://truefix-labs.com/${route}/">`);
    expect(html, route).toMatch(/<h1>[^<]+<\/h1>/);
    expect(html, route).toContain('application/ld+json');
    expect(html, route).toContain('Last verified:');
  }
});

test('knowledge discovery files include generated routes and AI crawlers', async () => {
  const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  const robots = fs.readFileSync('robots.txt', 'utf8');
  for (const route of routes) expect(sitemap).toContain(`https://truefix-labs.com/${route}/`);
  for (const bot of ['OAI-SearchBot', 'GPTBot', 'Claude-SearchBot', 'Claude-User', 'Googlebot', 'Bingbot']) expect(robots).toContain(`User-agent: ${bot}`);
  expect(fs.readFileSync('sitemap-index.xml', 'utf8')).toContain('sitemap-pages.xml');
  expect(fs.readFileSync('feed.xml', 'utf8')).toContain('Trading Engineering Research');
  expect(fs.readFileSync('llms.txt', 'utf8')).toContain('/research/');
});

test('knowledge-base internal links resolve to static routes', async () => {
  const roots = ['research', 'engineering', 'brokers', 'compare', 'ai-trading', 'data'];
  const htmlFiles = [];
  const visit = directory => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(target);
      else if (entry.name === 'index.html') htmlFiles.push(target);
    }
  };
  for (const root of roots) visit(root);
  const hrefPattern = /href="(\/(?:research|engineering|brokers|compare|ai-trading|data)\/[^"#?]*)/g;
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');
    for (const match of html.matchAll(hrefPattern)) {
      const route = match[1].replace(/^\//, '').replace(/\/$/, '');
      expect(fs.existsSync(path.join(route, 'index.html')), `${file}: ${match[1]}`).toBeTruthy();
    }
  }
});

test('TrueFix Studio indicator catalogue is multilingual and complete', async () => {
  const pages = [
    ['research/studio-indicators', 'en'],
    ['zh-cn/research/studio-indicators', 'zh-CN'],
    ['ja/research/studio-indicators', 'ja'],
    ['ko/research/studio-indicators', 'ko']
  ];
  for (const [route, lang] of pages) {
    const html = fs.readFileSync(path.join(route, 'index.html'), 'utf8');
    expect(html, route).toContain(`<html lang="${lang}">`);
    expect(html, route).toContain('<h1>');
    expect((html.match(/<tr>/g) || []).length - 1, route).toBe(80);
    expect(html, route).toContain('hreflang="zh-CN"');
    expect(html, route).toContain('TrueFix Studio');
  }
});

test('Research menu opens on mobile knowledge pages', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/zh-cn/research/studio-indicators/');
  const menu = page.locator('header .menu-button');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('header .site-nav')).toBeVisible();
  await expect(page.locator('header a[data-site-i18n="nav.research"]')).toHaveAttribute('href', '/zh-cn/research/');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('localized Research indexes exist and expose reciprocal hreflang links', async () => {
  const pages = [
    ['research', 'en', 'Trading Engineering Research'],
    ['zh-cn/research', 'zh-CN', '交易工程研究'],
    ['ja/research', 'ja', 'トレーディングエンジニアリング研究'],
    ['ko/research', 'ko', '트레이딩 엔지니어링 연구']
  ];
  for (const [route, lang, heading] of pages) {
    const html = fs.readFileSync(path.join(route, 'index.html'), 'utf8');
    expect(html, route).toContain(`<html lang="${lang}">`);
    expect(html, route).toContain(`<h1>${heading}</h1>`);
    expect(html, route).toContain('hreflang="zh-CN"');
  }
});

test('Research language picker switches between localized routes', async ({ page }) => {
  await page.goto('/zh-cn/research/');
  await page.locator('[data-language-toggle]').click();
  await page.locator('[data-language-option="ja"]').click();
  await page.waitForURL('**/ja/research/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ja');
  await page.locator('[data-language-toggle]').click();
  await page.locator('[data-language-option="en"]').click();
  await page.waitForURL(/\/research\/$/);
  expect(new URL(page.url()).pathname).toBe('/research/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('translated Research articles switch without a 404', async ({ page }) => {
  await page.goto('/research/building-a-multi-broker-trading-system-in-rust/');
  await page.locator('[data-language-toggle]').click();
  await page.locator('[data-language-option="zh-CN"]').click();
  await page.waitForURL(/\/zh-cn\/research\/building-a-multi-broker-trading-system-in-rust\/$/);
  await expect(page.locator('h1')).toContainText('用 Rust 构建多券商交易系统');
});

test('Japanese and Korean Research article routes are generated', async () => {
  for (const [locale, heading] of [['ja', 'Rust でマルチブローカー取引システムを構築する'], ['ko', 'Rust로 멀티 브로커 트레이딩 시스템 구축하기']]) {
    const route = `${locale}/research/building-a-multi-broker-trading-system-in-rust`;
    const html = fs.readFileSync(path.join(route, 'index.html'), 'utf8');
    expect(html, route).toContain(`<html lang="${locale}">`);
    expect(html, route).toContain(`<h1>${heading}</h1>`);
    expect(html, route).toContain('hreflang="en"');
  }
});

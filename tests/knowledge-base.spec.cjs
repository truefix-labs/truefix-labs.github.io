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

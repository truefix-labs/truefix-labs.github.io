const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => { await page.route(/https:\/\//, route => route.abort()); });
test('demo advances through approval before simulation and supports pause and manual selection', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.clock.install();
  await page.goto('/zh-cn/');
  const demo = page.locator('.strategy-demo');
  await expect(demo).toHaveAttribute('data-playing', 'true');
  await expect(page.locator('[data-demo-scene="0"]')).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('demo-desktop.png') });
  for (let step = 1; step < 5; step++) {
    await page.clock.fastForward([3000, 3000, 4500, 4000][step - 1] + 100);
    await expect(page.locator(`[data-demo-scene="${step}"]`)).toBeVisible();
    await expect(page.locator('[data-demo-scene]:visible')).toHaveCount(1);
  }
  await page.clock.runFor(5500);
  await expect(page.locator('[data-art-return]')).not.toHaveText('+0.00%');
  await page.screenshot({ path: testInfo.outputPath('abstract-running-desktop.png'), animations: 'disabled' });
  await page.locator('.demo-toggle').click();
  const profit = await page.locator('[data-art-return]').textContent();
  await page.clock.fastForward(6000);
  await expect(page.locator('[data-art-return]')).toHaveText(profit);
  await expect(page.locator('[data-demo-scene="4"]')).toBeVisible();
  await expect(demo).toHaveAttribute('data-playing', 'false');
  await page.locator('[data-demo-step="3"]').click();
  await expect(page.locator('[data-demo-scene="3"]')).toBeVisible();
  await page.locator('.demo-toggle').click();
  await page.clock.fastForward(500);
  await expect(page.locator('[data-demo-scene="4"]')).toBeVisible();
  await page.locator('.actual-screens summary').click();
  await expect(demo).toHaveAttribute('data-playing', 'false');
  await expect(page.locator('#preview-market')).toBeVisible();
});
test('reduced motion stays static and every locale fits all steps on mobile', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 360, height: 800 });
  for (const locale of ['zh-cn', 'en', 'ja', 'ko']) {
    await page.goto(`/${locale}/`);
    const demo = page.locator('.strategy-demo');
    await demo.scrollIntoViewIfNeeded();
    await expect(demo).toHaveAttribute('data-playing', 'false');
    const heights = [];
    for (let step = 0; step < 5; step++) {
      await page.locator(`[data-demo-step="${step}"]`).click();
      await expect(page.locator(`[data-demo-scene="${step}"]`)).toBeVisible();
      heights.push(await demo.evaluate(el => el.offsetHeight));
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await expect(page.locator(`[data-demo-scene="${step}"] h3`)).not.toBeEmpty();
    }
    expect(Math.max(...heights) - Math.min(...heights)).toBeLessThanOrEqual(1);
    if (locale === 'zh-cn') await page.screenshot({ path: testInfo.outputPath('demo-mobile.png') });
  }
});

import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  const pageTitle = await page.textContent('.oxd-text.oxd-text--h6');
  expect(pageTitle).toContain('Dashboard');
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('joe');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('hey111');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000);
  await page.getByText('Invalid credentials').click();
});

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('#app div').filter({ hasText: 'LoginUsername : AdminPassword' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Username$/ }).nth(1).click();
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#app')).toContainText('Time at WorkPunched InPunched In: Jan 16th at 06:00 AM (GMT 4)16h 21m TodayThis WeekJan 15 - Jan 210h 0m');
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page.getByRole('heading')).toContainText('Login');
});
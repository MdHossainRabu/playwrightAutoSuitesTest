import { test, expect } from '@playwright/test';

test('WellsFargoDemo', async ({ page }) => {
  await page.goto('https://www.wellsfargo.com/');
  await expect(page.locator('#sign-on-header')).toContainText('Good morning');
  await page.getByLabel('Username', { exact: true }).click();
  await page.getByLabel('Username', { exact: true }).fill('hossain');
  await page.getByText('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('23456');
  await page.getByRole('button', { name: 'Sign On' }).click();
  await expect(page.getByTestId('errorMessage').getByRole('paragraph')).toContainText('That combination doesn\'t match our records. You can try again, or we can help you create a new password or find your username.');
});
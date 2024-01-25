import { test, expect } from '@playwright/test';

test('try to login metlife with invalid credentials', async ({ page }) => {
  await page.goto('https://www.metlife.com/insurance/dental-insurance/#');
  await expect(page.locator('h1')).toContainText('Dental Insurance');
  //await page.getByRole('').hover('_self');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).fill('aghr91');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('12345667');
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByText('The system has timed out due').click();
  await expect(page.getByRole('heading')).toContainText('We\'re sorry.');
});

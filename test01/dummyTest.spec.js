import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.autointegrate.com/register/');
  await expect(page.locator('h1')).toContainText('ACCOUNT WITH US');
  await page.locator('#menu-item-2211').getByRole('link', { name: 'Support' }).click();
 
  
});
import { test, expect } from '@playwright/test';

test('contact us information', async ({ page }) => {
  await page.goto('https://insurancewebsitedemo.com/');
  await expect(page.locator('#skrollr-body')).toContainText('Your IndependentInsurance Agency');
  await page.getByRole('link', { name: 'Contact Us', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Contact Information');
  await expect(page.locator('address')).toContainText('Demo Insurance Agency301 N Pecos Rd, Suite CHenderson, NV 89074T: 888-578-0212P: 888-578-0212F: 215-449-2150E: Send a Secure Message Facebook');
});
import { test, expect } from '@playwright/test';

test.only('Verify USPS weibsite to search Location', async ({ page }) => {
  await page.goto('https://www.usps.com/');
  await expect(page.locator('body')).toContainText('Search or Track Packages');
  await page.getByRole('link', { name: 'Locations' }).click();
  await expect(page.locator('body')).toContainText('Find USPS Locations');
  await page.getByPlaceholder('City and State, or ZIP Code™').click();
  await page.getByPlaceholder('City and State, or ZIP Code™').fill('11235');
  await page.locator('#searchLocations').click();
  await expect(page.locator('[id="\\31 433715"]')).toContainText('Retail Hours');
});
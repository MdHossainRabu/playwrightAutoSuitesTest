import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bubbas33.com/fan-club');
  await expect(page.locator('h1')).toContainText('Join our fan club');
  await page.getByRole('banner').getByRole('link', { name: 'Contact' }).click();
  await page.waitForTimeout(3000)
  await page.getByText('First name*').click();
  await page.getByLabel('First name*').fill('mark');
  await page.getByText('Last name*').click();
  await page.getByLabel('Last name*').fill('jhon');
  await page.getByText('Email address*').click();
  await page.getByLabel('Email address*').fill('aghr92@gmail.com');
  await page.getByLabel('Phone (555-555-5555)').click();
  await page.getByLabel('Phone (555-555-5555)').fill('929-293-3736');
  await page.getByText('What\'s going on?*').selectOption('manage-ordering-account');
  await page.getByLabel('What are you trying to do?*').selectOption('delete-account');

 // await expect(page.locator('label').filter({ hasText: 'I\'m over 13 years of age.*' }).locator('div')).toBeVisible();
 

  //await page.locator("input checkbox").check();
  //await page.waitForTimeout(3000)
  
  
  //await page.getByRole('button', { name: 'Send message' }).click();
  //await page.waitForTimeout(2000)
  //await expect(page.getByRole('alert')).toContainText('Thank you for contacting us.');
});
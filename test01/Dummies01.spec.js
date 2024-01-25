// @ts-check
  import { test, expect } from '@playwright/test';

  test('test', async ({ page }) => {
    await page.goto('https://formy-project.herokuapp.com/form');
    await expect(page.locator('#logo')).toContainText('Formy');
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Rabu');
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('Md');
    await page.getByPlaceholder('Enter your job title').click();
    await page.getByPlaceholder('Enter your job title').fill('SQA');
    await page.locator('#radio-button-2').check();
    await page.locator('#checkbox-1').check();
    await page.getByLabel('Years of experience:').selectOption('2');
    await page.getByPlaceholder('mm/dd/yyyy').click();
    await page.getByRole('cell', { name: '22' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('alert')).toContainText('The form was successfully submitted!');
  });




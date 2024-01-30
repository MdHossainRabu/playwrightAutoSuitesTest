const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');
const AutogenerateWebsite = require('../pageOb_Auto2/actionAuto/autoGenerate');

test('test', async ({ page }) => {
    const autoLocator = new AutogenerateWebsite(page);
   
    await autoLocator.visitHomePageauto();
    await autoLocator.statusAuto();
    await autoLocator.clickSuppotLink();
    await autoLocator.clickRegister();
    //await page.scroll({ y: 200 });
    /*
    await page.waitForTimeout(2000); 
     await autoLocator.enterFirstName();
    await autoLocator.enterTelephoneNumber();
    await autoLocator.shopEmailAddress();
    await autoLocator.enterShopName();
    
    await page.goto('https://www.autointegrate.com/register/');
    await expect(page.locator('h1')).toContainText('ACCOUNT WITH US');
    await page.locator('#menu-item-2211').getByRole('link', { name: 'Support' }).click();
    await page.goto('https://www.autointegrate.com/register/');
    await page.getByPlaceholder('NAME*', { exact: true }).click();
    await page.getByPlaceholder('NAME*', { exact: true }).fill('md');
    await page.getByPlaceholder('SHOP MAIN TELEPHONE NUMBER*').click();
    await page.getByPlaceholder('SHOP MAIN TELEPHONE NUMBER*').fill('2323434456');
    await page.getByPlaceholder('SHOP EMAIL ADDRESS*').click();
    await page.getByPlaceholder('SHOP EMAIL ADDRESS*').fill('aghr92@gmail.com');
    await page.getByPlaceholder('SHOP NAME*').click();
    await page.getByPlaceholder('SHOP NAME*').fill('bbq');
    await page.getByPlaceholder('ADDRESS LINE 1*').click();
    await page.getByPlaceholder('ADDRESS LINE 1*').fill('2345 brighton');
    await page.getByPlaceholder('CITY*').click();
    await page.getByPlaceholder('CITY*').fill('brooklyn');
    await page.getByPlaceholder('STATE*').click();
    await page.getByPlaceholder('STATE*').fill('ny');
    await page.getByPlaceholder('ZIP/POSTAL CODE*').click();
    await page.getByPlaceholder('ZIP/POSTAL CODE*').fill('11234');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByLabel('Contact form')).toContainText('One or more fields have an error. Please check and try again.');
*/

});
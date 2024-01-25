const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');
const FormyWebForm = require('../pageObjectModel/actions/formyWebForm');
const CommonPage = require('../pageObjectModel/actions/commonFormy');// extra

test('Verify User can fill up complete Formy web form', async ({ page }) => {

    const formyLocator = new FormyWebForm(page);

    const commonPage = new CommonPage(page)
   
    await commonPage.visitHomePage1();//await formyLocator.visitHomePage1();
    
    await commonPage.expectedPage();//await formyLocator.expectedPage();
    
    await formyLocator.nameAndJobTittle();

    await page.waitForTimeout(4000)

    await formyLocator.checkEducationAndSex();

    await formyLocator.experienceDropdown();

    await formyLocator.selectDatePicker();

    await page.waitForTimeout(3000)

    await formyLocator.clicksubmitButton();

    await page.waitForTimeout(3000)

    await formyLocator.captureText();



});// end of test
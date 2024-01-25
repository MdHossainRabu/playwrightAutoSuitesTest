const { test } = require('@playwright/test');
const LoginHRM = require('../pageObjectModel/actions/loginHRM');


test('OrangeHRM website for checking login credentials', async ({ page ,}) => {
    
    const loginPage = new LoginHRM(page);
    
    await loginPage.visitHomePage();
    await loginPage.verifyloginCredentials();

// invalid credentials
    // enter user name
    await page.getByPlaceholder("Username").fill("Admin")
    // enter the password
    await page.locator("input[name='password']").fill("admin12345")

    //click on login button
    await page.locator("//button[@type='submit']").click()

    // capture the error message
    const errorSms = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();
    console.log("validation error messge is " + errorSms);
    // 
    expect(errorSms?.includes("Invalid")).toBeTruthy();


   

    
  });// end of test
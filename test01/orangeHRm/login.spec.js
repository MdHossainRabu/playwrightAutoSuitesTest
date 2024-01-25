// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('OrangeHRM website for checking login credentials', () => {

    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        //verify the url
        await page.goto(baseUrl);
        //verify the page tittle
        await expect(page).toHaveTitle("OrangeHRM")

    });// end of beforeEach 

    test('Verify that the user can login with valid credentials', async ({ page }) => {

        // enter user name
        await page.getByPlaceholder("Username").fill("Admin")
        // enter the password
        await page.locator("input[name='password']").fill("admin123")

        //click on login button
        await page.locator("//button[@type='submit']").click()
        
        // for logout click on profile picture 
        await page.getByAltText("profile picture").first().click()

        // click on logout
        await page.getByText("Logout").click()
        //await page.waitForTimeout(5000)

        // verify expected page showing after log out
        await expect(page).toHaveURL(/login/);


    }); //end of test 1

    test('Verify that the user can not login with Invalid credentials', async ({ page }) => {
        //verify the url
        //await page.goto(baseUrl);


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



    }); //end of test 2



    test.afterEach(async ({ page }) => {

        //verify that its retrun back to the home page
        //await expect(page.locator('body')).toContainText('');

        await expect(page).toHaveURL(/login/);

    });// end of atter Ecah test

});// end of hook test describe

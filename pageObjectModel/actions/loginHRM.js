const {page} = require('playwright');
const loginPageLocator = require('../locators/loginHRM');
const { expect } = require('@playwright/test');


class LoginHRM {
    constructor(page) {
        this.page = page;
    }

    async visitHomePage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async verifyloginCredentials(){

    
    await this.page.locator(loginPageLocator.userName).fill("Admin")
 
    await this.page.locator(loginPageLocator.passWord).fill("admin123")

    await this.page.locator(loginPageLocator.loginButton).click()
    }

   async invalidCredentials(){

     
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
   }



   
}// end of class

module.exports = LoginHRM;
const { page } = require('playwright');

const autoLocatorPage = require('../locatorAuto/autoGenerate');
const { expect } = require('@playwright/test');


class autoWebsite {

    constructor(page) {
        this.page = page;
    }


    async visitHomePageauto(){
        await this.page.goto('https://www.autointegrate.com/register/');
    }


    async statusAuto(){
        await expect(this.page.locator(autoLocatorPage.pageAutoStatus)).toContainText('ACCOUNT WITH US');
    }

    async clickSuppotLink(){
        await this.page.locator(autoLocatorPage.supportButton).getByRole('link', { name: 'Support' }).click();
        //await this.page.goto('https://www.autointegrate.com/register/');
    }

    async clickRegister(){
        
        await this.page.goto('https://www.autointegrate.com/register/');

    }

    async enterFirstName(){
      await this.page.getByPlaceholder(autoLocatorPage.firstName).fill('md')
       
    
  
        
             //await page.getByPlaceholder('NAME*', { exact: true }).click();
            //await page.getByPlaceholder('NAME*', { exact: true }).fill('md');
        
    }

    
        async enterTelephoneNumber(){
         await this.page.getByPlaceholder(autoLocatorPage.number).fill("9343455434")
       
            
        }
        async shopEmailAddress(){
            await this.page.getByPlaceholder(autoLocatorPage.address).fill('aghr92@gmail.com');
             
           }

           async enterShopName(){
            await page.getByPlaceholder('SHOP NAME*').fill('Eastern Store');
            
           }
        
        
    

   

   

    



}//end of Web Form


module.exports = autoWebsite;
const { page } = require('playwright');

const commonLocator = require('../locators/commonFormy');
const { expect } = require('@playwright/test'); // 

class CommonPage {
    constructor(page) {
        this.page = page;
    }

    async visitHomePage1() {
        await this.page.goto('https://formy-project.herokuapp.com/form');

    }

    async expectedPage() {
        // Verify the text FORMY 
        await expect(this.page.locator(commonLocator.pageStatus)).toContainText('Formy');
    }

}//
module.exports = CommonPage;
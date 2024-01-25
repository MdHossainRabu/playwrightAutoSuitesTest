const { page } = require('playwright');

const formyLocatorPage = require('../locators/formyWebForm');
const { expect } = require('@playwright/test');


class WebForm {

    constructor(page) {
        this.page = page;
    }


    async nameAndJobTittle() {

        //enter First Name
        await this.page.getByPlaceholder(formyLocatorPage.firstName).fill("Mark")

        //enter Last Name
        const namelast = await this.page.getByPlaceholder(formyLocatorPage.lastName);
        namelast.waitFor();
        await namelast.fill("Atkinson");


        //Enter Job Tittle
        await this.page.getByPlaceholder(formyLocatorPage.jobTittle).fill("QA")

    }

    async checkEducationAndSex() {
        //check box for select highest level of education
        await this.page.locator(formyLocatorPage.educationButton).check();

        //Select Check box from Checkbox
        const experience = await this.page.locator(formyLocatorPage.sexIdentifyButton);
        experience.waitFor();

    }

    async experienceDropdown() {

        // Year of experience from drop down
        await this.page.getByLabel(formyLocatorPage.yearsOfexperince).selectOption('2');
    }

    async selectDatePicker() {

        // Choose Date Picker
        await this.page.getByPlaceholder(formyLocatorPage.datePicker).click();

    }

    async clicksubmitButton() {

        //await page.getByRole("btn btn-lg btn-primar").click()
        const button = await this.page.locator(formyLocatorPage.submitButton);
        button.waitFor();
        await button.click();
    }

    async captureText() {

        // Capture the Text
        // await expect(page.getByText('alert')).toContainText('The form was successfully submitted!');
        await expect(this.page.getByRole(formyLocatorPage.textMessage)).toContainText('The form was successfully submitted!');


    }



}//end of Web Form


module.exports = WebForm;
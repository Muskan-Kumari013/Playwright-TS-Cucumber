import { loginLocators } from "../locators/loginLocators";
import { Page } from "@playwright/test";
import * as uiTestData from "../config/uiConfig.json";

interface TestConfig {
    uiTests: {
        url: string;
        expTitle: string;
        invalidEmail: string;
        invalidPassword: string;
        expErrMsg: string;
    }[];
}
// Type the imported JSON data
const data: TestConfig = uiTestData;  // Now TypeScript knows the structure

export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickLoginButton() {
        await this.page.click(loginLocators.loginBtn);
        console.log('Clicked on the login button');
    }

    async enterEmail() {
        await this.page.fill(loginLocators.emailField, data.uiTests[0].invalidEmail); 
        console.log('Entered Email id');
    }

    async enterPassword() {
        await this.page.fill(loginLocators.passwordField, data.uiTests[0].invalidPassword);
        console.log('Entered password');
    }

    async clickLoginButtoninloginpage() {
        await this.page.click(loginLocators.loginBtnLoginPage);
        console.log('Clicked on the login button');
    }

    async verifyErrorMessage() {
        const errorMessage = await this.page.waitForSelector(loginLocators.errorMessage);
        const messageText = await errorMessage.textContent();
        if (messageText !== data.uiTests[0].expErrMsg) {
            throw new Error(`Expected error message to be "${data.uiTests[0].expErrMsg}", but got "${messageText}"`);
        }
        console.log('Error message verified');
    }
}
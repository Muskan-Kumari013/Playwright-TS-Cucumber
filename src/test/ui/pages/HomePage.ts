import { homeLocators } from "../locators/homeLocators";
import { Page } from "@playwright/test";
import * as uiTestData from "../config/uiConfig.json";

export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto(uiTestData.uiTests[0].url);
    }

    async acceptCookies() {
        try {
            await this.page.locator(`role=${homeLocators.acceptAllButton.role} >> text=${homeLocators.acceptAllButton.text}`).click();
            console.log('Accepted cookie consent popup');
        } catch (error) {
            console.log('No popup appeared or error accepting the popup:', error);
        }
    }

    async verifyTitle() {
        const title = await this.page.title();
        if (title !== homeLocators.title) {
            throw new Error(`Expected title to be "${homeLocators.title}", but got "${title}"`);
        }
    }
}
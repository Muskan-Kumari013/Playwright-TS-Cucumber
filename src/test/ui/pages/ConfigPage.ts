import { configLocators } from "../locators/configLocators";
import { Page } from "@playwright/test";

export class ConfigPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectPolestar3() {
        await this.page.locator(`role=${configLocators.polestar3Button.role} >> text=${configLocators.polestar3Button.text}`).click();
        console.log('Navigated to Polestar 3 page');
    }

    async configurePolestar3() {

        await this.page.click(configLocators.configureButton);
        await this.page.locator(`role=${configLocators.motorOption.role} >> text=${configLocators.motorOption.text}`).click();
        await this.page.locator(`button[aria-label="${configLocators.colorOptions.midnight}"]`).click();
        console.log('Configured Polestar 3');
    }

    async clickContinueButton() {
        await this.page.locator(`role=${configLocators.continueButton.role} >> text=${configLocators.continueButton.text}`).click();
        console.log('Clicked on Continue');
      }

    async searchLocation() {
        await this.page.locator(`role=${configLocators.searchLocationTab.role} >> text=${configLocators.searchLocationTab.text}`).click();
        console.log('Searched location');
    }

    async selectLocation() {
        await this.page.locator(`role=${configLocators.locationButton.role} >> text=${configLocators.locationButton.text}`).click();
        console.log('Selected location');
        await this.page.locator(`role=${configLocators.continueLocationButton.role} >> text=${configLocators.continueLocationButton.text}`).click();
        console.log('Clicked Continue');
    }
}
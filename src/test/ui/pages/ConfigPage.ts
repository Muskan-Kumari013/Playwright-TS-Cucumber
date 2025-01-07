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
        //await this.page.click(configLocators.motorOption.text);
        //await this.page.locator(`label=${configLocators.colorOption.label}`).click();
        //await this.page.click(configLocators.colorOption.label);
        await this.page.locator(`button[aria-label="${configLocators.colorOptions.midnight}"]`).click();
        //await this.page.locator(`text=${configLocators.leatherOption.label}`).click();
        //await this.page.click(configLocators.leatherOption.label);
        //await this.page.locator(`text=${configLocators.upgradeOption.label}`).click();
        //await this.page.click(configLocators.upgradeOption.label);
        console.log('Configured Polestar 3');
    }

    async clickContinueButton() {
        //await this.page.click(configLocators.continueButton.text);
        await this.page.locator(`role=${configLocators.continueButton.role} >> text=${configLocators.continueButton.text}`).click();
        console.log('Clicked on Continue');
      }

    async searchLocation() {
        //await this.page.click(configLocators.searchLocationTab.text);
        await this.page.locator(`role=${configLocators.searchLocationTab.role} >> text=${configLocators.searchLocationTab.text}`).click();
        console.log('Searched location');
    }

    async selectLocation() {
        //await this.page.click(configLocators.locationButton.name);
        await this.page.locator(`role=${configLocators.locationButton.role} >> text=${configLocators.locationButton.text}`).click();
        console.log('Selected location');
        //await this.page.click(configLocators.continueLocationButton.name);
        await this.page.locator(`role=${configLocators.continueLocationButton.role} >> text=${configLocators.continueLocationButton.text}`).click();
        console.log('Clicked Continue');
    }
}
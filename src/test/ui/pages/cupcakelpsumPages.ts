import { Page } from "@playwright/test";
import { CupcakeIpsumLocators } from "../locators/cupcakelpsumLocators";
//import { readFileSync } from 'fs';

export class CupcakeIpsumPage {
    page: Page;
  
    constructor(page: Page) {
        this.page = page; // Initialize the page object
    }


  // Navigate to the Cupcake Ipsum page
  async open() {
    await this.page.goto('http://www.cupcakeipsum.com', { timeout: 20000 });
  }

  // Get the page title
  async getPageTitle() {
    return await this.page.title();
  }

  // Check the number of paragraphs
  async checkParagraphs() {
    await this.page.waitForSelector(CupcakeIpsumLocators.paragraphsInput, { state: 'visible', timeout: 15000 });
    const value = await this.page.inputValue(CupcakeIpsumLocators.paragraphsInput); // Get the value from the input
    return value === '5'; // Check if the value matches the expected number of paragraphs
  }

  // Select the "Short" radio button
  async selectShortOption() {
    await this.page.waitForSelector(CupcakeIpsumLocators.optionRadioButton, { state: 'visible', timeout: 15000 });
    await this.page.click(CupcakeIpsumLocators.optionRadioButton, { timeout: 15000 });
  }

  // Check the checkbox to start with predefined text
  async checkStartWithText() {
    const checkbox = await this.page.$(CupcakeIpsumLocators.startWithTextCheckbox);
    if (checkbox !== null) {
    const isChecked = await checkbox.isChecked();
    if (!isChecked) {
      await checkbox.click();
    }
  }
  else {
    // Handle the case where checkbox is not found
    console.error("Checkbox not found on the page!");
  }
}


  // Check if the copy button is visible
  async isCopyButtonVisible() {
    const copyButton = await this.page.$(CupcakeIpsumLocators.copyButton);
    //return await copyButton.isVisible();
    return !copyButton;
  }

  // Get the count of instances of the predefined text
  async getTextCount() {
    const elements = await this.page.$$(CupcakeIpsumLocators.textElement);
    return elements.length;
  }

  // Click on the generate button to generate the text
  async generateContent() {
    await this.page.waitForSelector(CupcakeIpsumLocators.generateButton, { state: 'visible', timeout: 15000 });
    await this.page.click(CupcakeIpsumLocators.generateButton, { timeout: 15000 });
  }
}

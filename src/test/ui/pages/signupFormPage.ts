import { SignupFormLocators } from "../locators/signupFormLocators";
import { Page } from "@playwright/test";

export class SignupFormPage {
    page: Page;
  
    constructor(page: Page) {
        this.page = page; // Initialize the page object
    }

    // Navigate to the signup form page
    async goto() {
        await this.page.goto('https://marksheet.io/html-forms.html', { timeout: 20000 });
    }

    // Select the "Miss" title radio button
    async selectTitleMiss() {
        await this.page.waitForSelector(SignupFormLocators.titleRadio.miss, { state: 'visible', timeout: 15000 });
        await this.page.click(SignupFormLocators.titleRadio.miss, { timeout: 15000 });
    }

    // Fill in the "First name" field
    async fillFirstName(firstName: string) {
        await this.page.waitForSelector(SignupFormLocators.firstNameInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(SignupFormLocators.firstNameInput, firstName, { timeout: 15000 });
    }

    // Fill in the "Last name" field
    async fillLastName(lastName: string) {
        await this.page.waitForSelector(SignupFormLocators.lastNameInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(SignupFormLocators.lastNameInput, lastName, { timeout: 15000 });
    }

    // Fill in the "Email" field
    async fillEmail(email: string) {
        await this.page.waitForSelector(SignupFormLocators.emailInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(SignupFormLocators.emailInput, email, { timeout: 15000 });
    }

    // Fill in the "Phone number" field
    async fillPhone(phone: string) {
        await this.page.waitForSelector(SignupFormLocators.phoneInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(SignupFormLocators.phoneInput, phone, { timeout: 15000 });
    }

    // Fill in the "Password" field
    async fillPassword(password: string) {
        await this.page.waitForSelector(SignupFormLocators.passwordInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(SignupFormLocators.passwordInput, password, { timeout: 15000 });
    }

    // Fill in the "Confirm your password" field
    async fillConfirmPassword(confirmPassword: string) {
        await this.page.waitForSelector(SignupFormLocators.confirmPasswordInput, { state: 'visible', timeout: 15000 });
        await this.page.fill(SignupFormLocators.confirmPasswordInput, confirmPassword, { timeout: 15000 });
    }

    // Select "United States" from the "Country" dropdown
    async selectCountry(country: string) {
        await this.page.waitForSelector(SignupFormLocators.countryDropdown, { state: 'visible', timeout: 15000 });
        await this.page.selectOption(SignupFormLocators.countryDropdown, { label: country });
    }

    // Check the "I agree to the terms" checkbox
    async checkTerms() {
        await this.page.waitForSelector(SignupFormLocators.termsCheckbox, { state: 'visible', timeout: 15000 });
        await this.page.check(SignupFormLocators.termsCheckbox, { timeout: 15000 });
    }

    // Submit the signup form
    async submitForm() {
        await this.page.waitForSelector(SignupFormLocators.submitButton, { state: 'visible', timeout: 15000 });
        await this.page.click(SignupFormLocators.submitButton, { timeout: 30000 });
        
    }

    // Check if we have been redirected to the confirmation page
    async isOnConfirmationPage() {
    await this.page.waitForURL('https://marksheet.io/signup', { timeout: 30000 });
    const currentURL = await this.page.url();
    console.log("Current URL after form submission: ", currentURL); 
    return currentURL === 'https://marksheet.io/signup'; // Verify the expected URL
    
    }
}


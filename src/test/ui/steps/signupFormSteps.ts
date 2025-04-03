import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import data from '../config/data.json';
import { signupFormPage } from '../hooks/hooks';


Given('I am on the signup form page', async function () {
    await signupFormPage.goto();
});

When('I fill in the signup form with valid details', async function () {
    await signupFormPage.selectTitleMiss();
    await signupFormPage.fillFirstName(data.signupForm.firstName);
    await signupFormPage.fillLastName(data.signupForm.lastName);
    await signupFormPage.fillEmail(data.signupForm.email);
    await signupFormPage.fillPhone(data.signupForm.phone);
    await signupFormPage.fillPassword(data.signupForm.password);
    await signupFormPage.fillConfirmPassword(data.signupForm.confirmPassword);
    await signupFormPage.selectCountry(data.signupForm.country);
    await signupFormPage.checkTerms();
});

When('I submit the signup form', async function () {
    await signupFormPage.submitForm();
});

Then('I should be redirected to the signup confirmation page', async function () {
        const isConfirmationPage = await signupFormPage.isOnConfirmationPage();
        expect(isConfirmationPage).toBe(true); // Check if we are on the confirmation page
});

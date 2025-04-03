import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import data from '../config/data.json';
import { orangeHRMPage } from '../hooks/hooks';

Given('I navigate to the OrangeHRM login page', async function () {
  await orangeHRMPage.goToLoginPage();
});

When('I login with valid credentials', async function () {
  await orangeHRMPage.login(data.orangeHRM.username, data.orangeHRM.password);
});

Then('I should be directed to the Dashboard', async function () {
  const isDashboardLoaded = await orangeHRMPage.isDashboardLoaded();
  expect(isDashboardLoaded).toBe(true);
});

When('I click on the Admin button on the left', async function () {
  await orangeHRMPage.clickAdminButton();
});

Then('I should see Records Found on the page', async function () {
  const isRecordsFoundVisible = await orangeHRMPage.isRecordsFoundVisible();
  expect(isRecordsFoundVisible).toBe(true);
});

Then('I print the result displayed for Records Found', async function () {
  await orangeHRMPage.printRecordsFound();
});

When('I click on the profile on the top-right corner', async function () {
  await orangeHRMPage.clickProfileMenu();
});

Then('I should see About, Support, Change Password, and Logout options', async function () {
  const areOptionsVisible = await orangeHRMPage.verifyProfileMenuOptions();
  expect(areOptionsVisible).toBe(true);
});

When('I click on Logout', async function () {
  await orangeHRMPage.clickLogoutButton();
});

Then('I should be logged out and directed to the login page', async function () {
  const isLoginPageVisible = await orangeHRMPage.isLoginPageVisible();
  expect(isLoginPageVisible).toBe(true);
});

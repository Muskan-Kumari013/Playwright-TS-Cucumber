import {Given, Then} from "@cucumber/cucumber";
import * as fs from 'fs';
import { pageFixture } from "../hooks/pageFixture";
import { strict as assert } from 'assert';
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { homePage, loginPage } from "../hooks/hooks";

//let homePage: HomePage;
//let loginPage: LoginPage;

// Read data from the testConfig.json file
//let testData = JSON.parse(fs.readFileSync('config/testConfig.json','utf8')).uiTests;
let uiTestData = JSON.parse(fs.readFileSync('src/test/ui/config/uiConfig.json', 'utf8')).uiTests;

  /*Given('I navigate to the configurated URL', async function () {
    //loginPage = new LoginPage(pageFixture.page);
    await homePage.navigateToHomePage();
    await homePage.acceptCookies();
});*/

Then('I clicked on the login button', async function () {
    await loginPage.clickLoginButton();
});

Then('I entered the email address', async function () {
    await loginPage.enterEmail();
});

Then('I entered the password', async function () {
    await loginPage.enterPassword();
});

Then('I clicked on login', async function () {
    await loginPage.clickLoginButtoninloginpage();
});

Then('I verified the error message is as expected', async function () {
    await loginPage.verifyErrorMessage();
});
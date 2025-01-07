import {Given, Then} from "@cucumber/cucumber";
import * as fs from 'fs';
import { pageFixture } from "../hooks/pageFixture";
import { strict as assert } from 'assert';
import { HomePage } from "../pages/HomePage";
import { homePage } from "../hooks/hooks";

//let homePage: HomePage;

// Read data from the testConfig.json file
//let testData = JSON.parse(fs.readFileSync('config/testConfig.json','utf8')).uiTests;
let uiTestData = JSON.parse(fs.readFileSync('src/test/ui/config/uiConfig.json', 'utf8')).uiTests;

  /*Given('I navigate to the configurated URL', async function () {
    //homePage = new HomePage(pageFixture.page);
    await homePage.navigateToHomePage();
    await homePage.acceptCookies();
});*/

Then('I verify the title matches the configured value', async function () {
    await homePage.verifyTitle();
});

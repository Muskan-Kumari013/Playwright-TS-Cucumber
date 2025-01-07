import {Given, Then} from "@cucumber/cucumber";
import * as fs from 'fs';
import { pageFixture } from "../hooks/pageFixture";
import { strict as assert } from 'assert';
import { ConfigPage } from "../pages/ConfigPage";
import { HomePage } from "../pages/HomePage";
import { homePage, configPage } from "../hooks/hooks";

//let homePage: HomePage;
//let configPage: ConfigPage;

// Read data from the testConfig.json file
let uiTestData = JSON.parse(fs.readFileSync('src/test/ui/config/uiConfig.json', 'utf8')).uiTests;

 /* Given('I navigate to the configurated URL', async function () {
    //homePage = new HomePage(pageFixture.page);
    //configPage = new ConfigPage(pageFixture.page);    
    await homePage.navigateToHomePage();
    await homePage.acceptCookies();
});*/

Then('I select Polestar 3', async function () {
    await configPage.selectPolestar3();
});

Then('I configure the Polestar 3', async function () {
    await configPage.configurePolestar3();
});

Then('I continue the configuration', async function () {
    //await pageFixture.page.getByRole(locators.continueButton.role, { name: locators.continueButton.name }).click();
    //console.log('Clicked on Continue');
    await configPage.clickContinueButton();
  });



Then('I search for a location and click on Continue', async function () {
    await configPage.searchLocation();
    await configPage.selectLocation();
});
  
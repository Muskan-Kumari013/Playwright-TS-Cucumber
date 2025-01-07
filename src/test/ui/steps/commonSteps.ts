import {Given, Then} from "@cucumber/cucumber";
import { homePage } from "../hooks/hooks";
import * as fs from 'fs';

let uiTestData = JSON.parse(fs.readFileSync('src/test/ui/config/uiConfig.json', 'utf8')).uiTests;

Given('I navigate to the configurated URL', async function () {
    //homePage = new HomePage(pageFixture.page);
    await homePage.navigateToHomePage();
    await homePage.acceptCookies();
});

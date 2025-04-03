import { Before , After, BeforeAll, AfterAll, AfterStep, setDefaultTimeout }  from "@cucumber/cucumber";
import {chromium, Browser, Page, BrowserContext} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { pageFixture } from "./pageFixture";
import { BoardGamePage } from "../pages/boardgamePages";
import { CupcakeIpsumPage } from "../pages/cupcakelpsumPages";
import { OrangeHRMPage } from "../pages/orangeHRMPage";
import { SignupFormPage } from "../pages/signupFormPage";



let page: Page;
let browser: Browser;
let context: BrowserContext;
export let homePage: HomePage;
export let boardGamePage: BoardGamePage;
export let cupcakeIpsumPage: CupcakeIpsumPage;
export let orangeHRMPage: OrangeHRMPage;
export let signupFormPage: SignupFormPage;

// Set the default timeout for each step to 90 seconds
setDefaultTimeout(90000);

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });

});

Before(async function () {
    context = await browser.newContext();
    page = await browser.newPage();
    pageFixture.page = page;
    homePage = new HomePage(page);  // Initialize homePage
    boardGamePage = new BoardGamePage(page); // Initialize boardgamePage
    cupcakeIpsumPage = new CupcakeIpsumPage(page);
    orangeHRMPage = new OrangeHRMPage(page);
    signupFormPage = new SignupFormPage(page);
    //await page.setViewportSize({ width: 1280, height: 1024 });
    console.log('Browser launched');
  });

  AfterStep(async function ({pickle, result }) {
    const uniqueFileName = `${pickle.name.replace(/\s+/g, '_')}-step-${new Date().getTime()}.png`;
    const screenshot = await pageFixture.page.screenshot({ path: `./reports/screenshots/${uniqueFileName}`, type: 'png' });
    //const screenshot = await pageFixture.page.screenshot({path: './reports/screenshots/'+ pickle.name, type:"png"});
    await this.attach(screenshot, "image/png");
  });

  After(async function () {
    await pageFixture.page.close();
    await context.close();
    console.log('Browser closed');
  });

  AfterAll(async function () {
    await browser.close();
    console.log('Browser closed');
  });


import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
//import { CupcakeIpsumPage } from '../pages/cupcakelpsumPages';
import data from '../config/data.json';
import { cupcakeIpsumPage } from '../hooks/hooks';


Given('I visit the Cupcake website', async function () {
  await cupcakeIpsumPage.open();
});

Then('I should see the page title as the expected title', async function () {
  const title = await cupcakeIpsumPage.getPageTitle();
  expect(title).toEqual(data.cupcakeIpsum.title);
});

When('I configure the number of paragraphs', async function () {
  const isParagraphsCorrect = await cupcakeIpsumPage.checkParagraphs();
  expect(isParagraphsCorrect).toBe(true); 

});

When('I select the appropriate option', async function () {
  await cupcakeIpsumPage.selectShortOption();
});

When('I enable the checkbox to start with predefined text', async function () {
  await cupcakeIpsumPage.checkStartWithText();
});

Then('I should not see the copy button', async function () {
  const isButtonVisible = await cupcakeIpsumPage.isCopyButtonVisible();
  expect(isButtonVisible).toBe(true); // Verify that the copy button is not visible
});

When('I trigger the generation action', async function () {
  await cupcakeIpsumPage.generateContent();
});

Then('I should see more than one instance of the predefined text on the page', async function () {
  const count = await cupcakeIpsumPage.getTextCount();
  expect(count).toBeGreaterThanOrEqual(1); 
});

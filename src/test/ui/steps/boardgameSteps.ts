import { Given, When, Then } from '@cucumber/cucumber';
//import { BoardGamePage } from '../pages/boardgamePages';
import { expect } from '@playwright/test';
import data from '../config/data.json';
import { boardGamePage } from '../hooks/hooks';


Given('I am on the boardgame search page', async function () {
  await boardGamePage.goto();
});

When('I fill in the search form with valid details', async function () {
  // Use data from the "boardgameSearch" section of the JSON file
  await boardGamePage.fillSearchForm(data.boardgameSearch);
});

When('I submit the search', async function () {
  // Submit the search form
  await boardGamePage.submitSearch();
});

Then('I should see link on the result page', async function () {
try {
    // Get the game title and year max from data.json
    const title = data.boardgameSearch.title;
    const yearMax = data.boardgameSearch.yearPublishedMax;

    // Construct the expected text (e.g., "Harry Potter and the Sorcerer's Stone: Trivia Game (2000)")
    const expectedLinkText = `${title} (${yearMax})`;

    // Print the expected value for debugging
    console.log('Expected Link Text: ', expectedLinkText);

    // Fetch the link text from the search result page
    const linkText = await boardGamePage.getSearchResultLink();
    console.log('Actual Link Text: ', linkText);

    // Remove any extra spaces in the result and expected text to avoid mismatches
    const cleanedExpectedLinkText = expectedLinkText.replace(/\s+/g, '');
    const cleanedLinkText = linkText.replace(/\s+/g, '');

    // Assert that the cleaned link text matches the expected format
    expect(cleanedLinkText).toBe(cleanedExpectedLinkText);
    
  } catch (error) {
    console.error('Error fetching or verifying the link text: ', error);
    throw error;
  }

});

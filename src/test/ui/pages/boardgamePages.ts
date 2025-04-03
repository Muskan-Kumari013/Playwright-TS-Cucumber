import { Page } from "@playwright/test";
import { BoardgameLocators } from "../locators/boardgameLocators";
//import { readFileSync } from 'fs';


export class BoardGamePage {
  page: Page;

  constructor(page: Page) {
      this.page = page; // Initialize the page object
  }


  // Navigate to the boardgame search page
  async goto() {
    await this.page.goto('https://www.boardgamegeek.com/advsearch/boardgame');
  }

  // Fill in the search form using the boardgameSearch data from data.json
  async fillSearchForm(data: any) {
    await this.page.fill(BoardgameLocators.searchForm.titleInput, data.title);
    await this.page.fill(BoardgameLocators.searchForm.yearMinInput, data.yearPublishedMin);
    await this.page.fill(BoardgameLocators.searchForm.yearMaxInput, data.yearPublishedMax);
    await this.page.selectOption(BoardgameLocators.searchForm.minPlayTimeDropdown, { value: data.minPlayingTime });
    await this.page.selectOption(BoardgameLocators.searchForm.maxPlayTimeDropdown, { value: data.maxPlayingTime });
  }

  // Submit the search form
  async submitSearch() {
    await this.page.click(BoardgameLocators.searchForm.submitButton);
  }


    async getSearchResultLink() {
        const gameLinkLocator = this.page.locator(BoardgameLocators.resultPage.gameLink); // Locator for the game link
        const yearLocator = this.page.locator(BoardgameLocators.resultPage.yearText); // Locator for the year
  
        // Wait for the game link to be visible
        await gameLinkLocator.waitFor({ state: 'visible', timeout: 10000 });
        await yearLocator.waitFor({ state: 'visible', timeout: 10000 });
        // Get the link's text content
        const linkText = await gameLinkLocator.textContent() ?? '';
        const yearText = await yearLocator.textContent() ?? '';

        return `${linkText.trim()}${yearText.trim()}`;
      }
}


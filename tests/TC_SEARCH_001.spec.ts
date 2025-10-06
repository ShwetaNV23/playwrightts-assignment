
import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHome();  
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
})

test('TC_SEARCH_001 - Verify that a user can search for a product', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.navigateToSearch();  
    await searchPage.searchProduct('Laptop');
    await searchPage.verifySearchResult('Laptop'); 
});

test.afterEach(async ({ page }) => {
  await page.close();
});
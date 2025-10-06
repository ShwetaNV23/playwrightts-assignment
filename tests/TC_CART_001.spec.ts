
import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { CartPage } from '../pages/CartPage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHome();  
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
})

test('TC_CART_001 - Verify user can add product to cart', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const cartPage = new CartPage(page);
    await searchPage.navigateToSearch();  
    await searchPage.searchProduct('Laptop');
    await cartPage.addToCartMethod();
    await cartPage.navigateToCart();
    await cartPage.verifyProductPriceAtshoppingCart('1590.00');
}); 

test.afterEach(async ({ page }) => {
  await page.close();
});
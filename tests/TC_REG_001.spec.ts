import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHome();  
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
})

test('TC_REG_001 - Verify that a new user can register successfully', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.registerBtn();  
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/register');
  await homePage.selectGender('male');
  await homePage.enterFirstAndLastName('John','Doe');
  await homePage.enterEmailAndPassword(await homePage.generateRandomEmail(),'12345678');
  await homePage.clickRegister();
  await homePage.verifyRegistration();
}); 

test.afterEach(async ({ page }) => {
  await page.close();
});
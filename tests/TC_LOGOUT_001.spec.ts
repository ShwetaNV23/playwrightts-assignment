import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHome();  
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
})

test('TC_LOGOUT_001 - Verify user can logout successfully ', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
   await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
  await loginPage.loginWithValidCredentials(page,'juf8hp58@gmail.com','12345678');
  await loginPage.logoutMethod();
  await loginPage.verifyLogin
});
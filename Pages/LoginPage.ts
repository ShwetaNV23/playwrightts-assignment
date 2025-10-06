import { Page,expect,Locator } from "@playwright/test";
import { randomFill } from "crypto";

export class LoginPage {
    readonly page: Page;
    readonly LoginButton : Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly login: Locator;
    readonly logout: Locator;

    constructor (page: Page) {
         this.page = page;
         this.LoginButton = page.getByRole('link', { name: 'Log in' });
         this.email = page.getByRole('textbox', { name: 'Email:' });
         this.password = page.getByRole('textbox', { name: 'Password:' });
         this.login = page.getByRole('button', { name: 'Log in' });
         this.logout = page.getByRole('link', { name: 'Log out' });
    }
    async navigateToLogin() {
        await this.LoginButton.click();
    }
    async loginWithValidCredentials(page: Page,email:string,password:string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.login.click();
    }
    
    async logoutMethod() {
        await this.logout.click();
    }
    async verifyLogout() {
        await expect(this.logout).toBeVisible();
    }

    async verifyLogin() {
        await expect(this.login).toBeVisible();
    }
}
    


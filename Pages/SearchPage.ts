import { Page,expect,Locator } from "@playwright/test";
import { randomFill } from "crypto";

export class SearchPage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly searchResult: Locator;

        constructor (page: Page) {
        this.page = page;
        this.searchBox = page.locator('#small-searchterms');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.searchResult =page.getByRole('textbox', { name: 'Search keyword:' });

}

async navigateToSearch() {
        await this.searchBox.click();
}

async searchProduct(productName:string) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
}

async verifySearchResult(productName:string) {
        await expect(this.searchResult).toHaveValue(productName);
}


}
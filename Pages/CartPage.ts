import { Page,expect,Locator } from "@playwright/test";
import { randomFill } from "crypto";

export class CartPage   {
    readonly page: Page;
    readonly addToCart: Locator
    readonly shoppingCart: Locator
    readonly productprice: Locator

        constructor (page: Page) {
        this.page = page;
        this.addToCart = page.getByRole('button', { name: 'Add to cart' });
        this.shoppingCart = page.locator("//*[@id='topcartlink']");
        this.productprice = page.locator("//form/table/tbody/tr/td[4]/span[2]");    

}


async addToCartMethod(){
      await this.addToCart.nth(0).click();
}

async navigateToCart(){
    await this.shoppingCart.click();
}   

async verifyProductPriceAtshoppingCart(price:string){
    await expect(this.productprice).toHaveText(price);
}

}
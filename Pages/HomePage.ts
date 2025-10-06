import { Page,expect,Locator } from "@playwright/test";
import { randomFill } from "crypto";

export class HomePage {
    readonly page: Page;
    readonly registerButton: Locator;
    readonly genderFemale: Locator;
    readonly gendermale: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator; 
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly register : Locator;
    readonly  verifyRegister: Locator;
    constructor (page: Page) {
        this.page = page;
        this.registerButton = page.getByRole('link', { name: 'Register' });
        this.genderFemale = page.getByRole('radio', { name: 'Female',exact: true });
        this.gendermale = page.getByRole('radio', { name: 'Male', exact: true });
        this.firstName =page.locator("//*[@id='FirstName']");
        this.lastName = page.locator("//*[@id='LastName']");
        this.email = page.getByRole('textbox', { name: 'Email:' })
        this.password = page.getByRole('textbox', { name: 'Password:', exact: true });
        this.confirmPassword = page.getByRole('textbox', { name: 'Confirm password:' });
        this.register = page.getByRole('button', { name: 'Register' });
        this.verifyRegister = page.getByText('Your registration completed');
        
    }

    async navigateToHome() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async registerBtn() {   
        this.registerButton.click();
    }

    async selectGender(gender:string){ 
        if(gender==='female'){
            await this.genderFemale.click();
        }
        else{
            await this.gendermale.click();
        }
}

    async enterFirstAndLastName(firstname:string,lastname:string){
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
    }

    async enterEmailAndPassword(email:string,password:string){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);

    }

    async clickRegister(){
        await this.register.click();
    }

    async verifyRegistration(){
        const page = this.page;
        await expect(this.verifyRegister).toHaveText('Your registration completed');
    }

    async generateRandomEmail(domain: string = "gmail.com"): Promise<string> {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  console.log
  const nameLength = Math.floor(Math.random() * 10) + 5;
  let name = "";

  for (let i = 0; i < nameLength; i++) {
    name += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  console.log(name);
  return `${name}@${domain}`;
}

}


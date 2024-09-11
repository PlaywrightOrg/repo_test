// /pages/loginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  
  // Selectores de los elementos en la página
  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private submitButton = 'button[type="submit"]';
  private dashboardText = '.oxd-text.oxd-text--h6';
  private errormessage = '.oxd-alert-content';

  constructor(page: Page) {
    this.page = page;
  }

  // Métodos para interactuar con la página
  async goto() {
    await this.page.goto('/');
  }

  async fillUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async fillPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickSubmit() {
    await this.page.click(this.submitButton);
  }

  async getDashboardText() {
    return await this.page.textContent(this.dashboardText);
  }

  async getErrorMessage(){
    return await this.page.textContent(this.errormessage);
  }

  async navigate() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
}
  //Funcion de login exitoso

  async login(username: string, password: string) {


    await this.goto();
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickSubmit();
    await this.getDashboardText();
  }
}

// /pages/loginPage.ts
import { Page } from '@playwright/test';

export class EmployeePage {
  private page: Page;
  
  // Selectores de los elementos en la página
   pimMenuItem = '.oxd-main-menu-item active';
   addemployeebutton = '.oxd-main-menu-item active';
   firstNameInput = 'input[name="firstName"]';
   middleNameInput = 'input[name="middleName"]';
   lastNameInput = 'input[name="lastName"]';
   employeeId = '';

  constructor(page: Page) {
    this.page = page;
  }

  // Métodos para interactuar con la página
  async clickPIM() {
    await this.page.getByText('PIM').click();
  }
  async clickAdd() {
    await this.page.getByRole('button', { name: ' Add' });
  }

  async addEmployee(firstName: string, middleName: string, lastName: string) {
    await this.page.click(this.addemployeebutton);
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.middleNameInput, middleName);
    await this.page.fill(this.lastNameInput, lastName);


}

  
}

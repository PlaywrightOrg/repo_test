// /tests/login.test.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.setTimeout(60000);

test.beforeEach(async ({page})=> {
  const loginPage = new LoginPage(page);

  // Navega a la página de inicio de sesión
  await loginPage.goto();
})

test.describe('Login Tests',()=>{
  
  test.skip(process.env.ENV !== 'prod', 'Skipping test in non-production environment');

  test('successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    
    await loginPage.fillUsername('Admin');
    await loginPage.fillPassword('admin13');
    await loginPage.clickSubmit();
  
    
    const dashboardText = await loginPage.getDashboardText();
    expect(dashboardText).toContain('Dashboard');
  });
  
  
  test('Invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    
    await loginPage.fillUsername('Admi');
    await loginPage.fillPassword('admin13');
    await loginPage.clickSubmit();
  
    
    const errormessage = await loginPage.getErrorMessage();
    expect(errormessage).toContain('Invalid credentials');
  });



})





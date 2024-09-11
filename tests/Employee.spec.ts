// /tests/login.test.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { EmployeePage } from '../pages/employePage';

test.setTimeout(60000);

test.describe('Suite -Employee', ()=>{
    let loginPage: LoginPage;
    let employePage: EmployeePage;

    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page)
        await loginPage.login('Admin','admin123');

        employePage = new EmployeePage(page)
        await employePage.clickPIM();

    });

    test('Add a new Employee',async({page})=>
    {
        await employePage.clickAdd();
    }
    
    )
})
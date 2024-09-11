import { test } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';
import { CandidatePage } from '../pages/candidatePage';
import { LoginPage } from '../pages/loginPage';

test('Add a new candidate and upload file', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const candidatePage = new CandidatePage(page);

    
    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');

    
    await dashboardPage.navigateToCandidates();

  
   
    await candidatePage.addCandidate('Mar', 'Mon', 'mar.mon@example.com');

  
});

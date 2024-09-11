import { Page } from '@playwright/test';

export class DashboardPage {
    private page: Page;
    private recruitmentMenu = 'text=Recruitment';

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToCandidates() {
        await this.page.click(this.recruitmentMenu);
    }
}

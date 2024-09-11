import { Page } from '@playwright/test';

export class CandidatePage {
    private page: Page;
    private addCandidateButton = 'text=Add';
    private firstNameInput = 'input[name="firstName"]';
    private lastNameInput = 'input[name="lastName"]';
    private emailInput = 'input.oxd-input.oxd-input--focus';
    private uploadResumeInput = 'input[type="file"]';
    private saveButton = 'button[type="submit"]';
    private cvFilePath: string;

    constructor(page: Page) {
        this.page = page;
        this.cvFilePath = './files/cv.pdf';
    }

    async addCandidate(firstName: string, lastName: string, email: string) {
        await this.page.click(this.addCandidateButton);
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.waitForSelector(this.emailInput, { state: 'visible', timeout: 50000 }); // 50 segundos
        await this.page.fill(this.emailInput, email);
        await this.page.setInputFiles('input[type="file"]', this.cvFilePath);
       
    }
    async submitform(){
        await this.page.click(this.saveButton);
        
    }
}

  
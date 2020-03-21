import assert from 'assert';
import {LoginPage} from '../pageObj';
import {MenuPage} from '../pageObj';

describe('Checking Menu pages', function(){
        const loginPage = new LoginPage('alexey.dubchak+autosilent90988@staff.dev', 123456);
        const menuPage = new MenuPage();

    it('should check individual menu', function(){
        loginPage.signin();
        loginPage.visibilityLogin();
        loginPage.login();
        menuPage.dashboardMenu();
        menuPage.dashboardMenuIndividual();
        const currentUrl = browser.getUrl();
        assert.strictEqual(currentUrl, 'https://app.staff.com/#/dashboard-individual');
        
    })
})
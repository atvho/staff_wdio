import {assert} from 'chai';
import {LoginPage, MenuPage} from '../pageObj';

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
    
    it('should check screencasts menu', function(){
        // loginPage.signin();
        // loginPage.visibilityLogin();
        // loginPage.login();
        menuPage.screencastsMenu();
        const currentUrl = browser.getUrl();
        assert.strictEqual(currentUrl, 'https://app.staff.com/new/screencasts', 'Incorrect URL'); 
    })
})
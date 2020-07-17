import {assert} from 'chai';
import {LoginPage, MenuPage} from '../pageObj';

describe('Checking Menu pages', function(){
        const loginPage = new LoginPage();
        const menuPage = new MenuPage();

    it('should check individual menu', function(){
        const email = 'alexey.dubchak+autosilent90988@staff.dev'
        const password = 123456
        loginPage.signin();
        loginPage.visibilityLogin();
        loginPage.login(email, password);
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
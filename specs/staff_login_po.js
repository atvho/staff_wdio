import assert from 'assert';
import {LoginPage} from '../pageObj';

describe('Login with credentials', function(){
        const loginPage = new LoginPage('alexey.dubchak+autosilent90988@staff.dev', 123456);

    it('should log in with valid credentials', function(){
        loginPage.signin();
        loginPage.visibilityLogin();
        loginPage.login();
        const dashboardMenu = $('button[aria-label="Dashboard"] > span');
            browser.waitUntil(function(){
                return dashboardMenu.isDisplayed()
            }, 7000, 'Dashoard menu is not rendered')
        const currentUrl = browser.getUrl();
        assert.strictEqual(currentUrl, 'https://app.staff.com/#/dashboard');
        
    })
})
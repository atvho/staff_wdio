import {assert} from 'chai';
import {LoginPage} from '../pageObj';

describe('Login with credentials', function(){
        const loginPage = new LoginPage();

    it('should log in with valid credentials', function(){
        const email = 'alexey.dubchak+autosilent90988@staff.dev'
        const password = 123456
        loginPage.signin();
        loginPage.visibilityLogin();
        loginPage.login(email, password);
        const dashboardMenu = $('button[aria-label="Dashboard"] > span');
            browser.waitUntil(function(){
                return dashboardMenu.isDisplayed()
            }, 7000, 'Dashoard menu is not rendered')
        const currentUrl = browser.getUrl();
        assert.strictEqual(currentUrl, 'https://app.staff.com/#/dashboard');
        
    })
})
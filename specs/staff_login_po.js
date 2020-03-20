import assert from 'assert';
import {LoginPage} from '../pageObj';

describe('Login with credentials', function(){
        const loginPage = new LoginPage();

    it('should log in with valid credentials', function(){
        browser.url('https://staff.com');
        const signin = $('.user.pull-right b');
        signin.click();
        browser.pause(2000);
        loginPage.login();
        browser.pause(3000);
        //     browser.waitUntil(function(){
        //         return emailField.isDisplayed()
        //     }, 7000, 'email field is not rendered yet');
        // emailField.addValue(email);
        //     browser.waitUntil(function(){
        //         return passwordField.isDisplayed()
        //     }, 7000, 'password field is not rendered yet')
        // passwordField.addValue(password);
        // submit.click();
        // // browser.pause(4000);
        // const dashboardMenu = $('button[aria-label="Dashboard"] > span');
        //     browser.waitUntil(function(){
        //         return dashboardMenu.isDisplayed()
        //     }, 7000, 'Dashoard menu is not rendered')
        const currentUrl = browser.getUrl();
        assert.strictEqual(currentUrl, 'https://app.staff.com/#/dashboard');
        
    })
})
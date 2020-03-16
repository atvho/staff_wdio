const assert = require('assert');

describe('Login with credentials', function(){
    it('should log in with valid credentials', function(){
        browser.url('https://staff.com');
        const signin = $('.user.pull-right b');
        signin.click();
        const email = 'alexey.dubchak+autosilent90988@staff.dev';
        const password = 123456;
        const emailField = $('input[type="email"]');
        const passwordField = $('input[type="password"]');
        const submit = $('button[type="submit"]');
        emailField.addValue(email);
        passwordField.addValue(password);
        submit.click();
        browser.pause(4000);
        const currentUrl = browser.getUrl();
        assert.strictEqual(currentUrl, 'https://app.staff.com/#/dashboard');
        
    })
})
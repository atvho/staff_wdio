const assert = require('assert');

describe('Login test', function(){
    it('should login succesfully', function(){
        browser.url('https://staff.com/');
        const signin = $('.user.pull-right b')
        signin.click()
        const currentUrl = browser.getUrl()
        assert.strictEqual(currentUrl, 'https://app.staff.com/#/signin');
    })
})
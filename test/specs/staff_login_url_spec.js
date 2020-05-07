const assert = require('assert');

describe('Login test', function(){
    it('should login succesfully', function(){
        const signin = $('.user.pull-right b')
        signin.click()
        const currentUrl = browser.getUrl()
        assert.strictEqual(currentUrl, 'https://app.staff.com/#/signin');
    })
})
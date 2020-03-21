const assert = require('assert');

describe('Title of the page', function(){
    it('should get page title', function(){
        const title = browser.getTitle();
        assert.strictEqual(title, 'Smart Employee Time Tracking Software with Screenshots | Staff.com');
    })
})
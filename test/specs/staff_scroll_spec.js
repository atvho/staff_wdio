import {expect} from 'chai';

describe('Checking Scrolling', function(){
    it('should scroll to correct element', function(){
        const blogLink = $('a[href="http://blog.staff.com"]');
        blogLink.scrollIntoView();
        const blogVisible = blogLink.isDisplayedInViewport();
        const blogCheck = function(){
            if (blogVisible) {
                return 'Visible in viewport'
            } else {
                return 'Invisible in viewport'
            }
        }
        console.log(blogCheck());
        expect(blogVisible, 'Element is not in viewport').to.be.true;
    })
})
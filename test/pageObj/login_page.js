import {LoginSelectors} from './fragments';

export class LoginPage extends LoginSelectors{
    constructor(){
        super();
    }

    signin(){
        const signinButton = this.signinButton;
            browser.waitUntil(function(){
                return signinButton.isDisplayed()
            }, 4000, 'Signin button is not rendered');
        signinButton.click();
    }

    visibilityLogin(){
        const emailField = this.emailField;
            browser.waitUntil(function(){
                return emailField.isDisplayed()
            }, 7000, 'email field is not rendered yet');
        const passwordField = this.passwordField;
            browser.waitUntil(function(){
                return passwordField.isDisplayed()
            }, 7000, 'password field is not rendered yet');
    }

    login(email, password){
        this.emailField.setValue(email);
        this.passwordField.setValue(password);
        this.submitButton.click();
    }
    errorFieldVisible(){
        const errorBlock = this.errorBlock
        browser.waitUntil(() => {
            return errorBlock.isDisplayed()
        }, 3000, 'Error block is not visible')
    }
}
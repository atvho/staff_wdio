import {LoginSelectors} from './fragments';

export class LoginPage extends LoginSelectors{
    constructor(email, password){
        super();
        this.email = email;
        this.password = password;
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

    login(){
        this.emailField.setValue(this.email);
        this.passwordField.setValue(this.password);
        this.submitButton.click();
    }
}
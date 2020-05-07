export class LoginSelectors {
    
    get signinButton() {return $('.user.pull-right b')};
    get emailField() {return $('input[type="email"]')};
    get passwordField() {return $('input[type="password"]')};
    get submitButton() {return $('button[type="submit"]')};

}
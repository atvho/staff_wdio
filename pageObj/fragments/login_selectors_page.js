export class LoginSelectors {
    
    get emailField() {return $('input[type="email"]')};
    get passwordField() {return $('input[type="password"]')};
    get submitButton() {return $('button[type="submit"]')};

}
import {LoginSelectors} from './fragments';

export class LoginPage extends LoginSelectors{
    constructor(){
        super();
        this.email = 'alexey.dubchak+autosilent90988@staff.dev';
        this.password = 123456;
    }
    login(){
        this.emailField.setValue(this.email);
        this.passwordField.setValue(this.password);
        this.submitButton.click();
    }
}
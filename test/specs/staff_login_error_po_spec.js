import {expect} from 'chai'
import {LoginPage} from '../pageObj'

describe('Login test', () => {
        const loginPage = new LoginPage()
    it('should show login error', () => {
        const email = 'blabla@staff.dev'
        const password = 123456
        loginPage.signin();
        loginPage.visibilityLogin();
        loginPage.login(email, password);
        loginPage.errorFieldVisible()
        const errorMessage = loginPage.errorBlock.getText()
        expect(errorMessage).to.include('Invalid Email or Password')
    })
})
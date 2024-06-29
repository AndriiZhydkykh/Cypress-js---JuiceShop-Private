import Page from './page';

class LoginPage extends Page {

    get emailField() { return cy.get('#email') }
    get passwordField() { return cy.get('#password'); }
    get submitBtn() { return cy.get('form button[type="submit"]'); }
   
    open() {
        super.open('login');
    }
    setEmailField(text){
        super.type(this.emailField,text)
    }
    submit() {
        super.click(this.submitBtn)
    }
}

export default new LoginPage();
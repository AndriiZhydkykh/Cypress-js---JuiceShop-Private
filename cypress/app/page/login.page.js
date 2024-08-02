import { PageHolder }  from "../page.holder";
import { header, welcomeBanner, cookiesWindow } from "../../app/component";
class LoginPage extends PageHolder {
    constructor() {
        super()
        this.header = header;
        this.welcomeBanner = welcomeBanner;
        this.cookiesWindow = cookiesWindow;
    }
    
    get emailField() { return cy.get('input#email') }
    get passwordField() { return cy.get('input#password'); }
    get submitBtn() { return cy.get('button#loginButton'); }

    
    open() {
        super.open('#/login');
    }
    setEmailField(text) {
        this.emailField.type(text)
    }
    setPasswordField(text) {
       this.passwordField.type(text)
    }
    clickSubmitBtn() {
        this.submitBtn.click()
    }
 
   
}


export default new LoginPage
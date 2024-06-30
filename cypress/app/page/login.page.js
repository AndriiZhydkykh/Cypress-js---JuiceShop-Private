import { PageHolder}  from "../page.holder";
import { Header } from "../component/header.component";
import { WelcomeBanner } from "../component/welcome.banner.component";
import { CookiesWindow } from "../component/cookies.modal.component";

export class LoginPage extends PageHolder {
    constructor() {
        super()
        this.header = new Header();
        this.welcomeBanner = new WelcomeBanner();
        this.cookiesWindow = new CookiesWindow();
    }
    
    get emailField() { return cy.get('input#email') }
    get passwordField() { return cy.get('input#password'); }
    get submitBtn() { return cy.get('button#loginButton'); }

    
    open() {
        super.open('/login');
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




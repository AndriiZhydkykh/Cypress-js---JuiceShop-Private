import { PageHolder }  from "../../page.holder";

class UserProfilePage extends PageHolder {
    get emailField() { return cy.get('input#email') }


    getEmailField(){
        return this.emailField
    }
    open() {
        super.open('/profile');
    }
}

export default new UserProfilePage


export class Header{

    get logoButton() { return cy.get('app-navbar button[aria-label="Back to homepage"]'); }
    get searchButton() { return cy.get('app-navbar #searchQuery'); }
    get accountButton() { return cy.get('app-navbar button#navbarAccount'); }
    get languageButton() { return cy.get('app-navbar button[aria-label="Language selection menu"]'); }
    get languageButtonText() { return cy.get('app-navbar button[aria-label="Language selection menu"] span'); }
    get loginButton() {return cy.get('button#navbarLoginButton')}
    get basket() {return cy.get('app-navbar button[aria-label="Show the shopping cart"]')}


    getLogoButton(){
     return this.logoButton
    } 
    getSearchButton(){
     return this.searchButton
    }
    getAccountButton(){
     return this.accountButton
    }
    getLanguageButton(){
     return this.languageButton
    }
    getLanguageButtonText(){
     return this.languageButtonText
    }

    clickLogoButton(){
     this.logoButton.click()
    } 
    clickSearchButton(){
     this.searchButton.click()
    }
    clickAccountButton(){
     this.accountButton.click()
    }
    clickLanguageButton(){
     this.languageButton.click()
    }
    clickLoginButton(){
        this.loginButton.click()
    }   
    getLoginButton(){
        return this.loginButton
    }
    getBasket(){
        return this.basket
    }
    expectLoaded(){
       this.getLogoButton().should('be.visible')  
       this.getSearchButton().should('be.visible')  
       this.getAccountButton().should('be.visible')  
       this.getLanguageButton().should('be.visible')  
    }
  
}



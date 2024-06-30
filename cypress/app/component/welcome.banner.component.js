export class WelcomeBanner{

 get closeWelcomeBannerButton() { return cy.get('button[aria-label="Close Welcome Banner"]'); }

 clickCloseWelcomeBannerButton(){
  this.closeWelcomeBannerButton.click()
 }

}




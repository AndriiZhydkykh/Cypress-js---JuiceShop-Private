class CookiesWindow{

 get dismissCookiesButton() { return cy.get('a[aria-label="dismiss cookie message"]'); }

 clickDismissCookiesButton(){
  this.dismissCookiesButton.click()
 }

}
export default new CookiesWindow


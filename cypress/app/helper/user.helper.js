import { authController } from '../api/index'
import { homePage, loginPage } from '../page/index'

export const userData = {
 "email": `test${crypto.randomUUID()}@test.com`,
 "password": "superSecretPassword!!!",
 "passwordRepeat": "superSecretPassword!!!",
 "securityAnswer": "Nadia",
 "securityQuestion": {
  "id": 5,
  "question": "Maternal grandmother's first name?"
 } 
}

class UsersHelper {

 createUser() {
  authController.createNewUser(userData).then((response) => {
   expect(response.status).to.eq(201);
  });
 }

 signInAsNewUser(email, password) {
  cy.session([email, password], () => {
   loginPage.open()
   loginPage.welcomeBanner.clickCloseWelcomeBannerButton()
   loginPage.cookiesWindow.clickDismissCookiesButton()
   loginPage.setEmailField(email)
   loginPage.setPasswordField(password)
   loginPage.clickSubmitBtn()
   homePage.header.expectLoaded()
   homePage.header.getBasket().should('be.visible')
  }, {
  validate() {
    homePage.open()
    homePage.header.getBasket().should('be.visible')
   }, 
   cacheAcrossSpecs: true,
  })
 }


}
export default new UsersHelper

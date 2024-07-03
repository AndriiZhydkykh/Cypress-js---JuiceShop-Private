import app from "../app/index"

describe('Main page', () => {
  before(() => {
   app.helper.users.createUser()
  })
  beforeEach(() => {
    app.homePage.open()
    app.homePage.welcomeBanner.clickCloseWelcomeBannerButton()
    app.homePage.cookiesWindow.clickDismissCookiesButton()
  })
  it('ID-1 - Login via existing user', () => {
    const userData = Cypress.env('newUserData');
    app.homePage.header.clickAccountButton()
    app.homePage.header.clickLoginButton()
    app.homePage.header.getLoginButton().should('not.exist')
    app.loginPage.setEmailField(userData.email)
    app.loginPage.setPasswordField(userData.password)
    app.loginPage.clickSubmitBtn()
    app.homePage.header.expectLoaded()
    app.homePage.header.getBasket().should('be.visible')
  })
})


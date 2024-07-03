import app from "../app/index"

describe('Main page', () => {
  before(() => {
    app.helper.manageUsers.createUser()
    console.log(app.helper.manageUsers.createUser().email)
  })
  beforeEach(() => {
    app.homePage.open()
    app.homePage.welcomeBanner.clickCloseWelcomeBannerButton()
    app.homePage.cookiesWindow.clickDismissCookiesButton()
  })
  it('ID-1 - Login via existing user', () => {
    app.homePage.header.clickAccountButton()
    app.homePage.header.clickLoginButton()
    app.homePage.header.getLoginButton().should('not.exist')
    app.loginPage.setEmailField(app.helper.manageUsers.createUser().email)
    app.loginPage.setPasswordField(app.helper.manageUsers.createUser().password)
    app.loginPage.clickSubmitBtn()
  })
})


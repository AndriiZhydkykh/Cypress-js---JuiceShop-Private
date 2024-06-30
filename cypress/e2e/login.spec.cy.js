import app from "../app/index"

describe('Main page', () => {
  
  beforeEach(() => {
    app.homePage.open()
    app.modalWindowHelper.closeAllModals()
  })
  
  // TODO: add expectation
  it('ID-1 - Login via existing user', () => {
    app.homePage.header.clickAccountButton()
    app.homePage.header.clickLoginButton()
    app.homePage.header.getLoginButton().should('not.exist')
    app.loginPage.setEmailField('andry@example.com')
    app.loginPage.setPasswordField('123456789')
    app.loginPage.clickSubmitBtn()
  })
 
})
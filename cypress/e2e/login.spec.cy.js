import app from "../app/index"

describe('Main page', () => {
  
  beforeEach(() => {
    app.homePage.open()
    app.modalWindowHelper.closeAllModals()
  })
  
  it('ID-1 - Login via existing user from home page', () => {
    app.homePage.header.clickAccountButton()
    app.homePage.header.clickLoginButton()
    app.loginPage.setEmailField('andry@example.com')
    app.loginPage.setPasswordField('123456789')
    app.loginPage.clickSubmitBtn()
  })
 
})
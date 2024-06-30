import app from "../app/index"

describe('Main page', () => {
  
  beforeEach(() => {
    
  })
  
  it('ID-1 - Login via existing user from home page', () => {
    app.homePage.open()
    app.homePage.header.clickAccountButton()
    app.loginPage.setEmailField('andry@example.com')
    app.loginPage.setPasswordField('123456789')
    app.loginPage.clickSubmitBtn()
  })
  it('ID-2 - Login via existing user from login', () => {
    app.loginPage.open()
    app.loginPage.setEmailField('andry@example.com')
    app.loginPage.setPasswordField('123456789')
    app.loginPage.clickSubmitBtn()
  })
 
})
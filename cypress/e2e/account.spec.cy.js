import app from "../app/index"

describe('User profile page', () => {

  before(() => {
   app.helper.users.createUser()
  })

  beforeEach(() => {
   const userData = Cypress.env('newUserData')

   app.helper.users.signInAsNewUser(userData.email, userData.password)
   app.userProfilePage.open()

  })
  it('ID-1 - Login via existing user', () => {
    app.userProFilePage.getEmailField().should('have.value', userData.email)
  })
  it('ID-2 - Login via existing user', () => {
   app.userProFilePage.getEmailField().should('have.value', userData.email)
 })
})


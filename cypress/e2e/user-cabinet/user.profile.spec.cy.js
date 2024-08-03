import { userProfilePage } from '../../app/page/index'
import { usersHelper, userData } from '../../app/helper/index'

describe('User profile page', () => {

 before(() => {
    usersHelper.createUser()
 })

 beforeEach(() => {
  usersHelper.signInAsNewUser(userData.email, userData.password)
  userProfilePage.open()

 })
 it('ID-1 - Visit user profile page', () => {
  userProfilePage.getEmailField().should('have.value', userData.email)
 })
 it('ID-1 - Visit user profile page', () => {
  userProfilePage.getEmailField().should('have.value', userData.email)
 })


})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import app from "../app";


Cypress.Commands.add('signInAsNewUser', (email, password) => {
  cy.session([email, password], () => {
    app.loginPage.open()
    app.loginPage.setEmailField(email)
    app.loginPage.setPasswordField(password)
    app.loginPage.clickSubmitBtn()
    app.homePage.header.expectLoaded()
    app.homePage.header.getBasket().should('be.visible')
  }, {
    validate() {
      app.homePage.open()
      app.homePage.header.getBasket().should('be.visible')
    },
    cacheAcrossSpecs: true,

  })
})
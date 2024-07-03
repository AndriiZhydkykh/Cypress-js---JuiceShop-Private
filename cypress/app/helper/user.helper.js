import app from '../index'

export class Users {
  
  createUser() {
    const newEmail = `test${crypto.randomUUID()}@test.com`

    cy.fixture('auth/new.user.json').then((user) => {
      const userData = {
        ...user,
        email: newEmail
      };

      app.api.auth.createNewUser(userData).then((response) => {
        expect(response.status).to.eq(201);
        Cypress.env('newUserData', userData);
      });

    });
  }

 signInAsNewUser(email, password) {
    cy.session([email, password], () => {
      app.loginPage.open()
      app.loginPage.welcomeBanner.clickCloseWelcomeBannerButton()
      app.loginPage.cookiesWindow.clickDismissCookiesButton()
      app.loginPage.setEmailField(email)
      app.loginPage.setPasswordField(password)
      app.loginPage.clickSubmitBtn()
      app.homePage.header.expectLoaded()
      app.homePage.header.getBasket().should('be.visible')
    }, {
      /* validate() {
        app.homePage.open()
        app.homePage.header.getBasket().should('be.visible')
      }, */
      cacheAcrossSpecs: true,

    })
  }

}

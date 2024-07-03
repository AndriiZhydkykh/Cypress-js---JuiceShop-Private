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
}

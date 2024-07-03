import app from '../index'
import { randomEmail } from "../app/helper/data.helper";

export class ManageUsers {

  createUser() {
    const newEmail = randomEmail();

    cy.fixture('auth/new.user.js').then((user) => {
      const userData = {
        ...user,
        email: newEmail
      };
    
    app.api.auth.createNewUser(userData).then((response) => {
        expect(response.status).to.eq(201);
    });
    return newEmail
    });
  }
}

export class AuthController  {

    createNewUser(data) {
        return cy.request({
          method: 'POST',
          url: 'https://api-stg.preferredmd.com/api/v1/surgeon/auth/login/',
          body: data
        })
      }
      
}
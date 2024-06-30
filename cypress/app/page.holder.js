const domain = Cypress.env('webUrl')

export class PageHolder {
   open(path) {
      cy.visit(domain + path);
  }
}







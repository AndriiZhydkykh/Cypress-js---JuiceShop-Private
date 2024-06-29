const domain = Cypress.env('webUrl')

class Page {
  
   isElementVisible(element){
      return element.should('be.visible');
   }

   click(element) {
      element.click();
   }

   hover(element) {
      element.trigger('mouseover')
   }
   realHover(element) {
      element.realHover();
   }

   scrollTo(element) {
     element.scrollIntoView({ easing: 'linear' });
   }
 
   scrollTrigger(element) {
      element.trigger('mousedown')
     }
   type(element,value) {
      element.type(value);
   }
   typeRealEvents(element,value) {
      element.realType(value);
   }
   typeEnter(element){
      element.type('{enter}')
   }
   clearField(element){
      element.clear() 
   }
   select(element,value) {
      element.select(value);
   }
   getValueAndSaveAs(element,aliasName){
      element.invoke('val').as(aliasName)
   }
   getTextAndSaveAs(element,text){
      element.invoke("text").as(text)
   }
   check(element){
      element.check()
   }
   attachFile(element,path) {
      element.selectFile(path,{force:true})
   }
    open (path) {
      cy.visit(domain + path)
   }
}

export default new Page()

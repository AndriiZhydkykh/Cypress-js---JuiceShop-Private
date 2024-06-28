export class PageHolder {
   constructor(page) {
      this.page = page;
   }

   getElement(element) {
      return cy.get(element);
   }
   isElementVisible(element){
      return this.getElement(element).should('be.visible');
   }

   click(element) {
      this.getElement(element).click();
   }

   hover(element) {
      this.getElement(element).trigger('mouseover')
   }
   realHover(element) {
      this.getElement(element).realHover();
   }

   scrollTo(element) {
     this.getElement(element).scrollIntoView({ easing: 'linear' });
   }
 
   scrollTrigger(element) {
      this.getElement(element).trigger('mousedown')
     }
   type(element,value) {
      this.getElement(element).type(value);
   }
   typeRealEvents(element,value) {
      this.getElement(element).realType(value);
   }
   typeEnter(element){
      this.getElement(element).type('{enter}')
   }
   clearField(element){
      this.getElement(element).clear() 
   }
   select(element,value) {
      this.getElement(element).select(value);
   }
   getValueAndSaveAs(element,aliasName){
      this.getElement(element).invoke('val').as(aliasName)
   }
   getTextAndSaveAs(element,text){
      this.getElement(element).invoke("text").as(text)
   }
   check(element){
      this.getElement(element).check()
   }
   attachFile(element,path) {
      this.getElement(element).selectFile(path,{force:true})
   }
 
    
}

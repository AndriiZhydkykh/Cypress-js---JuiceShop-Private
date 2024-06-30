import app from '../../index'
export class ModalWindowHelper{
 
 closeAllModals(){
  app.homePage.welcomeBanner.clickCloseWelcomeBannerButton()
  app.homePage.cookiesWindow.clickDismissCookiesButton()
 }

}


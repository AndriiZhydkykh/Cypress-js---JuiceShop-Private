import { PageHolder } from "./page.holder";
import { HomePage } from "./page/home.page";
import { LoginPage } from "./page/login.page";
import { ModalWindowHelper } from "./helper/modal-windows/modal.windows.helper";

export default new class Application extends PageHolder {
 constructor() {
  super()
  this.homePage = new HomePage()
  this.loginPage = new LoginPage()
  this.modalWindowHelper = new ModalWindowHelper()
 }

}

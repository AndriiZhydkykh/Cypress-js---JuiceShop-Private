import { PageHolder } from "./page.holder";
import { HomePage } from "./page/home.page";
import { LoginPage } from "./page/login.page";

export default new class Application extends PageHolder {
 constructor() {
  super()
  this.homePage = new HomePage()
  this.loginPage = new LoginPage()
 }

}

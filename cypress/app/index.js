import { Api } from "./api/api";
import { Helper } from './helper/helper'
import { PageHolder } from "./page.holder";
import { HomePage } from "./page/home.page";
import { LoginPage } from "./page/login.page";
import { UserProfilePage } from "./page/user-cabinet/user.profile";



export default new class Application extends PageHolder {
    constructor() {
        super()
        this.api = new Api()
        this.helper = new Helper()

        this.homePage = new HomePage()
        this.loginPage = new LoginPage()
        this.userProfilePage = new UserProfilePage()
    }

}

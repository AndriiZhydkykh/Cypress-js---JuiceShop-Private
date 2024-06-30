import { PageHolder}  from "../page.holder";
import { Header } from "../component/header.component";
import { WelcomeBanner } from "../component/welcome.banner.component";
import { CookiesWindow } from "../component/cookies.modal.component";

export class HomePage extends PageHolder {
    constructor() {
        super()
        this.header = new Header();
        this.welcomeBanner = new WelcomeBanner();
        this.cookiesWindow = new CookiesWindow();
    }

    open() {
        super.open('/');
        this.header.expectLoaded()
    }
}




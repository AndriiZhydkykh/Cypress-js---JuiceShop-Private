import { PageHolder }  from "../page.holder";
import { header, welcomeBanner, cookiesWindow } from "../../app/component";

class HomePage extends PageHolder {
    constructor() {
        super()
        this.header = header;
        this.welcomeBanner = welcomeBanner;
        this.cookiesWindow = cookiesWindow;
    }

    open() {
        super.open('#/');
        this.header.expectLoaded()
    }
}

export default new HomePage


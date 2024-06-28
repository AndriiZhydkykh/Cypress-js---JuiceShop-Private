import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { Header } from "../component/header.component";
import { step } from "../../misc/reporters/step";

export class LoginPage extends AppPage {
     pagePath = '/shop';
     header = new Header(this.page)
     productList ='.shop .product-list'

     openProductDetailsByName(name: string) {
       
    }
}
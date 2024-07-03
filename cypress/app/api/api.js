import { AuthController } from './auth.controller'
export class Api {
 constructor(){
    this.auth = new AuthController()
 }
}
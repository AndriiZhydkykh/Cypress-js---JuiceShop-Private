import { AuthController } from './auth.controller'
export class Api {
 constructor(){
    super()
    this.auth = new AuthController()
 }
}
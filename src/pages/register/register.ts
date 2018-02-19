import {Component} from "@angular/core";
import {NavController, NavParams } from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { TabsPage } from "../tabs/tabs";
import { IonicPage } from "ionic-angular/navigation/ionic-page";
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../entities/user";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user = {} as User;

  constructor(private afAuth: AngularFireAuth,public nav: NavController, public navParams: NavParams) {
  }

  // register and go to home page
  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.nav.setRoot(TabsPage);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}

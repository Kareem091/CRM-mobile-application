import {Component} from "@angular/core";
import {NavController, NavParams } from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { TabsPage } from "../tabs/tabs";
import { IonicPage } from "ionic-angular/navigation/ionic-page";
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../entities/user";
import { UserService } from "../../api/userService";
import { Facebook } from "@ionic-native/facebook";
import * as firebase from 'firebase/app';
import { auth } from "firebase/app";
import { Platform } from "ionic-angular/platform/platform";
import { UserInformation } from "../../entities/userInformation";
import { AlertController } from "ionic-angular/components/alert/alert-controller";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user = {} as UserInformation;

  constructor(
    private platform: Platform,
    public facebook: Facebook,
    private failMsgCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public nav: NavController, 
    public navParams: NavParams, private userServ:UserService) {
  }

  // register and go to home page
  async register() {
    try {
      const result = firebase.auth().createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (result) {
        this.createNewUser(this.user);
        this.nav.push(TabsPage);
      }
    } catch (e) {
      console.error(e);
      this.presentFailMsg(e);
    }
  }

  // login with facebook and go to home page
  facebookLogin() {
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        const facenbookInfo = firebase.auth().signInWithCredential(facebookCredential);
        console.log(facenbookInfo);
        this.nav.setRoot(TabsPage);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
          this.nav.push(TabsPage)});
    } 
  }
  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
  createNewUser(logedInUser: UserInformation){
    this.userServ.createUser(logedInUser).subscribe(data=>{console.log(data);},error => this.presentFailMsg(error))
  }

  presentFailMsg(msg: string) {
    let alert = this.failMsgCtrl.create({
      title: 'Email Not Found',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}

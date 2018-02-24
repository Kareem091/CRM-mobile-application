import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController, IonicPage ,Platform } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { TabsPage } from "../tabs/tabs";
import { User } from "../../entities/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook'
//import firebase from 'firebase';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;

  constructor(
     public facebook: Facebook,
     private alertCtrl: AlertController,
     private afAuth: AngularFireAuth,
     public nav: NavController, 
     public forgotCtrl: AlertController, 
     public menu: MenuController, 
     private platform: Platform,
     public toastCtrl: ToastController) 
     {
     this.menu.swipeEnable(false);
     }

       // login with facebook and go to home page

     facebookLogin() {
      if (this.platform.is('cordova')) {
        return this.facebook.login(['email', 'public_profile']).then(res => {
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          return firebase.auth().signInWithCredential(facebookCredential);
        })
      }
      else {
        return this.afAuth.auth
          .signInWithPopup(new firebase.auth.FacebookAuthProvider())
          .then(res => console.log(res));
      }
    }
  

  // login with email and go to home page
  async login(user:User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.mail, user.password);
      if (result) {
        this.nav.setRoot(TabsPage);
      }
    }
    catch (e) {
      this.nav.setRoot(RegisterPage);
      console.error(e);
    }
  }

  // go to register page
  async register() {
    this.nav.setRoot(RegisterPage);
  }

  forgotPass() {
    /*let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present(); */
  }

}

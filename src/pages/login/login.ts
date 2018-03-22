import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController, IonicPage, Platform } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { TabsPage } from "../tabs/tabs";
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook'
import * as firebase from 'firebase/app';
import { UserInformation } from "../../entities/userInformation";
import { UserService } from "../../api/userService";
import { ParamsService } from "../../api/ParamService";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { UserInfo } from "@firebase/auth-types";
import { UserData } from "../../entities/userData";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  public user = {} as UserInformation;
  info = {} as UserData;


  constructor(
    public facebook: Facebook,
    private failMsgCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    private userServ: UserService,
    private platform: Platform,
    public loadingCtrl: LoadingController,
    private param: ParamsService,
    public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);

  }

  // login with facebook and go to home page
  async facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
      'display': 'popup'
    });
    try {
      if (this.platform.is('cordova')) {
        const result = await this.facebook.login(['email', 'public_profile']).then(res => {
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          const facenbookInfo = firebase.auth().signInWithCredential(facebookCredential);
          console.log(facenbookInfo);
          if (result) {
            this.getFacebookLoggedInUser();
            this.storeLoggedInUser(this.user.email);
          }
        })
      }
      else {
        /* firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log(credential)
        });
        */
       const result = await this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        if (result) {
          this.getFacebookLoggedInUser();
          this.storeLoggedInUser(this.user.email);
        }
      }
    } catch (e) {
      console.error(e.message);
      this.presentFailMsg(e.message);
    }
  }


  // login with email and go to home page
  async login(user: UserInformation) {
    console.log('Login: ')
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.storeLoggedInUser(user.email);
      }
    }
    catch (e) {
      console.error(e);
      this.presentFailMsg(e);
    }
  }

  getFacebookLoggedInUser() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      var profileInfo = {} as UserData;
      user.providerData.forEach(function (profile) {
        profileInfo = profile;
      });
      this.info = user;
      this.transformUserData(this.info, profileInfo.uid);
    }
  }

  transformUserData(infoUI: UserInfo, uid: string) {
    console.log('uid::::::--- ' + uid);
    this.user.displayName = infoUI.displayName;
    this.user.email = infoUI.email;
    this.user.photoURL = infoUI.photoURL;
    this.user.phoneNumber = infoUI.phoneNumber;
    this.user.providerId = infoUI.providerId;
    this.user.uid = uid;
    this.param.setFullPhoto("https://graph.facebook.com/" + uid + "/picture?width=1024&height=1024");
   // this.user.fullPhoto = "https://graph.facebook.com/" + uid + "/picture?width=1024&height=1024";
  }

  storeLoggedInUser(email: string) {
    console.log('storeLoggedInUser:: ' + email);
    this.userServ.getUserByEmail(email).subscribe((data: UserInformation) => {
      if (data) {
        this.user = data;
        this.param.setLoggedInUser(this.user);
      } else {
        console.log(`User with email '${email}' not found, returning to list`);
      }
    });
    this.presentLoadingDefault();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Hello'

    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.nav.setRoot(TabsPage);
    }, 5000);

  }

  // go to register page
  async register() {
    this.nav.setRoot(RegisterPage);
  }


  forgotPass() {
    let forgot = this.forgotCtrl.create({
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
            var auth = firebase.auth();
            var userEmail = data.email;
            console.log("---------- userEmail" + userEmail);
            auth.sendPasswordResetEmail(userEmail).then(function () {
              console.log("email sent");
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
            }).catch((error) => this.presentFailMsg(error));
          }
        }
      ]
    });
    forgot.present();

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

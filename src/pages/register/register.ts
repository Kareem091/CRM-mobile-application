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
import { ParamsService } from "../../api/ParamService";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { UserData } from "../../entities/userData";
import { UserInfo } from "@firebase/auth-types";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public user = {} as UserInformation;
  info = {} as UserData;

  constructor(
    private platform: Platform,
    public facebook: Facebook,
    private failMsgCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public nav: NavController, 
    public loadingCtrl: LoadingController,
    public param:ParamsService,
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
        this.storeLoggedInUser(this.user.email);
      }
    } catch (e) {
      console.error(e);
      this.presentFailMsg(e);
      this.nav.pop();
    }
  }

  // login with facebook and go to home page
  async facebookLogin() {
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
        const result = await this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        if (result) {
          this.getFacebookLoggedInUser();
          this.storeLoggedInUser(this.user.email);
        }
      }
    } catch (e) {
      console.error(e);
      this.presentFailMsg(e);
    }
  }
  
  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
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
    this.user.displayName = infoUI.displayName;
    this.user.email = infoUI.email;
    this.user.photoURL = infoUI.photoURL;
    this.user.phoneNumber = infoUI.phoneNumber;
    this.user.providerId = infoUI.providerId;
    this.user.uid = uid;
    this.user.fullPhoto = "https://graph.facebook.com/" + uid + "/picture?width=1024&height=1024";
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

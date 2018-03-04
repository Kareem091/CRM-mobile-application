import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController, IonicPage, Platform } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { TabsPage } from "../tabs/tabs";
import { User } from "../../entities/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook'
//import firebase from 'firebase';
import * as firebase from 'firebase/app';
import { auth } from "firebase/app";
import { UserInformation } from "../../entities/userInformation";
import { UserService } from "../../api/userService";
import { ParamsService } from "../../api/ParamService";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loggedIn: boolean = false;
  user = {} as UserInformation;
  //public params: ParamsService;
  loggedinUser: UserInformation;



  constructor(
    public facebook: Facebook,
    private alertCtrl: AlertController,
    private failMsgCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    private userServ: UserService,
    private platform: Platform,
    private param: ParamsService,
    public toastCtrl: ToastController) 
    {
    this.menu.swipeEnable(false);
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
          this.nav.push(TabsPage)
        });
    }
  }


  getLoggedInUser(email: string){
    console.log('------ loggedinU  ----====email========= '   + email);
   // this.usersService.getUsers(this.id).subscribe(user => this.user = user);}
   this.userServ.getUserByEmail(email).subscribe(data =>
    {console.log(" fine:OK::: "+data);},
    error => console.log('errrrroooororororo::: '+error));

  }

  // login with email and go to home page
  async login(user: UserInformation) {
    console.log('Login: ')
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.getLoggedInUser(user.email);
        this.param.setLoggedInUser(user);
        this.nav.push(TabsPage);
      }
    }
    catch (e) {
      console.error(e);
      this.presentFailMsg(e);
    }
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
            }).catch( (error) => this.presentFailMsg(error) );
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

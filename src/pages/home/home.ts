import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { UserData } from '../../entities/userData';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import * as firebase from 'firebase/app';
import { UserInfo } from '@firebase/auth-types';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  info : any;
  constructor(public navCtrl: NavController,public navParam: NavParams) {

  }

  ionViewDidLoad() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("  Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
      this.info = user;
    }
      console.log('.......' + this.info.displayName);
  }
  goToGallery(){
    this.navCtrl.push(NotificationsPage);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { UserData } from '../../entities/userData';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import * as firebase from 'firebase/app';
import { UserInfo } from '@firebase/auth-types';
import { UserService } from '../../api/userService';
import { UserInformation } from '../../entities/userInformation';

import { error } from '@firebase/database/dist/esm/src/core/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //fullPhoto = {} as String;
  info = {} as UserData;
  userinfo = {} as UserInformation;
  constructor(public navCtrl: NavController,public navParam: NavParams,private userServ: UserService) {

  }

  updateUserInfo(userInfo:UserInformation){
    this.userServ.updateUser(userInfo).subscribe(data =>
      {console.log(data);},error => console.log(error));
  }

  ionViewDidLoad() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      var profileInfo = {} as UserData;
      console.log("---user.uid; " +  user.providerData)
      user.providerData.forEach(function (profile) {
        console.log("  Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  phone Number: " + profile.phoneNumber);
        console.log("  Photo URL: " + profile.photoURL);
        profileInfo = profile;
        console.log(profileInfo.uid + "-----");
      });
      this.info = profileInfo;
     this.transformUserData(this.info);
    } 
  }
  

  transformUserData(infoUI: UserInfo){
    this.userinfo.displayName = infoUI.displayName;
    this.userinfo.email = infoUI.email;
    this.userinfo.photoURL = infoUI.photoURL;
    this.userinfo.phoneNumber = infoUI.phoneNumber;
    this.userinfo.providerId = infoUI.providerId;
    this.userinfo.uid = infoUI.uid;
    this.userinfo.fullPhoto =  "https://graph.facebook.com/"+infoUI.uid+"/picture?width=1024&height=1024";
    //this.updateUserInfo(this.userinfo);
  }
}

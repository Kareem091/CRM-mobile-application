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
import { ParamsService } from '../../api/ParamService';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  //fullPhoto = {} as String;
  info = {} as UserData;
  userinfo = {} as UserInformation;
  userinfoServ: UserInformation;
  constructor(public param:ParamsService, public navCtrl: NavController,public navParam: NavParams,private userServ: UserService) {

  }


  ngOnInit(){
    console.log('ngOnInit..........');
    this.userinfoServ = this.param.getLoggedInUser();
   
  }


  updateUserInfo(userInfo:UserInformation){
    this.userServ.updateUser(userInfo.uid,userInfo).subscribe(data => 
      {console.log(" fine:OK::: "+data);},error => console.log('error::: '+error));
  }

  ionViewWillEnter(){
    console.log("Did data load? : ",this.navParam.data.email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad home');
    console.log(this.navParam.data);
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
      });
      this.info = user;
      console.log(user.uid);
      console.log(user.getIdToken);

     this.transformUserData(this.info,user.uid);
    } 
  }
  

  transformUserData(infoUI: UserInfo, uid: string){
    this.userinfo.displayName = infoUI.displayName;
    this.userinfo.email = infoUI.email;
    this.userinfo.photoURL = infoUI.photoURL;
    this.userinfo.phoneNumber = "00000929299";
    this.userinfo.providerId = infoUI.providerId;
    this.userinfo.uid = uid;
    this.userinfo.fullPhoto =  "https://graph.facebook.com/"+infoUI.uid+"/picture?width=1024&height=1024";
    this.updateUserInfo(this.userinfo);
  }
}

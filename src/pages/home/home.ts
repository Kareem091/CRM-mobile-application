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
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  user = {} as UserInformation;
  constructor(public param: ParamsService, public navCtrl: NavController, private userServ: UserService, private loadingController: LoadingController) {
    this.user = this.param.getLoggedInUser();
    this.user.fullPhoto = this.param.getFullPhoto();
    console.log('fullPhone------------- ' + this.user.fullPhoto);
  }
}

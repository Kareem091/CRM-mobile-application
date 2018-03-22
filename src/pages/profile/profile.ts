import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserInformation } from '../../entities/userInformation';
import { ParamsService } from '../../api/ParamService';
import { ViewChild } from '@angular/core/src/metadata/di';
import { Slides } from 'ionic-angular/components/slides/slides';

@Component({
  selector: 'profile-about',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user = {} as UserInformation;
  showAll = {} as boolean;
  showRead = {} as boolean;
  isvalid = {} as boolean;
  index = 0;
  title: any;
  relationship = {} as any;
  images = ['avatar.jpeg', 'blg.jpg', 'frndz.png', 'ionic3-ico.png'];
  constructor(public param: ParamsService, public navCtrl: NavController) {
    this.user = this.param.getLoggedInUser();
    this.relationship = 'gallary';
    this.title = 'Gallary';
  }


  segmentChanged(segmentChanged: any): void {
    let val = segmentChanged.value;
    this.relationship = val;
    this.title = val;
  }

}

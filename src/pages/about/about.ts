import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserInformation } from '../../entities/userInformation';
import { ParamsService } from '../../api/ParamService';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  user = {} as UserInformation;
  
  constructor(public param:ParamsService, public navCtrl: NavController) {
    this.user =  this.param.getLoggedInUser();
    console.log('constractor AboutPage user id: ' + this.user.id);
    console.log('constractor AboutPage user email  : ' + this.user.email);
    console.log('constractor AboutPage user about: ' + this.user.about);

  }

  ionViewWillEnter(){
    let user: UserInformation =  this.param.getLoggedInUser();
    console.log('ionViewWillEnter AboutPage');
    console.log('ionViewWillEnter AboutPage user id: ' + user.id);
    console.log('ionViewWillEnter AboutPage user email: ' + user.email);
    console.log('ionViewWillEnter AboutPage user about: ' + user.about);
  }


}

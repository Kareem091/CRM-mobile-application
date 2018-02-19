import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage ------_ -----------------------');
  }
  goToGallery(){
    this.navCtrl.push(NotificationsPage);
  }

}

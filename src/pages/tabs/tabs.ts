import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { GallaryPage } from '../gallary/gallary';
import { FriendsPage } from '../friends/friend';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { UserInformation } from '../../entities/userInformation';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ParamsService } from '../../api/ParamService';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = FriendsPage;

  constructor(public param:ParamsService) {
    
  }

}

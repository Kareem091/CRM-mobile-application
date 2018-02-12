import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

 //rootPage:any = TabsPage;
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(
     platform: Platform,
     statusBar: StatusBar, 
     splashScreen: SplashScreen, 
     keyboard: Keyboard
     ) 
     {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goHome(){
    this.nav.push(HomePage);
  }


}

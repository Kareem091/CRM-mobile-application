import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { Facebook } from '@ionic-native/facebook'
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  constructor(
    private loadingController: LoadingController,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    keyboard: Keyboard,
    private facebook: Facebook) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }


  goHome() {
    this.nav.setRoot(TabsPage);
  }

  logout() {
    this.presentLoadingDefault();
  }

  presentLoadingDefault() {
    let loading = this.loadingController.create({
      spinner: 'dots',
      content: 'Bye..'

    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.facebook.logout();
      this.nav.push(LoginPage);
    }, 3000);

  }
}

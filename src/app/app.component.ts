import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { OneSignal, OneSignalOriginal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
import { PushNotificationServiceProvider } from '../providers/push-notification-service/push-notification-service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    //private oneSignal: OneSignalOriginal
    // private oneSignal: OneSignal
    public PushNotificationServiceProvider:PushNotificationServiceProvider
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.onesignalfunction()
      this.PushNotificationServiceProvider.init();
    });
  }

  onesignalfunction(){
      // this.oneSignal.startInit('b465cd4e-f38f-4d98-a6eb-d43b457548d0', '171072472589');

      // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      // this.oneSignal.handleNotificationReceived().subscribe(() => {
      // });

      // this.oneSignal.handleNotificationOpened().subscribe(() => {
      // });
      // this.oneSignal.endInit();
  }


}


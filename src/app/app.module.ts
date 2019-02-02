import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { OneSignal, OneSignalOriginal } from '@ionic-native/onesignal';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PushNotificationServiceProvider } from '../providers/push-notification-service/push-notification-service';
import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // OneSignalOriginal,
    PushNotificationServiceProvider,
    OneSignal
  ]
})
export class AppModule {}

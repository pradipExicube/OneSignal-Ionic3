


import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular";
import { OneSignal } from "@ionic-native/onesignal";

 
@Injectable()
export class PushNotificationServiceProvider {
 
  constructor(private platform: Platform,
              private oneSignal: OneSignal) {
  }
 
  init() {
    if (this.platform.is('core')) {
      return;
    }
 
    // this.oneSignal.startInit('b465cd4e-f38f-4d98-a6eb-d43b457548d0', '171072472589');  
    this.oneSignal.startInit('b7cea084-4978-4c9a-be69-693ad204e6c0', '651880158874'); 
 
    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });
 
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });
 
    this.oneSignal.endInit();
  }
}

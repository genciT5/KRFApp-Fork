import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WebserviceService } from './shared/services/webservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private webService: WebserviceService,
    private navCtrl: NavController
  ) {
    this.appInit()
  }

  async appInit() {
    const KRFuserData = await this.webService.getUserDataFromStorage();
    console.log(KRFuserData);
    if (KRFuserData.value) {
      this.webService.setUserData(JSON.parse(KRFuserData.value));
      // this.navCtrl.navigateRoot('tabs/tab1');
    }
  }
}

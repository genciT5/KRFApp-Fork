import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { WebserviceService } from './shared/services/webservice.service';
import { Device } from '@capacitor/device';
import { PublicService } from './shared/services/public.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private webService: WebserviceService,
    // private navCtrl: NavController,
    private menuController: MenuController,
    private publicService: PublicService
  ) {
    this.appInit()
  }

  async appInit() {
    Device.getInfo().then((data: any) => {
      this.publicService.deviceData = data;
    })
    const KRFuserData = await this.webService.getUserDataFromStorage();
    console.log(KRFuserData);
    if (KRFuserData.value) {
      this.webService.setUserData(JSON.parse(KRFuserData.value));
      // this.navCtrl.navigateRoot('tabs/tab1');
    }
  }

  dismissMenu() {
    this.menuController.close();
    this.webService.logout();
  }
}

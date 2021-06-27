import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { WebserviceService } from '../shared/services/webservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private webService: WebserviceService,
    private alertController: AlertController
  ) {}

  async logout() {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Are you sure you want to log out?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Log Out!',
            handler: () => {
              
              this.webService.logout();
            }
          }
        ]
      });
    
      await alert.present();
  }

}

import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private navCtrl: NavController
  ) {}

  viewPlayerDetails(){
    this.navCtrl.navigateForward('tabs/tab2/player-details/2');
  }

  createPlayer(){
    this.navCtrl.navigateForward('tabs/tab2/create-and-edit');
  }

  editPlayer(playerDetails){
    // navigation extras to send data to other page

        const navigationExtras: NavigationExtras = {
          state: {
            playerDetails
          }
        };

        const ruti = 'tabs/tab2/create-and-edit';
        this.navCtrl.navigateForward(ruti, navigationExtras)

        // receiving params from navigation extras to the other page
  }
}

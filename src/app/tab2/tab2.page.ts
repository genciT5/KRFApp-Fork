import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { WebserviceService } from '../shared/services/webservice.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  environmenti = environment;
  playersList: any[] = [
    
  ];

  constructor(
    private navCtrl: NavController,
    private webService: WebserviceService,
    // private alerts: AlertsService
  ) {}

  viewPlayerDetails(player){
    // navigation extras to send data to other page
    
        const navigationExtras: NavigationExtras = {
          state: {
            player
          }
        };
    
        let ruti = `tabs/tab2/player-details/${player.id}`;
        this.navCtrl.navigateForward(ruti, navigationExtras)
    
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

  ionViewWillEnter(){
    this.getPLayersList();
  }

  getPLayersList() {
      const linku = 'players';
      this.webService.calling_GET_From_Api(linku).then((data: any) => {
        console.log(data);
        if (data.values.length) {
          this.playersList = data.values;
        } else {
          // this.alerts.presentToast('No results found!', 'warning');
        }
      }).catch((err: any) => {
        console.log(err);
      });
    }
}

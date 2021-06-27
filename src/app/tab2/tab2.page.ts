import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertsService } from '../shared/services/alerts.service';
import { WebserviceService } from '../shared/services/webservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  playersList: any[] = [
    {
      firstName: 'Milot',
      lastName: 'Hoxha',
      id: '1231231-123182hkjauhdia7hwyei1-2',
      birthday: '13.10.1994',
      description: 'awdjuh akwdhkauhwd',
      image: 'https://th.bing.com/th/id/OIP.gBbjm8Ald7qRzHwXVqy1AwAAAA?w=176&h=176&c=7&o=5&dpr=2&pid=1.7'
    },
    {
      firstName: 'Milot',
      lastName: 'Hoxha',
      id: '1231231-123182hkjauhdia7hwyei1-2',
      birthday: '13.10.1994',
      description: 'awdjuh akwdhkauhwd',
      image: 'https://th.bing.com/th/id/OIP.gBbjm8Ald7qRzHwXVqy1AwAAAA?w=176&h=176&c=7&o=5&dpr=2&pid=1.7'
    },
    {
      firstName: 'Milot',
      lastName: 'Hoxha',
      id: '1231231-123182hkjauhdia7hwyei1-2',
      birthday: '13.10.1994',
      description: 'awdjuh akwdhkauhwd',
      image: 'https://th.bing.com/th/id/OIP.gBbjm8Ald7qRzHwXVqy1AwAAAA?w=176&h=176&c=7&o=5&dpr=2&pid=1.7'
    }
  ];

  constructor(
    private navCtrl: NavController,
    private webService: WebserviceService,
    private alerts: AlertsService
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
        if (data.length) {
          this.playersList = data;
        } else {
          // this.alerts.presentToast('No results found!', 'warning');
        }
      }).catch((err: any) => {
        console.log(err);
      });
    }
}

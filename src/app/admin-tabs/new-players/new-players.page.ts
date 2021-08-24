import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WebserviceService } from 'src/app/shared/services/webservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-players',
  templateUrl: './new-players.page.html',
  styleUrls: ['./new-players.page.scss'],
})
export class NewPlayersPage implements OnInit {

  environmenti = environment;
  playersList: any[] = [];

  constructor(
    private webService: WebserviceService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getClubs();
   }
  
  getClubs() {
    const linku = 'admin/pendingPlayers';
    this.webService.calling_GET_From_Api(linku).then((data: any) => {
      console.log(data);
      this.playersList = data.values;
    }).catch((err: any) => {
      console.log(err);
    });
  }

  selectPlayer(playerDetails) {
    const navigationExtras: NavigationExtras = {
      state: {
        playerDetails,
        isNewPlayer: true,
      }
    };

    const ruti = `admin/tabs/new-players/edit-player/${playerDetails.id}`;
    this.navCtrl.navigateForward(ruti, navigationExtras)
  }


}

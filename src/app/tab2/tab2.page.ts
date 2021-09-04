import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, NavController, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { InformationComponent } from '../shared/components/popover/information/information.component';
import { PlayerStatusesENUMS } from '../shared/enums';
import { AlertsService } from '../shared/services/alerts.service';
import { PublicService } from '../shared/services/public.service';
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

  clubId = null;

  playerStatusesENUMS = PlayerStatusesENUMS;

  constructor(
    private navCtrl: NavController,
    private webService: WebserviceService,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    public publicServices: PublicService,
    private popoverController: PopoverController,
    private alerts: AlertsService
    // private alerts: AlertsService
  ) {
    activatedRoute.params.subscribe(data => {
      console.log(data);
      this.clubId = data.clubId;
    })
  }

    async showInformations() {
      const popover = await this.popoverController.create({
        component: InformationComponent,
        translucent: false
      });
    
      await popover.present();
    }
  ionViewWillEnter(){
    this.getPLayersList();
  }

  deletePlayer(playerId) {
    this.alerts.presentCancelOrConfirm('WARNING!', 'Are you sure you want to delete this player? Thre is no returning back!!!!', 'CANCEL', 'DELETE').then((data: any) => {
      if(data) {
        this.webService.calling_DELETE_from_API(`player/delete/${playerId}`).then((data: any) => {
          if(data.status) {
            this.alerts.presentToast('Player deleted successfully!', 'success');
          } else {
            this.alerts.presentToast(data.message, 'danger');
    
          }
        }).catch(err => {
          console.log(err);
        })

      }
    })
  }

  viewPlayerDetails(player){
    // navigation extras to send data to other page
    
        const navigationExtras: NavigationExtras = {
          state: {
            player
          }
        };
    
        let ruti = `${this.clubId ? `admin/tabs/tab1-clubs/${this.clubId}/players/${player.id}` : `club/tabs/tab2/player-details/${player.id}`}`;
        this.navCtrl.navigateForward(ruti, navigationExtras)
    
  }

  createPlayer(){
    this.navCtrl.navigateForward('club/tabs/tab2/create-and-edit');
  }

  editPlayer(playerDetails){
    // navigation extras to send data to other page

        const navigationExtras: NavigationExtras = {
          state: {
            playerDetails
          }
        };

        const ruti = `${this.clubId ? `admin/tabs/tab1-clubs/${this.clubId}/edit-player/${playerDetails.id}` : `club/tabs/tab2/create-and-edit/${playerDetails.id}`}`;
        this.navCtrl.navigateForward(ruti, navigationExtras)

        // receiving params from navigation extras to the other page
  }

 

  getPLayersList() {
      const linku = `${!this.clubId ? 'players' : `admin/clubs/${this.clubId}/players`}`;
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

   logout() {
     this.webService.logoutAlert();
   }

}

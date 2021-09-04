import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { WebserviceService } from 'src/app/shared/services/webservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {

  player: any = null;
  environmenti = environment;
  
  isNewPlayer = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alerts: AlertsService,
    private webService: WebserviceService,
    private navCtrl: NavController
  ) { 
    
        // receiving params from navigation extras to the other page
    
        this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
               let navParams = this.router.getCurrentNavigation().extras.state;
               this.player = navParams.player;
               this.isNewPlayer = navParams.isNewPlayer;
               console.log(navParams);
          } else {
            this.router.navigateByUrl('tabs/tab2');
          }
        })
  }

  ngOnInit() {
  }

  downloadFile(fileName) {
    const url = this.environmenti.apiBase + 'Files/' + fileName;
    window.open(url, "_blank");
  }

  submitForm(){
    let linku = ``;
    this.alerts.presentLoadingController();
    let params = {};
    if (this.isNewPlayer) {
        linku = `admin/confirmplayer`;
        params['playerStatus'] = 2;
        params['playerId'] = this.player.id;
    } 
    this.webService.calling_Post_From_Api(linku, params).then((data: any) => {
      console.log(data);
      if (data.status) {
        this.alerts.presentToast('Player created successfully!', 'success');
        // this.createAndEditPlayerForm.reset();
        let backRoute = 'club/tabs/tab2';
        if (this.isNewPlayer) {
          backRoute = `admin/tabs/new-players`
        } 
        this.navCtrl.navigateBack(backRoute);
        // this.isEdit = true;
      } else {
        this.alerts.presentToast('Something happend, please try again later!', 'danger');
      }
      this.alerts.dismissLoadingController();
    }).catch((err: any) => {
      this.alerts.dismissLoadingController();
      console.log(err);
    });
  }

  declineReqOrNew() {
    this.alerts.presentCancelOrConfirm('Confirmation!', 'Are you sure you want to decline this request?', 'Cancel', 'DECLINE').then((data: any) => {
      if (data) {
        this.declineReqOrNewAPI();
      }
    });
  }

  declineReqOrNewAPI() {
    let params = {
      playerId: this.player.id
    }
    let linku = '';
    if (this.isNewPlayer) {
      linku = `admin/confirmplayer`;
     params['playerStatus'] = 3;
     params['playerId'] = this.player.id;
  } 
    this.webService.calling_Post_From_Api(linku, params).then((data: any) => {
      console.log(data);
      if (data.status) {
        this.alerts.presentToast('Player not accepted!', 'success');
        // this.createAndEditPlayerForm.reset();

        this.navCtrl.navigateBack(`admin/tabs/${this.isNewPlayer ? 'new-players' : 'update-requests'}`);
        // this.isEdit = true;
      } else {
        this.alerts.presentToast('Something happend, please try again later!', 'danger');
      }
      this.alerts.dismissLoadingController();
    }).catch((err: any) => {
      this.alerts.dismissLoadingController();
      console.log(err);
    });
  }

}

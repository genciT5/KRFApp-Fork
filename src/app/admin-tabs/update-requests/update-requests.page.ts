import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WebserviceService } from 'src/app/shared/services/webservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-requests',
  templateUrl: './update-requests.page.html',
  styleUrls: ['./update-requests.page.scss'],
})
export class UpdateRequestsPage implements OnInit {

  environmenti = environment;
  playersList: any[] = []

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
    const linku = 'admin/updateRequests';
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
        isUpdateRequest: true
      }
    };

    const ruti = `admin/tabs/update-requests/edit-player/${playerDetails.id}`;
    this.navCtrl.navigateForward(ruti, navigationExtras)
  }

}

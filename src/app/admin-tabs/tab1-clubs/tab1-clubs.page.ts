import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WebserviceService } from 'src/app/shared/services/webservice.service';

@Component({
  selector: 'app-tab1-clubs',
  templateUrl: './tab1-clubs.page.html',
  styleUrls: ['./tab1-clubs.page.scss'],
})
export class Tab1ClubsPage implements OnInit {

  clubsList: any[] = [];

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
    const linku = 'admin/clubs';
    this.webService.calling_GET_From_Api(linku).then((data: any) => {
      console.log(data);
      this.clubsList = data.values;
    }).catch((err: any) => {
      console.log(err);
    });
  }

  goToClubPlayers(clubId) {
    this.navCtrl.navigateForward(`admin/tabs/tab1-clubs/${clubId}`)
  }

  logout() {
    this.webService.logoutAlert();
  }
}

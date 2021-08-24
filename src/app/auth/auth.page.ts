import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlertsService } from '../shared/services/alerts.service';
import { WebserviceService } from '../shared/services/webservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  authForm: FormGroup;

  constructor(
    private webService: WebserviceService,
    private alerts: AlertsService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('',{
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }),
      password: new FormControl('',{
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      })
    });
  }


  loginFunction() {
    this.alerts.presentLoadingController();
      const linku = 'authenticate/login';
      this.webService.calling_Post_From_Api(linku, this.authForm.value).then((data: any) => {
        console.log(data);
        if (data) {
          data['userRole'] = data.user.accessToken.payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
          this.webService.setUserData(data);
          this.navCtrl.navigateRoot(data.user.accessToken.payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] == 'Admin' ? 'admin/tabs/tab1-clubs' : 'club/tabs/tab2')
        }
        this.alerts.dismissLoadingController();
      }).catch((err: any) => {
        this.alerts.dismissLoadingController();
        console.log(err);
      });
    }
}

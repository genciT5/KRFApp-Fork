import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WebserviceService } from './webservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      private navCtrl: NavController,
      private webService: WebserviceService
  ) { }

  canActivate(): boolean {
      const user = this.webService.getIsAuthenticated();
      if (user) {
          // logged in so return true
          return true;
      } else {
          // not logged in so redirect to login page with the return url
          this.navCtrl.navigateRoot(['/auth']);
          return false;
      }
  }
  
}

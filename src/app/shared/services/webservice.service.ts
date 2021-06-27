import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  protected authenticationState = new BehaviorSubject(false);
  private userData: any = null;

  protected httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'multipart/formdata',
      // 'Accept': 'multipart/formdata',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': '',
    })
  };



  constructor(
    private apiService: ApiService
  ) { }

  get getHttpHeaders(){
    return this.httpOptions;
  }



  setUserData(userData) {
    this.userData = userData;
    Storage.set(
      {
        key: 'KRFuserData',
        value: JSON.stringify(userData)
      }
    )
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Bearer ' + userData.token);
    console.log(this.httpOptions);
    this.authenticationState.next(true);
  }

  async getUserDataFromStorage() {
    const userData = await Storage.get({key: 'KRFuserData'});
    return userData;
  }

  removeUserData() {
    Storage.remove({key: 'KRFuserData'});
  }

  get _userData() {
    return this.userData;
  }

  getIsAuthenticated() {
    return this.authenticationState.value;
  }

  calling_Post_From_Api(link, params) {
    return new Promise((resolve, reject) => {
      this.apiService.post(link, params, this.getHttpHeaders).subscribe((data: any) => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  
  calling_GET_From_Api(link, isPagination = false) {
    return new Promise((resolve, reject) => {
      this.apiService.get(link, this.getHttpHeaders, isPagination).subscribe((data: any) => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });

  }

}

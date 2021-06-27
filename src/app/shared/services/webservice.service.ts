import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  protected httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'multipart/formdata',
      // 'Accept': 'multipart/formdata',
      // 'Content-Type': 'application/json',
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


  calling_Post_From_Api(link, params) {
    return new Promise((resolve, reject) => {
      this.apiService.post(link, params, this.getHttpHeaders).subscribe((data: any) => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

}

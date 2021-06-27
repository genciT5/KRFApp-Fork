import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebserviceService } from '../shared/services/webservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  authForm: FormGroup;

  constructor(private webService: WebserviceService) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      userName: new FormControl('',{
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
      const linku = 'login';
      this.webService.calling_Post_From_Api(linku, this.authForm.value).then((data: any) => {
        console.log(data);
      }).catch((err: any) => {
        console.log(err);
      });
    }
}

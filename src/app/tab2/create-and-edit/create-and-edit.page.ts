import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-and-edit',
  templateUrl: './create-and-edit.page.html',
  styleUrls: ['./create-and-edit.page.scss'],
})
export class CreateAndEditPage implements OnInit {

  isEdit = false;
  playerDetails: any = null;

  createAndEditPlayerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isEdit = true;
           let navParams = this.router.getCurrentNavigation().extras.state;
           this.playerDetails = navParams.playerDetails;
           console.log(navParams);
      }
    });
   }

  ngOnInit() {
    this.createAndEditPlayerForm = new FormGroup({
      firstName: new FormControl(this.isEdit ? this.playerDetails.name :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      lastName: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthDate: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      profilePicture: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
    });
  }

  submitForm(){
  }

}

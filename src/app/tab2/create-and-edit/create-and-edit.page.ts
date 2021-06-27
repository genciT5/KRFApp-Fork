import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebserviceService } from 'src/app/shared/services/webservice.service';

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
    private router: Router,
    private webService: WebserviceService
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
      clubId: new FormControl(this.isEdit ? this.playerDetails.name :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      firstName: new FormControl(this.isEdit ? this.playerDetails.name :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      middleName: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      lastName: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      ageGroup: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthTown: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthCountry: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      nationality: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      city: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      country: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      postalCode: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      streetAddress: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      address: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthDate: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      phoneNumber: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      playingPosition: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      canRepresentKosovo: new FormControl(true, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      isPlayerCommingFromTheJuridictionOfAnOtherUnion: new FormControl(false, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      previousClubName: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      previousClubUnion: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      previousClubRegistered: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      previousClubLeavingDate: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      transferFormNotification: new FormGroup({
        position: new FormControl(this.isEdit ? '' :'', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        readTimeout: new FormControl(this.isEdit ? '' :'', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        writeTimeout: new FormControl(this.isEdit ? '' :'', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      }),
      worldRugbyInternationalClearenceForm: new FormGroup({
        position: new FormControl(this.isEdit ? '' :'', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        readTimeout: new FormControl(this.isEdit ? '' :'', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        writeTimeout: new FormControl(this.isEdit ? '' :'', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      }),
      playerDeclarationSigned: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      playerSignedDeclaration: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      allowKRFToUsePersonalData: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      canKRFUseData: new FormControl(this.isEdit ? '' :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
    });
  }

  submitForm(){
    const linku = 'player';
    this.webService.calling_Post_From_Api(linku, this.createAndEditPlayerForm.value).then((data: any) => {
      console.log(data);
    }).catch((err: any) => {
      console.log(err);
    });
  }

  functionName() {
     
    }

}

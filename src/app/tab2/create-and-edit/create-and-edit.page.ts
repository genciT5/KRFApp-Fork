import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, NavController } from '@ionic/angular';
// import { FileLikeObject, FileUploader } from 'ng2-file-upload';
import { Subject } from 'rxjs';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { ImageServiceService } from 'src/app/shared/services/image-service.service';
import { PublicService } from 'src/app/shared/services/public.service';
import { WebserviceService } from 'src/app/shared/services/webservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-and-edit',
  templateUrl: './create-and-edit.page.html',
  styleUrls: ['./create-and-edit.page.scss'],
})
export class CreateAndEditPage implements OnInit {

  environmenti = environment;
  isEdit = false;
  playerDetails: any = null;

  createAndEditPlayerForm: FormGroup;

  selectedProfilePicture = null;
  selectedTransferFormNotificationFile = null;
  selectedWorldRugbyIntClForm = null;
  selectedHealthDocument = null;

  hasUploaded = {
    selectedProfilePicture: false,
    selectedTransferFormNotificationFile: false,
    selectedWorldRugbyIntClForm: false,
    selectedHealthDocument: false
  }

  base64img = null;

  getSelectedFiles = new Subject<any>();

  @ViewChild('slides') slides: IonSlides;

  // public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;

  // admin/updatePlayer
  // 

  isNewPlayer = false;
  isUpdateRequest = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private webService: WebserviceService,
    private alerts: AlertsService,
    public imageService: ImageServiceService,
    public publicService: PublicService,
    private navCtrl: NavController
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isEdit = true;
           let navParams = this.router.getCurrentNavigation().extras.state;
           this.playerDetails = navParams.playerDetails;
           this.isNewPlayer = navParams.isNewPlayer;
           this.isUpdateRequest = navParams.isUpdateRequest;
           console.log(navParams);
      }
    });
   }

  ngOnInit() {
    this.createAndEditPlayerForm = new FormGroup({
      // clubId: new FormControl(this.isEdit ? this.playerDetails.name :'', {
      //   updateOn: 'change',
      //   validators: [Validators.required]
      // }),
      firstName: new FormControl(this.isEdit ? this.playerDetails.firstName :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      middleName: new FormControl(this.isEdit ? this.playerDetails.middleName :'', {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      fatherName: new FormControl(this.isEdit ? this.playerDetails.firstName :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      lastName: new FormControl(this.isEdit ? this.playerDetails.lastName :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      ageGroup: new FormControl(this.isEdit ? this.playerDetails.ageGroup.toString() :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      email: new FormControl(this.isEdit ? this.playerDetails.email :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthTown: new FormControl(this.isEdit ? this.playerDetails.birthTown :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthCountry: new FormControl(this.isEdit ? this.playerDetails.birthCountry :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      citizenship: new FormControl(this.isEdit ? this.playerDetails.citizenship :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      city: new FormControl(this.isEdit ? this.playerDetails.city :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      country: new FormControl(this.isEdit ? this.playerDetails.country :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      postalCode: new FormControl(this.isEdit ? this.playerDetails.postalCode :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      streetAddress: new FormControl(this.isEdit ? this.playerDetails.streetAddress :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      address: new FormControl(this.isEdit ? this.playerDetails.address :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthDate: new FormControl(this.isEdit ? this.playerDetails.birthDate :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      phoneNumber: new FormControl(this.isEdit ? this.playerDetails.phoneNumber :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      previousRegistrationNumber: new FormControl(this.isEdit ? this.playerDetails.previousRegistrationNumber :'', {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      personalNumber: new FormControl(this.isEdit ? this.playerDetails.personalNumber :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      playingPosition: new FormControl(this.isEdit ? this.playerDetails.playingPosition.toString() : '', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      canRepresanteKosovo: new FormControl(this.isEdit ? this.playerDetails.canRepresanteKosovo : false, {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      isPlayerCommingFromTheJuridictionOfAnOtherUnion: new FormControl(this.isEdit ? this.playerDetails.isPlayerCommingFromTheJuridictionOfAnOtherUnion : false, {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      previousClubName: new FormControl(this.isEdit ? this.playerDetails.previousClubName :'', {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      previousClubUnion: new FormControl(this.isEdit ? this.playerDetails.previousClubUnion :'', {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      previousClubRegistered: new FormControl(this.isEdit ? this.playerDetails.previousClubRegistered  :'', {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      previousClubLeavingDate: new FormControl(this.isEdit ? this.playerDetails.previousClubLeavingDate :'', {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      // transferFormNotification: new FormControl(this.isEdit ? '' :'', {
      //   updateOn: 'change',
      //   validators: [Validators.required]
      // }),
      // worldRugbyInternationalClearenceForm: new FormControl(this.isEdit ? '' :'', {
      //   updateOn: 'change',
      //   validators: [Validators.required]
      // }),
      // transferFormNotification: new FormGroup({
      //   position: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      //   readTimeout: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      //   writeTimeout: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      // }),
      // worldRugbyInternationalClearenceForm: new FormGroup({
      //   position: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      //   readTimeout: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      //   writeTimeout: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      // }),
      hasSignedDeclaraiton: new FormControl(this.isEdit ? this.playerDetails.hasSignedDeclaraiton : false, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      playerDeclarationSignedOn: new FormControl(this.isEdit ? this.playerDetails.playerDeclarationSignedOn : '', {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      allowKRFToUsePersonalData: new FormControl(this.isEdit ? this.playerDetails.allowKRFToUsePersonalData : false, {
        updateOn: 'change',
        // validators: [Validators.required]
      }),
      // canKRFUseData: new FormControl(this.isEdit ? this.playerDetails.canKRFUseData : false, {
      //   updateOn: 'change',
      //   // validators: [Validators.required]
      // }),
    });
  }

  
  // fileOverBase(event): void {
  //   this.hasBaseDropZoneOver = event;
  //   this.selectedFileddd('1');
  // }

  // getFiles(): FileLikeObject[] {
  //   return this.fileUploader.queue.map((fileItem) => {
  //     return fileItem.file;

  //   });
  // }


  // async selectedFileddd($event) {
  //   console.log(this.getFiles());
  //   let files = this.getFiles();
  //   let compressSizeTotal = 0
  //   for (const file of files) {
  //     let compressedFile = await this.imageService.compressImageSize(file.rawFile);
  //     console.log(compressSizeTotal += compressedFile.compressSize);
  //     this.imageService.photos.push({
  //       fileName: file.name,
  //       webviewPath: await this.fileToBase(file.rawFile),
  //       fileBlob: undefined,
  //       fileFile: compressedFile.data,
  //       from: 'ng2'
  //     })
  //     }
     
  // }

  async fileSelector(type, event) {
    console.log({type, event})
    let ab = await this.getBase64(event.target.files[0])
    console.log(ab);
    if (type == 0) {
      this.selectedProfilePicture = {selectedFile: event.target.files[0], base64: ab}
      
    } else if (type == 1) {
      this.selectedTransferFormNotificationFile = {selectedFile: event.target.files[0], base64: ab}
      
    } else if (type == 2) {
      this.selectedWorldRugbyIntClForm = {selectedFile: event.target.files[0], base64: ab}
      
    } else if (type == 3) {
      this.selectedHealthDocument = {selectedFile: event.target.files[0], base64: ab}
    }

  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  async fileToBase(file) {
    return await this.getBase64(file).then(
      (data) => {return data}
    );
  }



  submitForm(){
    let linku = `${this.isEdit ? 'players/update' : 'players'}`;
   
    console.log(this.createAndEditPlayerForm)
    if (this.createAndEditPlayerForm.invalid) {
      this.createAndEditPlayerForm.markAllAsTouched();
      return;
    }
    this.alerts.presentLoadingController();
    this.isEdit ? this.createAndEditPlayerForm.value['playerId'] = this.playerDetails.id : '';
    this.createAndEditPlayerForm.value.ageGroup = +this.createAndEditPlayerForm.value.ageGroup;
    if (this.isNewPlayer) {
        linku = `admin/confirmplayer`;
       this.createAndEditPlayerForm.value['playerStatus'] = 2;
    } 
    if (this.isUpdateRequest) {
        linku = 'admin/updateplayer';
       this.createAndEditPlayerForm.value['updateRequestStatus'] = 0;
       this.createAndEditPlayerForm.value['requestId'] = this.playerDetails.id;
    }
    this.webService.calling_Post_From_Api(linku, this.createAndEditPlayerForm.value).then((data: any) => {
      console.log(data);
      if (data.status) {
        this.alerts.presentToast('Player created successfully!', 'success');
        // this.createAndEditPlayerForm.reset();
        let backRoute = 'club/tabs/tab2';
        if (this.isNewPlayer || this.isUpdateRequest) {
          backRoute = `admin/tabs/${this.isNewPlayer ? 'new-players' : 'update-requests'}`
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
      playerId: this.playerDetails.id
    }
    let linku = '';
    if (this.isNewPlayer) {
      linku = `admin/confirmplayer`;
     params['playerStatus'] = 3;
  } 
  if (this.isUpdateRequest) {
      linku = 'admin/updateplayer';
     params['updateRequestStatus'] = 1;
     params['requestId'] = this.playerDetails.id;
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

 // decline new player admin/confirmplayer {playerId edhe playerStatus 3}
  // approve new player admin/confirmplayer {playerId edhe playerStatus 2}


 // decline request admin/confirmplayer {requestId edhe requestStatus 1}
 // approve request admin/confirmplayer {requestId edhe requestStatus 0}

    uploadFile(type) {
        const linku = 'players/uploadfiles';
        let parametrat = {};
        let formData = new FormData();
        formData.append('PlayerId', this.playerDetails.id)
        if (type == 0) {
          formData.append('ProfilePicture', this.selectedProfilePicture.selectedFile);

        }

        if (type == 1) {
          formData.append('TransferFormNotification', this.selectedTransferFormNotificationFile.selectedFile);

        }
        
        if (type == 2) {
          formData.append('WorldRugbyInternationalClearenceForm', this.selectedWorldRugbyIntClForm.selectedFile);
        }
        
        if (type == 3) {
          formData.append('MedicalStatement', this.selectedHealthDocument.selectedFile);
        }
          
    this.alerts.presentLoadingController();
        this.webService.calling_Post_From_Api(linku, formData, true).then((data: any) => {
          console.log(data);
          if (type == 0) { 
            this.hasUploaded.selectedProfilePicture = true;
            this.selectedProfilePicture = false;
            this.playerDetails.profilePicture = data.values.profilePicture;
          } else if (type == 1) {
            this.hasUploaded.selectedTransferFormNotificationFile = true;
            this.playerDetails.profilePicture = data.values.transferFormNotification;
          } else if (type == 2) {
            this.hasUploaded.selectedWorldRugbyIntClForm = true;
            this.playerDetails.profilePicture = data.values.worldRugbyInternationalClearenceForm;
          } else if (type == 3) {
            this.hasUploaded.selectedHealthDocument = true;
            this.playerDetails.profilePicture = data.values.medicalStatement;
          }
          this.alerts.presentToast('Successfully uploaded. To see the uploaded file you have to open player details!', 'success', 5000);
          this.alerts.dismissLoadingController();
        }).catch((err: any) => {
          this.alerts.dismissLoadingController();
          console.log(err);
        });
      }

      async deleteFileFromDB(type, fileName) {
        this.alerts.presentCancelOrConfirm('Confirmation!!', 'Are you sure you want to delete the selected file?', 'Cancel', 'DELETE').then(data => {
          if (data) {
            const linku = `players/deletefile`;
            this.webService.calling_Post_From_Api(linku, {fileType: type, playerId: this.playerDetails.id, fileName}).then((data: any) => {
              console.log(data);
              if (type == 0) { 
                this.hasUploaded.selectedProfilePicture = true;
                this.playerDetails.profilePicture = null;
              } else if (type == 1) {
                this.hasUploaded.selectedTransferFormNotificationFile = true;
                this.playerDetails.transferFormNotification = null;
                
              } else if (type == 2) {
                this.hasUploaded.selectedWorldRugbyIntClForm = true;
                this.playerDetails.worldRugbyInternationalClearenceForm = null;
                
              } else if (type == 3) {
                this.hasUploaded.selectedHealthDocument = true;
                this.playerDetails.medicalStatement = null;
    
              }
              this.alerts.presentToast('File Deleted', 'success', 5000);
              this.alerts.dismissLoadingController();
            }).catch((err: any) => {
              this.alerts.dismissLoadingController();
              console.log(err);
            });
          }
        })
        
      }

      downloadFile(fileName) {
        const url = this.environmenti.apiBase + 'Files/' + fileName;
        window.open(url, "_blank");
      }
}

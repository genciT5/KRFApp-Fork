import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, ActionSheetController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  
  isLoading = false;

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetController: ActionSheetController,
    // private translate: TranslateService
  ) { }

  async presentLoadingController(message?: string) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
        // duration: 1000,
        message,
        spinner: 'crescent',
        mode: 'ios',
        translucent: true,
        cssClass: 'loading-spinner-design'
    }).then(a => {
        a.present().then(() => {
            if (!this.isLoading) {
                a.dismiss().then(() => console.log('')).catch(() => {});
            }
        });
      });
    }

    async dismissLoadingController() {
      this.isLoading = false;
      return await this.loadingCtrl.dismiss().then(() => console.log('')).catch(() => {});
    }

    showMessageAlert(header, message) {
      this.alertCtrl.create({
          header,
          message,
          buttons: ['Okay']
        }).then(alertEl => alertEl.present());
      }

      async presentToast(text, toastType?: string, duration?: number) {
        const toast = await this.toastCtrl.create({
          message: text,
          position: 'top',
          buttons: [
            {
              role: 'cancel',
              icon: 'close-outline'
            }
          ],
          color: toastType ? toastType : 'primary',
          duration: duration ? duration : 2000
        });
        toast.present();
      }

      async presentToastWithGivenTime(text, duration, toastType? : any) {
        if(toastType === 'undefined'){
          toastType = 'primary';
        }
        const toast = await this.toastCtrl.create({
          message: text,
          position: 'bottom',
          duration,
          color: toastType,
        });
        toast.present();
      }

    //   async presentIntervalSelector() {
    //     let resolveFunction: (confirm: any) => void;
    //     const promise = new Promise<any>(resolve => {
    //       resolveFunction = resolve;
    //     });
    //     const actionSheet = await this.actionSheetController.create({
    //       header: this.translate.instant('time_interval'),
    //       mode: 'ios',
    //       buttons: [{
    //         text: this.translate.instant('time_interval_daily'),
    //         // icon: 'trash',
    //         handler: () => resolveFunction('daily')
    //       }, {
    //         text: this.translate.instant('time_interval_weekly'),
    //         // icon: 'share',
    //         handler: () => resolveFunction('weekly')
    //       }, {
    //         text: this.translate.instant('time_interval_monthly'),
    //         // icon: 'arrow-dropright-circle',
    //         handler: () => resolveFunction('monthly')
    //       }, {
    //         text: this.translate.instant('time_interval_yearly'),
    //         // icon: 'heart',
    //         handler: () => resolveFunction('yearly')
    //       }, {
    //         text: 'Cancel',
    //         // icon: 'close',
    //         role: 'cancel',
    //         handler: () => resolveFunction('cancel')
    //       }]
    //     });
    //     await actionSheet.present();
    //     return promise;
    //   }


    //   async present_refill_budget_alert_controller(freelancer?) {
    //     let resolveFunction: (confirm: any) => void;
    //     const promise = new Promise<any>(resolve => {
    //       resolveFunction = resolve;
    //     });
    //     let messageText = this.translate.instant('no_budget_found_refill_your_budget_now');
    //     if (freelancer != undefined) {
    //       messageText = this.translate.instant('no_budget_found_to_assign_this_consultant');
    //     }
    //     const alert = await this.alertCtrl.create({
    //           mode: 'ios',
    //           header: this.translate.instant('no_budget_found'),
    //           message: messageText,
    //           buttons: [
    //             {
    //               text: this.translate.instant('not_now'),
    //               role: 'cancel',
    //               cssClass: 'secondary',
    //               handler: () => resolveFunction('no')
    //             }, {
    //               text: this.translate.instant('refill_now'),
    //               handler: () => resolveFunction('refill')
    //             }
    //           ]
    //         });
    //     await alert.present();
    //     return promise;
    // }


  //  async presentConfirmYesNo(headerMsg, msg, cancelSubscription?) {
  //     let cancelButtonText = this.translate.instant('cancel');
  //     let deleteButtonText = this.translate.instant('delete');
  //     if (cancelSubscription == undefined) {
  //     } else {
  //       cancelButtonText = this.translate.instant('close');
  //       deleteButtonText = this.translate.instant('cancel');
  //     }
  //     let resolveFunction: (confirm: any) => void;
  //     const promise = new Promise<any>(resolve => {
  //       resolveFunction = resolve;
  //     });
  //     const alert = await this.alertCtrl.create({
  //           mode: 'ios',
  //           header: headerMsg,
  //           message: msg,
  //           buttons: [
  //             {
  //               text: cancelButtonText,
  //               role: 'cancel',
  //               handler: () => resolveFunction(false)
  //             }, {
  //               text: deleteButtonText,
  //               role: 'destructive',
  //               cssClass: 'deleteButtonAlertCLASS',
  //               handler: () => resolveFunction(true)
  //             }
  //           ]
  //         });
  //     await alert.present();
  //     return promise;
  //   }

   async verifyEditProfile(headerMsg, msg, cancelButtonText, deleteButtonText) {
      let resolveFunction: (confirm: any) => void;
      const promise = new Promise<any>(resolve => {
        resolveFunction = resolve;
      });
      const alert = await this.alertCtrl.create({
            mode: 'ios',
            header: headerMsg,
            message: msg,
            buttons: [
              {
                text: cancelButtonText,
                role: 'cancel',
                cssClass: 'deleteButtonAlertCLASS',
                handler: () => resolveFunction(false)
              }, {
                text: deleteButtonText,
                handler: () => resolveFunction(true)
              }
            ]
          });
      await alert.present();
      return promise;
    }

    async presentCancelOrConfirm(headerMsg, msg, firstButton, secondButton) {
      let resolveFunction: (confirm: any) => void;
      const promise = new Promise<any>(resolve => {
        resolveFunction = resolve;
      });
      const alert = await this.alertCtrl.create({
            mode: 'ios',
            header: headerMsg,
            message: msg,
            buttons: [
              {
                text: firstButton,
                role: 'cancel',
                handler: () => resolveFunction(false)
              }, {
                text: secondButton,
                role: 'destructive',
                handler: () => resolveFunction(true)
              }
            ]
          });
      await alert.present();
      return promise;
    }
    
}

import { Injectable } from '@angular/core';
import { PlayerStatusesENUMS } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  deviceData = null;

  

  constructor() { }
  
  getClassForCardStatusTyle(playerStatus) {
    if (playerStatus == PlayerStatusesENUMS.approved) {
      return 'success';
    } else if (playerStatus == PlayerStatusesENUMS.pending) {
      return 'warning';
    } else if (playerStatus == PlayerStatusesENUMS.rejected) {
      return 'danger';
    } else if (playerStatus == PlayerStatusesENUMS.updateRequestPending) {
      return 'secondary';
    } 
  }
}

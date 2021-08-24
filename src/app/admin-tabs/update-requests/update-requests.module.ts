import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRequestsPageRoutingModule } from './update-requests-routing.module';

import { UpdateRequestsPage } from './update-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRequestsPageRoutingModule
  ],
  declarations: [UpdateRequestsPage]
})
export class UpdateRequestsPageModule {}

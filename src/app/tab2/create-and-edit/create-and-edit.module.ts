import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAndEditPageRoutingModule } from './create-and-edit-routing.module';

import { CreateAndEditPage } from './create-and-edit.page';
// import { FileUploadModule } from 'ng2-file-upload';
// import { Ng2ImgMaxModule } from 'ng2-img-max';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAndEditPageRoutingModule,
    ReactiveFormsModule,
    // FileUploadModule,
    // Ng2ImgMaxModule
  ],
  declarations: [CreateAndEditPage]
})
export class CreateAndEditPageModule {}

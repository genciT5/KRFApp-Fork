import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAndEditPageRoutingModule } from './create-and-edit-routing.module';

import { CreateAndEditPage } from './create-and-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAndEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateAndEditPage]
})
export class CreateAndEditPageModule {}

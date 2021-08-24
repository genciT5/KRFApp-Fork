import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1ClubsPageRoutingModule } from './tab1-clubs-routing.module';

import { Tab1ClubsPage } from './tab1-clubs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1ClubsPageRoutingModule
  ],
  declarations: [Tab1ClubsPage]
})
export class Tab1ClubsPageModule {}

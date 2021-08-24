import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPlayersPageRoutingModule } from './new-players-routing.module';

import { NewPlayersPage } from './new-players.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPlayersPageRoutingModule
  ],
  declarations: [NewPlayersPage]
})
export class NewPlayersPageModule {}

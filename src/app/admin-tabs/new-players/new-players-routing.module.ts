import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPlayersPage } from './new-players.page';

const routes: Routes = [
  {
    path: '',
    component: NewPlayersPage
  },
  {
    path: 'edit-player',
    loadChildren: () => import('../../tab2/create-and-edit/create-and-edit.module').then(m => m.CreateAndEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPlayersPageRoutingModule {}

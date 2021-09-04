import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPlayersPage } from './new-players.page';

const routes: Routes = [
  {
    path: '',
    component: NewPlayersPage
  },
  {
    path: 'player-details',
    loadChildren: () => import('../../tab2/player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPlayersPageRoutingModule {}

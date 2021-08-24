import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1ClubsPage } from './tab1-clubs.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1ClubsPage
  },
  {
    path: ':clubId',
    children: [
      {
        path: '',
        loadChildren: () => import('../../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'players',
        loadChildren: () => import('../../tab2/player-details/player-details.module').then(m => m.PlayerDetailsPageModule)
      },
      {
        path: 'edit-player',
        loadChildren: () => import('../../tab2/create-and-edit/create-and-edit.module').then(m => m.CreateAndEditPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1ClubsPageRoutingModule {}

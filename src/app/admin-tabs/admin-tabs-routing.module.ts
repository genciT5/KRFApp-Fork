import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTabsPage } from './admin-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AdminTabsPage,
    children: [
      {
        path: 'tab1-clubs',
        loadChildren: () => import('./tab1-clubs/tab1-clubs.module').then( m => m.Tab1ClubsPageModule)
       
      },
      {
        path: 'new-players',
        loadChildren: () => import('./new-players/new-players.module').then( m => m.NewPlayersPageModule)
      },
      {
        path: 'update-requests',
        loadChildren: () => import('./update-requests/update-requests.module').then( m => m.UpdateRequestsPageModule)
      },
      {
        path: '',
        redirectTo: '/admin/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admin/tabs/tab1',
    pathMatch: 'full'
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTabsPageRoutingModule {}

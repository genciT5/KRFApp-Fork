import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'player-details',
    loadChildren: () => import('./player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  },
  {
    path: 'create-and-edit',
    loadChildren: () => import('./create-and-edit/create-and-edit.module').then( m => m.CreateAndEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

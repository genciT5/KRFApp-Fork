import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRequestsPage } from './update-requests.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRequestsPage
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
export class UpdateRequestsPageRoutingModule {}

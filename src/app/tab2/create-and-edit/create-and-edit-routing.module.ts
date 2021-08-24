import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAndEditPage } from './create-and-edit.page';

const routes: Routes = [
  {
    path: ':playerId',
    component: CreateAndEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAndEditPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissingPersonPage } from './missing-person.page';

const routes: Routes = [
  {
    path: '',
    component: MissingPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissingPersonPageRoutingModule {}

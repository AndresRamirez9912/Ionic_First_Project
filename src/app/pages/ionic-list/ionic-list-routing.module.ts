import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicListPage } from './ionic-list.page';

const routes: Routes = [
  {
    path: '',
    component: IonicListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicListPageRoutingModule {}

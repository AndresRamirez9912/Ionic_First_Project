import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InifiniteScrollPage } from './inifinite-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InifiniteScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InifiniteScrollPageRoutingModule {}

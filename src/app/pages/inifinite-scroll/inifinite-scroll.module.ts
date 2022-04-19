import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InifiniteScrollPageRoutingModule } from './inifinite-scroll-routing.module';

import { InifiniteScrollPage } from './inifinite-scroll.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InifiniteScrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InifiniteScrollPage]
})
export class InifiniteScrollPageModule {}

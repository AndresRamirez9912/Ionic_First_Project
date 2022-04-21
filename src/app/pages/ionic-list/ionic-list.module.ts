import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicListPageRoutingModule } from './ionic-list-routing.module';

import { IonicListPage } from './ionic-list.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicListPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [IonicListPage]
})
export class IonicListPageModule {}

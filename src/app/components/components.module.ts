import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageRoutingModule } from '../pages/home/home-routing.module';
import { ModalComponent } from './modal/modal.component';
import { PopComponent } from './pop/pop.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ModalComponent,
    PopComponent
  ],
  exports:[
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    HttpClientModule,
    HomePageRoutingModule,
  ]
})
export class ComponentsModule { }

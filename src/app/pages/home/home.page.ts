import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Components } from 'src/app/models/Components.models';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // Attributes
  components: Observable<Components[]>; // Components list

  constructor(
    private menuCtrl: MenuController,
    private dataService :DataService ) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }
  // Attributes
  activateMenu(){
    this.menuCtrl.open("main-menu")
  }

}

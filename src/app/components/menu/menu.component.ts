import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Components } from 'src/app/models/Components.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menu_elements: Observable<Components[]>; // Empty Array of elements inside the menu

  constructor(private dataService:DataService) { }

  ngOnInit() {
    // Get the Json file store in assets
    this.menu_elements=this.dataService.getMenuOptions(); // This return an Observable

  }
  test(){
    console.log("Clicked");

  }

}

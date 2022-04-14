import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  // Attributes
  favorite:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  favoriteClick(){
    this.favorite=!this.favorite; // Toggle favorite
  }

}

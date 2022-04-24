import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
})
export class PopComponent implements OnInit {

  // Attributes
  items = Array(5); // Empty array

  constructor(private popOverCTR:PopoverController) { }

  ngOnInit() {}

  // Attributes
  onClick(position:number){
    this.popOverCTR.dismiss({  // Close the pop-Over
      item: position
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checbox',
  templateUrl: './checbox.page.html',
  styleUrls: ['./checbox.page.scss'],
})
export class ChecboxPage implements OnInit {

  // Attributes
  public items = [
    {Text: 'Pepperoni', check: true},
    {Text: 'Sausage', check: false},
    {Text: 'Mushroom', check: false}
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(check:any){
    console.log(check);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // Attributes
  @Input() title: string="";
  @Input() back_addreess: string="";

  constructor() { }

  ngOnInit() {}

}

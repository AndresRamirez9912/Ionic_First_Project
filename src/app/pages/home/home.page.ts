import { Component, OnInit } from '@angular/core';
import { Components } from 'src/app/models/Component.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // Attributes
  components: Components[]=[ // Components list
    {
      icon: 'american-football',
      name: 'Action Sheet' ,
      redirectTo: '/action-sheet',
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert' ,
      redirectTo: '/alert',
    },
    {
      icon: 'beaker',
      name: 'Avatar' ,
      redirectTo: '/avatar',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

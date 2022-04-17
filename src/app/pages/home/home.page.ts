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
    {
      icon: "arrow-forward-circle-outline",
      name: 'Buttons' ,
      redirectTo: '/buttons',
    },
    {
      icon: "id-card-outline",
      name: 'Cards' ,
      redirectTo: '/cards',
    },
    {
      icon: "checkbox-outline",
      name: 'ChecBox' ,
      redirectTo: '/checbox',
    },
    {
      icon: "car-outline",
      name: 'Fab' ,
      redirectTo: '/fab',
    },
    {
      icon: "car-outline",
      name: 'Grid' ,
      redirectTo: '/grid',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

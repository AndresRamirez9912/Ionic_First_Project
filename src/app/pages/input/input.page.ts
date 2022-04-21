import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/User.models';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  //Attribute
  name:string="";
  password:string="";

  user:User={
    name: "",
    email: "",
    password:''
  }

  constructor() { }

  ngOnInit() {
  }

  // Methods
  onSubmit(form :NgForm){
    console.log("submit");
    console.log(form); // Print the Form object
    console.log(this.user); // Print my interface object

  }

}

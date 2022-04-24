import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() name:string="";
  @Input() age:number=0;


  constructor( private modalCTR:ModalController) { }

  ngOnInit() {}

  // Methods
  exitNoArguments(){
    this.modalCTR.dismiss();

  }

  exitArguments(){
    this.modalCTR.dismiss({ // Close the modal and send data
      name: "Andres",
      age: 22,
      country: "Colombia",
      gender: "Male"
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCTR:ModalController) { }

  ngOnInit() {
  }

  // Attributes
  async showModal(){
    const modal = await this.modalCTR.create({
      component: ModalComponent,
      componentProps:{ // This is the data to send
        name: "Andres",
        age: 22,
      }
    });
    await modal.present(); // Show the modal

    // Get the return data
    const response = await modal.onDidDismiss(); // Store the complete response
    console.log(response); // Print the data

    const {data} = await modal.onDidDismiss(); // Store only the data
    console.log(data); // Print the data

  }
}

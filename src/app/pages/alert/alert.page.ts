import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { } // Inject the alertController

  ngOnInit() {
  }

  // First Alert
  async presentAlert() { // Alert Function
    const alert = await this.alertController.create({ // Create an object called alert with the parameters
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text:'OK', // Name of the button
          role:'ok-role' // Role of the button
        }
      ],
      backdropDismiss:false // I can set this as false that is necesary click any button not the back
    });

    await alert.present(); // Show the alert in the screen

    const { role } = await alert.onDidDismiss();  // Get the role of the button after show
    console.log('onDidDismiss resolved with role', role); // Print the message + role
  }

  // Second Alert
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [ // Buttons are objets withattributes and methods
        { // First Button
          text: 'Button 1',
          role: "Boton1", // Role
          handler: ()=>{ // Function that will be execute when I push the button
            console.log('Click on the first button',Text.name);
          }
        },
        {
          text: 'Button 2- Cancelar',
          role: "cancel", // Role
          handler: ()=>{
            console.log('Click on the button',Text.name);
          }
        }
      ]
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // Third Alert
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [ // List of impus
        { // First Imput
          name: 'name1', // Name Imput (Unique)
          type: 'text', // Type Input
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data:any) => {
            console.log('Confirm Ok'); // Message
            console.log(data);  // Plot the data
          }
        }
      ]
    });

    await alert.present();
  }

  // Fourth Alert
  async presentAlertRadio() {
    const alert = await this.alertController.create({ // Create the object of the alert
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [ // Inputs
        {
          name: 'radio1',
          type: 'radio', // Type Radio
          label: 'Radio 1',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true // Default state of check
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
          handler: () => {
            console.log('Radio 3 selected');
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
          handler: () => {
            console.log('Radio 4 selected');
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5',
          handler: () => {
            console.log('Radio 5 selected');
          }
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6',
          value: 'value6',
          handler: () => {
            console.log('Radio 6 selected');
          }
        }
      ],
      buttons: [ // Buttons
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data:any) => {
            console.log('Confirm Ok');
            console.log(data); // Get the value data
          }
        }
      ]
    });

    await alert.present(); // Show the alert object

  }

  // Five Alert
  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          handler: () => {
            console.log('Checkbox 1 selected');
          },
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3',
          handler: () => {
            console.log('Checkbox 3 selected');
          }
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4',
          handler: () => {
            console.log('Checkbox 4 selected');
          }
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5',
          handler: () => {
            console.log('Checkbox 5 selected');
          }
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data:any) => { // Get the data
            console.log('Confirm Ok');
            console.log(data); // Return the array of data

          }
        }
      ]
    });

    await alert.present();
  }

  // My Alert
  async myAert(){
    const alert = await this.alertController.create({ // Create Alert Object
      header:'myAlert',
      subHeader: 'Here goes the parla :v',
      backdropDismiss:false,
      inputs:[
        {
          name: 'name', // Name of the input
          id: 'name',
          type: 'text', // type to write text
          placeholder: 'Name' // Message write to say what I need
        },
        {
          name: 'age',
          id: 'age',
          type: 'number',
          placeholder: 'Age',
          min: '0',
          max: '99'
        },
        {
          name: 'gender_male',
          id: 'gender_male',
          type: 'radio',
          label: 'Male',
          value: 'male',
          checked:true
        },
        {
          name: 'gender_female',
          id: 'gender_female',
          type: 'radio',
          label: 'Female',
          value: 'female'
        },
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Accept',
          role: 'acept',
          handler: (data:any) => {
            console.log(data); // Get the information and plot

          }
        }
      ]
    })
    // Show the alert
    await alert.present() // Show the alert
  }
}

import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { } // inject the service action sheet

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet() // This function call the method action-sheet method
  }

  async presentActionSheet() {// Async function
    const actionSheet = await this.actionSheetController.create({ // Create an action sheet object
      header: 'Albums', // Name of the action sheet
      backdropDismiss:false, // Desactive close the action sheet touching outside. Just leave when I touch in any option
      buttons: [{
        text: 'Delete', // Name of the first button
        icon: 'trash', // Icon of the first button
        id: 'delete-button', //Id of the first button
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present(); // Wait until the action sheet close

    const { role, data, } = await actionSheet.onDidDismiss(); // Get the role and data of the button pushed when the action sheet close
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}

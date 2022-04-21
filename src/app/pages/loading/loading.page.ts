import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async startLoading(){ // Present the loading
    const loading = await this.loadingCtrl.create({ // Create the object
      message: "Please Wait",
      duration: 200, // 200ms

    });

    await loading.present(); // Execute the method
  }

}

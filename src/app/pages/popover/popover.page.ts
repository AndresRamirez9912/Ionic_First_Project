import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopComponent } from 'src/app/components/pop/pop.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverCTR:PopoverController) { }

  ngOnInit() {
  }
  async showPop(position:Event){
    const pop = await this.popoverCTR.create({
      component:PopComponent,
      event:position
    });
    await pop.present(); // Present the pop over
    const {data} = await pop.onWillDismiss(); // Receive and store the data from the pop
    console.log(data);

  }
}

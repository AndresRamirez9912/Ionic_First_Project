import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-inifinite-scroll',
  templateUrl: './inifinite-scroll.page.html',
  styleUrls: ['./inifinite-scroll.page.scss'],
})
export class InifiniteScrollPage implements OnInit {

  // Attributes
  showData:any[] =Array(20); // Array of data to show in sections
  data:any=Array(60);  // Array of all data
  showedData:number=20; // Variable to control the number of showed data

  @ViewChild(IonInfiniteScroll) infiniteScroll :IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(){ // This execute when The infinite scroll is executing
    if(this.showedData>=60){
      this.infiniteScroll.disabled=true; // Stop The infinite scroll
    }

    setTimeout(() => {
      this.showData.push(...this.data.slice(this.showedData,this.showedData+20)); // Add more data to the array to show
      this.showedData+=20;
      console.log(this.showedData); // Display the data showed
      this.infiniteScroll.complete(); // Finish the animation after the delay
    }, 500); // Delay 500ms
  }

}

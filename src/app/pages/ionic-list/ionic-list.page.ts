import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-ionic-list',
  templateUrl: './ionic-list.page.html',
  styleUrls: ['./ionic-list.page.scss'],
})
export class IonicListPage implements OnInit {

  @ViewChild(IonList) list:IonList

  // Attributos
  users : Observable<any>;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.users=this.dataService.getUsers( );
  }
  // Attributes
  clickShare(){
    console.log("Click on Share ");
    this.list.closeSlidingItems(); // Close the sliding item
  }
  clickFavorite(){
    console.log("Click on Favorite ");
    this.list.closeSlidingItems(); // Close the sliding item
  }
  clickUnread(){
    console.log("Click on Unread ");
    this.list.closeSlidingItems(); // Close the sliding item
  }
  clickDelete(){
    console.log("Click on Delete ");
    this.list.closeSlidingItems(); // Close the sliding item
  }
}

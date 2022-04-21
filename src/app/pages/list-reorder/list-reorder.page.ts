import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  // Attribute
  characters:string[]=['Pepito','Sanito','Juanito','Juanita','Andres'];
  edit:boolean=true

  constructor() { }

  ngOnInit() {
  }
  // Methods
  doReorder(event:any){

    event.detail.complete() // Complete the moving
  }
  nameReorder(event:any){
    const movedItem = this.characters.splice(event.detail.from,1)[0]
    this.characters.splice(event.detail.to,0,movedItem)

    event.detail.complete() // Complete the moving
    console.log(this.characters);
  }
  editClick(){
    this.edit= !this.edit;
  }
}

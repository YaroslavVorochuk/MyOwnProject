import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 
  constructor(private itemService: ItemService) {
   
   }

  items = []

  ngOnInit() {
    this.items = this.itemService.items
  }

}

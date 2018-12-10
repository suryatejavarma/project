import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  s:any[];
  constructor(private ds:DataService) {
    this.s=ds.get();
   }

  ngOnInit() {
  }

}

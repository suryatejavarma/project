import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
data:any[];
constructor(private r:Router,private ls:LoginService) { 
  this.ls.setDat().subscribe(x=>this.data=x);
}

ngOnInit() {
}
onSubmit(x)
{
  
}
delete(i){
  this.data.splice(i,1);
}
}

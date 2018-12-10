import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-compamy',
  templateUrl: './compamy.component.html',
  styleUrls: ['./compamy.component.css']
})
export class CompamyComponent implements OnInit {

  data:any[];
  constructor(private ls:LoginService) {
    this.ls.setDataa().subscribe(x=>this.data=x)
   }

  ngOnInit() {
  }
  delete(a){
    this.data.splice(a,1)
  }

}

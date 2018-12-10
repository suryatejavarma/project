import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  data:string[]=[];
  constructor(private ls:LoginService) { 
    this.ls.setData().subscribe(x=>this.data=x);
  }

  ngOnInit() {
  }
  delete(a)
  {
    this.data.splice(a,1)
  }
}

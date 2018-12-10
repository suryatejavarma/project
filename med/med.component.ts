import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.css']
})
export class MedComponent implements OnInit {

  data:object[]=[];
  constructor(private r:Router,private ls:LoginService,private ds:DataService) { 
    this.ls.getData().subscribe(x=>this.data=x);
  }
  submit(v)
    {
      this.ds.setData(v);
    }
  

  ngOnInit() {
   
  
    console.log(this.data);

  }
}

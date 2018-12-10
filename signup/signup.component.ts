import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data:any[];
  constructor(private r:Router,private ls:LoginService) { }

  ngOnInit() {
  }
  onSubmit(x)
  {
    this.ls.getData().subscribe(x=>this.data=x);
  }
}

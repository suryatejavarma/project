import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    data:object[]=[];
  constructor(private router:Router,private ls:LoginService) { }


  ngOnInit() {
  }
  onSubmit(x)
  {
    console.log(x)
  //this.ls.getData().subscribe(x=>this.data=x);
  if(x.name=="admin123"&&x.pwd=="admin123")
  {

    this.router.navigate(['/admin']);
  }
  else if(x.name=="surya"&&x.pwd=="surya")
  {
    alert("loggedin successfully");
    this.router.navigate(['/user']);
  }
  else{
    alert("id and password are invalid");
  }
}
}
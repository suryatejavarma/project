import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  obj:any[]=[];
  s:any={};
 
  constructor() { }
  setData(v)
  {
    this.obj.push(v);
    
  }
  getData()
  {
    return this.obj;
    
  }
  get()
  {
    return this.s;
  }
}

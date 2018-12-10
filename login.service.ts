import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  getData():Observable<any>
  {
    return this.http.get('/assets/data.json');
  }
  setData():Observable<any>
  {
    return this.http.get('/assets/stores.json');
  }
  setDataa():Observable<any>
  {
    return this.http.get('/assets/company.json');
  }
  setDat():Observable<any>
  {
    return this.http.get('/assets/stock.json');
  }


}

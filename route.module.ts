import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CaroselComponent } from './carosel/carosel.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';

import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { CompamyComponent } from './compamy/compamy.component';
import { SalesComponent } from './sales/sales.component';
import { StoresComponent } from './stores/stores.component';
import { OrdersComponent } from './orders/orders.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { MedComponent } from './med/med.component';


@NgModule({
  
  imports: [
   RouterModule.forRoot([{path:'',component:HomeComponent,
                            children:[{path:'',component:CaroselComponent},
                            {path:'login',component:LoginComponent},
                            {path:'signup',component:SignupComponent},
                            {path:'about',component:AboutComponent}]},
                         {path:'admin',component:AdminComponent,
                            children:[{path:'stock',component:StockComponent},
                            {path:'company',component:CompamyComponent},
                            {path:'sr',component:SalesComponent},
                            {path:'stores',component:StoresComponent},
                            {path:'order',component:OrdersComponent}]},
                          {path:'user',component:UserComponent,
                            children:[{path:'c',component:CartComponent},
                            {path:'',component:MedComponent}]},
                         {path:'k',redirectTo:'/home',pathMatch:'full'},
                         {path:'**',component:PagenotfoundComponent}]) 
  ]

,  exports: [RouterModule]
})
export class RouteModule { }

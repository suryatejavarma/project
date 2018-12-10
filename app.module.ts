import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouteModule } from './route.module';
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
import { SearchPipe } from './search.pipe';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { MedComponent } from './med/med.component';
import {HttpClientModule} from "@angular/common/http";
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CaroselComponent,
    AboutComponent,
    PagenotfoundComponent,
    AdminComponent,
    HomeComponent,
    StockComponent,
    CompamyComponent,
    SalesComponent,
    StoresComponent,
    OrdersComponent,
    SearchPipe,
    UserComponent,
    CartComponent,
    MedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

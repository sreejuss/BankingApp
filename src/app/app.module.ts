import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './admin/login/login.component';
import {FormsModule} from '@angular/forms';
import { UserDashComponent } from './user/user-dash/user-dash.component';
import { WithdrawComponent } from './user/withdraw/withdraw.component';
import { DepositComponent } from './user/deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashComponent,
    WithdrawComponent,
    DepositComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

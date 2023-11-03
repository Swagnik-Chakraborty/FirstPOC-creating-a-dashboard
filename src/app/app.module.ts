import { AuthService } from './services/auth.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { SignupComponent } from './signup/signup.component';

import { NgxPaginationModule } from 'ngx-pagination';

import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  
    SignupComponent,
       NotfoundComponent,
  
  
      
  
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    
   
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
   
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }

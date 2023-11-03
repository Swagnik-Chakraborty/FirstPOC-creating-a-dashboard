import { HttpClientModule } from '@angular/common/http';

import { UsermainService } from './../../services/usermain.service';

import { UserMaintainanceComponent } from './component/maintainance/usermaintainance/usermaintainance.component';
import { WelcomeComponent } from './welcome.component';





import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { UserAddComponent } from './component/maintainance/useradd/useradd.component';



@NgModule({
  declarations: [
 WelcomeComponent,
 AboutusComponent,

 UserMaintainanceComponent,



UserAddComponent


 
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    WelcomeRoutingModule,
   
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
    
    
  
  
    
   
  ]
})
export class WelcomeModule { 

}

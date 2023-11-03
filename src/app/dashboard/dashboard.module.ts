import { UsermainService } from './../services/usermain.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebuttonComponent } from './sidebutton/sidebutton.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { AppRoutingModule } from '@angular/router';
//import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomepageComponent } from './homepage/homepage.component';



//import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
 
  
   FooterComponent,
   HeaderComponent,
   SidebuttonComponent,
   HomepageComponent,
 


  

    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    
    
  ]
})
export class DashboardModule { 

}

import { ReportRoutingModule } from './report-routing.module';
import { Report1Component } from './components/reports/report1.component';





//import { AppRoutingModule } from '@angular/router';
//import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReportComponent } from './report.component';

//import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
 ReportComponent,
 Report1Component
 
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
    
   
  ]
})
export class ReportModule { 

}

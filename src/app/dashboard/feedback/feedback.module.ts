import { FeedbackComponent } from './feedback.component';



//import { AppRoutingModule } from '@angular/router';
//import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';

@NgModule({
  declarations: [
 
  
    FeedbackComponent,
         FeedbackformComponent
  

    
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule
   
  ]
})
export class FeedbackModule { 
    constructor()
    {
        console.log('feed')
    }

}

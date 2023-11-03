import { FeedbackComponent } from './feedback.component';

import { FeedbackformComponent } from './feedbackform/feedbackform.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FeedbackComponent, children: [
      { path: 'feedbackform', component: FeedbackformComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }

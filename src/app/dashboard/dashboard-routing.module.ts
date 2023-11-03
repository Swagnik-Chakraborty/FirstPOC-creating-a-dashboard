


import { FeedbackModule } from './feedback/feedback.module';

import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackformComponent } from './feedback/feedbackform/feedbackform.component';
import { HeaderComponent } from './header/header.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // { path: '',   redirectTo: 'home',pathMatch:'full'},
  //{ path: 'feedback',   redirectTo: 'feedback',pathMatch:'full'},
  {
    path: '', component: HomepageComponent,
    children: [
      { path: 'feedback', loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule) },
      { path: 'maintainance', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
     
]}

 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

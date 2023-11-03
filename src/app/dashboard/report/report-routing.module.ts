import { ReportComponent } from './report.component';


import { Report1Component } from './components/reports/report1.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [



  {
    path: '', component: ReportComponent, children: [
      { path: 'report1', component: Report1Component }

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }

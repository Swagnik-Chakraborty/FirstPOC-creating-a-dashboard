//import { UserAddComponent } from './component/maintainance/usermaintainance/useradd/useradd.component';
import { AdminmaintainanceComponent } from './component/maintainance/adminmaintainance/adminmaintainance.component';
import { UserMaintainanceComponent } from './component/maintainance/usermaintainance/usermaintainance.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';



import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { UserAddComponent } from './component/maintainance/useradd/useradd.component';

//import { UserAddComponent } from './component/maintainance/useradd/useradd.component';


const routes: Routes = [



  {
    path: '', component: WelcomeComponent, children: [
      { path: 'aboutus', component: AboutusComponent },

      { path: 'usermaintainance', component: UserMaintainanceComponent },


      { path: 'useradd', component: UserAddComponent },




      { path: 'adminmaintainance', component: AdminmaintainanceComponent },


    ]
  }]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }

import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './services/auth.guard';

import { SignupComponent } from './signup/signup.component';

//import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: '',   redirectTo: 'signup', pathMatch: 'full' },
  
  {path:'register', component:RegisterComponent},
  {path:'signup',component:SignupComponent},
  
 
{ path: 'dashboard', canActivate:[AuthGuard],loadChildren: () => import('./dashboard/dashboard.module').then(m => m. DashboardModule) },
//{path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

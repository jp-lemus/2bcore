import { NgModule } from '@angular/core';
import { LoginGuard } from '../app/guards/login.guard';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
   },
  {
    path: 'login',
    component: LoginComponent
   },
   {
    path: 'home',
    canActivate: [ LoginGuard ],
    component: HomeComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );

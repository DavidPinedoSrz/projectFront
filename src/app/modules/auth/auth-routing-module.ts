import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Recover } from './pages/recover/recover';

const routes: Routes = [
  {
    path: '',
    children: [
        { 
         path: 'login',
         component: Login
      },
      { 
         path: 'recover',
         component: Recover
      },
      { path: '**', redirectTo: 'login' }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

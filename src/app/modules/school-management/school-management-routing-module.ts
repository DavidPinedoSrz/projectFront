import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = const routes: Routes = [
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
export class SchoolManagementRoutingModule { }

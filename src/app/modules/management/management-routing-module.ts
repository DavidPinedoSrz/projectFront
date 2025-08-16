import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Management } from './components/management/management';

const routes: Routes = [
  {
    path: '',
    component: Management
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }

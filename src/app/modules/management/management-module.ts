import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Management } from './components/management/management';
import { Dashboard } from './components/dashboard/dashboard';
import { Users } from './components/users/users';
import { Settings } from './components/settings/settings';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    Management,
    Dashboard,  // <- Añade esto
    Users,      // <- Añade esto
    Settings
  ]
})
export class ManagementModule {}

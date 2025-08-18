import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Management } from './components/management/management';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    Management,
  ]
})
export class ManagementModule {}

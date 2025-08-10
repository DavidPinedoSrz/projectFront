import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolManagementRoutingModule } from './school-management-routing-module';
import { DashboardSchoolManagement } from './pages/dashboard-school-management/dashboard-school-management';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select'; 
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

// Components
import { SchoolList } from '../school-management/pages/school/school-list/school-list';
import { AcademicLevelList } from '../school-management/pages/academic-level/academic-level-list/academic-level-list';
import { GradeList } from '../school-management/pages/grade/grade-list/grade-list';
import { SubjectList } from '../school-management/pages/subject/subject-list/subject-list';
import { SchoolForm } from './pages/school/school-form/school-form';
import { AcademicLevelForm } from './pages/academic-level/academic-level-form/academic-level-form';
import { GradeForm } from './pages/grade/grade-form/grade-form';
import { SubjectForm } from './pages/subject/subject-form/subject-form';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DashboardSchoolManagement,
    SchoolList,
    AcademicLevelList,
    GradeList,
    SubjectList,
    SchoolForm,
    AcademicLevelForm,
    GradeForm,
    SubjectForm,
    SchoolManagementRoutingModule,
    // PrimeNG
    CardModule,
    PanelMenuModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    SelectModule, 
    ConfirmDialogModule,
    ToastModule
  ]
})
export class SchoolManagementModule { }
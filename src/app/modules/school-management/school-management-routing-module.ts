import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSchoolManagement } from '../school-management/pages/dashboard-school-management/dashboard-school-management';
import { SchoolList } from '../school-management/pages/school/school-list/school-list';
import { AcademicLevelList } from '../school-management/pages/academic-level/academic-level-list/academic-level-list';
import { GradeList } from '../school-management/pages/grade/grade-list/grade-list';
import { SubjectList } from '../school-management/pages/subject/subject-list/subject-list';
import { SchoolForm } from './pages/school/school-form/school-form';
import { AcademicLevelForm } from './pages/academic-level/academic-level-form/academic-level-form';
import { GradeForm } from './pages/grade/grade-form/grade-form';
import { SubjectForm } from './pages/subject/subject-form/subject-form';
import { FieldList } from './pages/field/field-list/field-list';
import { FieldForm } from './pages/field/field-form/field-form';

const routes: Routes = [
  {
    path: '',
    component: DashboardSchoolManagement,
    children: [
      { path: 'schools', component: SchoolList },
      { path: 'schools/new', component: SchoolForm },
      { path: 'schools/edit/:id', component: SchoolForm },
      
      { path: 'academic-levels', component: AcademicLevelList },
      { path: 'academic-levels/new', component: AcademicLevelForm },
      { path: 'academic-levels/edit/:id', component: AcademicLevelForm },
      
      { path: 'grades', component: GradeList },
      { path: 'grades/new', component: GradeForm },
      { path: 'grades/edit/:id', component: GradeForm },
      
      { path: 'subjects', component: SubjectList },
      { path: 'subjects/new', component: SubjectForm },
      { path: 'subjects/edit/:id', component: SubjectForm },

      { path: 'field', component: FieldList },
      { path: 'field/new', component: FieldForm },
      { path: 'field/edit/:id', component: FieldForm },
      
      { path: '', redirectTo: 'schools', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolManagementRoutingModule { }
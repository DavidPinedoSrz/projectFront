import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectForm } from './subject/subject-form/subject-form';

const routes: Routes = [
  {
    path: '',
    children: [
      //{ path: 'grade-list', component: GradeForm },
      //{ path: 'grade-form', component: GradeList },
      //{ path: 'subject-list', component: SubjectList },
      { path: 'subject-form', component: SubjectForm},
      //{ path: '', redirectTo: 'grade-form', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }

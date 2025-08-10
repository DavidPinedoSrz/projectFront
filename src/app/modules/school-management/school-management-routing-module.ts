import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicLevelList } from './pages/academic-level/academic-level-list/academic-level-list';
import { AcademicLevelForm } from './pages/academic-level/academic-level-form/academic-level-form';
import { GradeForm } from './pages/grade/grade-form/grade-form';
import { GradeList } from './pages/grade/grade-list/grade-list';
import { SchoolForm } from './pages/school/school-form/school-form';
import { SchoolList } from './pages/school/school-list/school-list';
import { SubjectForm } from './pages/subject/subject-form/subject-form';
import { SubjectList } from './pages/subject/subject-list/subject-list';

const routes: Routes = [
  {
    path: '',
    children: [
        { 
         path: 'academic-level-form',
         component: AcademicLevelForm
      },
      { 
         path: 'academic-level-list',
         component: AcademicLevelList
      },
       { 
         path: 'grade-form',
         component: GradeForm
      },
      { 
         path: 'grade-list',
         component: GradeList
      },
      { 
         path: 'school-form',
         component: SchoolForm
      },
      { 
         path: 'school-list',
         component: SchoolList
      },
      { 
         path: 'subject-form',
         component: SubjectForm
      },
      { 
         path: 'subject-list',
         component: SubjectList
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

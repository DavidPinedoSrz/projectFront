// database.service.ts
import { Injectable } from '@angular/core';
import { AcademicLevel } from '../interfaces/iAcademic-level';
import { Grade } from '../interfaces/iGrade';
import { School } from '../interfaces/iSchool';
import { Subject } from '../interfaces/iSubject';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private schools: School[] = [
    {
      id: 1,
      name: 'Escuela Primaria Benito Juárez',
      identifier_alias: 'EPBJ',
      registration_dt: new Date('2020-01-15')
    },
    {
      id: 2,
      name: 'Colegio México',
      identifier_alias: 'CMX',
      registration_dt: new Date('2019-05-20')
    }
  ];

  private academicLevels: AcademicLevel[] = [
    {
      id: 1,
      order_index: 1,
      school_id: 1,
      name: 'Primaria',
      cct: '11PPR1234Z',
      registration_dt: new Date('2020-01-15'),
      deactivation_dt: null,
      inc_unam: 'PRI'
    },
    {
      id: 2,
      order_index: 2,
      school_id: 1,
      name: 'Secundaria',
      cct: '11PSE5678X',
      registration_dt: new Date('2021-03-10'),
      deactivation_dt: null,
      inc_unam: 'SEC'
    },
    {
      id: 3,
      order_index: 1,
      school_id: 2,
      name: 'Preparatoria',
      cct: '11PPR9012Y',
      registration_dt: new Date('2019-05-20'),
      deactivation_dt: null,
      inc_unam: 'PRE'
    }
  ];

  private grades: Grade[] = [
    // Grados para Primaria (school_id: 1, level_id: 1)
    { id: 1, order_index: 1, level_id: 1, name: 'Primer Grado', alias: '1ro', registration_dt: new Date('2020-01-15'), deactivation_dt: null },
    { id: 2, order_index: 2, level_id: 1, name: 'Segundo Grado', alias: '2do', registration_dt: new Date('2020-01-15'), deactivation_dt: null },
    { id: 3, order_index: 3, level_id: 1, name: 'Tercer Grado', alias: '3ro', registration_dt: new Date('2020-01-15'), deactivation_dt: null },
    
    // Grados para Secundaria (school_id: 1, level_id: 2)
    { id: 4, order_index: 1, level_id: 2, name: 'Primer Año', alias: '1ro', registration_dt: new Date('2021-03-10'), deactivation_dt: null },
    { id: 5, order_index: 2, level_id: 2, name: 'Segundo Año', alias: '2do', registration_dt: new Date('2021-03-10'), deactivation_dt: null },
    
    // Grados para Preparatoria (school_id: 2, level_id: 3)
    { id: 6, order_index: 1, level_id: 3, name: 'Primer Semestre', alias: '1er', registration_dt: new Date('2019-05-20'), deactivation_dt: null },
    { id: 7, order_index: 2, level_id: 3, name: 'Segundo Semestre', alias: '2do', registration_dt: new Date('2019-05-20'), deactivation_dt: null }
  ];

  private subjects: Subject[] = [
    // Materias para Primaria
    { id: 1, gradeId: 1, name: 'Matemáticas', code: 'MAT-1', description: 'Matemáticas básicas', hoursPerWeek: 5, isActive: true, fieldId: 1, createdAt: new Date('2020-01-15'), updatedAt: new Date('2020-01-15') },
    { id: 2, gradeId: 1, name: 'Español', code: 'ESP-1', description: 'Lengua materna', hoursPerWeek: 5, isActive: true, fieldId: 2, createdAt: new Date('2020-01-15'), updatedAt: new Date('2020-01-15') },
    
    // Materias para Secundaria
    { id: 3, gradeId: 4, name: 'Álgebra', code: 'ALG-1', description: 'Álgebra básica', hoursPerWeek: 4, isActive: true, fieldId: 1, createdAt: new Date('2021-03-10'), updatedAt: new Date('2021-03-10') },
    { id: 4, gradeId: 4, name: 'Biología', code: 'BIO-1', description: 'Introducción a la biología', hoursPerWeek: 3, isActive: true, fieldId: 3, createdAt: new Date('2021-03-10'), updatedAt: new Date('2021-03-10') },
    
    // Materias para Preparatoria
    { id: 5, gradeId: 6, name: 'Cálculo Diferencial', code: 'CAL-1', description: 'Fundamentos de cálculo', hoursPerWeek: 6, isActive: true, fieldId: 1, createdAt: new Date('2019-05-20'), updatedAt: new Date('2019-05-20') },
    { id: 6, gradeId: 6, name: 'Química I', code: 'QUI-1', description: 'Química general', hoursPerWeek: 4, isActive: true, fieldId: 3, createdAt: new Date('2019-05-20'), updatedAt: new Date('2019-05-20') }
  ];

  constructor() { }

  // Métodos para Schools
  getSchools(): School[] {
    return this.schools;
  }

  getSchoolById(id: number): School | undefined {
    return this.schools.find(school => school.id === id);
  }

  // Métodos para AcademicLevels
  getAcademicLevels(): AcademicLevel[] {
    return this.academicLevels;
  }

  getAcademicLevelsBySchool(schoolId: number): AcademicLevel[] {
    return this.academicLevels.filter(level => level.school_id === schoolId);
  }

  // Métodos para Grades
  getGrades(): Grade[] {
    return this.grades;
  }

  getGradesByLevel(levelId: number): Grade[] {
    return this.grades.filter(grade => grade.level_id === levelId);
  }

  // Métodos para Subjects
  getSubjects(): Subject[] {
    return this.subjects;
  }

  getSubjectsByGrade(gradeId: number): Subject[] {
    return this.subjects.filter(subject => subject.gradeId === gradeId);
  }
}
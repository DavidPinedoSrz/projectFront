import { Injectable } from '@angular/core';
import { MGrade } from '../../models/nmanagement.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private grades: MGrade[] = [
    // Grados para Primaria (school_id: 1, level_id: 1)
    { id: 1, order_index: 1, level_id: 1, name: 'Primer Grado', alias: '1ro', registration_dt: new Date('2020-01-15'), deactivation_dt: null },
    { id: 2, order_index: 2, level_id: 1, name: 'Segundo Grado', alias: '2do', registration_dt: new Date('2020-01-15'), deactivation_dt: null },
    { id: 3, order_index: 3, level_id: 1, name: 'Tercer Grado', alias: '3ro', registration_dt: new Date('2020-01-15'), deactivation_dt: null },
    
    // Grados para Secundaria (school_id: 1, level_id: 2)
    { id: 4, order_index: 1, level_id: 2, name: 'Primer Grado', alias: '1ro', registration_dt: new Date('2021-03-10'), deactivation_dt: null },
    { id: 5, order_index: 2, level_id: 2, name: 'Segundo Grado', alias: '2do', registration_dt: new Date('2021-03-10'), deactivation_dt: null },
    { id: 6, order_index: 3, level_id: 2, name: 'Tercer Grado', alias: '3ro', registration_dt: new Date('2021-03-10'), deactivation_dt: null },

    // Grados para Preparatoria (school_id: 2, level_id: 3)
    { id: 7, order_index: 1, level_id: 3, name: 'Primer Grado', alias: '1er', registration_dt: new Date('2019-05-20'), deactivation_dt: null },
    { id: 8, order_index: 2, level_id: 3, name: 'Segundo Grado', alias: '2do', registration_dt: new Date('2019-05-20'), deactivation_dt: null },
    { id: 9, order_index: 2, level_id: 3, name: 'Tercer Grado', alias: '3ro', registration_dt: new Date('2019-05-20'), deactivation_dt: null }
  ];

  constructor() { }

  getAllGrades(): MGrade[] {
    return this.grades;
  }

  getGradesByLevel(levelId: number): MGrade[] {
    return this.grades.filter(grade => grade.level_id === levelId);
  }

  getGradeById(id: number): MGrade | undefined {
    return this.grades.find(grade => grade.id === id);
  }

  addGrade(grade: Omit<MGrade, 'id'>): MGrade {
    const newId = this.grades.length > 0 ? Math.max(...this.grades.map(g => g.id)) + 1 : 1;
    const newGrade: MGrade = {
      id: newId,
      ...grade
    };
    this.grades.push(newGrade);
    return newGrade;
  }

  updateGrade(id: number, gradeData: Partial<MGrade>): MGrade | undefined {
    const index = this.grades.findIndex(g => g.id === id);
    if (index !== -1) {
      this.grades[index] = { ...this.grades[index], ...gradeData };
      return this.grades[index];
    }
    return undefined;
  }

  deleteGrade(id: number): boolean {
    const initialLength = this.grades.length;
    this.grades = this.grades.filter(grade => grade.id !== id);
    return this.grades.length !== initialLength;
  }
}
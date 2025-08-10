import { Injectable } from '@angular/core';
import { Subject } from '../../interfaces/iSubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
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

  getAllSubjects(): Subject[] {
    return this.subjects;
  }

  getSubjectsByGrade(gradeId: number): Subject[] {
    return this.subjects.filter(subject => subject.gradeId === gradeId);
  }

  getSubjectById(id: number): Subject | undefined {
    return this.subjects.find(subject => subject.id === id);
  }

  addSubject(subject: Omit<Subject, 'id' | 'createdAt' | 'updatedAt'>): Subject {
    const newId = this.subjects.length > 0 ? Math.max(...this.subjects.map(s => s.id)) + 1 : 1;
    const now = new Date();
    const newSubject: Subject = {
      id: newId,
      createdAt: now,
      updatedAt: now,
      ...subject
    };
    this.subjects.push(newSubject);
    return newSubject;
  }

  updateSubject(id: number, subjectData: Partial<Omit<Subject, 'id' | 'createdAt'>>): Subject | undefined {
    const index = this.subjects.findIndex(s => s.id === id);
    if (index !== -1) {
      this.subjects[index] = { 
        ...this.subjects[index], 
        ...subjectData,
        updatedAt: new Date()
      };
      return this.subjects[index];
    }
    return undefined;
  }

  deleteSubject(id: number): boolean {
    const initialLength = this.subjects.length;
    this.subjects = this.subjects.filter(subject => subject.id !== id);
    return this.subjects.length !== initialLength;
  }
}
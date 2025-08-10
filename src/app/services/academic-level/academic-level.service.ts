import { Injectable } from '@angular/core';
import { AcademicLevel } from '../../interfaces/iAcademic-level';

@Injectable({
  providedIn: 'root'
})
export class AcademicLevelService {
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

  constructor() { }

  getAllAcademicLevels(): AcademicLevel[] {
    return this.academicLevels;
  }

  getAcademicLevelsBySchool(schoolId: number): AcademicLevel[] {
    return this.academicLevels.filter(level => level.school_id === schoolId);
  }

  getAcademicLevelById(id: number): AcademicLevel | undefined {
    return this.academicLevels.find(level => level.id === id);
  }

  addAcademicLevel(level: Omit<AcademicLevel, 'id'>): AcademicLevel {
    const newId = this.academicLevels.length > 0 ? Math.max(...this.academicLevels.map(l => l.id)) + 1 : 1;
    const newLevel: AcademicLevel = {
      id: newId,
      ...level
    };
    this.academicLevels.push(newLevel);
    return newLevel;
  }

  updateAcademicLevel(id: number, levelData: Partial<AcademicLevel>): AcademicLevel | undefined {
    const index = this.academicLevels.findIndex(l => l.id === id);
    if (index !== -1) {
      this.academicLevels[index] = { ...this.academicLevels[index], ...levelData };
      return this.academicLevels[index];
    }
    return undefined;
  }

  deleteAcademicLevel(id: number): boolean {
    const initialLength = this.academicLevels.length;
    this.academicLevels = this.academicLevels.filter(level => level.id !== id);
    return this.academicLevels.length !== initialLength;
  }
}
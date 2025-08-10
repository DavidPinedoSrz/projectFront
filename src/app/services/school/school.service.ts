import { Injectable } from '@angular/core';
import { School } from '../../interfaces/iSchool';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
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

  constructor() { }

  getAllSchools(): School[] {
    return this.schools;
  }

  getSchoolById(id: number): School | undefined {
    return this.schools.find(school => school.id === id);
  }

  addSchool(school: Omit<School, 'id'>): School {
    const newId = this.schools.length > 0 ? Math.max(...this.schools.map(s => s.id)) + 1 : 1;
    const newSchool: School = {
      id: newId,
      ...school
    };
    this.schools.push(newSchool);
    return newSchool;
  }

  updateSchool(id: number, schoolData: Partial<School>): School | undefined {
    const index = this.schools.findIndex(s => s.id === id);
    if (index !== -1) {
      this.schools[index] = { ...this.schools[index], ...schoolData };
      return this.schools[index];
    }
    return undefined;
  }

  deleteSchool(id: number): boolean {
    const initialLength = this.schools.length;
    this.schools = this.schools.filter(school => school.id !== id);
    return this.schools.length !== initialLength;
  }
}
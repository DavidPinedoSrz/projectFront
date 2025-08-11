import { Injectable } from '@angular/core';
import { Field } from '../../interfaces/iField';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private fields: Field[] = [
    {
      id: 1,
      level_id: 1,
      index: 1,
      name: 'Ciencias Naturales',
      registration_dt: new Date('2020-01-15'),
      deactivation_dt: null,
      specialization: false
    },
    {
      id: 2,
      level_id: 1,
      index: 2,
      name: 'Humanidades',
      registration_dt: new Date('2020-01-15'),
      deactivation_dt: null,
      specialization: true
    },
    {
      id: 3,
      level_id: 2,
      index: 1,
      name: 'Ciencias Exactas',
      registration_dt: new Date('2021-03-10'),
      deactivation_dt: null,
      specialization: false
    }
  ];

  constructor() { }

  getAllFields(): Field[] {
    return this.fields;
  }

  getFieldById(id: number): Field | undefined {
    return this.fields.find(field => field.id === id);
  }

  addField(field: Omit<Field, 'id'>): Field {
    const newId = this.fields.length > 0 ? Math.max(...this.fields.map(f => f.id)) + 1 : 1;
    const newField: Field = {
      id: newId,
      ...field
    };
    this.fields.push(newField);
    return newField;
  }

  updateField(id: number, fieldData: Partial<Field>): Field | undefined {
    const index = this.fields.findIndex(f => f.id === id);
    if (index !== -1) {
      this.fields[index] = { ...this.fields[index], ...fieldData };
      return this.fields[index];
    }
    return undefined;
  }

  deleteField(id: number): boolean {
    const initialLength = this.fields.length;
    this.fields = this.fields.filter(field => field.id !== id);
    return this.fields.length !== initialLength;
  }
}
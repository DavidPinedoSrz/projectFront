export interface Subject {
  id: number;
  gradeId: number;
  name: string;
  code: string;
  description: string;
  hoursPerWeek: number;
  isActive: boolean;
  fieldId: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface MSchool {
  id: number;
  name: string;
  identifier_alias: string;
  registration_dt: Date | null;
}

export interface MLevel {
  id: number;
  order_index: number;
  school_id: number;
  name: string;
  cct: string;
  registration_dt: Date;
  deactivation_dt: Date | null;
  inc_unam: string;
}

export interface MGrade {
  id: number;
  order_index: number;
  level_id: number;
  name: string;
  alias: string;
  registration_dt: Date;
  deactivation_dt: Date | null;
}

export interface MSubject {
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

export interface MAreas {
  id: number;
  level_id: number;
  index: number;
  name: string;
  registration_dt: Date;
  deactivation_dt: Date | null;
  specialization: boolean;
}
export interface AcademicLevel {
  id: number;
  order_index: number;
  school_id: number;
  name: string;
  cct: string;
  registration_dt: Date;
  deactivation_dt: Date | null;
  inc_unam: string;
}
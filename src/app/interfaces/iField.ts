export interface Field {
  id: number;
  level_id: number;
  index: number;
  name: string;
  registration_dt: Date;
  deactivation_dt: Date | null;
  specialization: boolean;
}
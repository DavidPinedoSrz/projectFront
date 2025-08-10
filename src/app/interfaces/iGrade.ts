export interface Grade {
  id: number;
  order_index: number;
  level_id: number;
  name: string;
  alias: string;
  registration_dt: Date;
  deactivation_dt: Date;
}
export type DatabaseUser = {
  id: string;
  ms_id: string;
  username: string;
  arole:string;
  email: string;
  pic_link: string;
	password_hash: string;
}

export type Order = {
  id: number;
  user_id: string;
  order_status: string;
  order_type: string;
  payment_method: string;
  payment_status: string;
  is_scheduled_at: string;
  changed_by: string;
}

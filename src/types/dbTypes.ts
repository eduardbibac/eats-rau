import { CartItem } from "./ShopTypes";

export type DatabaseUser = {
  id: string;
  ms_id: string;
  username: string;
  arole: string;
  email: string;
  pic_link: string;
  password_hash: string;
};

export type Order = {
  id: number;
  username: string;
  order_status: string;
  order_type: string;
  payment_method: string;
  payment_status: string;
  is_scheduled_at: string;
  changed_by: string;
  total_cost: number;

  products: OrderProduct[];
};

export type QuantityUpdate = {
  product_id: number;
  quantity: number;
};

export type OrderProduct = {
  product_id: number;
  ro_name: string;
  en_name: string;
  price: number;
  quantity: number;
  ro_categories: string[];
  en_categories: string[];
};

export type Menu = {
  id: number;
  menu_name: string;
  is_active: boolean;
  list_position: number;
};

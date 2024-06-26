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
  ro_product_name: string;
  en_product_name: string;
  price: number;
  quantity: number;
  ro_categories: string[];
  en_categories: string[];
  image_link: string;
  list_position: number;
};

export type Menu = {
  id: number;
  menu_name: string;
  is_active: boolean;
  list_position: number;
};

export interface OrderHistoryEntry {
  id: number;
  user_id: string;
  order_status:
    | "pending"
    | "in_progress"
    | "ready_for_pickup"
    | "completed"
    | "canceled";
  order_type: "dine_in" | "pickup";
  payment_method: "cash" | "card";
  payment_status: "unpaid" | "paid";
  is_scheduled_at: Date;
  changed_by?: string;
}

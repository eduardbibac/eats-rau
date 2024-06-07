export type Product = {
  id: number;
  list_position: number;
  name: string;
  price: number;
  categories: string[];
  image: string;
  quantity: number;
};

export type CartItem = {
  product: Product;
  count: number;
};

export type DashboardProduct = {
  id: number;
  list_position: number;
  ro_product_name: string;
  en_product_name: string;
  price: number;
  ro_categories: string[];
  en_categories: string[];
  image_link: string;
  quantity: number;
};

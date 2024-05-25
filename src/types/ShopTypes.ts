export type Product = {
  id: number;
  list_position: number;
  name: string;
  price: number;
  categories: string[];
  image: string;
  quantity: number;
}

export type CartItem = {
  product: Product;
  count: number;
}

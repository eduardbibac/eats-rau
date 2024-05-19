export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export type CartItem = {
  product: Product;
  count: number;
}

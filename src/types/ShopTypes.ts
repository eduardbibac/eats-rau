export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export type CartItem = {
  product: Product;
  count: number;
}

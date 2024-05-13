export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
}

export type CartItem = {
  product: Product;
  count: number;
}

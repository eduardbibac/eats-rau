'use client';

import { Product, CartItem } from "@/types/ShopTypes";
import { useState, useEffect } from "react";
import Cart from "./_Cart";
import ShopCard from "./_ShopCard";
import CartTablet from "./_CartTablet";
import CartDesktop from "./_CartDesktop";

const productDB: Product[] = [
  { id: 1, name: 'Paste Sauce', price: 24.99, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Pesto Tagli', price: 34.99, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Icecream', price: 5.99, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];


export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  // Simulate fetching data from a database
  useEffect(() => {
    setProducts(productDB);
  }, []);

  const [cartTotal, setCartTotal] = useState('');

  useEffect(() =>{
    let sum = 0;
    cart.forEach((i) => {
      sum += i.product.price * i.count;
    })
    setCartTotal(sum.toFixed(2));
  },[cart])

  const renderedCart = (
    <Cart cartTotal={cartTotal}>
      {cart.map(cartItem => (
        <ShopCard key={cartItem.product.id} product={cartItem.product} cart={cart} setCart={setCart} />
      ))}
    </Cart>
  );

return (
  <div className="shop-page">
<div className="layout">
    <div className="shop">
      <div className="filters mb-2 h-16 w-full border-4"></div>
      <div className="products">

        {products.map(product => (
          <ShopCard key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}

      </div>
    </div>


    {/* TODO: Does this render if hiiden in css ? */}

    <CartDesktop>
      {renderedCart}
    </CartDesktop>

    <CartTablet>
      {renderedCart}
    </CartTablet>


  </div>
</div>
);

}
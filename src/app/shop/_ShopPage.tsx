'use client';

import { Product, CartItem } from "@/types/ShopTypes";
import { useState, useEffect } from "react";
import Cart from "./_Cart";
import ShopCard from "./_ShopCard";

const productDB: Product[] = [
  { id: 1, name: 'Paste Sauce', price: 24.99, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Pesto Tagli', price: 34.99, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Icecream', price: 5.99, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];


export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [widgetCartOpen, setWidgetCartOpen] = useState(false);
  // Simulate fetching data from a database
  useEffect(() => {
    setProducts(productDB);
  }, []);
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
    <Cart>
      {cart.map(cartItem => (
        <ShopCard key={cartItem.product.id} product={cartItem.product} cart={cart} setCart={setCart} />
      ))}
    </Cart>

      <button onClick={() => setWidgetCartOpen((p) => !p)}
        className="lg:hidden fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-amber-100 hover:bg-amber-200 m-0 cursor-pointer border-orange-400 bg-none p-0 normal-case leading-5 hover:text-white"
        type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="orange" className="h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </button>
      {widgetCartOpen ? (
      <>
        <div className="">OPEN</div>
      </>
      ) : null}
  </div>
</div>
);

}
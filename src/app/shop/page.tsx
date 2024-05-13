"use client";

import "@/styles/shop-page.css";
import Navbar from "@/components/NavBar";
import ShopCard from "./_ShopCard";
import Cart from "./_Cart";

import { useEffect, useState } from "react";
import type {Product, CartItem} from "@/types/ShopTypes";

const productDB: Product[] = [
  { id: 1, name: 'Paste Sauce', price: 24.99, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Pesto Tagli', price: 34.99, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Icecream', price: 5.99, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];


export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Simulate fetching data from a database
  useEffect(() => {
    setProducts(productDB);
  }, []);

  

return (
<>
<Navbar></Navbar>
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

    <div className="cart">
      <div className="flex justify-between">
      <p className="self-start text-xl py-5 font-bold dark:text-white">Total</p>
      <p className="self-end text-xl py-5 font-bold dark:text-white pr-4">120.49 RON</p>
    </div>
    <button className="text-lg items-center w-full h-30 rounded-lg bg-orange-500 px-4 py-1.5 text-white duration-100 hover:bg-orange-600">Checkout</button>
      <div className="scroll-padding-top"></div>  
      <div className="products">
        {/* TODO: Does this render if hiiden in css ? */}
        {cart.map(cartItem => (
          <ShopCard key={cartItem.product.id} product={cartItem.product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  </div>
</div>
</>
);
}

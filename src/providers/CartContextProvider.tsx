'use client';

import { CartItem, Product } from '@/types/ShopTypes'
import { ReactNode, createContext, useEffect, useState } from 'react'

export const CartContext = createContext<any>([])

export default function CartContextProvider({children}:{children:ReactNode}) {
  const [cartTotal, setCartTotal] = useState('');
const [cart, setCart] = useState<CartItem[]>([]);
useEffect(() =>{
  let sum = 0;
  cart.forEach((i) => {
    sum += i.product.price * i.count;
  })
  setCartTotal(sum.toFixed(2));
},[cart])

const getCount = (product: Product) => {
  const existingItem = cart.find((item) => item.product.id === product.id);
  return !existingItem ? 0 : existingItem.count;
}

const addToCart = (product: Product) => {
  const existingItemIndex = cart.findIndex(
    (item) => item.product.id === product.id
  );

  if (existingItemIndex !== -1) {
    const updatedCart = [...cart];
    updatedCart[existingItemIndex].count += 1;
    setCart(updatedCart);
  } else {
    setCart([...cart, { product, count: 1 }]);
  }
};

const subFromCart = (product: Product) => {
  const existingItemIndex = cart.findIndex(
    (item) => item.product.id === product.id
  );

  if (existingItemIndex !== -1) {
    const updatedCart = [...cart];
    updatedCart[existingItemIndex].count -= 1;
    if (updatedCart[existingItemIndex].count <= 0) {
      updatedCart.splice(existingItemIndex, 1);
    }
    setCart(updatedCart);
  }
};
return (
  <CartContext.Provider value={{ cart, setCart, cartTotal, setCartTotal, getCount, addToCart, subFromCart }}>
      
  {children}

  </CartContext.Provider>
)}
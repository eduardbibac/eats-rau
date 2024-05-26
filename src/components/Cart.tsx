import { CartContext } from "@/providers/CartContextProvider";
import { CartItem } from "@/types/ShopTypes";
import { ReactNode, use, useContext, useEffect, useState } from "react";
import ShopCard from "../app/shop/_ShopCard";
import {CheckoutModal} from "@/components/CheckoutModal";

export default function Cart() {
  
  const {cart} = useContext(CartContext);
  const {cartTotal} = useContext(CartContext) 

  return(
    <div className="cart">
    <div className="flex justify-between">
      <p className="self-start text-xl py-5 font-bold dark:text-white">Total</p>
      <p className="self-end text-xl py-5 font-bold dark:text-white pr-8">{cartTotal} RON</p>
    </div>
    <CheckoutModal></CheckoutModal>
    <div className="scroll-padding-top"></div>  
    <div className="products">
     
      {cart.map((cartItem: CartItem) => (
        <ShopCard key={cartItem.product.id} product={cartItem.product}/>
      ))}

    </div>
  </div>
  );
}
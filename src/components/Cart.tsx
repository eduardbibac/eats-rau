import { CartContext } from "@/providers/CartContextProvider";
import { CartItem } from "@/types/ShopTypes";
import { ReactNode, use, useContext, useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import { CheckoutModal } from "@/components/CheckoutModal/CheckoutModal";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const { cartTotal } = useContext(CartContext);

  return (
    <div className="cart">
      <div className="flex justify-between">
        <p className="self-start py-5 text-xl font-bold dark:text-white">
          Total
        </p>
        <p className="self-end py-5 pr-8 text-xl font-bold dark:text-white">
          {cartTotal} RON
        </p>
      </div>
      <CheckoutModal></CheckoutModal>
      <div className="scroll-padding-top"></div>
      <div className="products">
        {cart.map((cartItem: CartItem) => (
          <ShopCard key={cartItem.product.id} product={cartItem.product} />
        ))}
      </div>
    </div>
  );
}

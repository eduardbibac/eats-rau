'use client';

import { Product, CartItem } from "@/types/ShopTypes";
import Cart from "./_Cart";
import ShopCard from "./_ShopCard";
import CartTablet from "./_CartTablet";
import CartDesktop from "./_CartDesktop";
import CartMobile from "./_CartMobile";

import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getShopProducts } from "@/actions/getShopProducts";


export default function ShopPage() {
  // Server Actions Tanstack Querry https://www.youtube.com/watch?v=OgVeQVXt7xU&t=358s
  const { data, mutate: server_getProducts, error, isPending, isSuccess, isError} = useMutation({
    mutationFn: getShopProducts,
  })

  useEffect(() => {
    server_getProducts();
  }, [])

  const [cartTotal, setCartTotal] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
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

  if (isPending) {
    // TOOD: fancy card place holder loading...
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

return (
  <div className="shop-page">
<div className="layout">
    <div className="shop">
      <div className="filters mb-2 h-16 w-full border-4"></div>
      <div className="products">

        {data?.map(product => (
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

      <CartMobile>
        {renderedCart}
      </CartMobile> 

  </div>
</div>
);

}
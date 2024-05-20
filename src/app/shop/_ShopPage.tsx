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
import { unique } from "@/lib/utils";
import ShopSkeletonCard from "./_ShopSkeletionCard";

let SORT_OPTIONS = ['hm', '??']

export default function ShopPage() {
  // Server Actions Tanstack Querry https://www.youtube.com/watch?v=OgVeQVXt7xU&t=358s
  const { data: products, mutate: server_getProducts, error, isPending, isSuccess, isError} = useMutation({
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



  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if(isSuccess){
    SORT_OPTIONS = ['all', ...unique(products.map((i)=> i.category))];
  }

return (
  <div className="shop-page">
<div className="layout">
    <div className="shop">
      <div className="flex gap-5 filters mb-2 h-16 w-full border-4">  

        {SORT_OPTIONS.map(i=>(
          <p>{i}</p>
        ))}
      </div>  
      <div className="products">
        {isPending ?  (
          new Array(12).fill(null).map((_, i) => (<ShopSkeletonCard/>))
        ) : null}
 
        {products?.map(product => (
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
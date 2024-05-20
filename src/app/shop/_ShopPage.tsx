'use client';

import { Product, CartItem } from "@/types/ShopTypes";
import Cart from "./_Cart";
import ShopCard from "./_ShopCard";
import CartTablet from "./_CartTablet";
import CartDesktop from "./_CartDesktop";
import CartMobile from "./_CartMobile";
import ShopSkeletonCard from "./_ShopSkeletionCard";

import { useState, useEffect, Suspense } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getShopProducts } from "@/actions/getShopProducts";
import { cn, unique } from "@/lib/utils";
import {AnimatePresence, LayoutGroup, motion} from "framer-motion";

let SORT_OPTIONS = ['hm', '??']

export default function ShopPage() {
  // Server Actions Tanstack Querry https://www.youtube.com/watch?v=OgVeQVXt7xU&t=358s
  const [activeFilter, setActiveFilter] = useState('all');
  const [filter, setFilter] = useState<Product[]>();
  

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

  useEffect(() => {
    if(activeFilter === 'all') {
      setFilter(products)
      return;
    }
    
    setFilter(products?.filter((p) => p.category === activeFilter))
  }, [products, activeFilter])

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if(isSuccess){
    // TODO: fetch from DB (still unique)
    SORT_OPTIONS = ['all', ...unique(products.map((i)=> i.category))];
  }

return (
  <div className="shop-page">
<div className="layout">
    <div className="shop">
      <div className="flex gap-5 filters mb-2 rounded-b-lg bg-white p-2">  
        {SORT_OPTIONS.map(i=>(
          <button 
          onClick={() => setActiveFilter(i)}
          className={cn({
            'bg-orange-500 text-white': activeFilter === i,
            'align-center rounded-full h-8 w-24 outline hover:text-white outline-orange-500 hover:bg-orange-500 p-2 text-sm': true
          })}
          >
            {i}
          </button>
        ))}
      </div>  
      {isPending ? (
        <div className="products">
          {new Array(12).fill(null).map((_, i) => <ShopSkeletonCard key={i} />)}
        </div>
      ) : (
        <AnimatePresence initial={false}>
          <motion.div initial={false} layout className="products">
            <LayoutGroup>
              {filter?.map(product => (
                <ShopCard key={product.id} product={product} cart={cart} setCart={setCart} />
              ))}
            </LayoutGroup>
          </motion.div>
        </AnimatePresence>
      )}

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
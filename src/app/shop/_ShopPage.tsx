'use client';

import { Product } from "@/types/ShopTypes";
import Cart from "./_Cart";
import ShopCard from "./_ShopCard";
import CartDesktop from "./_CartDesktop";

import { useState, useEffect, ReactNode, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { getShopProducts } from "@/actions/getShopProducts";
import { cn, unique } from "@/lib/utils";
import {AnimatePresence, LayoutGroup, motion} from "framer-motion";
import { CartContext } from "@/providers/CartContextProvider";

let SORT_OPTIONS = ['all']

export default function ShopPage({children}:{children: ReactNode}) {
  // Server Actions Tanstack Querry https://www.youtube.com/watch?v=OgVeQVXt7xU&t=358s
  const [activeFilter, setActiveFilter] = useState('all');
  const [filter, setFilter] = useState<Product[]>();
  

  const { data: products, mutate: server_getProducts, error, isPending, isSuccess, isError} = useMutation({
    mutationFn: getShopProducts,
  })
  useEffect(() => {
    server_getProducts();
  }, [])

  const {cart} = useContext(CartContext);

  const renderedCart = (
    <Cart>
      {cart.map(cartItem => (
        <ShopCard key={cartItem.product.id} product={cartItem.product}/>
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
  <div className="shop grid lg:block">
    <div className="flex overflow-x-scroll max-h-12 no-scrollbar filters gap-2 mb-2 rounded-b-lg bg-white p-2">  
          {SORT_OPTIONS.map(i=>(
            <ul className='list-none'>
              <li
              onClick={() => setActiveFilter(i)}
              className={cn({
                'bg-orange-500 text-white': activeFilter === i,
                'font-normal whitespace-nowrap select-none align-center rounded-full max-h-fit outline hover:text-white flex outline-orange-500 hover:bg-orange-500 p-2 min-w-14 justify-center text-sm': true
              })}
              >
              {i}
              </li> 

            </ul>
          ))}
    </div> 
      {/* TODO: Fitlers break layout */}

      {/* <ScrollableTabs></ScrollableTabs> */}
 
      {isPending ? (
        <div className="products">

          {children}

        </div>
      ) : (
        <AnimatePresence initial={false}>
          <motion.div initial={false} layout className="products">
            <LayoutGroup>
              {filter?.map(product => (
                <ShopCard key={product.id} product={product} />
              ))}
            </LayoutGroup>
          </motion.div>
        </AnimatePresence>
      )}

    </div>

    <CartDesktop>
      {renderedCart}
    </CartDesktop>

    {/*  <CartTablet>
        {renderedCart}
      </CartTablet>

      <CartMobile>
        {renderedCart}
      </CartMobile>  */}  

</div>
</div>
);

}
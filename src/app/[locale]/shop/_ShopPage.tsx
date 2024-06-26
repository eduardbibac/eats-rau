"use client";

import { Product } from "@/types/ShopTypes";

import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getShopProducts } from "@/actions/getShopProducts";
import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import CartTablet from "./_CartTablet";
import Cart from "@/components/Cart";
import CartDesktop from "./_CartDesktop";
import { useLocale, useTranslations } from "next-intl";
import ShopSkeletonCard from "./_ShopSkeletionCard";
import ShopCard from "@/components/ShopCard";
import { QuantityUpdate } from "@/types/dbTypes";

export default function ShopPage({ sort_options }: { sort_options: string[] }) {
  const [filter, setFilter] = useState<Product[]>();
  const locale = useLocale();
  const t = useTranslations("Shop");
  const queryClient = useQueryClient();

  const [activeFilter, setActiveFilter] = useState(t("Filter_All"));

  // Server Actions Tanstack Querry https://www.youtube.com/watch?v=OgVeQVXt7xU&t=358s
  const {
    data: products,
    error,
    isPending,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => getShopProducts(locale),
  });


  function moveZeroToEnd(arr: Product[]) {
    arr.map((elem, index) => {
      if (elem.quantity === 0) {
        console.log(elem.name)
        arr.splice(index, 1);
        arr.push(elem);
      }
    })
    return arr;
  }

  useEffect(() => {
    if (activeFilter === t("Filter_All")) {
      if (products)
        setFilter(moveZeroToEnd(products));
      else setFilter(products);
      return;
    }
    let f = products?.filter((p) => p.categories.includes(activeFilter))

    if (f)
      f = moveZeroToEnd(f)

    setFilter(f);
  }, [products, activeFilter]);


  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['products'] });
  }, [locale])

  if (isError) {
    return <span>Error: {error.message}</span>;
  }


  useEffect(() => {
    const eventSource = new EventSource("/api/shop/updates");
    eventSource.addEventListener("message", (event) => {
      // TODO: this refreshes all data and it's not efficient, but it works.
      queryClient.invalidateQueries({ queryKey: ['products'] });


      // const newQuantities: QuantityUpdate[] = JSON.parse(event.data);
      // setOrders((p) => [...p, ...newOrder].sort((a, b) => new Date(a.is_scheduled_at) - new Date(b.is_scheduled_at)));

      // const updateQuantities = (updates: { id: number, quantity: number }[]) => {
      //   setProducts(prevProducts => {
      //     return prevProducts.map(product => {
      //       const update = updates.find(u => u.id === product.id);
      //       if (update) {
      //         return { ...product, quantity: update.quantity };
      //       }
      //       return product;
      //     });
      //   });
      // };
    });

    eventSource.addEventListener("error", () => {
      eventSource.close();
    });

    // As the component unmounts, close listener to SSE API
    return () => {
      eventSource.close();
    };
  }, []);
  return (
    <div className="shop-page">
      <div className="layout">
        <div className="shop grid lg:block">
          <div className="no-scrollbar filters mb-2 flex max-h-12 gap-2 overflow-x-scroll rounded-b-lg bg-white p-2">
            {sort_options.map((i) => (
              <ul key={i} className="list-none">
                <li
                  onClick={() => setActiveFilter(i)}
                  className={cn({
                    "bg-orange-500 text-white": activeFilter === i,
                    "align-center flex max-h-fit min-w-14 select-none justify-center whitespace-nowrap rounded-full p-2 text-sm font-normal outline outline-orange-500 hover:bg-orange-500 hover:text-white":
                      true,
                  })}
                >
                  {i}
                </li>
              </ul>
            ))}
          </div>
          {isPending ? (
            <div className="products">
              {new Array(32).fill(null).map((_, i) => (
                <ShopSkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <AnimatePresence initial={false}>
              <motion.div initial={false} layout className="products">
                <LayoutGroup>
                  {filter?.map((product) => (
                    <ShopCard key={product.id} product={product} />
                  ))}
                </LayoutGroup>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <CartDesktop>
          <Cart />
        </CartDesktop>

        <CartTablet />
      </div>
    </div>
  );
}

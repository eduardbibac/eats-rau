"use client";

import { Product } from "@/types/ShopTypes";
import ShopCard from "./_ShopCard";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getShopProducts } from "@/actions/getShopProducts";
import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import CartTablet from "./_CartTablet";
import Cart from "@/components/Cart";
import CartDesktop from "./_CartDesktop";
import { useLocale, useTranslations } from "next-intl";
import ShopSkeletonCard from "./_ShopSkeletionCard";

export default function ShopPage({ sort_options }: { sort_options: string[] }) {
  const [filter, setFilter] = useState<Product[]>();
  const locale = useLocale();
  const t = useTranslations("Shop");
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

  useEffect(() => {
    if (activeFilter === t("Filter_All")) {
      setFilter(products);
      return;
    }

    setFilter(products?.filter((p) => p.categories.includes(activeFilter)));
  }, [products, activeFilter]);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

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
          {/* TODO: Fitlers break layout */}

          {/* <ScrollableTabs></ScrollableTabs> */}

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

"use client";

import { Product } from "@/types/ShopTypes";
import ShopCard from "./_ShopCard";

import { useState, useEffect, ReactNode } from "react";
import { useMutation } from "@tanstack/react-query";
import { getShopProducts } from "@/actions/getShopProducts";
import { cn, unique } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import CartTablet from "./_CartTablet";
import Cart from "@/components/Cart";
import CartDesktop from "./_CartDesktop";
import { useLocale, useTranslations } from "next-intl";

export default function ShopPage({
  children,
  sort_options,
}: {
  children: ReactNode;
  sort_options: string[];
}) {
  // Server Actions Tanstack Querry https://www.youtube.com/watch?v=OgVeQVXt7xU&t=358s
  const [filter, setFilter] = useState<Product[]>();
  const locale = useLocale();
  const t = useTranslations("Shop");
  const [activeFilter, setActiveFilter] = useState(t("Filter_All"));

  const {
    data: products,
    mutate: server_getProducts,
    error,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: getShopProducts,
  });
  useEffect(() => {
    server_getProducts(locale);
  }, [locale]);

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
          <div className="flex overflow-x-scroll max-h-12 no-scrollbar filters gap-2 mb-2 rounded-b-lg bg-white p-2">
            {sort_options.map((i) => (
              <ul key={i} className="list-none">
                <li
                  onClick={() => setActiveFilter(i)}
                  className={cn({
                    "bg-orange-500 text-white": activeFilter === i,
                    "font-normal whitespace-nowrap select-none align-center rounded-full max-h-fit outline hover:text-white flex outline-orange-500 hover:bg-orange-500 p-2 min-w-14 justify-center text-sm":
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
            <div className="products">{children}</div>
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

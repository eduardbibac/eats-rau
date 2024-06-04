"use client";

import { CartContext } from "@/providers/CartContextProvider";
import "@/styles/shop-card.css";
import type { Product, CartItem } from "@/types/ShopTypes";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useContext } from "react";

type ShopCardProps = {
  product: Product;
};

export default function ShopCard(props: ShopCardProps) {
  const { product } = props;
  const { getCount, addToCart, subFromCart } = useContext(CartContext);
  const t = useTranslations("Shop");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      className="shop-card rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
    >
      {/* hover:transform hover:scale-105 duration-300 */}
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <Image
          className="aspect-[4/3] object-cover"
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          // width={500} automatically provided for local
          // height={500} automatically provided for local
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        {/* <img className="object-cover aspect-[4/3]" src={product.image} alt={product.name} /> */}
      </div>

      <div className="text-section mt-1 p-2">
        <h2 className="font-semibold text-slate-700">{product.name}</h2>
        {/* <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p> */}

        <div className="bot-section mt-3 flex items-end justify-between">
          <span className="split-text">
            <p className="text-black-500 text-lg font-bold leading-tight">
              RON
            </p>
            <p className="text-black-500 text-lg font-bold leading-tight">
              {product.price}
            </p>
          </span>

          <div className="w-full max-w-28">
            {getCount(product) === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="mb-1 mr-1 flex w-full items-center justify-center space-x-1.5 rounded-full border border-solid border-red-500 bg-transparent py-2 text-xs font-bold uppercase text-orange-500 outline-none hover:bg-orange-600 hover:text-white focus:outline-none active:bg-orange-600 sm:px-2 md:px-2 lg:px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <p className="text-sm">{t("Add")}</p>
              </button>
            ) : (
              <div className="flex w-full justify-center">
                <div className="relative flex w-full items-center bg-orange-50">
                  <button
                    onClick={() => subFromCart(product)}
                    type="button"
                    className="h-11 w-1/3 rounded-full rounded-s-lg border border-orange-300 bg-orange-100 p-3 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-100 dark:border-orange-600 dark:bg-orange-700 dark:hover:bg-orange-600 dark:focus:ring-orange-700"
                  >
                    <svg
                      className="h-3 w-3 text-orange-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    value={getCount(product)}
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="block h-11 w-1/3 w-full border-x-0 border-red-300 bg-orange-50 py-2.5 text-center text-sm text-orange-900 focus:border-blue-500 focus:ring-blue-500 dark:border-orange-600 dark:bg-orange-700 dark:text-white dark:placeholder-orange-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="999"
                    required
                  />
                  <button
                    onClick={() => addToCart(product)}
                    type="button"
                    className="h-11 w-1/3 rounded-full rounded-e-lg border border-orange-300 bg-orange-100 p-3 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-100 dark:border-orange-600 dark:bg-orange-700 dark:hover:bg-orange-600 dark:focus:ring-orange-700"
                  >
                    <svg
                      className="h-3 w-3 text-orange-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// outline-none mr-1 mb-1 border border-solid border-red-500 rounded-full px-4 py-2 bg-transparent text-xs text-red-500 font-bold uppercase focus:outline-none active:bg-red-600 hover:bg-red-600 hover:text-white

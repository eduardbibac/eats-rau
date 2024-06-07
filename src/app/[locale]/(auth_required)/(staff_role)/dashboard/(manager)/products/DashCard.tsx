"use client";

import "@/styles/shop-card.css";
import type { Product, CartItem, DashboardProduct } from "@/types/ShopTypes";
import { motion } from "framer-motion";
import Image from "next/image";

type ShopCardProps = {
  product: DashboardProduct;
};

export default function DashCard(props: ShopCardProps) {
  const { product } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      className="shop-card rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
    >
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <Image
          className="aspect-[4/3] object-cover"
          src={product.image_link}
          alt={product.ro_product_name}
          width={500}
          height={500}
        />
      </div>

      <div className="text-section mt-1 p-2">
        <h2 className="font-semibold text-slate-700">{product.ro_product_name}</h2>
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
            <button
              className="mb-1 mr-1 flex w-full items-center justify-center space-x-1.5 rounded-full border border-solid border-red-500 bg-transparent py-2 text-xs font-bold uppercase text-orange-500 outline-none hover:bg-orange-600 hover:text-white focus:outline-none active:bg-orange-600 sm:px-2 md:px-2 lg:px-4"
            >
              <p className="text-sm">{'EDIT'}</p>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// outline-none mr-1 mb-1 border border-solid border-red-500 rounded-full px-4 py-2 bg-transparent text-xs text-red-500 font-bold uppercase focus:outline-none active:bg-red-600 hover:bg-red-600 hover:text-white

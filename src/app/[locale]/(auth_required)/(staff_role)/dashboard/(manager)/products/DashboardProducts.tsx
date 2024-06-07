'use client';

import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import DashCard from "./DashCard";

export default function DashboardProducts({ products }: { products: any }) {
  return (
    <AnimatePresence initial={false}>
      <motion.div initial={false} layout className="products">
        <LayoutGroup>
          <div className="shop grid grid-cols-4 gap-10">
            {products.map((product: any) => (
              <DashCard key={product.id} product={product} />
            ))}
          </div>
        </LayoutGroup>
      </motion.div>
    </AnimatePresence>
  );
}
"use client";

import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  Drawer,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import Cart from "../../Cart";

export default function CartButton({ label }: { label: string }) {
  return (
    <div className="mb-active-text mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-orange-500">
      <Drawer>
        <DrawerTrigger>
          <span className="block px-1 pb-1 pt-1">
            <i className="far fa-shopping-cart mb-1 block pt-1 text-2xl"></i>
            <span className="block pb-2 text-xs">{label}</span>
            <span className="mb-underline-active mx-auto block h-1 w-5 rounded-full group-hover:bg-orange-500"></span>
          </span>
        </DrawerTrigger>
        <DrawerContent className="max-h-[80%] contain-content">
          <div className="flex flex-col gap-4 overflow-y-auto">
            <Cart />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

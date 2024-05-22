'use client';

import { DrawerTrigger, DrawerContent, DrawerHeader, Drawer, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import Cart from "../Cart";

export default function CartButton() {
return (
  <div className="mb-active-text flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-orange-500">
  <Drawer>
      <DrawerTrigger>
          <span className="block px-1 pt-1 pb-1">
              <i className="far fa-shopping-cart text-2xl pt-1 mb-1 block"></i>
              <span className="block text-xs pb-2">Cart</span>
              <span className="mb-underline-active block w-5 mx-auto h-1 group-hover:bg-orange-500 rounded-full"></span>
          </span>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80%] contain-content">

      <div className="flex flex-col gap-4 overflow-y-auto">
        <Cart/>
      </div>

      </DrawerContent>
    </Drawer>
    </div>

);
}
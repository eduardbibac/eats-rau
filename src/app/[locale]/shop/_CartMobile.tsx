'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ReactNode } from "react";

export default function CartMobile ({children}:{children:ReactNode}) {
return(
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
            {children}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
);
}
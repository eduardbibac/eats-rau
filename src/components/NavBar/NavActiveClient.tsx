'use client';

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavActiveClient({children}:{children:ReactNode}) {
  const path = usePathname();
  const isActive = (path === '/settings') || (path === '/login');

  let style = isActive?'mb-active-nav':'';
  style+= ' flex-1 group'
  return (

  <div className={style}> 
  
    {children}
    
  </div>
);
}
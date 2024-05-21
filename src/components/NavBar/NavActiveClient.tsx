'use client';

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavActiveClient({children}:{children:ReactNode}) {
  const path = usePathname();
  const isActive = (path === '/settings') || (path === '/login');

  return (
  <div className={isActive?'mb-active-nav':''}> 
  
    {children}
    
  </div>
);
}
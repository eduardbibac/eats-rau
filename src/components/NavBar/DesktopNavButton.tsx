'use client';

import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/navigation";
import { useEffect } from "react";

export default function DesktopNavButton(
  {href, label} : {href: any, label: string}
) {
  const path = usePathname();
  const isActive = path === (href === "/home" ? "/" : href) === true;
return (
<>
  <div>
    <Link href={href} className={cn(
      {"relative before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-orange-400" : isActive},
      "inline-block text-black hover:text-gray-600")}
    >{label}</Link>
  </div>
  {/* <Link href={href} className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 
  before:-z-[1] before:w-full before:h-1 before:bg-orange-400" aria-current="page">{label}</Link> */}
</>
);
}



'use client';

import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/navigation";

export default function MobileNavButton (
 {href, label, icon} : {href: any, label: string, icon: string}
) {
  const path = usePathname();
  const isActive = path === (href === "/home" ? "/" : href) === true;
return (
<Link href={href} className="flex-1 group">
  <div className={cn(
      'flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-orange-500',
      {'text-orange-500':isActive},
      )}>
      <span className="block px-1 pt-1 pb-1">
          <i className={icon}></i>
          <span className="block text-xs pb-2">{label}</span>
          <span className={cn(
            "block w-5 mx-auto h-1 group-hover:bg-orange-500 rounded-full",
            {'bg-orange-500':isActive}
          )}/>
      </span>
  </div>
</Link>
)}
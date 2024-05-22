'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// TODO: Add mobile only flag that adds a hidden on desktop version through css (clsx)
const linksData = [
  // { href: '/', label: 'Home', icon:'far fa-home text-2xl pt-1 mb-1 block' },
  { href: '/shop', label: 'Menu', icon:'far fa-utensils text-2xl pt-1 mb-1 block'},
  { href: '/orders', label: 'Orders', icon:'far fa-clipboard-list-check text-2xl pt-1 mb-1 block'},
  // { href: '/cart', label: 'Cart', icon:'far fa-shopping-cart text-2xl pt-1 mb-1 block' },
  // { href: '/settings', label: 'Settings', mobileOnly: true},
];

export default function MobileNavBarLinks () {
  const path = usePathname();
  const mobileLinks = linksData.map(link => {
    const isActive = path === (link.href === "/home" ? "/" : link.href) === true;
    return <Link key={link.href} href={link.href} className="flex-1 group">
      <div className={cn(
          'flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-orange-500',
          {'text-orange-500':isActive},
          )}>
          <span className="block px-1 pt-1 pb-1">
              <i className={link.icon}></i>
              <span className="block text-xs pb-2">{link.label}</span>
              <span className={cn(
                "block w-5 mx-auto h-1 group-hover:bg-orange-500 rounded-full",
                {'bg-orange-500':isActive}
              )}/>
          </span>
      </div>
    </Link>
  })
  
  return(
    <>

      {mobileLinks}
      
    </>
  );
}
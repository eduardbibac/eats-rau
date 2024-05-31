'use client';

import { Link } from "@/navigation";
import { usePathname } from "next/navigation";

// TODO: Add mobile only flag that adds a hidden on desktop version through css (clsx)
const linksData = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Menu' },
  { href: '/orders', label: 'Orders' },
  // { href: '/settings', label: 'Settings', mobileOnly: true},
];

export default function NavBarLinks() {
  const path = usePathname();
  const links = linksData.map((link) => {
    const isActive = path === (link.href === "/home" ? "/" : link.href);
    return (isActive ? (
      <div>
        <Link href={link.href} className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-orange-400" aria-current="page">{link.label}</Link>
      </div>
    ) : (
      <div>
        <Link href={link.href} className="inline-block text-black hover:text-gray-600">{link.label}</Link>
      </div>
    ))
  });




return (
  <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
  <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">    
    
    {...links}
  
  </div>
</div>
);
}
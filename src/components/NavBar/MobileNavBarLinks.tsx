'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

// TODO: Add mobile only flag that adds a hidden on desktop version through css (clsx)
const linksData = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Menu' },
  { href: '/orders', label: 'Orders' },
  // { href: '/settings', label: 'Settings', mobileOnly: true},
];


export default function MobileNavBarLinks () {
  const path = usePathname();
  const mobileLinks  = linksData.map((link) => {
    const isActive = path === (link.href === "/home" ? "/" : link.href);
    return (isActive ? (
        <Link href={link.href} className="flex-1 group ">
        <div className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-orange-500">
            <span className="block px-1 pt-1 pb-1">
              {/* // TODO: Link ICON */}
                <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-2 ">{link.label}</span>
                <span className="block w-5 mx-auto h-1 bg-orange-500  rounded-full"></span>
            </span>
        </div>
      </Link>
    ) : (
      <Link href={link.href} className="flex-1 group">
        <div className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-orange-500">
            <span className="block px-1 pt-1 pb-1">
              {/* // TODO: Link ICON */}
                <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-2">{link.label}</span>
                <span className="block w-5 mx-auto h-1 group-hover:bg-orange-500 rounded-full"></span>
            </span>
        </div>
      </Link>
    ))
  });
  
  return(
    <>
      {mobileLinks}
    </>
  );
}
"use client";

import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/navigation";

export default function MobileNavButton({
  href,
  label,
  icon,
}: {
  href: any;
  label: string;
  icon: string;
}) {
  const path = usePathname();
  const isActive = (path === (href === "/home" ? "/" : href)) === true;
  return (
    <Link href={href} className="group flex-1">
      <div
        className={cn(
          "mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-orange-500",
          { "text-orange-500": isActive },
        )}
      >
        <span className="block px-1 pb-1 pt-1">
          <i className={icon}></i>
          <span className="block pb-2 text-xs">{label}</span>
          <span
            className={cn(
              "mx-auto block h-1 w-5 rounded-full group-hover:bg-orange-500",
              { "bg-orange-500": isActive },
            )}
          />
        </span>
      </div>
    </Link>
  );
}

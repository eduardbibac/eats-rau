import { validateRequest } from "@/auth/validateRequest";
import { Link } from "@/navigation";
import MobileNavBarLinks from "./MobileNavBarLinks";
import {Cog, LogIn} from "lucide-react";
import { cn } from "@/lib/utils";
import CartButton from "./CartButton";
import MobileNavButton from "./MobileNavButton";
import { getTranslations } from "next-intl/server";
const linksData = [
  // { href: '/', label: 'Home', icon:'far fa-home text-2xl pt-1 mb-1 block' },
  { href: '/shop', label: 'Menu', icon:'far fa-utensils text-2xl pt-1 mb-1 block'},
  { href: '/orders', label: 'Orders', icon:'far fa-clipboard-list-check text-2xl pt-1 mb-1 block'},
  // { href: '/cart', label: 'Cart', icon:'far fa-shopping-cart text-2xl pt-1 mb-1 block' },
  // { href: '/settings', label: 'Settings', mobileOnly: true},
];
export default async function MobileNavBar() {
const { user } = await validateRequest();
const t = await getTranslations('Navigation');
return (
  <div className="md:hidden fixed bottom-0 left-0 z-50 w-full mx-auto">
    <div className="px-7 bg-white shadow-lg rounded-t-2xl">
        <div className="flex">
          {/* <MobileNavBarLinks></MobileNavBarLinks> */}

          <MobileNavButton href='/shop' label={t('Menu')} icon={'far fa-utensils text-2xl pt-1 mb-1 block'}/>
          <MobileNavButton href='/orders' label={t('Orders')} icon={'far fa-clipboard-list-check text-2xl pt-1 mb-1 block'}/>

          <div className="flex-1 group">
            <CartButton label={t('Cart')}></CartButton>
          </div>
           
           {user ? (
              <MobileNavButton href='/settings' label={t('Settings')} icon={'far fa-cog text-2xl pt-1 mb-1 block'}/>
           ) : (
              <MobileNavButton href='/login' label={t('Sign In')} icon={'far fa-sign-in text-2xl pt-1 mb-1 block'}/>
           )}
        </div>
    </div>
</div>
);
}
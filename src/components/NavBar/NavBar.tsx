//https://preline.co/examples/navigations-navbars.html
import "./BottomNavBar.css";
import "@/styles/navbar.css";
import NavBarUserSession from "./NavBarUserSession";
import NavBarLinks from "./NavBarLinks";
import MobileNavBar from "./MobileNavBar";
import NavLogo from "./LogoButton";
import DashboardButton from "./DashboardButton";
import LogoButton from "./LogoButton";
import { useTranslations } from "next-intl";
import { AvatarMenu } from "./AvatarMenu";
import { getTranslations } from "next-intl/server";
import DesktopNavButton from "./DesktopNavButton";
import { validateAuth } from "@/actions/validateAuth";
import { validateRequest } from "@/auth/validateRequest";
import { isRoleOrHigher } from "@/lib/role";
import DesktopSingInButton from "./DesktopSingInButton";

/* TODO: Path to cleaning up:
one source of truth 
figure out active on the server or standardize all links to use the ActiveClientProvider
<DesktopNav>
  <DesktopLink active href='/settings' />
</DesktopNav>
*/
// HMM?


export default async function Navbar () {
  const t = await getTranslations('Navigation');
  const {user} = await validateRequest();

return(
<>
{/* <!-- ========== DESKTOP ========== --> */}
<header className="hidden md:flex flex-wrap md:justify-start md:flex-nowrap z-50 w-[98dvw] py-7">
  <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto" aria-label="Global">
    <div className="md:col-span-3">
      
      <LogoButton href='/' />,
      
    </div>

    {/* <!-- Button Group --> */}
    <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
      
    {user ? (
      <>
        {isRoleOrHigher('staff', user.arole) && <DashboardButton href='/dashboard' label={t('Dashboard')}/>}
        <AvatarMenu />
      </>
    ) : (
      <DesktopSingInButton href='/login' label={t('Sign In')}/>
    )}

    </div>
      <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">    
      
        <DesktopNavButton href='/shop' label={t('Menu')} />
        <DesktopNavButton href='/orders' label={t('Orders')} />
        <DesktopNavButton href='/settings' label={t('Menu')} />

    </div>
  </div>
   
  </nav>
</header>
{/* <!-- ========== END DESKTOP ========== --> */}
{/* <!-- ========== MOBILE ========== --> */}
  <MobileNavBar></MobileNavBar>
</>
);
}
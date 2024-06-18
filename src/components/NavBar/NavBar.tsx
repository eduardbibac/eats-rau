//https://preline.co/examples/navigations-navbars.html
import "./BottomNavBar.css";
import "@/styles/navbar.css";
import MobileNavBar from "./Mobile/MobileNavBar";
import DashboardButton from "./Desktop/DashboardButton";
import LogoButton from "./LogoButton";
import { AvatarMenu } from "./AvatarMenu";
import { getTranslations } from "next-intl/server";
import DesktopNavButton from "./Desktop/DesktopNavButton";
import { validateRequest } from "@/actions/auth/validateRequest";
import { isRoleOrHigher } from "@/lib/role";
import DesktopSingInButton from "./Desktop/DesktopSingInButton";
import LangSwitcher from "../LocaleSwitcher";

export default async function Navbar() {
  const t = await getTranslations("Navigation");
  const { user } = await validateRequest();

  return (
    <>
      {/* <!-- ========== DESKTOP ========== --> */}
      <header className="bg-white z-50 hidden w-[98dvw] flex-wrap py-7 md:flex md:flex-nowrap md:justify-start">
        <nav
          className="relative mx-auto flex w-full max-w-7xl basis-full flex-wrap items-center px-4 md:grid md:grid-cols-12 md:px-8"
          aria-label="Global"
        >
          <div className="md:col-span-3">
            <LogoButton href="/" />
          </div>

          {/* <!-- Button Group --> */}
          <div className="ms-auto flex items-center gap-x-4 py-1 md:order-3 md:col-span-3 md:ps-6">
            <LangSwitcher />
            {user ? (
              <>
                {isRoleOrHigher("staff", user.arole) && (
                  <div className="float-end">
                    <DashboardButton href="/dashboard" label={t("Dashboard")} />
                  </div>
                )}
                <AvatarMenu />
                <p>{user.username}</p>
              </>
            ) : (
              <DesktopSingInButton href="/login" label={t("Sign In")} />
            )}
          </div>
          {/* <!-- End Button Group --> */}
          {/* <!-- Collapse --> */}
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:order-2 md:col-span-6 md:block md:w-auto md:basis-auto"
          >
            <div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-center md:gap-x-7 md:gap-y-0">
              <DesktopNavButton href="/" label={t("Home")} />
              <DesktopNavButton href="/shop" label={t("Menu")} />
              <DesktopNavButton href="/orders" label={t("Orders")} />

              {/* <!-- End Collapse --> */}
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

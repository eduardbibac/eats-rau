import { AvatarMenu } from "@/components/NavBar/AvatarMenu";
import DesktopNavButton from "@/components/NavBar/Desktop/DesktopNavButton";
import LogoButton from "@/components/NavBar/LogoButton";
import { useTranslations } from "next-intl";

export default function DashNav() {
  const t = useTranslations("DashNav");
  return (
    <>
      {/* <!-- ========== DESKTOP ========== --> */}
      <header className="z-50 hidden w-[98dvw] flex-wrap bg-white py-7 md:flex md:flex-nowrap md:justify-start">
        <nav
          className="relative mx-auto flex w-full max-w-7xl basis-full flex-wrap items-center px-4 md:grid md:grid-cols-12 md:px-8"
          aria-label="Global"
        >
          <div className="md:col-span-3">
            <LogoButton href="/" />
          </div>

          {/* <!-- Button Group --> */}
          <div className="ms-auto flex items-center gap-x-2 py-1 md:order-3 md:col-span-3 md:ps-6">
            <AvatarMenu />
          </div>
          {/* <!-- End Button Group --> */}
          {/* <!-- Collapse --> */}
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:order-2 md:col-span-6 md:block md:w-auto md:basis-auto"
          >
            <div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-center md:gap-x-7 md:gap-y-0">
              <DesktopNavButton href="/dashboard/orders" label={t("Orders")} />
              <DesktopNavButton
                href="/dashboard/products"
                label={t("Manage Products")}
              />
              <DesktopNavButton href="/dashboard/sales" label={t("Sales")} />
              <DesktopNavButton href="/dashboard/users" label={t("Users")} />

              {/* <!-- End Collapse --> */}
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========== END DESKTOP ========== --> */}
      {/* <!-- ========== MOBILE ========== --> */}
    </>
  );
}

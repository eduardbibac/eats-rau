import { validateRequest } from "@/actions/auth/validateRequest";
import MobileNavButton from "@/components/NavBar/Mobile/MobileNavButton";
import { getTranslations } from "next-intl/server";

export default async function DashMobileNavBar() {
  const { user } = await validateRequest();
  const t = await getTranslations("DashNav");
  return (
    <div className="fixed bottom-0 left-0 z-50 mx-auto w-full md:hidden">
      <div className="rounded-t-2xl bg-white px-7 shadow-lg">
        <div className="flex">
          {/* <MobileNavBarLinks></MobileNavBarLinks> */}

          <MobileNavButton
            href="/dashboard/orders"
            label={t("Orders")}
            icon=""
          />
          <MobileNavButton
            href="/dashboard/products"
            label={t("Manage Products")}
            icon=""
          />
          <MobileNavButton
            href="/dashboard/sales"
            label={t("Sales")}
            icon=""
          />
          <MobileNavButton
            href="/dashboard/users"
            label={t("Users")}
            icon=""
          />
        </div>
      </div>
    </div>
  );
}

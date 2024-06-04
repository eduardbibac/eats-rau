import { validateRequest } from "@/actions/auth/validateRequest";
import CartButton from "./CartButton";
import MobileNavButton from "./MobileNavButton";
import { getTranslations } from "next-intl/server";

export default async function MobileNavBar() {
  const { user } = await validateRequest();
  const t = await getTranslations("Navigation");
  return (
    <div className="fixed bottom-0 left-0 z-50 mx-auto w-full md:hidden">
      <div className="rounded-t-2xl bg-white px-7 shadow-lg">
        <div className="flex">
          {/* <MobileNavBarLinks></MobileNavBarLinks> */}

          <MobileNavButton
            href="/shop"
            label={t("Menu")}
            icon={"far fa-utensils text-2xl pt-1 mb-1 block"}
          />
          <MobileNavButton
            href="/orders"
            label={t("Orders")}
            icon={"far fa-clipboard-list-check text-2xl pt-1 mb-1 block"}
          />

          <div className="group flex-1">
            <CartButton label={t("Cart")}></CartButton>
          </div>

          {user ? (
            <MobileNavButton
              href="/settings"
              label={t("Settings")}
              icon={"far fa-cog text-2xl pt-1 mb-1 block"}
            />
          ) : (
            <MobileNavButton
              href="/login"
              label={t("Sign In")}
              icon={"far fa-sign-in text-2xl pt-1 mb-1 block"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

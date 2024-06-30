import LocaleSwitcher from "@/components/LocaleSwitcher";
import Navbar from "@/components/NavBar/NavBar";
import { Link } from "@/navigation";
import "@/styles/shop-page.css";
import { useLocale, useTranslations } from "next-intl";
import OrderStepper from "./OrderStepper";

export default function Orders() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="grid justify-center mt-24">
          <div className="w-full bg-red-500 h-24"></div>
          <OrderStepper />
        </div>
      </div>
    </>
  );
}

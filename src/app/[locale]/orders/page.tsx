import LocaleSwitcher from "@/components/LocaleSwitcher";
import Navbar from "@/components/NavBar/NavBar";
import { Link } from "@/navigation";
import "@/styles/shop-page.css";
import { useLocale, useTranslations } from "next-intl";
import UserOrders from "./UserOrders";
import OrderStepper from "./OrderStepper";


export default function Orders() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="grid gap-4 justify-center mt-24 w-full h-full">
          <h1 className="text-lg font-bold">Istoric Comenzi</h1>
          <UserOrders />
        </div>
      </div>
    </>
  );
}

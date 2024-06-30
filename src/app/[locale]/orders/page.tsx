import LocaleSwitcher from "@/components/LocaleSwitcher";
import Navbar from "@/components/NavBar/NavBar";
import { Link } from "@/navigation";
import "@/styles/shop-page.css";
import { useLocale, useTranslations } from "next-intl";

export default function Orders() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <>
      <Navbar></Navbar>

    </>
  );
}

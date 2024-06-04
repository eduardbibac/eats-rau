import LocaleSwitcher from "@/components/LocaleSwitcher";
import Navbar from "@/components/NavBar/NavBar";
import "@/styles/shop-page.css";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <>
      <Navbar></Navbar>
      <h1>{t("hard_test", { count: 20 })}</h1>
      <h2>{locale}</h2>
      <LocaleSwitcher></LocaleSwitcher>
    </>
  );
}

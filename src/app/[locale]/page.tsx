import LocaleSwitcher from "@/components/LocaleSwitcher";
import Navbar from "@/components/NavBar/NavBar";
import "@/styles/shop-page.css";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
return (
<>
<Navbar></Navbar>
<h1>{t("hard_test", {count:20})}</h1>
<LocaleSwitcher></LocaleSwitcher>
</>
);
}

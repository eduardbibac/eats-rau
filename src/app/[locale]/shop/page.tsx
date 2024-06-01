import "@/styles/shop-page.css";
import Navbar from "@/components/NavBar/NavBar";
import ShopPage from "./_ShopPage";
import { logout } from "@/actions/auth/logout";
import ShopSkeletonCard from "./_ShopSkeletionCard";
import { getProductsSortOptions } from "@/actions/getProductsSortOptions";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Shop() {
  const t = await getTranslations('Shop');
  const locale = await getLocale();

  const categories : string[] = await getProductsSortOptions(locale);
  const sort_options = [t('Filter_All'), ...categories];
return (
<>
    <Navbar></Navbar>
    <ShopPage sort_options={sort_options}>
      {new Array(12).fill(null).map((_, i) => <ShopSkeletonCard key={i} />)}
    </ShopPage>
</>
);
}

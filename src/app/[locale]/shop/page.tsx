import "@/styles/shop-page.css";
import Navbar from "@/components/NavBar/NavBar";
import ShopPage from "./_ShopPage";
import { logout } from "@/actions/auth/logout";
import ShopSkeletonCard from "./_ShopSkeletionCard";

export default async function Shop() {
return (
<>
<Navbar></Navbar>
    <ShopPage>
      {new Array(12).fill(null).map((_, i) => <ShopSkeletonCard key={i} />)}
    </ShopPage>
</>
);
}

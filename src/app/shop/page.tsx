import "@/styles/shop-page.css";
import Navbar from "@/components/NavBar/NavBar";
import ShopPage from "./_ShopPage";
import { logout } from "@/auth/logout";

export default async function Shop() {
return (
<>
<Navbar></Navbar>
<ShopPage></ShopPage>
</>
);
}

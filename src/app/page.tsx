import BottomNavBar from "@/components/BottomNavBar";
import Navbar from "@/components/NavBar";
import Shop from "@/components/Shop";
import CartPage from "@/components/CartPage";

import "@/styles/test.css";

export default function Home() {
  return (
    <>
    {/* <Navbar></Navbar>
    <Shop></Shop>
    <BottomNavBar></BottomNavBar>
    <CartPage></CartPage> */}
<div className="homepage">
<div className="layout">

    <div className="shop">
      <div className="card">Product</div>
      <div className="card">Product</div>
      <div className="card">Product</div>
      <div className="card">Product</div>
      <div className="card">Product</div>
    </div>

    <div className="cart">
      <div className="card">InCart</div>
      <div className="card">InCart</div>
      <div className="card">InCart</div>
    </div>
  </div>
</div>


    </>
  );
}

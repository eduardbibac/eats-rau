import "@/styles/shop-page.css";
import Navbar from "@/components/NavBar";
import ShopCard from "@/components/ShopCard";

export default function Shop() {
return (
<>
<Navbar></Navbar>
<div className="shop-page">
<div className="layout">
    <div className="shop">
      <div className="filters mb-2 h-16 w-full border-4"></div>
      <div className="products">
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
      </div>
    </div>

    <div className="cart">
      <div className="scroll-padding-top"></div>  
      <div className="products">
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
        <ShopCard></ShopCard>
      </div>
      
      <button className="text-sm items-center w-full h-30 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">Checkout</button>
    </div>
    

  </div>
</div>
</>
);
}

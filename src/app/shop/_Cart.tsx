import { ReactNode } from "react";
interface CartProps {
  children: ReactNode; // Declare children as a property of type ReactNode
} 
export default function Cart({ children }: CartProps) {
  return(
    <div className="cart">
    <div className="flex justify-between">
      <p className="self-start text-xl py-5 font-bold dark:text-white">Total</p>
      <p className="self-end text-xl py-5 font-bold dark:text-white pr-8">120.49 RON</p>
    </div>
  <button className=" text-lg items-center w-full h-30 rounded-lg bg-orange-500 py-1.5 text-white duration-100 hover:bg-orange-600">Checkout</button>
    <div className="scroll-padding-top"></div>  
    <div className="products">
     
      {children}

    </div>
  </div>
  );
}
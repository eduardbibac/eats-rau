'use client';

import { ReactNode, useState } from "react";
import CartMobile from "./_CartMobile";

export default function CartTablet({children }:{children : ReactNode}) {
  const [widgetCartOpen, setWidgetCartOpen] = useState(false);

return (
<>
<button onClick={() => setWidgetCartOpen((p) => !p)}
        className="hidden md:inline-flex lg:hidden fixed bottom-4 right-4  items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-amber-100 hover:bg-amber-200 m-0 cursor-pointer border-orange-400 bg-none p-0 normal-case leading-5 hover:text-white"
        type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="orange" className="h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </button>
      {widgetCartOpen ? (
      <>
        <CartMobile>
          {children}
        </CartMobile>
        
      </>
      ) : null}
</>
);
}
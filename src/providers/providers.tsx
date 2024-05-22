import { ReactNode } from "react";
import CartContextProvider from "./CartContextProvider";
import TanQuerryClientProvider from "./TanQuerryClientProvider";

export default function Providers ({children}: {children: ReactNode})
{
  return(
    <TanQuerryClientProvider>
      <CartContextProvider>
        {children}
      </CartContextProvider>
  </TanQuerryClientProvider>
)}
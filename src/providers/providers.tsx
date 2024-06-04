import { ReactNode } from "react";
import CartContextProvider from "./CartContextProvider";
import TanQuerryClientProvider from "./TanQuerryClientProvider";
import LocaleProvider from "./LocaleProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <TanQuerryClientProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </TanQuerryClientProvider>
    </LocaleProvider>
  );
}

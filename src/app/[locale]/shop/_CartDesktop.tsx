import { ReactNode } from "react";

export default function CartDesktop({ children }: { children: ReactNode }) {
  return <div className="ml-12 hidden lg:block">{children}</div>;
}

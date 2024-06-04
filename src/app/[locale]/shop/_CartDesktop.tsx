import { ReactNode } from "react";

export default function CartDesktop({ children }: { children: ReactNode }) {
  return <div className="hidden lg:block ml-12">{children}</div>;
}

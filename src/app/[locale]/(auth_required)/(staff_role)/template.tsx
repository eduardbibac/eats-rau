import { validateRequest } from "@/actions/auth/validateRequest";
import { isRoleOrHigher } from "@/lib/role";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function withStaffRoleOrHigher({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("staff", user!.arole)) {
    redirect("/");
    return;
  }

  return <>{children}</>;
}

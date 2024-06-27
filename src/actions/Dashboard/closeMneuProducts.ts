"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";

export async function closeMneuProducts(menu_id: number) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  await sql`UPDATE menu_products SET current_quantity = 0 WHERE menu_id=${menu_id}`;
}

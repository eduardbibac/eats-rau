"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";
import { Menu } from "@/types/dbTypes";

export async function updateCurrentAvailability(
  menu_id: number,
  product_id: number,
  new_value: number,
) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  await sql`
  UPDATE menu_products 
  SET current_quantity=${new_value} 
  WHERE menu_id=${menu_id} AND product_id=${product_id}
  `;
}

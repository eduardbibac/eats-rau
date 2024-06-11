"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";
import { Menu } from "@/types/dbTypes";

export async function updateMenuListPositions(
  menu_id: number,
  listPositions: number[][],
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
  update menu_products set list_position = (update_data.list_position)::int
  from (values ${sql(listPositions)}) as update_data (id, list_position)
  where product_id = (update_data.id)::int AND menu_id = ${menu_id}
`;
}

// [menu1: p1, p2 p3]

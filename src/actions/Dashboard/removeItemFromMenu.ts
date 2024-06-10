"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";
import { Menu } from "@/types/dbTypes";

export async function removeItemFromMenu(product_id: number, menu_id: number) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  sql.begin(async (sql) => {
    const [deleted] = await sql`DELETE FROM menu_products 
      WHERE menu_id=${menu_id} AND product_id=${product_id}
      RETURNING list_position;
    `;

    await sql`UPDATE menu_products SET list_position = list_position - 1 
      WHERE list_position > ${deleted.list_position}
    `;
  });

  // return;
  // const res =
  // if (res.count)
  //   return true;
  // else return false;
}

// [menu1: p1, p2 p3]

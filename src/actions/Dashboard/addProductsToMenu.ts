"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";
import { Menu } from "@/types/dbTypes";
import { revalidatePath } from "next/cache";

export async function addProductsToMenu(
  product_ids: number[],
  menu_id: number,
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

  sql.begin(async (sql) => {
    const [res] =
      await sql`SELECT max(list_position) as length from menu_products`;

    let length = res.length;
    const inserts = product_ids.map((id) => {
      length += 1;
      return sql`INSERT INTO menu_products (menu_id, product_id, menu_quantity, current_quantity, list_position) 
        VALUES (${menu_id}, ${id}, 20, 0, ${length}) 
        ON CONFLICT DO NOTHING`;
    });

    for (const ip of inserts) {
      await ip;
    }
  });

  // return;
  // const res =
  // if (res.count)
  //   return true;
  // else return false;
}

// [menu1: p1, p2 p3]

"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";
import { Menu } from "@/types/dbTypes";
import { revalidatePath } from "next/cache";

export async function createNewMenu(menu_name: string) {
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
    const [res] = await sql`SELECT max(list_position) as length from menu`;

    await sql`INSERT INTO menu (menu_name, is_active, list_position) 
    VALUES (${menu_name}, false, ${res.length + 1})`;
  });
}

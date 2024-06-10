"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";
import { Menu } from "@/types/dbTypes";

export async function updateMenuActiveState(menu_id: number, isActiveMenu: boolean) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }
  await sql`UPDATE menu SET is_active = ${isActiveMenu} WHERE menu.id = ${menu_id}`;
  // return;
  // const res = 
  // if (res.count)
  //   return true;
  // else return false;
}

// [menu1: p1, p2 p3]

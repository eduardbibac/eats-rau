"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";
import { Menu } from "@/types/dbTypes";

export async function getMenuProducts(menu_id: number) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  const products = await sql<DashboardProduct[]>`
    select pc.id, pc.ro_product_name, pc.ro_categories, pc.en_product_name,
    pc.en_categories, pc.image_link, pc.price from menu m
    join menu_products mp ON mp.menu_id = m.id
    join products_with_categories pc ON pc.id = mp.product_id 
    where menu_id=${menu_id}`;

  return products;
}

// [menu1: p1, p2 p3]

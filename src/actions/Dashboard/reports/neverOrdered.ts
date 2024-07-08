"use server";

import { isRoleOrHigher } from "@/lib/role";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { validateRequest } from "@/actions/auth/validateRequest";

export async function neverOrdered() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  const rows = await sql`SELECT * FROM products_with_categories pc 
WHERE pc.id IN 
(SELECT id FROM products
    EXCEPT
    SELECT product_id FROM order_products)`;

  return rows;
}

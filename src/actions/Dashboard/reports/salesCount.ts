"use server";

import { isRoleOrHigher } from "@/lib/role";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { validateRequest } from "@/actions/auth/validateRequest";

export async function salesCount() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  const rows = await sql`
    SELECT p.ro_product_name, SUM(op.quantity) AS total_sales
    FROM products p
    JOIN order_products op ON p.id = op.product_id
    GROUP BY p.ro_product_name`;

  return rows;
}

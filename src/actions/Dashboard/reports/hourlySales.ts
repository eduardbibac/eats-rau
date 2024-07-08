"use server";

import { isRoleOrHigher } from "@/lib/role";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { validateRequest } from "@/actions/auth/validateRequest";

export async function hourlySales() {
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
  SELECT
    to_char(DATE_TRUNC('hour', o.is_scheduled_at), 'HH24:MI day') AS time,
    SUM(op.price_paid * op.quantity) AS sales
  FROM orders o
  JOIN order_products op ON o.id = op.order_id
  GROUP BY DATE_TRUNC('hour', o.is_scheduled_at)
  ORDER BY time;`;

  return rows;
}

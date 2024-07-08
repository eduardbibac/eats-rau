"use server";

import { isRoleOrHigher } from "@/lib/role";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { validateRequest } from "@/actions/auth/validateRequest";

export async function usersWithMostSales() {
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
SELECT * FROM (
  SELECT u.username, COUNT(o.user_id) AS order_count
  FROM orders o
  JOIN users u ON u.id = o.user_id
  GROUP BY u.username
) subquery WHERE order_count = (
  SELECT MAX(order_count) FROM (
    SELECT u.username, COUNT(o.user_id) AS order_count
    FROM orders o
    JOIN users u ON u.id = o.user_id
    GROUP BY u.username
  ) subquery2
)`;

  return rows;
}

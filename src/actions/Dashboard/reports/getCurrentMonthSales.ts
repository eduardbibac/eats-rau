"use server";

import { isRoleOrHigher } from "@/lib/role";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { validateRequest } from "@/actions/auth/validateRequest";

export async function getCurrentMonthSales() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  const rows = await sql`SELECT *
    FROM orders
    WHERE date_trunc('month', is_scheduled_at) = date_trunc('month', CURRENT_TIMESTAMP);
    `;

  return rows;
}

"use server";

import { isRoleOrHigher } from "@/lib/role";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { validateRequest } from "@/actions/auth/validateRequest";

export async function pricesStats() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  const rows =
    await sql`SELECT MIN(price) AS min_price, MAX(price) AS max_price, AVG(price) AS avg_price FROM products`;

  return rows;
}

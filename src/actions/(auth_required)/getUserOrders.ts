"use server";

import { validateRequest } from "@/actions/auth/validateRequest";
import sql from "@/lib/db";
import { redirect } from "@/navigation";
import { OrderHistoryEntry } from "@/types/dbTypes";

export async function getUserOrders() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }

  const data = await sql<
    OrderHistoryEntry[]
  >`SELECT * FROM orders WHERE user_id=${user.id}`.catch((e) => {
    console.log(e);
    return [];
  });
  return data;
}

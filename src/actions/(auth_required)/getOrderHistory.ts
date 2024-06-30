"use server";

import { validateRequest } from "@/actions/auth/validateRequest";
import sql from "@/lib/db";
import { redirect } from "@/navigation";
import { OrderHistoryEntry } from "@/types/dbTypes";

export async function getOrderHistory(order_id: number) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }

  const data = await sql<OrderHistoryEntry[]>`
    SELECT 
      order_id, 
      json_agg(json_build_object(
        'change_timestamp', change_timestamp,
        'order_status', order_status,
        'order_type', order_type,
        'payment_method', payment_method,
        'payment_status', payment_status,
        'is_scheduled_at', is_scheduled_at,
        'changed_by', changed_by
      ) ORDER BY change_timestamp ASC) AS history
    FROM order_history
    WHERE order_id =${order_id}
    GROUP BY order_id
    ORDER BY order_id
    `.catch((e) => {
    console.log(e);
    return [];
  });
  return data;
}

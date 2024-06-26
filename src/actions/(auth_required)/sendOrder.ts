"use server";

import { validateRequest } from "@/actions/auth/validateRequest";
import sql from "@/lib/db";
import { redirect } from "@/navigation";

export default async function sendOrder(
  dine_in: string,
  payment_method: string,
  products: [{ id: number; quantity: number }],
) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!["pickup", "dine_in"].includes(dine_in)) return;
  if (!["cash", "card"].includes(payment_method)) return;
  if (!products.length) return;

  try {
    createOrder(user.id, dine_in, payment_method, products);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function createOrder(
  user_id: string,
  dine_in: string,
  payment_method: string,
  products: [{ id: number; quantity: number }],
) {
  await sql
    .begin(async (sql) => {
      // TODO: Update item quantities ?
      const [order] = await sql`
    INSERT INTO orders (user_id, order_status, order_type, payment_method, payment_status, changed_by)
    VALUES 
        (${user_id}, 'pending', ${dine_in}, ${payment_method}, 'unpaid', 'user')
    RETURNING id;
    `;
      const insert_products = products.map((product) => {
        return sql`
      INSERT INTO order_products(order_id, product_id, price_paid, quantity)
      VALUES
        (
          ${order.id}, 
          ${product.id},
          (SELECT price FROM products p WHERE p.id = ${product.id}),
          ${product.quantity}
        );
      `;
      });

      const update_products = products.map((product) => {
        return sql`        
        UPDATE menu_products 
        SET current_quantity= current_quantity - ${product.quantity} 
        WHERE product_id=${product.id}
        `;
      });

      for (const ip of insert_products) {
        await ip;
      }

      for (const up of update_products) {
        await up;
      }

      // This is fake? it's gonna guanratee use one connection so....
      // Promise.all(insert_products);
    })
    .catch((e) => {
      console.log(e);
      return [];
    });
}

"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";
import { Menu } from "@/types/dbTypes";
import { revalidatePath } from "next/cache";

export async function updateProduct(product: DashboardProduct) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  // TODO: categroies update
  await sql`
    update products set ${sql(product, "price", "ro_product_name", "en_product_name", "image_link")}
    where id = ${product.id}
  `;
}

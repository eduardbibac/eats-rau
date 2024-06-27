"use server";

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";
import { Menu } from "@/types/dbTypes";
import { revalidatePath } from "next/cache";

export async function createNewProduct(product: DashboardProduct) {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  await sql`INSERT INTO Products(ro_product_name, en_product_name, price, image_link) VALUES 
            (${product.ro_product_name}, ${product.en_product_name}, ${product.price}, ${product.image_link})`;
}

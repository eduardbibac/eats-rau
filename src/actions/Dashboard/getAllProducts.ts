'use server';

import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "../auth/validateRequest";
import { redirect } from "@/navigation";
import sql from "@/lib/db";
import { DashboardProduct } from "@/types/ShopTypes";

export async function getAllProducts() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }


  const prod = await sql<DashboardProduct[]>`SELECT * FROM products_with_categories`;
  return prod;
}

// [menu1: p1, p2 p3]
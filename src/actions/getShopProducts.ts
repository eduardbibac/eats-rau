"use server";

import sql from "@/lib/db";
import { locales } from "@/navigation";
import { Product } from "@/types/ShopTypes";

export async function getShopProducts(userLocale: any) {
  if (!locales.includes(userLocale)) userLocale = "ro";

  const isEnglish = userLocale === "en" ? true : false;
  const name = isEnglish ? "p.en_product_name" : "p.ro_product_name";
  const cat = isEnglish ? "p.en_categories" : "p.ro_categories";
  // p.ro_product_name as name, p.ro_categories as categories,
  const products = await sql<Product[]>`
  SELECT p.id, p.list_position, p.price, 
      ${sql(name)} as name, ${sql(cat)} as categories,
      p.current_quantity as quantity, p.image
    from products_on_sale p
    order by menu_list_position ASC, p.list_position ASC;`.catch((e) => {
    console.log(e);
    return [];
  });

  // TODO:
  await new Promise((r) => setTimeout(r, 500));
  return products;
}

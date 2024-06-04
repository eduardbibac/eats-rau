"use server";

import sql from "@/lib/db";
import { locales } from "@/navigation";

export async function getProductsSortOptions(userLocale: any) {
  if (!locales.includes(userLocale)) userLocale = "ro";

  const lang_name = userLocale === "en" ? `en_name` : `ro_name`;
  const categories =
    await sql`SELECT ${sql(lang_name)} as name FROM categories ORDER BY list_position`.catch(
      (e) => {
        console.log(e);
        return [];
      },
    );

  return categories!.map((i) => i.name);
}

"use server";

import { lucia } from "@/actions/auth/lucia";
import { redirect } from "@/navigation";

export async function invalidateUserSession(formData: FormData) {
  await lucia.invalidateSession(formData.get("id") as string);
  redirect("/settings");
}

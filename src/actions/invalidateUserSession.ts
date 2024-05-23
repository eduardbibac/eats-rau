'use server';

import { lucia } from "@/auth/lucia";
import { redirect } from "next/navigation";

export async function invalidateUserSession(formData: FormData) {
  await lucia.invalidateSession(formData.get('id') as string);
  redirect('/settings');
}
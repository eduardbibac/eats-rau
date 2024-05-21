'use server';

import { lucia } from "@/auth/lucia";

export async function invalidateUserSession(formData: FormData) {
  await lucia.invalidateSession(formData.get('id') as string);
}
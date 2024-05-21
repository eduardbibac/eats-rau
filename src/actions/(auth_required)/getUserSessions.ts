'use server';

import { validateRequest } from "@/auth/validateRequest";
import sql from "@/lib/db";
import { redirect } from "next/navigation";

export async function getUserSessions () {
  const { user } = await validateRequest();
  if (!user) {
		redirect("/login");
	}
  
  const data = await sql`SELECT * FROM user_session WHERE user_id=${user.id}`;
  return data;
}
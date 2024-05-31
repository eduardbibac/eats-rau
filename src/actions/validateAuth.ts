'use server';

import { validateRequest } from "@/actions/auth/validateRequest";
import sql from "@/lib/db";
import { redirect } from "@/navigation";

export async function validateAuth () {
  const { user } = await validateRequest();
  if (!user) {
		redirect("/login");
	}

  return true;
}
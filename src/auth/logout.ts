import 'server-only';

import { lucia,  } from "@/auth/lucia";
import {validateRequest} from "@/auth/validateRequest";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// export default async function Page() {
// 	return (
// 		<form action={logout}>
// 			<button>Sign out</button>
// 		</form>
// 	);
// }

export async function logout(): Promise<ActionResult> {
	"use server";
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/login");
}

interface ActionResult {
	error: string | null;
}
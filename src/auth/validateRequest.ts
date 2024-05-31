import 'server-only';

import { cookies } from "next/headers";
import { cache } from "react";

import { Lucia, type Session, type User } from "lucia";
import { lucia } from "@/auth/lucia";

// export const lucia = new Lucia();

export const validateRequest = cache(
	async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
		const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
		if (!sessionId) {return { user: null, session: null };}

		const result = await lucia.validateSession(sessionId);
		// next.js throws when you attempt to set cookie when rendering page
		try {
			if (result.session && result.session.fresh) {
				const sessionCookie = lucia.createSessionCookie(result.session.id);
				cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			}
			if (!result.session) {
				const sessionCookie = lucia.createBlankSessionCookie();
				cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			}
		} catch {}
		return result;
	}
);  


/* USAGE
:This function can then be used in server components and form actions to get the current session and user.


import { redirect } from "@/navigation";
import { validateRequest } from "@/lib/auth";

export default async function Page() {
	const { user } = await validateRequest();
	if (!user) {
		return redirect("/login");
	}
	return <h1>Hi, {user.username}!</h1>;
}

*/
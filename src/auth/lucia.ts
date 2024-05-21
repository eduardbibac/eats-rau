import 'server-only';
import { Lucia } from "lucia";
import { PostgresJsAdapter } from "@lucia-auth/adapter-postgresql";
import sql from "@/lib/db";

const adapter = new PostgresJsAdapter(sql, {
	user: "users",
	session: "user_session"
});

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		// this sets cookies with super long expiration
		// since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
		expires: false,
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		},
	},
    getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			entraID: attributes.ms_id,
			username: attributes.username,
			arole: attributes.arole
		};
	}
});

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	ms_id: number;
	username: string;
	arole: string;
}
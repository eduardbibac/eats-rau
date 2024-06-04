"use server";

import { lucia } from "@/actions/auth/lucia";
import { microsoft_SSO } from "@/actions/auth/sso";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { generateIdFromEntropySize } from "lucia";
import sql from "@/lib/db";
import { userAgent } from "next/server";
import type { DatabaseUser } from "@/types/dbTypes";
export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const storedCodeVerifier = cookies().get("ms_code_verifier")?.value ?? null;

  const storedState = cookies().get("ms_oauth_state")?.value ?? null;

  if (
    !code ||
    !state ||
    !storedState ||
    !storedCodeVerifier ||
    state !== storedState
  ) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await microsoft_SSO.validateAuthorizationCode(
      code,
      storedCodeVerifier,
    );
    const response = await fetch("https://graph.microsoft.com/oidc/userinfo", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    const msUser: MicrosoftUser = await response.json();

    const [existingUser]: [DatabaseUser] =
      await sql`SELECT * FROM users WHERE ms_id = ${msUser.sub}`;

    if (existingUser) {
      const session = await lucia.createSession(existingUser.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }

    const userId = generateIdFromEntropySize(10); // 16 characters long

    await sql`INSERT INTO USERS (id, ms_id, username, email) 
        VALUES (${userId}, ${msUser.sub}, ${msUser.name}, ${msUser.email})`;

    const { device, browser, os } = userAgent(request);
    const deviceString = [device.type ?? "", browser.name ?? "", os.name ?? ""]
      .join(" ")
      .toString();

    const session = await lucia.createSession(userId, { device: deviceString });
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    console.log(e);
    return new Response(null, {
      status: 500,
    });
  }
}

interface MicrosoftUser {
  sub: string;
  name: string;
  email: string;
}

import { MicrosoftEntraId } from "arctic";

// MICROSOFT SSO
// const entraId = new MicrosoftEntraId(tenantId, clientId, clientSecret, redirectURI);
export const microsoft_SSO  = new MicrosoftEntraId(
        process.env.MS_TENANT_ID!,
        process.env.MS_CLIENT_ID!,
        process.env.MS_CLIENT_SECRET!,
        process.env.MS_REDIRECT_URI!
    );

// Get user profile
// const url: URL = await entraId.createAuthorizationURL(state, codeVerifier, {
//     scopes: ["profile", "email"]
// });
// const tokens: MicrosoftEntraIdTokens = await entraId.validateAuthorizationCode(code, codeVerifier);
// const tokens: MicrosoftEntraIdTokens = await entraId.refreshAccessToken(refreshToken);
// const tokens = await entraId.validateAuthorizationCode(code, codeVerifier);
// const response = await fetch("https://graph.microsoft.com/oidc/userinfo", {
// 	headers: {
// 		Authorization: `Bearer ${tokens.accessToken}`
// 	}
// });
// const user = await response.json();
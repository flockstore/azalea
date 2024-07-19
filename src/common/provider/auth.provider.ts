import {logto} from "@/common/config/app";
import NextAuth, {User} from "next-auth";
import {JWT} from "@auth/core/jwt";

export const { auth, handlers, signIn } = NextAuth({
    providers: [
        {
            name: "logto",
            id: "logto",
            type: "oidc",
            wellKnown: "https://auth.ianfe.dev/oidc/.well-known/openid-configuration",
            issuer: "https://auth.ianfe.dev/oidc",
            clientId: logto.clientId,
            clientSecret: logto.secret,
            client: {
                id_token_signed_response_alg: "ES384",
            },
            authorization: {
                params: {
                    scope: "openid offline_access profile email urn:logto:scope:organizations custom_data",
                },
            },
            profile: (profile: any, tokens: any) => {
                console.log(profile);
                console.log({
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    organization: profile.organizations,
                    custom_data: profile.custom_data
                });
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    organization: profile.organizations,
                    custom_data: profile.custom_data
                };
            },
        }
    ],
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth;
        },
        jwt: async ({ token, profile }: { token: any; profile?: any }) => {
            if (profile) {
                token.organizations = profile.organizations;
                token.custom_data = profile.custom_data;
            }
            return token;
        },
        session: async ({ session, token }: { session: any; token: JWT }) => {
            session.user.organizations = token.organizations;
            session.user.custom_data = token.custom_data;
            return session;
        },
    },
});

export { auth as middleware } from "@/common/provider/auth.provider";

/**
 * Generates a logout URL for federated logout in Logto.
 */
export const logoutURL = () => {
    return "https://auth.ianfe.dev/oidc/session/end" +
        "?client_id=" + logto.clientId +
        "&post_logout_redirect_uri=" + encodeURIComponent(logto.logoutURL!);
};
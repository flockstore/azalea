import {JWT, User} from "next-auth";
import {logto} from "@/config/app";

/**
 * Defines the auth provider for Logto.
 */
export const authProvider = {
    session: {
        strategy: "jwt"
    },
    providers: [
        {
            id: "logto",
            name: "logto",
            type: "oauth",
            wellKnown: "https://auth.ianfe.dev/oidc/.well-known/openid-configuration",
            authorization: {
                params: {
                    scope: "openid offline_access profile email urn:logto:scope:organizations custom_data",
                },
            },
            clientId: logto.clientId,
            clientSecret: logto.secret,
            client: {
                id_token_signed_response_alg: "ES384",
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
        jwt: async ({ token, profile }: { token: JWT; profile?: User }) => {
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
    }
};

/**
 * Generates a logout URL for federated logout in Logto.
 */
export const logoutURL = () => {
    return "https://auth.ianfe.dev/oidc/session/end" +
        "?client_id=" + logto.clientId +
        "&post_logout_redirect_uri=" + encodeURIComponent(logto.logoutURL!);
};

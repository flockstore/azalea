import {AuthOptions} from "next-auth";
import {logto} from "@/config/app";

/**
 * Defines the auth provider for Logto.
 */
export const authProvider: AuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        {
            id: "logto",
            name: "logto",
            type: "oauth",
            wellKnown: "https://auth.ianfe.dev/oidc/.well-known/openid-configuration",
            authorization: {params: {scope: "openid offline_access profile email organization picture"}},
            clientId: logto.clientId,
            clientSecret: logto.secret,
            client: {
                id_token_signed_response_alg: "ES384",
            },
            profile: (profile: any) => {
                return {
                    id: profile.sub,
                    name: profile.name ?? profile.username,
                    email: profile.email,
                    image: profile.picture,
                    organization: profile.organization,
                };
            },
        }
    ]
};

/**
 * Generates a logout URL for federated logout in Logto.
 */
export const logoutURL = () => {
    return "https://auth.ianfe.dev/oidc/session/end" +
        "?client_id=" + logto.clientId +
        "&post_logout_redirect_uri=" + encodeURIComponent(logto.logoutURL!);
};
declare module "next-auth" {
    import {DefaultSession, DefaultUser} from "next-auth";

    interface Session {
        user: {
            organizations?: string[];
            custom_data?: Record<string, any>;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        organizations?: string[];
        custom_data?: Record<string, any>;
    }

    interface JWT {
        organizations?: string[];
        custom_data?: Record<string, any>;
    }
}
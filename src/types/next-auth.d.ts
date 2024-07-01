declare module "next-auth" {
    import {DefaultSession, DefaultUser} from "next-auth";

    interface Session extends DefaultSession {
        user: {
            name: string;
            email: string;
            image: string;
            organizations: string[];
            custom_data: Record<string, any>;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        name: string;
        email: string;
        image: string;
        organizations: string[];
        custom_data: Record<string, any>;
    }

    interface JWT {
        name: string;
        email: string;
        image: string;
        organizations: string[];
        custom_data: Record<string, any>;
    }
}
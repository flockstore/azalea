import NextAuth from "next-auth";
import {authProvider} from "@/provider/auth.provider";

/**
 * Defines next-auth API route provider.
 */
const handler = NextAuth(authProvider) as unknown;
export {handler as GET, handler as POST};
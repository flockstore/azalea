import {Account, Client, ID} from "appwrite";
import {appWrite} from "@/config/app";

/**
 * Client and account creation from AppWrite.
 */
export const client = new Client();
client
    .setEndpoint(appWrite.endpoint!)
    .setProject(appWrite.app!);
const account = new Account(client);

/**
 * Sign in utility function.
 * @param email to send magic link.
 */
export const signIn = async (email: string) => {
    await account.createMagicURLToken(ID.unique(), email, `${window.location.protocol}//${window.location.host}`);
};

/**
 * Provides the user from account.
 */
export const getUser = async () => {
    return account.get();
};

/**
 * Sign out from actual session.
 */
export const signOut = async () => {
    await account.deleteSession("current");
};
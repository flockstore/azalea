import {Account, Client, ID} from "appwrite";
import {appWrite} from "@/config/app";
import {User} from "@/model/user";

/**
 * Client and account creation from AppWrite.
 */
export const client = new Client();
client
    .setEndpoint(appWrite.endpoint!)
    .setProject(appWrite.app!);
export const account = new Account(client);

/**
 * Sign in utility function.
 * @param email to send magic link.
 */
export const signIn = async (email: string) => {
    await account.createMagicURLToken(ID.unique(), email, `${window.location.protocol}//${window.location.host}`);
};

/**
 * Provides the profile from account.
 */
export const getUser = async () => {
    return await account.get() as User;
};

/**
 * Sign out from actual session.
 */
export const signOut = async () => {
    await account.deleteSession("current");
};

/**
 * Redeems a session for actual account.
 * @param userId from magic link.
 * @param secret from magic link.
 */
export const redeemAccountSession = async (userId: string, secret: string) => {
    await account.createSession(userId, secret);
};
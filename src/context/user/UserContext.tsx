import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Account} from "appwrite";
import {client, getUser, signOut} from "@/provider/appwrite.provider";
import {getLogger} from "@/provider/logging.provider";
import {notifications} from "@mantine/notifications";
import {session} from "@/config/translation";
import {useTranslations} from "next-intl";
import {useRouter} from "@/middleware";
import {useLoading} from "@/context/loading/LoadingContext";

/**
 * Defines the component props.
 */
export interface UserContextType {
    user: any | null;
    setUser: (user: any) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * Defines a context where the user logged from AppWrite is provided.
 * @param children to render inside.
 * @constructor
 */
export const UserProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<any | null>(null);
    const { loading, setLoading } = useLoading();
    const t = useTranslations();
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser();
                setUser(user);
            } catch (error) {
                getLogger().error("Error while retrieving user", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [setLoading]);

    useEffect(() => {

        const createSessionFromParams = async () => {

            const queryParams = new URLSearchParams(window.location.search);
            const secret = queryParams.get("secret");
            const userId = queryParams.get("userId");

            if (!secret || !userId) {
                return;
            }

            setLoading(true);
            try {
                const account = new Account(client);
                await account.createSession(userId!, secret!);
                const userData = await account.get();
                setUser(userData);
            } catch (error) {
                getLogger().error("Error while retrieving user session", error);
                notifications.show({
                    title: t(session.redeemError.title),
                    message: t(session.redeemError.message),
                    color: "red"
                });
                await signOut();
            } finally {
                router.replace("/");
                setLoading(false);
            }

        };

        if (user || loading) {
            return;
        }
        createSessionFromParams();

    }, [loading, router, setLoading, t, user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
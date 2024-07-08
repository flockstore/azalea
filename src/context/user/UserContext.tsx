// /context/UserContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Account } from "appwrite";
import {client} from "@/provider/appwrite.provider";
import {getLogger} from "@/provider/logging.provider";

type UserContextType = {
    user: any | null;
    loading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const account = new Account(client);

        const getUser = async () => {
            try {
                const user = await account.get();
                setUser(user);
            } catch (error) {
                getLogger().error("Error while retrieving user", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
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

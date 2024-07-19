import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {getUser, redeemAccountSession} from "@/provider/appwrite.provider";
import {getLogger} from "@/provider/logging.provider";
import {notifications} from "@mantine/notifications";
import {session} from "@/common/config/translation";
import {useRouter} from "@/middleware";
import {useTranslations} from "next-intl";

export interface LayoutContextProps {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    dashboardAccess: boolean;
    setDashboardAccess: (access: boolean) => void;
}

export const defaultValues: LayoutContextProps = {
    loading: false,
    setLoading: () => {},
    dashboardAccess: false,
    setDashboardAccess: () => {}
};

const LayoutContext = createContext<LayoutContextProps>(defaultValues);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [dashboardAccess, setDashboardAccess] = useState(false);
    const router = useRouter();
    const t = useTranslations();

    useEffect(() => {

        const checkSession = async () => {

            setLoading(true);

            try {
                await getUser();
                setDashboardAccess(true);
                setLoading(false);
                return;
            } catch (error) {
                getLogger().error(error, "Error while checking if profile is logged:");
            }

            const queryParams = new URLSearchParams(window.location.search);
            const secret = queryParams.get("secret");
            const userId = queryParams.get("userId");

            // If session granting parameters not provided, unload.
            if (!secret || !userId) {
                setLoading(false);
                router.push("/auth/login");
                return;
            }

            try {
                await redeemAccountSession(userId!, secret!);
                setLoading(false);
                setDashboardAccess(true);
            } catch (error) {
                getLogger().error(error, "Error redeeming session:");
                notifications.show({
                    color: "red",
                    title: t(session.redeemError.title),
                    message: t(session.redeemError.message)
                });
            }
        };

        checkSession();

    }, [dashboardAccess]);

    return <LayoutContext.Provider value={{
        loading,
        setLoading,
        dashboardAccess,
        setDashboardAccess
    }}>
        {children}
    </LayoutContext.Provider>;
};

export const useLayout = () => useContext(LayoutContext);
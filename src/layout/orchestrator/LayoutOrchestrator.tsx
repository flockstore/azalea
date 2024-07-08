"use client";

import React, {useEffect} from "react";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import LoginLayout from "@/layout/login/LoginLayout";
import {useUser} from "@/context/user/UserContext";
import {Center, Loader} from "@mantine/core";
import {notifications, Notifications} from "@mantine/notifications";
import {useRouter} from "@/middleware";
import {Account} from "appwrite";
import {client} from "@/provider/appwrite.provider";
import {getLogger} from "@/provider/logging.provider";
import {auth, session} from "@/config/translation";
import {useTranslations} from "next-intl";

/**
 * Final abstraction of layout for further
 * orchestration or conditioning of entire
 * website layout.
 * @param children to be rendered inside.
 * @constructor
 */
const LayoutOrchestrator = ({children}: { children: React.ReactNode }) => {

    const {user, loading, setUser} = useUser();

    if (loading) {
        return <Center
            w="100%"
            h="100vh"
        >
            <Loader
                color="violet"
            />
        </Center>;
    }

    if (!user) {
        return (<LoginLayout>
            {children}
        </LoginLayout>);
    }

    return (<DashboardLayout>
        {children}
    </DashboardLayout>);
};

export default LayoutOrchestrator;
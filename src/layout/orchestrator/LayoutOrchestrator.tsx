"use client";

import React from "react";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import LoginLayout from "@/layout/login/LoginLayout";
import {useUser} from "@/context/user/UserContext";
import {Center, Loader} from "@mantine/core";
import {useLoading} from "@/context/loading/LoadingContext";

/**
 * Final abstraction of layout for further
 * orchestration or conditioning of entire
 * website layout.
 * @param children to be rendered inside.
 * @constructor
 */
const LayoutOrchestrator = ({children}: { children: React.ReactNode }) => {

    const {user} = useUser();
    const {loading} = useLoading();

    if (loading) {
        return <Center
            w="100%"
            h="100vh"
        >
            <Loader
                color="violet"
                type="dots"
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
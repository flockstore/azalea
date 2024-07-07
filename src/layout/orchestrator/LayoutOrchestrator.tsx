"use client";

import React from "react";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import {signIn, useSession} from "next-auth/react";
import {Flex, Loader} from "@mantine/core";
import LoginLayout from "@/layout/login/LoginLayout";

/**
 * Final abstraction of layout for further
 * orchestration or conditioning of entire
 * website layout.
 * @param children to be rendered inside.
 * @constructor
 */
const LayoutOrchestrator = ({children}: { children: React.ReactNode }) => {

    const test = true;

    if (test) {
        return (<LoginLayout>{children}</LoginLayout>);
    }

    return (<DashboardLayout>
        {children}
    </DashboardLayout>);
};

export default LayoutOrchestrator;
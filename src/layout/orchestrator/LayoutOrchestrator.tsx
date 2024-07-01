"use client";

import React from "react";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import {signIn, useSession} from "next-auth/react";
import {Flex, Loader} from "@mantine/core";

/**
 * Final abstraction of layout for further
 * orchestration or conditioning of entire
 * website layout.
 * @param children to be rendered inside.
 * @constructor
 */
const LayoutOrchestrator = ({children}: { children: React.ReactNode }) => {

    const session = useSession();

    if (session.status === "unauthenticated") {
        signIn("logto");
        return <Flex
            align="center"
            justify="center"
            w="100vw"
            h="100vh"
        >
            <Loader color="purple" />
        </Flex>;
    }

    return (<DashboardLayout>
        {children}
    </DashboardLayout>);
};

export default LayoutOrchestrator;
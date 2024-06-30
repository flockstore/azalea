"use client";

import {useTranslations} from "next-intl";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Box, Button, Text, Tooltip} from "@mantine/core";
import {useSidebar} from "@/context/sidebar/SidebarContext";

const Home = () => {

    const t = useTranslations();
    const session = useSession();
    const router = useRouter();

    const logout = () => {
        signOut({redirect: false}).then(result => {
            router.push("/api/auth/federated-logout");
        });
    };

    const login = () => {
        signIn("logto");
    };

    return (
        <div>
            {JSON.stringify(session)}
            <Button onClick={login}>Sign In</Button>
            <Button onClick={logout}>Logout</Button>
            <Box
                m="xl"
                h="1500px"
                w="50px"
                bg="orange"
            >CHILE</Box>
            <Tooltip label="xd">
                <Text>aaa</Text>
            </Tooltip>
        </div>
    );

};

export default Home;
"use client";

import {useTranslations} from "next-intl";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Box, Button, useMantineColorScheme} from "@mantine/core";
import {useSidebar} from "@/context/sidebar/SidebarContext";

const Home = () => {

    const t = useTranslations();
    const session = useSession();
    const router = useRouter();
    const { setColorScheme, colorScheme } = useMantineColorScheme();
    const { toggle, isExpanded } = useSidebar();

    const logout = () => {
        signOut({redirect: false}).then(result => {
            router.push("/api/auth/federated-logout");
        });
    };

    const login = () => {
        signIn("logto");
    };

    const changeScheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark" );
    };

    return (
        <div>
            {JSON.stringify(session)}
            <Button onClick={login}>Sign In</Button>
            <Button onClick={logout}>Logout</Button>
            <Button onClick={() => changeScheme()}>Toggle scheme</Button>
            <Button onClick={() => toggle()}>Toggle</Button>
            <Box
                m="xl"
                h="1500px"
                w="50px"
                bg="orange"
            >CHILE</Box>
        </div>
    );

};

export default Home;
"use client";

import {Box, Grid} from "@mantine/core";
import React, {ReactNode, useEffect} from "react";
import DropNavigation, {DropNavigationItem} from "@/components/drop-navigation/DropNavigation";
import {account, navigation} from "@/config/translation";
import {IconMail, IconUser} from "@tabler/icons-react";
import {useBreadcrumb} from "@/context/breadcrumb/BreadcrumbContext";

import styles from "./AccountViewLayout.module.css";

/**
 * Defines the component props.
 */
type Props = {
    children: ReactNode;
};

/**
 * Define links to be used.
 */
const links: DropNavigationItem[] = [
    {
        text: account.menu.basic,
        link: "/account",
        icon: <IconUser/>
    },
    {
        text: account.menu.email,
        link: "/account/email",
        icon: <IconMail/>
    }
];

/**
 * Defines the rendering behaviour of the account view layout.
 * @param children to render inside.
 * @constructor
 */
const AccountViewLayout = ({children}: Props) => {

    const { setItems} = useBreadcrumb();
    useEffect(() => {
        setItems([
            {link: "/account", label: navigation.account, active: true},
        ]);
    }, [setItems]);

    return (
        <Grid w="100%">
            <Grid.Col span={{base: 12, lg: 3}} h="100%">
                <DropNavigation items={links} maxHeight="550px"/>
            </Grid.Col>
            <Grid.Col span={{base: 12, lg: 9}}>
                <Box className={styles.content}>
                    {children}
                </Box>
            </Grid.Col>
        </Grid>
    );
};

export default AccountViewLayout;
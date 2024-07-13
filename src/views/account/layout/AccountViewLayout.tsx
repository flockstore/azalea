"use client";

import {Grid} from "@mantine/core";
import React, {ReactNode} from "react";
import DropNavigation, {DropNavigationItem} from "@/components/drop-navigation/DropNavigation";
import {account} from "@/config/translation";
import {IconMail, IconUser} from "@tabler/icons-react";

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
    return (
        <Grid w="100%">
            <Grid.Col span={{base: 12, md: 3}} h="100%">
                <DropNavigation items={links} maxHeight="550px"/>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 9}}>
                {children}
            </Grid.Col>
        </Grid>
    );
};

export default AccountViewLayout;
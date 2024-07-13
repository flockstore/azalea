"use client";

import DropMenu from "@/components/drop-menu/DropMenu";
import {Button, Flex} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

import styles from "./DropNavigation.module.css";
import {useTranslations} from "next-intl";
import {account} from "@/config/translation";
import {usePathname, useRouter} from "@/middleware";
import React from "react";

/**
 * Defines a Dropdown Navigation item to be rendered inside.
 */
export interface DropNavigationItem {
    text: string;
    link: string;
    icon: React.ReactNode;
}

/**
 * Defines the component props.
 */
export interface DropNavigationProps {
    items: DropNavigationItem[];
    maxHeight: string;
}

/**
 * Defines the rendering behaviour for a drop navigation menu,
 * where it uses a drop menu and a tree of navigation links.
 * @param items to render from tree.
 * @param maxHeight parameter for {@link DropMenu}
 * @constructor
 */
const DropNavigation = ({items, maxHeight}: DropNavigationProps) => {

    const large = useMediaQuery("(min-width: 1200px)") ?? false;
    const t = useTranslations();
    const path = usePathname();
    const router = useRouter();

    return (
        <Flex>
            <DropMenu
                slug={t(account.menu.title)}
                responsive={!large}
                maxHeight={maxHeight}
            >
                <Flex className={styles.container}>
                    {items.map((link) => (
                        <Button
                            key={link.text}
                            role="button"
                            variant={path === link.link ? "primary" : "default"}
                            onClick={() => router.push(link.link)}
                            leftSection={link.icon}
                            my="xs"
                            fullWidth
                        >{t(link.text)}</Button>
                    ))}
                </Flex>
            </DropMenu>
        </Flex>
    );

};

export default DropNavigation;
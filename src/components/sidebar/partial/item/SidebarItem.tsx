"use client";

import {SidebarNavItem} from "@/components/sidebar/partial/nav/SidebarNav";
import {Flex, Text} from "@mantine/core";
import {useTranslations} from "next-intl";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {usePathname} from "@/middleware";

import styles from "./SidebarItem.module.css";

export interface SidebarItemProps {
    item: SidebarNavItem;
}

const SidebarItem = ({item}: SidebarItemProps) => {

    const t = useTranslations();
    const {isExpanded} = useSidebar();

    const route = usePathname();
    const active = route.startsWith(item.link);

    const expansionStyle = isExpanded() ?
        styles.sidebarItemExpanded :
        styles.sidebarItem;
    const activeStyle = active ? styles.sidebarItemActive : "";

    return (
        <Flex className={`${expansionStyle} ${activeStyle}`}>
            <Flex className={styles.sidebarItemSlug}>
                <Flex className={styles.sidebarItemIcon}>
                    {item.icon}
                </Flex>
                {isExpanded() && <Text>{t(item.translation)}</Text>}
            </Flex>
        </Flex>
    );
};

export default SidebarItem;
import {Flex} from "@mantine/core";
import React from "react";
import SidebarItem from "@/components/sidebar/partial/item/SidebarItem";

import styles from "./SidebarNav.module.css";
import {useTranslations} from "next-intl";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {usePathname, useRouter} from "@/middleware";

export interface SidebarNavItem {
    icon: React.ReactNode;
    translation: string;
    link: string;
}

/**
 * Defines the component props.
 */
export interface SidebarNavProps {
    items: SidebarNavItem[];
}

const SidebarNav = ({items}: SidebarNavProps) => {

    const t = useTranslations();
    const {isExpanded} = useSidebar();
    const route = usePathname();
    const router = useRouter();

    return (
        <Flex className={styles.sidebarNav}>
            {items.map(item => (
                <SidebarItem
                    key={item.translation}
                    icon={item.icon}
                    expanded={isExpanded}
                    text={t(item.translation)}
                    action={() => router.push(item.link)}
                    active={route.startsWith(item.link)}
                />
            ))}
        </Flex>
    );
};

export default SidebarNav;
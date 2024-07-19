import {Flex} from "@mantine/core";
import React from "react";
import {useTranslations} from "next-intl";
import {useSidebar} from "@/module/dashboard/context/sidebar/SidebarContext";
import {usePathname} from "@/middleware";
import {useRouter} from "next/navigation";

import styles from "./SidebarNav.module.css";
import SidebarItem from "@/module/dashboard/components/sidebar/partial/item/SidebarItem";

/**
 * Defines the properties for a sidebar element.
 */
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

/**
 * Defines the rendering behaviour of a sidebar hook
 * which is in charge of rendering the navigation items
 * correctly depending on the sidebar context.
 * @param items to render
 * @constructor
 */
const SidebarNav = ({items}: SidebarNavProps) => {

    const t = useTranslations();
    const {isExpanded} = useSidebar();
    const route = usePathname();
    const router = useRouter();

    return (
        <Flex className={styles.sidebarNav} data-testid="sidebar-nav">
            {items.map(item => (
                <SidebarItem
                    key={item.translation}
                    expanded={isExpanded}
                    text={t(item.translation)}
                    action={() => router.push(item.link)}
                    active={route.startsWith(item.link)}
                    notifications={0}
                    icon={item.icon}
                />
            ))}
        </Flex>
    );
};

export default SidebarNav;
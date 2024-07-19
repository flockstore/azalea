"use client";

import {Flex, Tooltip} from "@mantine/core";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {motion} from "framer-motion";
import styles from "./SidebarShrink.module.css";
import {IconChevronRight} from "@tabler/icons-react";
import {useTranslations} from "next-intl";
import {sidebar} from "@/common/config/translation";

const SidebarShrink = () => {

    const { isExpanded, toggle } = useSidebar();
    const t = useTranslations();
    const tooltip = isExpanded ? sidebar.shrink : sidebar.expand;

    return (
        <Flex className={styles.shrink}>
            <Tooltip
                label={t(tooltip)}
                position="right"
            >
                <Flex
                    data-testid="sidebar-shrink"
                    component={motion.section}
                    onClick={toggle} style={{ cursor: "pointer" }}
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <IconChevronRight />
                </Flex>
            </Tooltip>
        </Flex>
    );
};

export default SidebarShrink;

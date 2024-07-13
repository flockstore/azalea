"use client";

import {Box, Flex} from "@mantine/core";
import styles from "./DropMenu.module.css";
import {ReactNode, useState} from "react";
import {IconChevronDown} from "@tabler/icons-react";
import {motion} from "framer-motion";

/**
 * Define the component props.
 */
export interface DropMenuProps {
    responsive: boolean;
    slug: string;
    children: ReactNode;
    maxHeight: string;
}

/**
 * Defines the rendering behaviour of a conditional dropdown menu,
 * which acts as collapsable dropdown when responsive is marked or
 * always visible when not marked.
 * @param responsive to allow menu collapse ability.
 * @param slug to show as collapse button.
 * @param children to render inside.
 * @param maxHeight which chan be occupied by the children
 * @constructor
 */
const DropMenu = ({responsive, slug, children, maxHeight}: DropMenuProps) => {

    const [active, setActive] = useState(false);
    const grantedHeight = responsive ? active ? maxHeight : "0" : maxHeight;

    return (
        <Box className={styles.menu} data-testid={`dm-${slug}`}>
            {responsive &&
                <Flex
                    className={`${styles.slug} ${active ? styles.slugActive : ""}`}
                    onClick={() => setActive(!active)}
                    data-testid={`dm-slug-${slug}`}
                >
                    <span>{slug}</span>
                    <Flex className={active ? styles.chevronActive : ""}><IconChevronDown/></Flex>
                </Flex>
            }
            <Flex
                data-testid={`dm-content-${slug}`}
                data-active={!responsive || active}
                component={motion.nav}
                className={styles.content}
                mah={grantedHeight}
                initial={{maxHeight: grantedHeight}}
                animate={{maxHeight: grantedHeight}}
            >
                {children}
            </Flex>
        </Box>
    );

};

export default DropMenu;
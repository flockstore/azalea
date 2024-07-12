"use client";

import {Box, Text, Flex} from "@mantine/core";
import styles from "./DropMenu.module.css";
import {ReactNode, useState} from "react";
import {IconChevronDown} from "@tabler/icons-react";

export interface DropMenuProps {
    responsive: boolean;
    slug: string;
    children: ReactNode;
    height: string;
}

const DropMenu = ({responsive, slug, children, height}: DropMenuProps) => {

    const [active, setActive] = useState(false);
    const grantedHeight = responsive ? active ? height : "0" : height;

    return (
        <Box className={styles.menu}>
            {responsive &&
                <Flex
                    className={styles.slug}
                    onClick={() => setActive(!active)}
                >
                    <Text>{slug}</Text>
                    <IconChevronDown/>
                </Flex>
            }
            <Flex
                className={styles.content}
                h={grantedHeight}
            >
                {children}
            </Flex>
        </Box>
    );

};

export default DropMenu;
import {Box, Flex, Text, Title} from "@mantine/core";
import {ReactNode} from "react";

import styles from "./ContextBanner.module.css";

/**
 * Defines the component props.
 */
export interface ContextBannerProps {
    title: string;
    subtitle: string;
    picture: ReactNode;
    bgColor: string;
    color?: string;
}

/**
 * Defines the rendering behaviour for a context banner which can serve
 * as system-state indicative.
 * @param title to display.
 * @param subtitle to display.
 * @param picture to display.
 * @param bgColor to set as background.
 * @param color to set as text color.
 * @constructor
 */
const ContextBanner = ({title, subtitle, picture, bgColor, color}: ContextBannerProps) => {
    return (
        <Flex
            className={styles.banner}
            bg={bgColor}
        >
            <Flex className={styles.picture}>
                {picture}
            </Flex>

            <Box>
                <Title c={color}>{title}</Title>
                <Text c={color}>{subtitle}</Text>
            </Box>
        </Flex>
    );
};

export default ContextBanner;
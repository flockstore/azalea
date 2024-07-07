import React from "react";
import {Flex, Grid} from "@mantine/core";

import styles from "./LoginLayout.module.css";
import LoginPicture from "@/layout/login/components/picture/LoginPicture";

/**
 * Defines the rendering behaviour of the dashboard
 * layout, including a sidebar and children content.
 * @param children
 * @constructor
 */
const LoginLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <Flex className={styles.layout}>
            <Flex className={styles.pictureCol}><LoginPicture/></Flex>
            <Flex>{children}</Flex>
        </Flex>
    );
};

export default LoginLayout;
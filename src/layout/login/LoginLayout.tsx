import React from "react";
import {Flex} from "@mantine/core";

import styles from "./LoginLayout.module.css";
import LoginPicture from "@/layout/login/components/picture/LoginPicture";
import LoginHeader from "@/layout/login/components/header/LoginHeader";

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
            <Flex className={styles.main}>
                <Flex className={styles.header}><LoginHeader/></Flex>
                <Flex className={styles.content}>{children}</Flex>
            </Flex>
        </Flex>
    );
};

export default LoginLayout;
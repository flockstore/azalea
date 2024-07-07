import {Flex, Image} from "@mantine/core";

import styles from "./LoginPicture.module.css";

const LoginPicture = () => {
    return (
        <Flex className={styles.container}>
            <Image
                src="/img/login_light.svg"
                alt="Login picture"
                className={styles.image}
            ></Image>
        </Flex>
    );
};

export default LoginPicture;
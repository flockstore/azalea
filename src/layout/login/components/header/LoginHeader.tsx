 "use client";

 import {Flex, useMantineColorScheme, useMantineTheme} from "@mantine/core";
 import Logo from "@/common/components/logo/Logo";

 import styles from "./LoginHeader.module.css";
 import SidebarSwitcher from "@/components/sidebar/partial/switcher/SidebarSwitcher";

 const LoginHeader = () => {

    const {colorScheme} = useMantineColorScheme();
    const {colors} = useMantineTheme();
    const logoLight = colors["azalea-blue"][4];
    const logoDark = colors.dark[3];
    const logo = colorScheme === "dark" ? logoDark : logoLight;

    const width = 42;

    return (
        <Flex className={styles.header} data-testid="login-header">
            <Flex className={styles.logo}>
                <Logo
                    color={logo}
                    collapsed={false}
                />
            </Flex>
            <SidebarSwitcher width={width}/>
        </Flex>
    );
};

export default LoginHeader;
import {Burger, Flex, useMantineTheme} from "@mantine/core";

import styles from "./HeaderResponsive.module.css";
import Logo from "@/components/logo/Logo";
import {useSidebar} from "@/context/sidebar/SidebarContext";

const HeaderResponsive = () => {

    const { colors } = useMantineTheme();
    const { toggleResponsive , isResponsiveEnabled} = useSidebar();

    const logo = colors["azalea-blue"][4];

    const switchMenu = () => {
        toggleResponsive();
    };

    return (
        <Flex className={styles.header}>
            <Flex className={styles.logo}>
                <Logo color={logo} collapsed={false}/>
            </Flex>
            <Flex>
                <Burger
                    size="lg"
                    opened={isResponsiveEnabled()}
                    onClick={switchMenu}
                    aria-label="Toggle navigation"
                />
            </Flex>
        </Flex>
    );

};

export default HeaderResponsive;
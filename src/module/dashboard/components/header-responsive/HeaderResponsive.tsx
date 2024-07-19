import {Burger, Flex, useMantineTheme} from "@mantine/core";

import styles from "./HeaderResponsive.module.css";
import Logo from "@/common/components/logo/Logo";
import {useSidebar} from "@/module/dashboard/context/sidebar/SidebarContext";

const HeaderResponsive = () => {

    const { colors } = useMantineTheme();
    const { toggleResponsive , isResponsiveEnabled} = useSidebar();

    const logo = colors["azalea-blue"][4];

    const switchMenu = () => {
        toggleResponsive();
    };

    return (
        <Flex className={styles.header} data-testid="responsive-header">
            <Flex className={styles.logo}>
                <Logo color={logo} collapsed={false}/>
            </Flex>
            <Flex>
                <Burger
                    data-testid="header-burger"
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
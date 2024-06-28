"use client";

import {ActionIcon, Flex, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import Logo from "@/components/logo/Logo";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {IconMoon, IconSun} from "@tabler/icons-react";

const SidebarHeader = () => {

    const { setColorScheme, colorScheme } = useMantineColorScheme();
    const { colors } = useMantineTheme();
    const { isExpanded } = useSidebar();

    const logoLight = colors["azalea-blue"][4];
    const logoDark = colors.dark[4];
    const logo =
        isExpanded() ?
        colorScheme === "dark" ? logoDark : logoLight : logoLight;

    const changeScheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark" );
    };

    return (
        <Flex
            direction={isExpanded() ? "row" : "column"}
            component="section"
            justify="space-between"
            align="center"
            w="100%"
            my="xl"
            px={isExpanded() ? "xl" : "lg"}
        >
            <Flex
                pos="relative"
                top={isExpanded() ? "-3px" : "0"}
                w={isExpanded() ? "120px" : "75%"}
                mb={isExpanded() ? "0" : "lg"}
            >
                <Logo
                    color={logo}
                    collapsed={!isExpanded()}
                />
            </Flex>
            <ActionIcon
                size="xl"
                onClick={changeScheme}
                variant="default"
            >
                {
                    colorScheme === "dark" ?
                        <IconSun/> : <IconMoon/>
                }
            </ActionIcon>
        </Flex>
    );
};

export default SidebarHeader;
import {Flex, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import {motion} from "framer-motion";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import SidebarHeader from "@/components/sidebar/partial/header/SidebarHeader";
import SidebarNav from "@/components/sidebar/partial/nav/SidebarNav";
import {navigationItems} from "@/config/navigation";

const Sidebar = () => {

    const { colorScheme } = useMantineColorScheme();
    const { colors } = useMantineTheme();
    const { isExpanded } = useSidebar();

    const darkBg = colors.dark[9];
    const lightBg = "white";
    const bg = colorScheme === "dark" ? darkBg : lightBg;

    const darkBorder = colors.dark[5];
    const lightBorder = colors.gray[1];
    const border = colorScheme === "dark" ? darkBorder : lightBorder;

    const width = isExpanded() ? "270px" : "100px";

    return (
        <Flex
            component={motion.aside}
            pos="sticky" top="0" left="0"
            w={width} h="100vh"
            bg={bg}
            style={{
                borderRight: `1px solid ${border}`
            }}
            initial={{ width }} animate={{ width }}
            align="start"
            direction="column"
        >
            <SidebarHeader/>
            <SidebarNav items={navigationItems}/>
        </Flex>
    );
};

export default Sidebar;

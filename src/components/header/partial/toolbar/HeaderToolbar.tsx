import {Flex, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import Logo from "@/common/components/logo/Logo";

const HeaderToolbar = () => {

    const { colors } = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();
    const color = colorScheme === "light" ? colors.gray[4] : colors.dark[4];

    return (
        <Flex w="40px" align="center">
            <Logo color={color} collapsed={true}></Logo>
        </Flex>
    );
};

export default HeaderToolbar;
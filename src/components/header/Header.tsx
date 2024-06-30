import {Flex} from "@mantine/core";
import HeaderBreadcrumb from "@/components/header/partial/breadcrumb/HeaderBreadcrumb";

const Header = () => {
    return (
        <Flex
            component="header"
            my="xl"
            w="100%"
        >
            <HeaderBreadcrumb/>
        </Flex>
    );
};

export default Header;
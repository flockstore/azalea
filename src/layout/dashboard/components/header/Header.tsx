import {Flex} from "@mantine/core";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import HeaderBreadcrumb from "@/layout/dashboard/components/header/partial/breadcrumb/HeaderBreadcrumb";
import HeaderToolbar from "@/layout/dashboard/components/header/partial/toolbar/HeaderToolbar";

const Header = () => {

    const { canCollapse } = useSidebar();

    return (
        <Flex
            data-testid="header"
            component="header"
            my="xl"
            w="100%"
            justify="space-between"
            align="center"
        >
            <HeaderBreadcrumb/>
            {canCollapse && <HeaderToolbar/>}
        </Flex>
    );
};

export default Header;
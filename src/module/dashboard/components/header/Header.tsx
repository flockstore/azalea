import {Flex} from "@mantine/core";
import {useSidebar} from "@/module/dashboard/context/sidebar/SidebarContext";
import HeaderBreadcrumb from "@/module/dashboard/components/header/partial/breadcrumb/HeaderBreadcrumb";
import HeaderToolbar from "@/module/dashboard/components/header/partial/toolbar/HeaderToolbar";

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
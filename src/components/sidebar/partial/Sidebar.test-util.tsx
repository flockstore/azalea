import {useSidebar} from "@/context/sidebar/SidebarContext";

/**
 * Setup sidebar mock values.
 * @param active if the sidebar is expanded.
 * @param responsiveEnabled if responsive mode is enabled.
 * @param toggleResponsive to mock.
 */
export const setupSidebarMockValues = (
    active: boolean,
    responsiveEnabled: boolean = false,
    toggleResponsive: any = jest.fn()
) => {
    const mockUseSidebar = useSidebar as jest.Mock;
    mockUseSidebar.mockReturnValue({
        isExpanded: active,
        isResponsiveEnabled: () => responsiveEnabled,
        toggleResponsive
    });
};
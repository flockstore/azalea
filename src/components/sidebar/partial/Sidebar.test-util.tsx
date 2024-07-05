import {useSidebar} from "@/context/sidebar/SidebarContext";

/**
 * Setup sidebar mock values.
 * @param active if the sidebar is expanded.
 * @param responsiveEnabled if responsive mode is enabled.
 */
export const setupSidebarMockValues = (active: boolean, responsiveEnabled: boolean = false) => {
    const mockUseSidebar = useSidebar as jest.Mock;
    mockUseSidebar.mockReturnValue({
        isExpanded: active,
        isResponsiveEnabled: () => responsiveEnabled
    });
};
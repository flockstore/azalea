import {useSidebar} from "@/module/dashboard/context/sidebar/SidebarContext";

/**
 * Setup sidebar mock values.
 * @param active if the sidebar is expanded.
 * @param responsiveEnabled if responsive mode is enabled.
 * @param toggleResponsive to mock.
 * @param canCollapse to mock.
 */
export const setupSidebarMockValues = (
    active: boolean,
    responsiveEnabled: boolean = false,
    toggleResponsive: any = jest.fn(),
    canCollapse: boolean = true
) => {
    const mockUseSidebar = useSidebar as jest.Mock;
    mockUseSidebar.mockReturnValue({
        isExpanded: active,
        isResponsiveEnabled: () => responsiveEnabled,
        toggleResponsive,
        canCollapse
    });
};
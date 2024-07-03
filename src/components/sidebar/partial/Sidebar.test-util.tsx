import {useSidebar} from "@/context/sidebar/SidebarContext";

/**
 * Setup sidebar mock values.
 * @param active if collapse must be granted.
 */
export const setupSidebarMockValues = (active: boolean) => {
    const mockUseSidebar = useSidebar as jest.Mock;
    mockUseSidebar.mockReturnValue({ isExpanded: active });
};
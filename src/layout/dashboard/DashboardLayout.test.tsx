import {fireEvent} from "@testing-library/react";
import DashboardLayout from "./DashboardLayout";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {render} from "@/common/test/util";

jest.mock("@/components/header/Header", () =>
    // eslint-disable-next-line react/display-name
    () => <div data-testid="mock-header">Mock Header</div>
);

jest.mock("@/components/header-responsive/HeaderResponsive", () =>
    // eslint-disable-next-line react/display-name
    () => <div data-testid="mock-header-responsive">Mock Responsive</div>
);

jest.mock("@/components/sidebar/Sidebar", () =>
    // eslint-disable-next-line react/display-name
    () => <div data-testid="mock-sidebar">Mock Sidebar</div>
);

jest.mock("@/context/sidebar/SidebarContext");

describe("DashboardLayout Component", () => {

    let mockSidebar: any;

    beforeEach(() => {
        mockSidebar = {
            isExpanded: false,
            canCollapse: true,
            isResponsiveEnabled: jest.fn(),
            toggleResponsive: jest.fn(),
        };
        (useSidebar as jest.Mock).mockReturnValue(mockSidebar);
    });

    it("should render correctly", () => {
        mockSidebar.isResponsiveEnabled.mockReturnValue(true);

        const { getByTestId } = render(<DashboardLayout>Test Content</DashboardLayout>);

        expect(getByTestId("sidebar-overlay")).toBeInTheDocument();
    });

    it("should show overlay only when responsive drawer is enabled", () => {
        mockSidebar.isResponsiveEnabled.mockReturnValue(false);

        const { queryByTestId } = render(<DashboardLayout>Test Content</DashboardLayout>);

        expect(queryByTestId("sidebar-overlay")).toBeNull();
    });

    it("should remove overlay when clicked", () => {
        mockSidebar.isResponsiveEnabled.mockReturnValue(true);

        const { getByTestId } = render(<DashboardLayout>Test Content</DashboardLayout>);
        const overlay = getByTestId("sidebar-overlay");

        fireEvent.click(overlay);

        expect(mockSidebar.toggleResponsive).toHaveBeenCalled();
    });

    it("should show responsive header only when can not collapse", () => {
        mockSidebar.canCollapse = false;

        const { getByTestId } = render(<DashboardLayout>Test Content</DashboardLayout>);
        const responsiveHeader = getByTestId("mock-header-responsive");

        expect(responsiveHeader).toBeInTheDocument();
    });

});

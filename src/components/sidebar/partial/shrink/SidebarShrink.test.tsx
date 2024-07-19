import {fireEvent, screen} from "@testing-library/react";
import SidebarShrink from "./SidebarShrink";
import {render, setupIntlBasics} from "@/common/test/util";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {setupSidebarMockValues} from "@/components/sidebar/Sidebar.test-util";

jest.mock("@/context/sidebar/SidebarContext");

describe("SidebarShrink Component", () => {
    beforeEach(() => {
        setupSidebarMockValues(false);
        setupIntlBasics("/sidebar");
    });

    it("should render with correct initial state", () => {
        (useSidebar as jest.Mock).mockReturnValue({
            isExpanded: false,
            toggle: jest.fn(),
        });

        render(<SidebarShrink />);

        const shrinkComponent = screen.getByTestId("sidebar-shrink");
        expect(shrinkComponent).toBeInTheDocument();

    });

    it("should toggle sidebar on click", () => {

        const mockToggle = jest.fn();
        (useSidebar as jest.Mock).mockReturnValue({
            isExpanded: true,
            toggle: mockToggle,
        });

        render(<SidebarShrink />);
        const shrinkComponent = screen.getByTestId("sidebar-shrink");
        fireEvent.click(shrinkComponent);
        expect(mockToggle).toHaveBeenCalledTimes(1);

    });
});

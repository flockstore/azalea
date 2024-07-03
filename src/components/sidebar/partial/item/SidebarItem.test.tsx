import SidebarItem, {SidebarItemProps} from "@/components/sidebar/partial/item/SidebarItem";
import {fireEvent, render, screen} from "@/test/util";

describe("SidebarItem Component", () => {
    const defaultProps: SidebarItemProps = {
        text: "test-item",
        expanded: true,
        action: jest.fn(),
        active: false,
        notifications: 0,
        icon: <svg data-testid="icon-svg"></svg>,
    };

    it("should render correctly", () => {
        render(<SidebarItem {...defaultProps} />);
        expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
        expect(screen.getByTestId("icon-svg")).toBeInTheDocument();
        expect(screen.queryByTestId("badge")).not.toBeInTheDocument();
    });

    it("should render with notifications", () => {
        render(<SidebarItem {...defaultProps} notifications={5} />);
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("should render collapsed", () => {
        render(<SidebarItem {...defaultProps} expanded={false} />);
        expect(screen.queryByText(defaultProps.text)).not.toBeInTheDocument();
        expect(screen.getByTestId(`sidebar-item-collapsed-${defaultProps.text}`)).toBeInTheDocument();
        expect(screen.getByTestId("icon-svg")).toBeInTheDocument();
    });

    it("should render collapsed with notifications", () => {
        render(<SidebarItem {...defaultProps} expanded={false} notifications={3} />);
        expect(screen.getByTestId(`sidebar-item-collapsed-${defaultProps.text}`)).toBeInTheDocument();
        expect(screen.getByTestId("icon-svg")).toBeInTheDocument();
    });

    // TODO: "should show tooltip on hover"

    it("should call action when clicked", () => {
        render(<SidebarItem {...defaultProps} />);
        fireEvent.click(screen.getByText(defaultProps.text));
        expect(defaultProps.action).toHaveBeenCalled();
    });

    it("should apply active styles when active", () => {
        render(<SidebarItem {...defaultProps} active />);
        expect(screen.getByText(defaultProps.text).classList).toContain("textActive");
        expect(screen.getByTestId(`sidebar-item-${defaultProps.text}`).classList).toContain("active");
    });

});

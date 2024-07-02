import SidebarItem, {SidebarItemProps} from "@/components/sidebar/partial/item/SidebarItem";
import renderWithProviders from "@/test/util";

describe("SidebarItem Component", () => {

    const defaultProps: SidebarItemProps = {
        text: "Test Item",
        expanded: false,
        action: jest.fn(),
        active: false,
        notifications: 0,
        icon: <svg data-testid="icon-svg"></svg>,
    };

    it("should render collapsed sidebar item without notifications", () => {
        const { queryByTestId, getByRole } = renderWithProviders(<SidebarItem {...defaultProps} />);
        const tooltip = getByRole("tooltip");
        expect(tooltip).toHaveTextContent(defaultProps.text);

        const indicator = getByRole("indicator");
        expect(indicator).toBeInTheDocument();
        expect(indicator).toHaveAttribute("disabled");

        const icon = queryByTestId("icon-svg");
        expect(icon).toBeInTheDocument();

        const badge = queryByTestId("badge");
        expect(badge).not.toBeInTheDocument();
    });

});
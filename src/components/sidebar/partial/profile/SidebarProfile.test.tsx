import {fireEvent, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import SidebarProfile, {SidebarProfileProps} from "./SidebarProfile";
import {render, setupIntlBasics} from "@/common/test/util";

describe("SidebarProfile Component", () => {

    beforeEach(() => {
        setupIntlBasics("/sidebar");
    });

    const defaultProps: SidebarProfileProps = {
        name: "John Doe",
        picture: "/path/to/picture.jpg",
        organization: "Acme Corp",
        logoutAction: jest.fn(),
        expanded: true
    };

    it("should display name, organization, and avatar when expanded", () => {
        render(<SidebarProfile {...defaultProps} />);
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("Acme Corp")).toBeInTheDocument();
        expect(screen.getByAltText("John Doe")).toBeInTheDocument();
    });

    it("should only display avatar when not expanded", () => {
        render(<SidebarProfile {...defaultProps} expanded={false} />);
        expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
        expect(screen.queryByText("Acme Corp")).not.toBeInTheDocument();
        expect(screen.getByAltText("John Doe")).toBeInTheDocument();
    });

    it("should call logout action when logout button is clicked", () => {
        const { getByTestId } = render(<SidebarProfile {...defaultProps} />);
        fireEvent.click(getByTestId("sidebar-logout"));
        expect(defaultProps.logoutAction).toHaveBeenCalled();
    });
});

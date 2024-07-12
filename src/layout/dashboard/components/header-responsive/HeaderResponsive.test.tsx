import {setupSidebarMockValues} from "@/layout/dashboard/components/sidebar/partial/Sidebar.test-util";
import {render} from "@/test/util";
import HeaderResponsive from "@/layout/dashboard/components/header-responsive/HeaderResponsive";
import {act} from "@testing-library/react";
import {fireEvent} from "@testing-library/dom";

describe("HeaderResponsive Component", () => {

    it("should render correctly", () => {
        setupSidebarMockValues(false, false, jest.fn());
        const { queryByTestId } = render(<HeaderResponsive/>);
        expect(queryByTestId("responsive-header")).toBeInTheDocument();
        expect(queryByTestId("header-burger")).toBeInTheDocument();
    });

    it("should call toggleResponsive when clicked", () => {

        const toggleResponsive = jest.fn();
        setupSidebarMockValues(false, false, toggleResponsive, false);

        const { getByTestId, queryByTestId } = render(<HeaderResponsive/>);
        expect(queryByTestId("responsive-header")).toBeInTheDocument();

        act(() => {
            fireEvent.click(getByTestId("header-burger"));
        });

        expect(toggleResponsive).toHaveBeenCalled();

    });

});
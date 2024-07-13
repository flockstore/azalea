import DropMenu, {DropMenuProps} from "@/components/drop-menu/DropMenu";
import {render} from "@/test/util";
import {act, fireEvent} from "@testing-library/react";
import {waitFor} from "@testing-library/dom";

const defaultProps: DropMenuProps = {
    responsive: false,
    slug: "test-menu",
    maxHeight: "200px",
    children: null
};

describe("DropMenu Component", () => {

    it("should render correctly", () => {
        const { queryByTestId } = render(
            <DropMenu {...defaultProps}>
                <div>Test Children</div>
            </DropMenu>
        );
        expect(queryByTestId("dm-test-menu")).toBeInTheDocument();
        expect(queryByTestId("dm-slug-test-menu")).not.toBeInTheDocument();
    });

    it("should show slug only when responsive marked", () => {
        const { queryByTestId } = render(
            <DropMenu {...defaultProps} responsive={true}>
                <div>Test Children</div>
            </DropMenu>
        );
        expect(queryByTestId("dm-test-menu")).toBeInTheDocument();
        expect(queryByTestId("dm-slug-test-menu")).toBeInTheDocument();
    });

    it("should change active state when slug clicked", async () => {

        const { getByTestId } = render(
            <DropMenu {...defaultProps} responsive={true}>
                <div>Test Children</div>
            </DropMenu>
        );

        expect(getByTestId("dm-content-test-menu")).toHaveAttribute("data-active", "false");
        expect(getByTestId("dm-content-test-menu")).toHaveStyle({maxHeight: 0});

        act(() => {
           fireEvent.click(getByTestId("dm-slug-test-menu"));
        });

        await waitFor(() => {
            expect(getByTestId("dm-content-test-menu")).toHaveAttribute("data-active", "true");
            expect(getByTestId("dm-content-test-menu")).toHaveStyle({maxHeight: defaultProps.maxHeight});
        });

    });

    it("should keep maxHeight when responsive is not enabled", async () => {

        const { getByTestId } = render(
            <DropMenu {...defaultProps}>
                <div>Test Children</div>
            </DropMenu>
        );

        expect(getByTestId("dm-content-test-menu")).toHaveAttribute("data-active", "true");
        expect(getByTestId("dm-content-test-menu")).toHaveStyle({maxHeight: defaultProps.maxHeight});

    });

});
import {SidebarProvider, useSidebar} from "@/context/sidebar/SidebarContext";
import {render} from "@/test/util";
import {useMediaQuery} from "@mantine/hooks";
import {act} from "@testing-library/react";
import {fireEvent, waitFor} from "@testing-library/dom";

jest.mock("@mantine/hooks", () => ({
    ...jest.requireActual("@mantine/hooks"),
    useMediaQuery: jest.fn(),
}));

describe("SidebarContext", () => {

    const TestComponent = () => {
        const {
            isExpanded,
            canCollapse,
            isResponsiveEnabled,
            toggleResponsive,
            toggle
        } = useSidebar();
        return (
            <div>
                <p data-testid="test-sidebar-expanded">{isExpanded.toString()}</p>
                <p data-testid="test-sidebar-can-collapse">{canCollapse.toString()}</p>
                <p data-testid="test-sidebar-responsive">{isResponsiveEnabled().toString()}</p>
                <button data-testid="test-toggle-responsive" onClick={toggleResponsive}>Toggle responsive</button>
                <button data-testid="test-toggle" onClick={toggle}>Toggle</button>
            </div>
        );
    };

    it("should collapse and expand correctly", async () => {
        (useMediaQuery as jest.Mock).mockReturnValue(true);
        const { queryByTestId, getByTestId } = render(<SidebarProvider><TestComponent/></SidebarProvider>);
        expect(queryByTestId("test-sidebar-expanded")).toHaveTextContent("true");

        act(() => {
           fireEvent.click(getByTestId("test-toggle"));
        });

        await waitFor(() => {
            expect(queryByTestId("test-sidebar-expanded")).toHaveTextContent("false");
        });
    });

    it("should toggle responsive when clicked", async () => {
        (useMediaQuery as jest.Mock).mockReturnValue(false);
        const { queryByTestId, getByTestId } = render(<SidebarProvider><TestComponent/></SidebarProvider>);
        expect(queryByTestId("test-sidebar-can-collapse")).toHaveTextContent("false");

        act(() => {
            fireEvent.click(getByTestId("test-toggle-responsive"));
        });

        await waitFor(() => {
            expect(queryByTestId("test-sidebar-responsive")).toHaveTextContent("true");
        });

    });

    it("should prevent expand toggle when responsive", async () => {
        (useMediaQuery as jest.Mock).mockReturnValue(false);
        const { queryByTestId, getByTestId } = render(<SidebarProvider><TestComponent/></SidebarProvider>);
        expect(queryByTestId("test-sidebar-expanded")).toHaveTextContent("true");

        act(() => {
            fireEvent.click(getByTestId("test-toggle"));
        });

        await waitFor(() => {
            expect(queryByTestId("test-sidebar-expanded")).toHaveTextContent("true");
        });
    });

    it("should prevent responsive toggle when not responsive", async () => {
        (useMediaQuery as jest.Mock).mockReturnValue(true);
        const { queryByTestId, getByTestId } = render(<SidebarProvider><TestComponent/></SidebarProvider>);

        act(() => {
            fireEvent.click(getByTestId("test-toggle-responsive"));
        });

        await waitFor(() => {
            expect(queryByTestId("test-sidebar-responsive")).toHaveTextContent("false");
        });

    });

});

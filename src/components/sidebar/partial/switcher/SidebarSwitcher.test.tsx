import {render, setupIntlBasics} from "@/test/util";
import SidebarSwitcher from "@/components/sidebar/partial/switcher/SidebarSwitcher";
import {fireEvent} from "@testing-library/dom";
import {useMantineColorScheme} from "@mantine/core";

jest.mock("@mantine/core", () => ({
    ...jest.requireActual("@mantine/core"),
    useMantineColorScheme: jest.fn(),
}));

describe("SidebarSwitcher Component", () => {

    const mockSetColorScheme = jest.fn();
    const mockUseMantineColorScheme = useMantineColorScheme as jest.Mock;

    beforeEach(() => {
        setupIntlBasics("/dashboard");
        mockUseMantineColorScheme.mockReturnValue({
            colorScheme: "light",
            setColorScheme: mockSetColorScheme,
        });
    });

    it("should render correctly", () => {
        const { queryByTestId } = render(<SidebarSwitcher width={40}/>);
        expect(queryByTestId("sidebar-switcher")).toBeInTheDocument();
    });

    it("should switch between color schemes", () => {
        const { getByTestId, rerender } = render(<SidebarSwitcher width={40} />);
        const switcher = getByTestId("sidebar-switcher");

        fireEvent.click(switcher);
        expect(mockSetColorScheme).toHaveBeenCalledWith("dark");

        mockUseMantineColorScheme.mockReturnValue({
            colorScheme: "dark",
            setColorScheme: mockSetColorScheme,
        });
        rerender(<SidebarSwitcher width={40} />);

        mockSetColorScheme.mockClear();
        fireEvent.click(switcher);

        expect(mockSetColorScheme).toHaveBeenCalledWith("light");
    });

    // TODO: Add unit test with toolbars.

});

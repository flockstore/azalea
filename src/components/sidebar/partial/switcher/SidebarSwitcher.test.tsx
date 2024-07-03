import { render, setupIntlBasics, fireEvent } from "@/test/util";
import SidebarSwitcher from "@/components/sidebar/partial/switcher/SidebarSwitcher";
import { useMantineColorScheme } from "@mantine/core";

jest.mock("@mantine/core", () => ({
    ...jest.requireActual("@mantine/core"),
    useMantineColorScheme: jest.fn(),
}));

describe("SidebarSwitcher Component", () => {

    const setColorSchemeMock = jest.fn();
    const useMantineColorSchemeMock = useMantineColorScheme as jest.Mock;

    beforeEach(() => {
        setupIntlBasics("/dashboard");
        useMantineColorSchemeMock.mockReturnValue({
            colorScheme: "light",
            setColorScheme: setColorSchemeMock
        });
    });

    it("should render correctly", () => {
        const { queryByTestId } = render(<SidebarSwitcher width={40}/>);
        expect(queryByTestId("sidebar-switcher")).toBeInTheDocument();
    });

    it("should switch between color schemes", () => {
        const { getByTestId } = render(<SidebarSwitcher width={40}/>);
        const switcher = getByTestId("sidebar-switcher");

        // Simulate click to change color scheme
        fireEvent.click(switcher);
        expect(setColorSchemeMock).toHaveBeenCalledWith("dark");

        // Update mock to reflect the new color scheme
        useMantineColorSchemeMock.mockReturnValue({
            colorScheme: "dark",
            setColorScheme: setColorSchemeMock
        });

        // Simulate another click to change back to light color scheme
        fireEvent.click(switcher);
        expect(setColorSchemeMock).toHaveBeenCalledWith("light");
    });

});

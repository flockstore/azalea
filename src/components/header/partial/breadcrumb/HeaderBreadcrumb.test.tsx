import {fireEvent, screen} from "@testing-library/react";
import {useBreadcrumb} from "@/context/breadcrumb/BreadcrumbContext";
import {useRouter} from "@/middleware";
import HeaderBreadcrumb from "@/components/header/partial/breadcrumb/HeaderBreadcrumb";
import {useMantineColorScheme} from "@mantine/core";
import {render} from "@/test/util";

jest.mock("@/context/breadcrumb/BreadcrumbContext", () => ({
    useBreadcrumb: jest.fn(),
}));

jest.mock("@/middleware", () => ({
    useRouter: jest.fn(),
}));

jest.mock("@mantine/core", () => ({
    ...jest.requireActual("@mantine/core"),
    useMantineColorScheme: jest.fn(),
}));

describe("HeaderBreadcrumb", () => {
    const mockSetColorScheme = jest.fn();
    const mockUseMantineColorScheme = useMantineColorScheme as jest.Mock;

    const items = [
        { label: "Home", link: "/", active: false },
        { label: "About", link: "/about", active: true },
    ];

    beforeEach(() => {
        mockUseMantineColorScheme.mockReturnValue({
            colorScheme: "light",
            setColorScheme: mockSetColorScheme,
        });
    });

    it("should render breadcrumb items correctly", () => {
        (useBreadcrumb as jest.Mock).mockReturnValue({ items });
        const push = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push });

        render(<HeaderBreadcrumb />);

        const homeItem = screen.getByText("Home");
        const aboutItem = screen.getByText("About");

        expect(homeItem).toBeInTheDocument();
        expect(aboutItem).toBeInTheDocument();
    });

    it("should call navigate function when an item is clicked", () => {
        (useBreadcrumb as jest.Mock).mockReturnValue({ items });
        const push = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push });

        render(<HeaderBreadcrumb />);

        const homeItem = screen.getByText("Home");
        fireEvent.click(homeItem);

        expect(push).toHaveBeenCalledWith("/");
    });

    it("should apply active class to the active breadcrumb item", () => {
        (useBreadcrumb as jest.Mock).mockReturnValue({ items });
        const push = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push });

        render(<HeaderBreadcrumb />);

        const aboutItem = screen.getByText("About");
        expect(aboutItem).toHaveClass("breadActive");
    });
});
